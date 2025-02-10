/**
 * Represent the successful case of a {@link TryCatch} tuple.
 *
 * @typeParam R - The type of the result.
 */
type Ok<R> = [result: R, err: null];

/**
 * Represent the error case of a {@link TryCatch} tuple.
 */
type Err = [result: null, err: ThrownError];

/**
 * TryCatch represents the return value of the {@link trycatch} utility. It is
 * composed of a tuple where the first element is the resulting value and the
 * second element is the caught error. The result element will be typed as
 * "unknown" until the absence of an error is asserted in the control flow,
 * Type narrowing will then unveil the actual type of the result. This ensures
 * that the presence of a value is always tied to the absence of an error, and
 * vice versa. The caught error is always encapsulated in an {@link ThrownError}
 * object and is available in the "cause" property.
 *
 * @typeParam R - The return type of the task.
 */
type TryCatch<R> = Ok<R> | Err;

/**
 * Wraps an asynchronous or synchronous task in a try-catch block and returns a promise
 * that resolves with the resulting {@link TryCatch} tuple.
 *
 * @param task - An asynchronous or synchronous task.
 * @returns A promise that resolves with the resulting {@link TryCatch} tuple.
 * @typeParam R - The return type of the task.
 */
export async function trycatch<R>(
    task: (() => R | Promise<R>) | Promise<R>
): Promise<TryCatch<R>> {
    try {
        // If the task is a function, invoke it
        const result = typeof task === 'function' ? task() : task;
        
        // Wait for the result if it's a Promise
        const awaitedResult = await result;
        return ok(awaitedResult);
    } catch (thrown) {
        return err(thrown);
    }
}

/**
 * Create an {@link Ok} tuple with the given result.
 *
 * @param result - The result to wrap.
 * @returns An {@link Ok} tuple.
 * @typeParam R - The type of the result.
 */
const ok = <R>(result: R): Ok<R> => [result, null];

/**
 * Create an {@link Err} tuple with the given thrown value.
 *
 * @param thrown - The thrown value to wrap.
 * @returns An {@link Err} tuple.
 */
const err = (thrown: unknown): Err => [null, new ThrownError(thrown)];

/**
 * Encapsulates a thrown value in an error object.
 */
export class ThrownError extends Error {
    /**
     * The cause of the error.
     */
    public readonly cause: unknown;

    /**
     * Creates a new error with the given cause.
     *
     * @param cause - The cause of the error.
     */
    public constructor(cause: unknown) {
        super("thrown error");
        this.cause = cause;

        // Manually assign the cause property for backward compatibility.
        // This makes sure older JS environments are also supported.
        Object.defineProperty(this, 'cause', {
            value: cause,
            writable: true,
            configurable: true,
            enumerable: false,
        });

        // Capture the stack trace for debugging purposes.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ThrownError);
        }
    }
}


// ** testing
// trycatch(console.log)

async function testTryCatch() {
    console.log("Test 1: Resolving Promise");

    // Test Case 1: A successful async task (promise that resolves)
    const [result1, error1] = await trycatch(async () => {
        return await new Promise((resolve) => {
            setTimeout(() => resolve("Success!"), 500);
        });
    });

    if (error1) {
        console.error("Error occurred:", error1.cause);
    } else {
        console.log("Result:", result1); // Expected output: "Success!"
    }

    console.log("\nTest 2: Rejecting Promise");

    // Test Case 2: A failing async task (promise that rejects)
    const [result2, error2] = await trycatch(async () => {
        return await new Promise((_, reject) => {
            setTimeout(() => reject(new Error("Failure!")), 500);
        });
    });

    if (error2) {
        console.error("Error occurred:", error2.cause); // Expected output: "Failure!"
    } else {
        console.log("Result:", result2);
    }

    console.log("\nTest 3: Synchronous task that throws");

    // Test Case 3: A synchronous task that throws an error
    const [result3, error3] = await trycatch(() => {
        throw new Error("Synchronous error!");
    });

    if (error3) {
        console.error("Error occurred:", error3.cause); // Expected output: "Synchronous error!"
    } else {
        console.log("Result:", result3);
    }

    console.log("\nTest 4: Resolving Synchronous task");

    // Test Case 4: A successful synchronous task
    const [result4, error4] = await trycatch(() => {
        return "Sync Success!";
    });

    if (error4) {
        console.error("Error occurred:", error4.cause);
    } else {
        console.log("Result:", result4); // Expected output: "Sync Success!"
    }
}

// // Run the test
// testTryCatch();