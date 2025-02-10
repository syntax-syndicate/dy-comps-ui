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

const formSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms of service",
  }),
});

export default function LoginPage13() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      terms: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Left Column - 3D Illustration */}
      <div className="relative hidden bg-background md:block">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-primary/10 to-transparent" />
        <Image
          src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Oil Depot Illustration"
          width={1920}
          height={1080}
          className="h-full max-h-screen w-full object-cover opacity-80"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/30 to-background" />
      </div>

      {/* Right Column - Sign Up Form */}
      <div className="flex items-center justify-center bg-background px-8 py-12 md:px-12">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-foreground">
              Sign up
            </h1>
            <p className="text-muted-foreground">
              Welcome to the Smart Site System for Oil Depots. Register as a
              member to experience.
            </p>
          </div>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="space-y-1">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium text-foreground"
                        >
                          E-mail
                        </label>
                        <Input
                          id="email"
                          placeholder="name@example.com"
                          className="bg-secondary"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <div className="space-y-1">
                        <label
                          htmlFor="password"
                          className="text-sm font-medium text-foreground"
                        >
                          Password
                        </label>
                        <div className="relative">
                          <Input
                            id="password"
                            placeholder="••••••••••••"
                            type={showPassword ? "text" : "password"}
                            className="bg-secondary pr-10"
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
                            <span className="sr-only">
                              {showPassword ? "Hide password" : "Show password"}
                            </span>
                          </Button>
                        </div>
                      </div>
                    </FormControl>
                    <FormMessage className="text-destructive" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <div className="text-sm leading-none">
                      <label htmlFor="terms" className="text-muted-foreground">
                        I agree to the terms of service
                      </label>
                    </div>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Create Account
              </Button>
            </form>
          </Form>

          <div className="flex items-center justify-center space-x-2 text-sm">
            <span className="text-muted-foreground">Already a member?</span>
            <Link href="/signin" className="text-primary hover:text-primary/90">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
