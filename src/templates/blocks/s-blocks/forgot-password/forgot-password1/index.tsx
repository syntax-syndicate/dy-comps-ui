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
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

export default function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background py-32">
      <div className="w-full max-w-md space-y-6 px-6 py-8">
        <div className="flex justify-center">
          <a
            href="#"
            className="flex items-center space-x-2 text-2xl font-semibold"
          >
            <Image src="/logo.svg" alt="DY-Comps Logo" width={32} height={32} />
            <span className="text-foreground">DY-Comps</span>
          </a>
        </div>
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Forgot Your Password?
            </CardTitle>
            <CardDescription>
              Lost your credentials? No problem! Just provide your email
              address, and we'll dispatch a recovery code.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  id="email"
                  placeholder="your.name@domain.net"
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label
                  htmlFor="terms"
                  className="text-sm text-muted-foreground"
                >
                  I acknowledge the{" "}
                  <a
                    href="#"
                    className="font-medium text-primary hover:underline"
                  >
                    Legal Agreements
                  </a>
                </Label>
              </div>
              <Button type="submit" className="w-full">
                Reset Password
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
