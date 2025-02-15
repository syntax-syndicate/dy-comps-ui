"use client";

import { useState } from "react";
import { Check, Zap, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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

export default function EnhancedPricingComponent() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annually">(
    "monthly",
  );

  const plans = [
    {
      name: "Starter",
      icon: <Zap className="size-8 text-primary" />,
      price: billingCycle === "monthly" ? 49 : 470,
      description:
        "Perfect for solopreneurs and small teams taking their first steps.",
      features: [
        "3 active projects",
        "10GB cloud storage",
        "Up to 5 team members",
        "Email support (48h response time)",
        "Basic analytics",
      ],
    },
    {
      name: "Pro",
      icon: <Shield className="size-8 text-primary" />,
      price: billingCycle === "monthly" ? 99 : 950,
      description:
        "Ideal for growing businesses ready to scale their operations.",
      features: [
        "Unlimited active projects",
        "100GB cloud storage",
        "Up to 15 team members",
        "Priority support (24h response time)",
        "Advanced analytics and reporting",
        "Custom integrations",
      ],
    },
  ];

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Choose the Perfect Plan for Your Journey
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Unlock your potential with our flexible pricing options. Start
            small, dream big, and scale as you grow.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center sm:flex-row sm:justify-center">
          <span className="text-base font-medium text-foreground">
            Select your billing preference
          </span>
          <div className="relative mt-2 flex items-center space-x-2 sm:ml-6 sm:mt-0">
            <span className="text-sm text-muted-foreground">Monthly</span>
            <Switch
              checked={billingCycle === "annually"}
              onCheckedChange={(checked) =>
                setBillingCycle(checked ? "annually" : "monthly")
              }
            />
            <span className="text-sm text-muted-foreground">Annually</span>
            <Badge variant="outline" className="ml-2">
              Save 20%
            </Badge>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2 lg:gap-12">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-semibold">
                    {plan.name}
                  </CardTitle>
                  {plan.icon}
                </div>
                <CardDescription className="mt-4">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mt-6">
                  <p className="flex items-baseline">
                    <span className="text-5xl font-extrabold tracking-tight">
                      ${plan.price}
                    </span>
                    <span className="ml-2 text-sm font-medium text-muted-foreground">
                      /{billingCycle === "monthly" ? "mo" : "yr"}
                    </span>
                  </p>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="size-5 flex-shrink-0 text-primary" />
                      <span className="ml-3 text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="mt-auto">
                <Button className="w-full">Get started with {plan.name}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Not sure which plan is right for you?{" "}
            <a href="#" className="font-medium text-primary hover:underline">
              Compare all features
            </a>{" "}
            or{" "}
            <a href="#" className="font-medium text-primary hover:underline">
              contact our sales team
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
