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
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function AccountRecoveryPage() {
  return (
    <div className="flex min-h-screen bg-background">
      <div className="flex w-full flex-col justify-center space-y-6 py-32 lg:w-1/2 lg:px-8 xl:px-16">
        <div className="mx-auto flex justify-center lg:justify-start">
          <Image src="/logo.svg" alt="Logo" width={60} height={60} />
        </div>
        <Card className="mx-auto w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Recover your account
            </CardTitle>
            <CardDescription>
              Enter your email address to receive a recovery link.
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
      <div className="hidden lg:flex lg:w-1/2 lg:flex-col lg:justify-center lg:bg-muted">
        <div className="px-8 xl:px-16">
          <h2 className="mb-6 text-3xl font-bold text-foreground">
            Account Recovery Process
          </h2>
          <ul className="space-y-4">
            <RecoveryStep
              icon={<ShieldCheck className="h-6 w-6 text-primary" />}
              title="Secure Link"
              description="We'll send a secure recovery link to your email address."
            />
            <RecoveryStep
              icon={<ArrowRight className="h-6 w-6 text-primary" />}
              title="Follow Instructions"
              description="Click the link in your email and follow the instructions to reset your password."
            />
            <RecoveryStep
              icon={<ShieldCheck className="h-6 w-6 text-primary" />}
              title="Create New Password"
              description="Choose a strong, unique password to secure your account."
            />
          </ul>
          <p className="mt-6 text-sm text-muted-foreground">
            If you don't receive an email within a few minutes, please check
            your spam folder or contact our support team for assistance.
          </p>
        </div>
      </div>
    </div>
  );
}

interface RecoveryStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const RecoveryStep: React.FC<RecoveryStepProps> = ({
  icon,
  title,
  description,
}) => (
  <li className="flex items-start space-x-3">
    <div className="flex-shrink-0">{icon}</div>
    <div>
      <h3 className="font-medium text-foreground">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
  </li>
);
