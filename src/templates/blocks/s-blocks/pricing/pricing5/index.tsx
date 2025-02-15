"use client";

import * as React from "react";
import { Check, Minus, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    name: "Startup",
    description: "For small teams and startups",
    price: "$29",
    billing: "per user / month",
    features: [
      "5 team members",
      "20GB storage",
      "Basic analytics",
      "24/7 support",
    ],
    cta: "Start free trial",
    popular: false,
  },
  {
    name: "Business",
    description: "For growing businesses",
    price: "$79",
    billing: "per user / month",
    features: [
      "Unlimited team members",
      "1TB storage",
      "Advanced analytics",
      "Priority support",
    ],
    cta: "Get started",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    billing: "tailored solutions",
    features: [
      "Custom team size",
      "Unlimited storage",
      "Custom analytics",
      "Dedicated support team",
    ],
    cta: "Contact sales",
    popular: false,
  },
];

const featureComparison = [
  {
    feature: "Team members",
    startup: "Up to 5",
    business: "Unlimited",
    enterprise: "Custom",
  },
  {
    feature: "Storage",
    startup: "20GB",
    business: "1TB",
    enterprise: "Unlimited",
  },
  { feature: "API access", startup: false, business: true, enterprise: true },
  {
    feature: "Custom branding",
    startup: false,
    business: true,
    enterprise: true,
  },
  {
    feature: "Analytics",
    startup: "Basic",
    business: "Advanced",
    enterprise: "Custom",
  },
  { feature: "Export data", startup: false, business: true, enterprise: true },
  { feature: "24/7 support", startup: true, business: true, enterprise: true },
  {
    feature: "Dedicated account manager",
    startup: false,
    business: false,
    enterprise: true,
  },
];

export default function PricingComponent() {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge variant="outline" className="border-primary text-primary">
              Pricing
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Choose your perfect plan
            </h2>
            <p className="max-w-3xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Select the plan that best fits your needs. All plans include a
              14-day free trial.
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 grid items-start gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                <div className="text-center">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="ml-1 text-sm text-muted-foreground">
                    {plan.billing}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 size-4 text-primary" />
                      <span className="text-sm">{feature}</span>
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
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mx-auto mt-16">
          <h3 className="mb-8 text-center text-2xl font-bold">
            Feature Comparison
          </h3>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Feature</TableHead>
                <TableHead>Startup</TableHead>
                <TableHead>Business</TableHead>
                <TableHead>Enterprise</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {featureComparison.map((row) => (
                <TableRow key={row.feature}>
                  <TableCell className="font-medium">{row.feature}</TableCell>
                  <TableCell>{renderFeature(row.startup)}</TableCell>
                  <TableCell>{renderFeature(row.business)}</TableCell>
                  <TableCell>{renderFeature(row.enterprise)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}

function renderFeature(feature: string | boolean) {
  if (typeof feature === "boolean") {
    return feature ? (
      <Check className="size-5 text-primary" />
    ) : (
      <Minus className="size-5 text-muted-foreground" />
    );
  }
  return feature;
}
