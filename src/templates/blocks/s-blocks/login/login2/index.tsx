"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import Image from "next/image"; // Make sure to import the Image component

import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
});

type FormValues = z.infer<typeof formSchema>;

export default function LoginPage2() {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <section className="relative py-32">
      <div className="container">
        <div className="flex min-h-[80vh] flex-col items-center justify-center gap-4">
          <div className="mx-auto w-full max-w-sm rounded-md p-6">
            <div className="mb-6 flex flex-col items-center text-center">
              <span className="mb-12 flex items-center gap-4">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  className="size-7 dark:invert"
                  width={28}
                  height={28}
                  sizes="(max-width: 768px) 28px, 28px"
                />
                <p className="text-xl font-bold">ThemeBlocks</p>
              </span>
              <h1 className="mb-2 text-2xl font-bold">Welcome to NexusAuth</h1>
              <p className="text-muted-foreground">
                Secure access to your digital world awaits.
              </p>
            </div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid gap-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <Input
                        type="email"
                        placeholder="Your email address"
                        {...field}
                        className="rounded-b-none"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <Input
                        type="password"
                        placeholder="Your secure password"
                        {...field}
                        className="rounded-t-none"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="mt-2 w-full">
                  Access Your Account
                </Button>
                <Button variant="outline" className="w-full">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    version="1.1"
                    x="0px"
                    y="0px"
                    viewBox="0 0 48 48"
                    enableBackground="new 0 0 48 48"
                    className="mr-2 size-5"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#FFC107"
                      d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                    <path
                      fill="#FF3D00"
                      d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                    ></path>
                    <path
                      fill="#4CAF50"
                      d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                    ></path>
                    <path
                      fill="#1976D2"
                      d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                    ></path>
                  </svg>
                  Continue with Google
                </Button>
              </form>
            </Form>
            <div className="mx-auto mt-8 flex justify-center gap-1 text-sm text-muted-foreground">
              <p>New to NexusAuth?</p>
              <Link href="#" className="font-medium text-primary">
                Create an account
              </Link>
            </div>
            <Link
              href="#"
              className="mt-3 flex justify-center text-sm font-medium"
            >
              Reset your password
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
