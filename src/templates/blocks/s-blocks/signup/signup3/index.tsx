"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Eye, EyeOff, Loader2 } from "lucide-react";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Form submitted:", { name, email, password });
    setIsLoading(false);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-secondary/20 pb-32">
      <div className="container">
        <div className="flex flex-col gap-4">
          <div className="relative flex flex-col items-center overflow-hidden pb-6 pt-32">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 200 200"
              className="absolute top-10 -z-10 h-full w-[1250px] animate-[pulse_4s_ease-in-out_infinite] [mask-image:radial-gradient(circle,red,transparent,transparent,transparent)]"
            >
              <defs>
                <pattern
                  id="innerGrid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    className="stroke-muted-foreground/70"
                    strokeWidth="0.5"
                  />
                </pattern>
                <pattern
                  id="grid"
                  width="160"
                  height="160"
                  patternUnits="userSpaceOnUse"
                >
                  <rect width="160" height="160" fill="url(#innerGrid)" />
                </pattern>
              </defs>
              <rect width="200" height="200" fill="url(#grid)" />
            </svg>
            <div className="relative">
              <Image
                src="/logo.svg"
                alt="logo"
                className="mb-7 h-24 w-auto"
                width={200}
                height={200}
              />
            </div>
            <h1 className="mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-3xl font-bold">
              Create an account
            </h1>
            <p className="text-muted-foreground">
              Start your 30-day free trial today.
            </p>
          </div>
          <div className="z-10 mx-auto w-full max-w-sm overflow-hidden rounded-md bg-background p-6 shadow-lg transition-all duration-300 hover:shadow-xl">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-1.5">
                <Label htmlFor="name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="pr-10 transition-all duration-300 focus:ring-2 focus:ring-primary/50"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-muted-foreground" />
                    ) : (
                      <Eye className="h-4 w-4 text-muted-foreground" />
                    )}
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Must be at least 8 characters.
                </p>
              </div>
              <Button
                type="submit"
                className="mt-2 w-full transition-all duration-300 hover:bg-primary/90"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating account...
                  </>
                ) : (
                  "Get Started"
                )}
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
              <Button
                variant="outline"
                className="w-full transition-all duration-300 hover:bg-secondary/50"
              >
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
                Sign up with Google
              </Button>
            </form>
          </div>
          <div className="mx-auto mt-3 flex justify-center gap-1 text-sm">
            <p className="text-muted-foreground">Already have an account?</p>
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
