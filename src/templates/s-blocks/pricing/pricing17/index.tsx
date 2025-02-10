"use client";

import { useState } from "react";
import { Check, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import { motion } from "framer-motion";

export default function EnhancedPricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Hobby",
      description: "Perfect for side projects and experiments.",
      monthlyPrice: 19,
      yearlyPrice: 190,
      features: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
    },
    {
      name: "Freelancer",
      description: "For professionals building client websites.",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: [
        "10 products",
        "Up to 5,000 subscribers",
        "Advanced analytics",
        "48-hour support response time",
      ],
    },
    {
      name: "Startup",
      description: "For growing businesses with increasing needs.",
      monthlyPrice: 59,
      yearlyPrice: 590,
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
        "Marketing automations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      description: "Custom solutions for large-scale operations.",
      monthlyPrice: 99,
      yearlyPrice: 990,
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "1-hour, dedicated support response time",
        "Marketing automations",
        "Custom reporting tools",
      ],
    },
  ];

  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 px-4 py-32">
      <div className="container mx-auto">
        {/* Header */}
        <div className="mb-12 space-y-4 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
            Pricing
          </h2>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
            Pricing that grows with you
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Choose an affordable plan that&apos;s packed with the best features
            for engaging your audience, creating customer loyalty, and driving
            sales.
          </p>
          <div className="flex items-center justify-center space-x-4 pt-4">
            <span className={`text-sm ${!isYearly ? "font-semibold" : ""}`}>
              Monthly
            </span>
            <Toggle
              pressed={isYearly}
              onPressedChange={setIsYearly}
              size="lg"
              aria-label="Toggle yearly pricing"
            >
              <Zap className="h-4 w-4" />
            </Toggle>
            <span className={`text-sm ${isYearly ? "font-semibold" : ""}`}>
              Yearly (Save 20%)
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                plan.popular ? "border-primary" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute right-0 top-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-muted-foreground">
                    /{isYearly ? "year" : "month"}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                >
                  Get started
                </Button>
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <Check className="size-4 text-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Logos */}
        <div className="mt-20 grid grid-cols-2 items-center justify-items-center gap-8 md:grid-cols-5">
          {[
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          ].map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`Company ${index + 1}`}
              className="h-8 w-auto opacity-50 transition-opacity duration-300 hover:opacity-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 0.5, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
