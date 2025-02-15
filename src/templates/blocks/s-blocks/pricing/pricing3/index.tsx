"use client";

import * as React from "react";
import { Check } from "lucide-react";

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

const plans = [
  {
    name: "Starter",
    description: "For individuals and small projects",
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      { text: "Up to 3 users", highlight: true },
      { text: "1 project", highlight: true },
      { text: "2GB storage", highlight: true },
      { text: "Basic email support", highlight: false },
      { text: "Limited integrations", highlight: false },
    ],
    cta: "Start for Free",
    popular: false,
  },
  {
    name: "Pro",
    description: "For growing teams and businesses",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      { text: "Up to 10 users", highlight: true },
      { text: "Unlimited projects", highlight: true },
      { text: "20GB storage", highlight: true },
      { text: "Priority email and chat support", highlight: true },
      { text: "Advanced integrations", highlight: false },
    ],
    cta: "Start 14-day Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      { text: "Unlimited users", highlight: true },
      { text: "Unlimited projects", highlight: true },
      { text: "Unlimited storage", highlight: true },
      { text: "24/7 phone and email support", highlight: true },
      { text: "Custom integrations", highlight: true },
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
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 max-w-[85%] text-muted-foreground sm:text-xl">
            Select the perfect plan for your needs. All plans include a 30-day
            money-back guarantee.
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
              <span className="text-sm text-emerald-600">(Save 20%)</span>
            </span>
          </div>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.popular ? "border-primary" : ""}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {plan.monthlyPrice !== null ? (
                  <div className="text-center">
                    <span className="text-4xl font-bold">
                      $
                      {annualBilling
                        ? ((plan.yearlyPrice / 12) * 0.8).toFixed(2)
                        : plan.monthlyPrice}
                    </span>
                    <span className="text-muted-foreground">
                      /{annualBilling ? "mo" : "month"}
                    </span>
                    {annualBilling && (
                      <p className="text-sm text-muted-foreground">
                        Billed annually at ${plan.yearlyPrice * 0.8}/year
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="text-center">
                    <span className="text-4xl font-bold">Custom</span>
                    <p className="text-sm text-muted-foreground">
                      Contact us for pricing
                    </p>
                  </div>
                )}
                <Separator className="my-4" />
                <ul className="space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 size-4 text-primary" />
                      <span
                        className={
                          feature.highlight
                            ? "font-medium"
                            : "text-muted-foreground"
                        }
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
