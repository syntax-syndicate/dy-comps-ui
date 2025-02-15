"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function EnhancedPricingComponent() {
  const [isAnnual, setIsAnnual] = useState(false);

  const features = [
    "Smart task automation",
    "24/7 priority support",
    "Unlimited project boards",
    "Collaborative team workspaces",
    "Custom workflow creation",
    "Advanced data visualization",
    "Robust API access",
    "Granular permission controls",
    "Comprehensive audit logs",
  ];

  const monthlyPrice = 19;
  const annualPrice = 190; // 10 months for the price of 12

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Unlock Your Productivity Potential
          </h2>
          <p className="max-w-[85%] text-muted-foreground sm:text-xl sm:leading-8">
            Empower your team with our cutting-edge project management solution.
            One plan, endless possibilities.
          </p>
        </div>
        <div className="mt-16 flex justify-center">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Productivity Pro</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="mt-4 flex items-baseline justify-center">
                <span className="text-5xl font-extrabold tracking-tight">
                  ${isAnnual ? annualPrice : monthlyPrice}
                </span>
                <span className="ml-1 text-xl font-semibold text-muted-foreground">
                  /{isAnnual ? "year" : "month"}
                </span>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                {isAnnual
                  ? "Billed annually (save 17%)"
                  : "7-day free trial included"}
              </p>
            </CardContent>
            <CardFooter className="flex flex-col space-y-4">
              <Button className="w-full" size="lg">
                Start Your Free Trial
              </Button>
              <div className="flex items-center justify-center space-x-2">
                <span className="text-sm text-muted-foreground">Monthly</span>
                <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
                <span className="text-sm text-muted-foreground">Annual</span>
              </div>
            </CardFooter>
          </Card>
        </div>
        <div className="\\ mt-16 text-center">
          <h3 className="text-xl font-semibold sm:text-2xl">
            Everything You Need to Excel
          </h3>
          <ul className="mx-auto mt-8 grid max-w-5xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center space-x-3">
                <Check className="size-6 flex-shrink-0 text-primary" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-16 text-center">
          <p className="text-base text-muted-foreground">
            Need a custom solution?{" "}
            <a href="#" className="font-medium text-primary hover:underline">
              Let&apos;s chat about enterprise options
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
