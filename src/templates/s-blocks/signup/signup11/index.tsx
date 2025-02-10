"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function AuthPage() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-muted/50 bg-[url('https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <div className="container mx-auto flex flex-col items-center py-8">
        <Link
          href="#"
          className="mb-6 flex items-center text-2xl font-semibold text-primary-foreground text-white"
        >
          <Image
            className="mr-2 h-8 w-8"
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="logo"
            width={10}
            height={1}
          />
          DY-Comps
        </Link>

        <Card className="w-full max-w-md p-6 sm:p-8">
          <div className="space-y-6">
            <h1 className="text-center text-2xl font-bold tracking-tight text-foreground">
              Sign in to your account
            </h1>

            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@company.com"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox id="remember" />
                  <Label
                    htmlFor="remember"
                    className="text-sm font-medium leading-none"
                  >
                    Remember me
                  </Label>
                </div>
                <Link
                  href="#"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  Forgot password?
                </Link>
              </div>

              <Button type="submit" className="w-full">
                Log in
              </Button>

              <p className="text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link
                  href="#"
                  className="font-medium text-primary hover:underline"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
}
