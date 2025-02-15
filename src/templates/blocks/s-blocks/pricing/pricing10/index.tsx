"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for solo developers",
    price: 9,
    users: "1 user",
    storage: "5GB",
    support: "Community",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    recommended: false,
  },
  {
    name: "Pro",
    description: "Ideal for small teams",
    price: 29,
    users: "5 users",
    storage: "50GB",
    support: "Business hours",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    recommended: false,
  },
  {
    name: "Team",
    description: "Best for growing companies",
    price: 99,
    users: "20 users",
    storage: "200GB",
    support: "24/7 priority",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    recommended: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large teams",
    price: 299,
    users: "Unlimited users",
    storage: "1TB",
    support: "Dedicated account manager",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    recommended: false,
  },
];

export default function PricingComponent() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-gradient-to-b from-background to-muted/50 py-32">
      <div className="container mb-8 lg:mb-0">
        <div className="flex flex-col gap-y-12 md:gap-y-16">
          <div className="flex flex-col items-center text-center">
            <Image
              src="/logo.svg"
              alt="Pricing illustration"
              width={100}
              height={100}
              className="mb-6 dark:invert"
            />
            <h1 className="my-6 text-pretty text-3xl font-bold md:text-4xl xl:text-5xl">
              Choose Your Perfect Plan
            </h1>
            <p className="max-w-2xl text-muted-foreground lg:text-xl">
              Unlock powerful features and scale your projects with our flexible
              pricing options.
            </p>
          </div>
          <div className="flex justify-center lg:mb-8">
            <div className="flex items-center space-x-2">
              <span
                className={`text-sm ${!isAnnual ? "font-medium" : "text-muted-foreground"}`}
              >
                Monthly
              </span>
              <Switch
                id="annual-billing"
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
              />
              <span
                className={`text-sm ${isAnnual ? "font-medium" : "text-muted-foreground"}`}
              >
                Annual
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex flex-col gap-6 gap-y-8 xl:grid xl:grid-cols-4">
        {pricingPlans.map((plan) => (
          <Card
            key={plan.name}
            className={`${plan.recommended ? "border-primary" : "border"} text-clip transition-shadow hover:shadow-md lg:mt-7`}
          >
            {plan.recommended && (
              <div className="flex h-7 items-center justify-center rounded-t-lg bg-primary text-center text-xs font-semibold text-primary-foreground">
                Recommended
              </div>
            )}
            <CardHeader className="rounded-t-lg p-4 sm:p-6 xl:pt-12">
              <div className="mb-6 md:flex md:items-center xl:block">
                <div className="mb-1 flex md:flex-1 md:flex-row-reverse md:items-center xl:mb-6 xl:flex-col-reverse xl:items-start xl:gap-y-4">
                  <div className="flex-1">
                    <p className="mb-1 text-xl font-medium sm:text-2xl">
                      {plan.name}
                    </p>
                    <p className="text-xs text-muted-foreground sm:text-sm 2xl:min-h-10">
                      {plan.description}
                    </p>
                  </div>
                </div>
                <div>
                  <h2 className="mb-1 flex items-start text-2xl font-medium md:text-3xl 2xl:text-4xl">
                    ${isAnnual ? plan.price * 10 : plan.price}
                  </h2>
                  <p className="text-xs font-medium text-muted-foreground">
                    / {isAnnual ? "year" : "month"}
                  </p>
                </div>
              </div>
              <div>
                <Button
                  variant={plan.recommended ? "default" : "outline"}
                  className="w-full"
                >
                  Get started for free
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-8 border-t p-6 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 xl:block xl:space-y-8">
              <div>
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                  Overview
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-x-2 text-sm font-medium">
                    <Check className="size-4 text-green-500" />
                    {plan.users}
                  </li>
                  <li className="flex items-center gap-x-2 text-sm font-medium">
                    <Check className="size-4 text-green-500" />
                    {plan.storage} storage
                  </li>
                  <li className="flex items-center gap-x-2 text-sm font-medium">
                    <Check className="size-4 text-green-500" />
                    {plan.support} support
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-foreground">
                  Highlights
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-center gap-x-2 text-sm font-medium">
                    <Check className="size-4 text-green-500" />
                    Included feature
                  </li>
                  <li className="flex items-center gap-x-2 text-sm font-medium">
                    <X className="size-4 text-red-500" />
                    Not included feature
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
