"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import Link from "next/link";

export default function SignUpForm() {
  return (
    <div className="flex min-h-screen">
      <div className="flex w-full flex-col justify-center px-8 py-32 sm:px-12 md:px-16 lg:w-1/2 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-md space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight">Sign up</h1>
            <p className="text-muted-foreground">
              Start your 30-day free trial.
            </p>
          </div>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Enter your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
              />
              <p className="text-sm text-muted-foreground">
                Must be at least 8 characters.
              </p>
            </div>
            <Button className="w-full" type="submit">
              Get Started
            </Button>
          </form>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or continue with
              </span>
            </div>
          </div>
          <Button variant="outline" className="w-full" type="button">
            <Image
              src="https://www.gstatic.com/images/branding/googleg/2x/googleg_standard_color_192dp.png"
              alt="Google"
              width={16}
              height={16}
              className="mr-2"
            />
            Sign up with Google
          </Button>
          <p className="text-center text-sm text-muted-foreground">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Log in
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden w-1/2 items-center justify-center bg-muted p-12 lg:flex">
        <div className="w-full max-w-md">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Decorative cube pattern"
            width={400}
            height={400}
            className="dark:invert"
          />
        </div>
      </div>
    </div>
  );
}
