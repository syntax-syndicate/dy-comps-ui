"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Image from "next/image";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email or phone number"),
  password: z.string().min(1, "Password is required"),
});

export default function LoginPage8() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Left Column - Login Form */}
      <div className="flex flex-col items-start justify-center p-8 md:p-12 lg:p-16 xl:p-24">
        <div className="w-full max-w-md space-y-6">
          <div className="flex items-center space-x-2">
            <div className="bg-primary/90 p-2 text-primary-foreground">
              <span className="text-xl font-bold">TailwindThemeBlocks</span>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">
              Welcome to UTech
            </h1>
            <h2 className="text-2xl font-semibold text-muted-foreground">
              Sign into your account
            </h2>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        placeholder="Phone or Email address"
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
                        placeholder="Password"
                        {...field}
                        className="h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="submit"
                className="h-12 w-full text-base font-semibold"
              >
                Log In
              </Button>
            </form>
          </Form>

          <div className="text-center">
            <Link
              href="/forgot-password"
              className="text-sm text-primary hover:underline"
            >
              Forgot password?
            </Link>
          </div>
        </div>
      </div>

      {/* Right Column - Illustration */}
      <div className="hidden md:block">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-black/20 opacity-90" />
          <Image
            src="https://images.unsplash.com/photo-1455612693675-112974d4880b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Technology illustration"
            width={1920}
            height={1080}
            className="absolute inset-0 h-full w-full object-cover opacity-75 mix-blend-overlay"
            sizes="(max-width: 768px) 100vw, 50vw" // Adjust based on your design
            priority
          />
        </div>
      </div>
    </div>
  );
}
