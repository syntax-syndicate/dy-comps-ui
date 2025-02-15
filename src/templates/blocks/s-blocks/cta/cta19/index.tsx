"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, CheckCircle, Star } from "lucide-react";

export default function CallToAction19() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Submitted email:", email);
    setIsSubmitted(true);
  };

  return (
    <section className="w-full bg-gradient-to-b from-background to-secondary/20 py-12 md:py-24 lg:py-32">
      <div className="container">
        <Card className="mx-auto w-full max-w-4xl overflow-hidden">
          <CardHeader className="space-y-2 bg-accent p-6">
            <Badge className="mx-auto w-fit">Coming Soon</Badge>
            <CardTitle className="text-center text-3xl font-bold">
              Get Early Access to Our Revolutionary Platform
            </CardTitle>
            <p className="text-center">
              Be among the first to experience the future of productivity
            </p>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  Exclusive Beta Features
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 size-5 text-primary" />
                    AI-powered task prioritization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 size-5 text-primary" />
                    Seamless team collaboration tools
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 size-5 text-primary" />
                    Advanced analytics dashboard
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="mr-2 size-5 text-primary" />
                    Customizable workflow templates
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">
                  What Beta Users Are Saying
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Star className="size-5 text-yellow-400" />
                    <Star className="size-5 text-yellow-400" />
                    <Star className="size-5 text-yellow-400" />
                    <Star className="size-5 text-yellow-400" />
                    <Star className="size-5 text-yellow-400" />
                  </div>
                  <p className="text-sm italic">
                    &quot;This platform has completely transformed how our team
                    works. Can&apos;t wait for the full release!&quot;
                  </p>
                  <p className="text-sm font-semibold">
                    - Sarah J., Product Manager
                  </p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Star className="size-5 text-yellow-400" />
                    <Star className="size-5 text-yellow-400" />
                    <Star className="size-5 text-yellow-400" />
                    <Star className="size-5 text-yellow-400" />
                    <Star className="size-5 text-yellow-400" />
                  </div>
                  <p className="text-sm italic">
                    &quot;The AI features are a game-changer. It&apos;s like
                    having a personal assistant for every task.&quot;
                  </p>
                  <p className="text-sm font-semibold">
                    - Alex M., Startup Founder
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 bg-muted/50 p-6">
            <form
              onSubmit={handleSubmit}
              className="flex w-full flex-col gap-2 sm:flex-row"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow"
              />
              <Button type="submit" size="lg" className="w-full sm:w-auto">
                <Rocket className="mr-2 size-5" />
                Get Early Access
              </Button>
            </form>
            {isSubmitted && (
              <p className="text-center text-sm text-green-600">
                Thank you for your interest! We&apos;ll be in touch soon.
              </p>
            )}
            <p className="text-center text-xs text-muted-foreground">
              By signing up, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
