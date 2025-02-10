import React from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const features = [
  "Reset your password quickly and securely",
  "Receive a password reset link via email",
  "Create a strong, new password",
  "Enhanced account security measures",
  "24/7 customer support available",
];

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="hidden w-1/2 bg-muted lg:block">
        <div className="flex h-full flex-col justify-center p-8">
          <div className="mb-8 w-max rounded-lg bg-background">
            <Image src="/logo.svg" alt="DY-Comps logo" width={200} height={200} />
          </div>
          <h2 className="mb-6 text-3xl font-bold text-foreground">
            Account Recovery Features
          </h2>
          <ul className="space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span className="text-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex w-full items-center justify-center lg:w-1/2">
        <div className="w-full max-w-md space-y-8 px-4 sm:px-6">
          <div className="flex justify-center lg:hidden">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=40&width=40"
              alt="DY-Comps logo"
              width={40}
              height={40}
            />
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                Forgot your password?
              </CardTitle>
              <CardDescription>
                Don't worry! Enter your email, and we'll send you a link to
                reset your password.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send reset link
                </Button>
              </form>
              <div className="mt-4 text-center text-sm text-muted-foreground">
                Remember your password?{" "}
                <a
                  href="#"
                  className="font-medium text-primary hover:underline"
                >
                  Sign in
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
