"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, Lock } from "lucide-react";

export default function CallToAction17() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const waitlistSize = 1337; // This would be fetched from an API in a real application

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Submitted email:", email);
    setIsSubmitted(true);
  };

  return (
    <section className="w-full bg-accent py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Join Our Exclusive Waitlist
            </h2>
            <p className="mx-auto max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Be among the first to experience our revolutionary product.
              Limited spots available!
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" size="lg">
                Join the Waitlist
              </Button>
            </form>
            {isSubmitted && (
              <p className="text-sm text-green-600">
                Thank you for joining our waitlist!
              </p>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            <Lock className="mr-1 inline-block size-4" />
            {waitlistSize.toLocaleString()} people ahead of you
          </p>
          <div className="space-y-2">
            <h3 className="text-xl font-bold">Early Access Benefits</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              <li className="flex items-center">
                <CheckCircle className="mr-2 size-4 text-green-500" />
                Exclusive first access to our platform
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 size-4 text-green-500" />
                50% discount on your first year subscription
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 size-4 text-green-500" />
                Personal onboarding session with our team
              </li>
              <li className="flex items-center">
                <CheckCircle className="mr-2 size-4 text-green-500" />
                Opportunity to shape product features
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
