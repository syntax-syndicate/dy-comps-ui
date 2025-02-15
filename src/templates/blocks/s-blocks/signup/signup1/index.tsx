"use client";

import { useState } from "react";
import { Globe, UserRound, ArrowRight, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-secondary/30 py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-6">
          <div className="relative">
            <Image
              src="/logo.svg"
              alt="Logo"
              className="size-20 animate-pulse"
              width={100}
              height={100}
            />
          </div>
          <Card className="mx-auto w-full max-w-md overflow-hidden">
            <div
              className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                }}
              ></div>
            </div>
            <CardHeader className="items-center space-y-4 pb-8 pt-6">
              <div className="relative">
                <UserRound className="size-12 rounded-full border-2 border-primary bg-secondary p-3 text-primary text-secondary-foreground" />
              </div>
              <div className="space-y-1 text-center">
                <CardTitle className="text-2xl font-bold">
                  Join Us Today
                </CardTitle>
                <CardDescription>
                  Start your journey with just a few clicks
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Button
                  variant="outline"
                  className="relative overflow-hidden transition-all hover:border-primary/50 hover:bg-primary/10"
                >
                  <Globe className="mr-2 size-4" />
                  Sign up with Google
                  <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></span>
                </Button>
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t"></span>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">
                      Or continue with
                    </span>
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="transition-all focus-visible:ring-primary/50"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      required
                      className="pr-10 transition-all focus-visible:ring-primary/50"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="size-4 text-muted-foreground" />
                      ) : (
                        <Eye className="size-4 text-muted-foreground" />
                      )}
                    </Button>
                  </div>
                </div>
                <Button type="submit" className="group w-full">
                  Create an account
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
              <div className="mt-4 text-center text-sm text-muted-foreground">
                By continuing, you agree to our{" "}
                <a
                  href="#"
                  className="underline transition-colors hover:text-primary"
                >
                  Terms
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="underline transition-colors hover:text-primary"
                >
                  Privacy Policy
                </a>
                .
              </div>
            </CardContent>
          </Card>
          <div className="text-sm">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-primary transition-colors hover:text-primary/80"
            >
              Log in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
