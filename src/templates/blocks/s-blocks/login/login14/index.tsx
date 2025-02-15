"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";
import { Eye, EyeOff, Volume2, Flame, Play } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const formSchema = z.object({
  identifier: z.string().min(1, "Please enter your email or username"),
  password: z.string().min(1, "Password is required"),
  remember: z.boolean().default(false),
});

export default function LoginPage14() {
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      identifier: "",
      password: "",
      remember: false,
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center py-32"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1455612693675-112974d4880b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="absolute inset-0 bg-primary/50" />

      {/* Accessibility Controls */}
      <div className="absolute right-4 top-4 z-10 flex flex-col gap-2">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm"
        >
          <Flame className="size-4 text-primary" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm"
        >
          <Volume2 className="size-4" />
        </Button>
      </div>

      <Card className="z-10 w-full max-w-md bg-background backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="space-y-8">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground">
                Welcome back
              </h1>
              <p className="text-sm text-muted-foreground">
                Join the world&apos;s largest community
              </p>
            </div>

            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">
                  Sign up Help
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  className="size-6 rounded-full bg-primary/10"
                >
                  <Play className="size-3 text-primary" />
                </Button>
              </div>
              <Link href="#" className="text-xs text-primary hover:underline">
                This video will help you to create a new account
              </Link>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="identifier"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          placeholder="Phone number, username or email"
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
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            {...field}
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
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
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex items-center justify-between">
                  <FormField
                    control={form.control}
                    name="remember"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-center space-x-2">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <label className="text-sm text-muted-foreground">
                          Remember for 30 days
                        </label>
                      </FormItem>
                    )}
                  />
                  <Button variant="link" className="px-0 text-primary">
                    Forgot password
                  </Button>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground"
                >
                  Sign in
                </Button>

                <Button variant="secondary" className="w-full">
                  Create New Account
                </Button>
              </form>
            </Form>

            <div className="space-y-4">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <Separator className="w-full" />
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-background/80 px-2 text-sm text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="flex justify-center gap-4">
                <Button variant="outline" size="icon">
                  <svg className="size-4" viewBox="0 0 24 24">
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
                  <span className="sr-only">Continue with Google</span>
                </Button>
                <Button variant="outline" size="icon">
                  <svg
                    className="size-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                  <span className="sr-only">Continue with Facebook</span>
                </Button>
                <Button variant="outline" size="icon">
                  <svg
                    className="size-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                  </svg>
                  <span className="sr-only">Continue with Twitter</span>
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="justify-center p-6 pt-0">
          <p className="text-center text-xs text-muted-foreground">
            By clicking button above, you agree to our{" "}
            <Link href="#" className="text-primary hover:underline">
              terms of use
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-primary hover:underline">
              privacy policies
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
