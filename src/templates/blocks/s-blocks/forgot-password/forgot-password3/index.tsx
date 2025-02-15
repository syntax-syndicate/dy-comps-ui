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

export default function RecoverAccountPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex w-full flex-col justify-center space-y-6 lg:w-1/2 lg:px-8 xl:px-16">
        <div className="mx-auto flex items-center justify-center lg:justify-start">
          <Image src="/logo.svg" alt="Logo" width={60} height={60} />
          <span className="text-4xl font-bold">DY-Comps</span>
        </div>
        <Card className="mx-auto w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Recover your account
            </CardTitle>
            <CardDescription>
              Enter your email address and we'll send you a link to reset your
              password.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Send recovery link
              </Button>
            </form>
            <div className="mt-4 text-center text-sm text-muted-foreground">
              Remember your password?{" "}
              <a href="#" className="font-medium text-primary hover:underline">
                Sign in
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="hidden w-1/2 bg-muted lg:block">
        <div className="flex h-full items-center justify-center p-8">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Account recovery illustration"
            width={600}
            height={600}
            className="max-w-full rounded-lg object-cover"
          />
        </div>
      </div>
    </div>
  );
}
