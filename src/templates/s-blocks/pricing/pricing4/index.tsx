"use client";

import * as React from "react";
import { Zap, Shield, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Basic",
    description: "Essential features for individuals",
    monthlyPrice: 9,
    yearlyPrice: 90,
    features: [
      {
        text: "Up to 5 users",
        highlight: true,
        icon: <Zap className="size-4" />,
      },
      {
        text: "2 projects",
        highlight: true,
        icon: <Zap className="size-4" />,
      },
      {
        text: "5GB storage",
        highlight: true,
        icon: <Zap className="size-4" />,
      },
      {
        text: "Email support",
        highlight: false,
        icon: <Shield className="size-4" />,
      },
      {
        text: "Basic analytics",
        highlight: false,
        icon: <Clock className="size-4" />,
      },
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "Advanced tools for professionals",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      {
        text: "Up to 20 users",
        highlight: true,
        icon: <Zap className="size-4" />,
      },
      {
        text: "Unlimited projects",
        highlight: true,
        icon: <Zap className="size-4" />,
      },
      {
        text: "50GB storage",
        highlight: true,
        icon: <Zap className="size-4" />,
      },
      {
        text: "Priority support",
        highlight: true,
        icon: <Shield className="size-4" />,
      },
      {
        text: "Advanced analytics",
        highlight: true,
        icon: <Clock className="size-4" />,
      },
    ],
    cta: "Upgrade to Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large teams",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      {
        text: "Unlimited users",
        highlight: true,
        icon: <Zap className="size-4" />,
      },
      {
        text: "Unlimited projects",
        highlight: true,
        icon: <Zap className="size-4" />,
      },
      {
        text: "Unlimited storage",
        highlight: true,
        icon: <Zap className="size-4" />,
      },
      {
        text: "24/7 dedicated support",
        highlight: true,
        icon: <Shield className="size-4" />,
      },
      {
        text: "Custom analytics",
        highlight: true,
        icon: <Clock className="size-4" />,
      },
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

export default function PricingComponent() {
  const [annualBilling, setAnnualBilling] = React.useState(false);

  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Pricing Plans
          </h2>
          <p className="mt-4 max-w-[85%] text-muted-foreground sm:text-xl">
            Choose the perfect plan to power your projects. Upgrade or downgrade
            anytime.
          </p>
          <div className="mt-8 flex items-center space-x-4">
            <span
              className={
                annualBilling ? "text-muted-foreground" : "font-medium"
              }
            >
              Monthly
            </span>
            <Switch
              checked={annualBilling}
              onCheckedChange={setAnnualBilling}
            />
            <span
              className={
                annualBilling ? "font-medium" : "text-muted-foreground"
              }
            >
              Annual{" "}
              <Badge variant="secondary" className="ml-2">
                Save 15%
              </Badge>
            </span>
          </div>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`flex flex-col ${plan.popular ? "border-primary shadow-lg" : ""}`}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  {plan.popular && <Badge>Most Popular</Badge>}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {plan.monthlyPrice !== null ? (
                  <div className="mb-4 text-center">
                    <span className="text-4xl font-bold">
                      $
                      {annualBilling
                        ? ((plan.yearlyPrice / 12) * 0.85).toFixed(2)
                        : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">
                      /{annualBilling ? "mo" : "month"}
                    </span>
                    {annualBilling && (
                      <p className="text-sm text-muted-foreground">
                        Billed annually at ${plan.yearlyPrice * 0.85}/year
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="mb-4 text-center">
                    <span className="text-4xl font-bold">Custom</span>
                    <p className="text-sm text-muted-foreground">
                      Tailored to your needs
                    </p>
                  </div>
                )}
                <Separator className="my-4" />
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      {feature.icon}
                      <span
                        className={`ml-2 ${feature.highlight ? "font-medium" : "text-muted-foreground"}`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
