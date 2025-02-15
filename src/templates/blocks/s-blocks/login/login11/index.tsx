"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formSchema = z
  .object({
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
    rememberMe: z.boolean().default(false),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function LoginPage11() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      rememberMe: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="grid min-h-screen grid-cols-1 overflow-x-hidden md:grid-cols-2">
      {/* Left Column - Sign Up Form */}
      <div className="flex flex-col justify-center bg-background px-4 py-32 md:px-12 lg:px-24">
        <div className="mx-auto w-full max-w-md">
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
                Welcome To KVP
              </h1>
              <p className="text-muted-foreground">Create your account</p>
            </div>

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
                      <Label>E-mail</Label>
                      <FormControl>
                        <Input
                          placeholder="Vakopirtska@2002"
                          type="email"
                          className="border-input bg-background"
                          {...field}
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
                      <Label>Password</Label>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="6+ strong character"
                            type={showPassword ? "text" : "password"}
                            className="border-input bg-background pr-10"
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? (
                              <EyeOff className="size-4" />
                            ) : (
                              <Eye className="size-4" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <Label>Repeat password</Label>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="6+ strong character"
                            type={showConfirmPassword ? "text" : "password"}
                            className="border-input bg-background pr-10"
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                            onClick={() =>
                              setShowConfirmPassword(!showConfirmPassword)
                            }
                          >
                            {showConfirmPassword ? (
                              <EyeOff className="size-4" />
                            ) : (
                              <Eye className="size-4" />
                            )}
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-between">
                  <FormField
                    control={form.control}
                    name="rememberMe"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-2 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            className="border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                          />
                        </FormControl>
                        <Label className="text-sm font-normal">
                          Remember for 30 days
                        </Label>
                      </FormItem>
                    )}
                  />
                  <Button variant="link" className="px-0 text-primary">
                    Forgot password
                  </Button>
                </div>

                <Button type="submit" className="w-full">
                  Create an account
                </Button>
              </form>
            </Form>

            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-input" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Sign Up with
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  variant="outline"
                  className="flex-1 border-input bg-background"
                >
                  <svg
                    className="mr-2 size-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-1.2a8.8 8.8 0 1 0 0-17.6 8.8 8.8 0 0 0 0 17.6zM10.5 8.833c0 .812-.413 1.465-1.287 2.044-.867.567-1.29 1.287-1.29 2.115 0 .83.552 1.562 1.57 1.562.497.008.977-.18 1.337-.525a.863.863 0 0 1 .645-.24c.497 0 .897.405.897.907 0 .25-.102.49-.282.662-.744.71-1.748 1.1-2.792 1.082-2.462 0-3.578-1.607-3.578-3.45 0-1.442.81-2.726 2.23-3.567.867-.51 1.347-1.047 1.347-1.847 0-.768-.6-1.29-1.532-1.29-.615-.007-1.21.22-1.658.637a.974.974 0 0 1-.69.255.897.897 0 0 1-.893-.914c0-.24.09-.47.27-.645.745-.76 1.798-1.18 2.888-1.155 2.355 0 3.818 1.342 3.818 3.37zm5.48 3.467c0 2.723-1.42 4.962-3.15 4.962-1.73 0-3.15-2.24-3.15-4.962s1.42-4.963 3.15-4.963c1.73 0 3.15 2.24 3.15 4.963z" />
                  </svg>
                  Apple
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-input bg-background"
                >
                  <svg className="mr-2 size-4" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="currentColor"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="currentColor"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 border-input bg-background"
                >
                  <svg
                    className="mr-2 size-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </Button>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-primary hover:underline">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right Column - Preview */}
      <div className="relative hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-black/30 opacity-90" />
        <Image
          src="https://images.unsplash.com/photo-1455612693675-112974d4880b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Technology illustration"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover opacity-75 mix-blend-overlay"
          priority
        />
        <div className="relative flex h-full flex-col justify-center p-12">
          <div className="mt-auto w-max bg-primary/80 p-4 text-white backdrop-blur-sm">
            <h2 className="text-4xl font-bold">Designed for individuals</h2>
            <p className="mt-4 text-lg">
              See the analytics and grow your date for Task remotely, from
              anywhere!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
