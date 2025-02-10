"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Zap } from "lucide-react";

export default function CallToAction18() {
  const [timeLeft, setTimeLeft] = useState(24 * 60 * 60); // 24 hours in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <section className="w-full bg-gradient-to-b from-background to-secondary/20 py-12 md:py-24 lg:py-32">
      <div className="container">
        <Card className="mx-auto w-full max-w-3xl overflow-hidden">
          <CardHeader className="space-y-2 bg-accent p-6">
            <Badge className="mx-auto w-fit">Limited Time Offer</Badge>
            <CardTitle className="text-center text-3xl font-bold">
              Premium Plan Sale
            </CardTitle>
            <div className="flex items-center justify-center space-x-2 text-2xl font-bold">
              <Clock className="size-6" />
              <span>Ends in: {formatTime(timeLeft)}</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 p-6">
            <div className="flex items-baseline justify-center space-x-2">
              <span className="text-4xl font-bold">$49.99</span>
              <span className="text-xl text-muted-foreground line-through">
                $99.99
              </span>
              <Badge variant="destructive" className="text-lg">
                Save 50%
              </Badge>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <ul className="space-y-2">
                <li className="flex items-center">
                  <CheckCircle className="mr-2 size-5 text-primary" />
                  Unlimited access to all premium features
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 size-5 text-primary" />
                  Priority customer support
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 size-5 text-primary" />
                  Exclusive early access to new features
                </li>
                <li className="flex items-center">
                  <CheckCircle className="mr-2 size-5 text-primary" />
                  Free upgrades for life
                </li>
              </ul>
              <div className="rounded-lg bg-muted p-4">
                <h3 className="mb-2 text-lg font-semibold">
                  Why Choose Premium?
                </h3>
                <ul className="space-y-1 text-sm">
                  <li>• Boost productivity with advanced tools</li>
                  <li>• Seamless integration with your workflow</li>
                  <li>• Dedicated account manager</li>
                  <li>• Regular feature updates based on your feedback</li>
                </ul>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 bg-muted/50 p-6">
            <Button size="lg" className="w-full text-lg">
              <Zap className="mr-2 size-5" />
              Claim Offer Now
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              30-day money-back guarantee. No questions asked.
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
