"use client";

import { useState } from "react";
import { Check, Minus, Info, Zap, Shield, Crown } from "lucide-react";
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
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const plans = [
  {
    name: "Starter",
    description: "Perfect for individuals and small projects.",
    monthlyPrice: 0,
    annualPrice: 0,
    features: [
      "1 user",
      "5 projects",
      "Basic collaboration",
      "1GB storage",
      "Email support",
    ],
    icon: Zap,
  },
  {
    name: "Pro",
    description: "Ideal for growing teams and businesses.",
    monthlyPrice: 29,
    annualPrice: 290,
    features: [
      "Unlimited users",
      "Unlimited projects",
      "Advanced collaboration",
      "15GB storage",
      "Priority support",
      "Advanced analytics",
    ],
    icon: Shield,
  },
  {
    name: "Enterprise",
    description: "For large-scale operations and maximum control.",
    monthlyPrice: 99,
    annualPrice: 990,
    features: [
      "Everything in Pro",
      "Unlimited storage",
      "Dedicated account manager",
      "Custom integrations",
      "Advanced security",
      "API access",
    ],
    icon: Crown,
  },
];

const allFeatures = [
  "Number of users",
  "Projects",
  "Collaboration",
  "Storage",
  "Support",
  "Analytics",
  "Integrations",
  "Security",
  "API access",
];

export default function EnhancedPricingComponent() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Choose the Perfect Plan for Your Success
          </h2>
          <p className="text-xl text-muted-foreground">
            Unlock powerful features and scale your projects with our flexible
            pricing options.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-4">
          <span className="text-base font-medium text-foreground">
            Billing Frequency
          </span>
          <div className="flex items-center space-x-4">
            <span
              className={`text-sm ${isAnnual ? "text-muted-foreground" : "font-medium text-foreground"}`}
            >
              Monthly
            </span>
            <Switch checked={isAnnual} onCheckedChange={setIsAnnual} />
            <span
              className={`text-sm ${!isAnnual ? "text-muted-foreground" : "font-medium text-foreground"}`}
            >
              Annual
            </span>
            <Badge variant="secondary" className="text-xs font-semibold">
              Save up to 20%
            </Badge>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-bold">
                    {plan.name}
                  </CardTitle>
                  <plan.icon className="size-6 text-primary" />
                </div>
                <CardDescription className="mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6 text-center">
                  <span className="text-4xl font-bold text-foreground">
                    $
                    {isAnnual
                      ? (plan.annualPrice / 12).toFixed(2)
                      : plan.monthlyPrice.toFixed(2)}
                  </span>
                  <span className="ml-2 text-muted-foreground">
                    /{isAnnual ? "mo (billed annually)" : "mo"}
                  </span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="mr-2 size-5 flex-shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button
                  className="w-full"
                  variant={plan.name === "Pro" ? "default" : "outline"}
                >
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-20 hidden lg:block">
          <h3 className="mb-8 text-center text-2xl font-bold">Compare Plans</h3>
          <div className="overflow-hidden rounded-lg border">
            <table className="w-full">
              <thead>
                <tr className="bg-muted">
                  <th className="px-6 py-4 text-left font-medium text-muted-foreground">
                    Features
                  </th>
                  {plans.map((plan) => (
                    <th
                      key={plan.name}
                      className="px-6 py-4 text-center font-medium text-foreground"
                    >
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feature, index) => (
                  <tr
                    key={feature}
                    className={
                      index % 2 === 0 ? "bg-background" : "bg-muted/50"
                    }
                  >
                    <td className="px-6 py-4 text-sm font-medium text-foreground">
                      {feature}
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="ml-2 size-5"
                            >
                              <Info className="size-4" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>More info about {feature}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </td>
                    {plans.map((plan) => (
                      <td
                        key={`${plan.name}-${feature}`}
                        className="px-6 py-4 text-center"
                      >
                        {plan.features.some((f) =>
                          f.toLowerCase().includes(feature.toLowerCase()),
                        ) ? (
                          <Check className="mx-auto size-5 text-primary" />
                        ) : (
                          <Minus className="mx-auto size-5 text-muted-foreground" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
