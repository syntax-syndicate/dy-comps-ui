"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

// Define the schema using Zod
const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().default(false),
});

export default function LoginPage5() {
  // Use the useForm hook with the Zod resolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <section className="flex min-h-screen items-center justify-center bg-background py-32">
      <div className="container max-w-md">
        <div className="flex flex-col gap-4">
          <div className="relative flex flex-col items-center overflow-hidden pb-6">
            <Image
              src="/logo.svg"
              alt="logo"
              className="dark: mb-7 h-20 w-auto invert"
              height={200}
              width={200}
            />
            <h1 className="mb-2 text-2xl font-bold">Log in to your account</h1>
            <p className="text-muted-foreground">
              Welcome back! Please enter your details.
            </p>
          </div>
          <div className="z-10 w-full rounded-md bg-background p-6 shadow">
            {/* Use the Form component from the shadcn/ui library */}
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="email"
                          id="email"
                          placeholder="Enter your email"
                          {...field}
                          className="h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          type="password"
                          id="password"
                          placeholder="Enter your password"
                          {...field}
                          className="h-12"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-between">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <label
                            htmlFor="rememberMe"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Remember me
                          </label>
                        </div>
                      </FormItem>
                    )}
                  />
                  <Link href="#" className="text-sm font-medium text-primary">
                    Forgot password?
                  </Link>
                </div>
                <Button
                  type="submit"
                  className="mt-2 w-full text-base font-semibold"
                >
                  Sign in
                </Button>
              </form>
            </Form>

            <div className="mx-auto mt-3 flex justify-center gap-1 text-sm text-muted-foreground">
              <p>Don&apos;t have an account?</p>
              <Link href="#" className="font-medium text-primary">
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
