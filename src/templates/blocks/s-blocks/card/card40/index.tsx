"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AlertCircle, CheckCircle2 } from "lucide-react";

// Server Action (simulated in client component for this example)
async function subscribeToNewsletter(email: string) {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return { success: true, message: `Thank you for subscribing with ${email}!` };
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? "Subscribing..." : "Subscribe"}
    </Button>
  );
}

function NewsletterSubscribe() {
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  async function handleSubmit(formData: FormData) {
    const email = formData.get("email") as string;
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setMessage({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    try {
      const result = await subscribeToNewsletter(email);
      if (result.success) {
        setMessage({ type: "success", text: result.message });
      } else {
        throw new Error("Subscription failed");
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred. Please try again.",
      });
    }
  }

  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardHeader className="text-center">
        <CardTitle className="mb-2 text-2xl">Newsletter</CardTitle>
        <CardDescription>
          Stay updated with our latest news and offers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form action={handleSubmit} className="space-y-4">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            className="w-full"
          />
          <SubmitButton />
          {message && (
            <div
              className={`flex items-center justify-center space-x-2 ${
                message.type === "success" ? "text-green-600" : "text-red-600"
              }`}
            >
              {message.type === "success" ? (
                <CheckCircle2 className="size-5" />
              ) : (
                <AlertCircle className="size-5" />
              )}
              <span>{message.text}</span>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
}

export default function Home() {
  return (
    <main className="container mx-auto flex min-h-screen items-center justify-center px-4 py-8">
      <NewsletterSubscribe />
    </main>
  );
}
