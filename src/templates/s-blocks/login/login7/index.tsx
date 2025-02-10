"use client";

import { useState } from "react";
import Link from "next/link";
import { Github } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

export default function LoginPage7() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Sign up attempted with:", values.email);
  };

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Left Section - Dark Background with Testimonial */}
      <div className="relative hidden py-32 md:block">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-black/20 opacity-90" />
        <Image
          src="https://images.unsplash.com/photo-1455612693675-112974d4880b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Technology illustration"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-75 mix-blend-overlay"
          priority
        />
        {/* Overlay */}
        <div className="relative z-10 flex h-full flex-col justify-between p-8 text-white">
          <div className="flex items-center gap-2">
            <div className="size-8 rounded-full bg-white/10" />
            <span className="text-xl font-semibold">Acme Inc</span>
          </div>
          <div className="space-y-4 rounded-lg bg-primary/80 p-6">
            <blockquote className="text-lg font-medium leading-relaxed">
              This library has saved me countless hours of work and helped me
              deliver stunning designs to my clients faster than ever before.
            </blockquote>
            <cite className="block font-medium not-italic">Sofia Davis</cite>
          </div>
        </div>
      </div>

      {/* Right Section - Sign Up Form */}
      <div className="flex flex-col justify-between p-8 py-32">
        <div className="flex justify-between">
          <div className="flex items-center gap-2 md:hidden">
            <div className="size-8 rounded-full bg-black" />
            <span className="text-xl font-semibold">Acme Inc</span>
          </div>
        </div>

        <div className="mx-auto my-auto w-full max-w-sm space-y-6">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Create an account</h1>
            <p className="text-muted-foreground">
              Enter your email below to create your account
            </p>
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
                        type="email"
                        placeholder="name@example.com"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Sign In with Email
              </Button>
            </form>
          </Form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>

          <Button variant="outline" className="w-full" type="button">
            <Github className="mr-2 size-4" />
            GitHub
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              href="#"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              href="#"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>

        <div className="md:hidden" />
      </div>
    </div>
  );
}
