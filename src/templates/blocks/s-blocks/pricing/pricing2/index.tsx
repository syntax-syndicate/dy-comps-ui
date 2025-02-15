"use client";

import * as React from "react";
import { ArrowRight, Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects",
    monthlyPrice: 9,
    yearlyPrice: 90,
    features: [
      "5 projects",
      "Up to 10 team members",
      "5GB of storage",
      "Basic support",
      "Access to core features",
    ],
  },
  {
    name: "Professional",
    description: "Ideal for growing businesses and teams",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      "Unlimited projects",
      "Unlimited team members",
      "50GB of storage",
      "Priority support",
      "Advanced analytics",
      "Custom integrations",
      "API access",
    ],
  },
];

export default function PricingComponent() {
  const [isYearly, setIsYearly] = React.useState(false);

  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Choose Your Plan
          </h2>
          <p className="max-w-[600px] text-muted-foreground">
            Select the perfect plan for your needs. Enjoy the flexibility to
            switch between monthly and yearly billing.
          </p>
          <div className="flex items-center gap-4">
            <span
              className={isYearly ? "text-muted-foreground" : "font-medium"}
            >
              Monthly
            </span>
            <Switch checked={isYearly} onCheckedChange={setIsYearly} />
            <span
              className={isYearly ? "font-medium" : "text-muted-foreground"}
            >
              Yearly
            </span>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {plans.map((plan) => (
              <Card key={plan.name} className="flex flex-col">
                <CardHeader>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription>{plan.description}</CardDescription>
                </CardHeader>
                <CardContent className="grid gap-4">
                  <div className="text-center">
                    <span className="text-4xl font-bold">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  <Separator />
                  <ul className="grid gap-2 text-sm">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="size-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="mt-auto">
                  <Button className="w-full">
                    Get Started
                    <ArrowRight className="ml-2 size-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
