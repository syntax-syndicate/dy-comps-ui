"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { InfoIcon } from "lucide-react";

export default function SubscriptionPaymentForm() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly",
  );
  const [selectedPlan, setSelectedPlan] = useState<
    "basic" | "pro" | "enterprise"
  >("pro");

  const plans = {
    basic: {
      monthly: 9.99,
      annual: 99.99,
    },
    pro: {
      monthly: 19.99,
      annual: 199.99,
    },
    enterprise: {
      monthly: 49.99,
      annual: 499.99,
    },
  };

  const getPlanPrice = () => {
    return billingCycle === "monthly"
      ? plans[selectedPlan].monthly
      : plans[selectedPlan].annual;
  };

  const getDiscount = () => {
    if (billingCycle === "annual") {
      return (
        plans[selectedPlan].monthly * 12 -
        plans[selectedPlan].annual
      ).toFixed(2);
    }
    return 0;
  };

  return (
    <section className="container py-16">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground">
            Choose Your Plan
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Billing Cycle Toggle */}
          <div className="flex items-center justify-between">
            <Label
              htmlFor="billing-cycle"
              className="text-sm text-muted-foreground"
            >
              Billing Cycle
            </Label>
            <div className="flex items-center gap-2">
              <span className="text-sm">Monthly</span>
              <Switch
                id="billing-cycle"
                checked={billingCycle === "annual"}
                onCheckedChange={(checked) =>
                  setBillingCycle(checked ? "annual" : "monthly")
                }
              />
              <span className="text-sm">Annual</span>
              {billingCycle === "annual" && (
                <Badge variant="secondary" className="text-xs">
                  Save 20%
                </Badge>
              )}
            </div>
          </div>

          {/* Plan Selection */}
          <RadioGroup
            defaultValue="pro"
            value={selectedPlan}
            onValueChange={(value: "basic" | "pro" | "enterprise") =>
              setSelectedPlan(value)
            }
            className="grid gap-4 sm:grid-cols-3"
          >
            <div className="rounded-lg border p-4">
              <label className="flex cursor-pointer items-center gap-3">
                <RadioGroupItem value="basic" id="basic" />
                <div>
                  <p className="text-sm font-medium text-foreground">Basic</p>
                  <p className="text-xs text-muted-foreground">
                    Perfect for individuals
                  </p>
                </div>
              </label>
              <div className="mt-4">
                <p className="text-2xl font-semibold text-foreground">
                  ${plans.basic[billingCycle]}
                </p>
                <p className="text-xs text-muted-foreground">
                  {billingCycle === "monthly" ? "per month" : "per year"}
                </p>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <label className="flex cursor-pointer items-center gap-3">
                <RadioGroupItem value="pro" id="pro" />
                <div>
                  <p className="text-sm font-medium text-foreground">Pro</p>
                  <p className="text-xs text-muted-foreground">
                    Best for small teams
                  </p>
                </div>
              </label>
              <div className="mt-4">
                <p className="text-2xl font-semibold text-foreground">
                  ${plans.pro[billingCycle]}
                </p>
                <p className="text-xs text-muted-foreground">
                  {billingCycle === "monthly" ? "per month" : "per year"}
                </p>
              </div>
            </div>

            <div className="rounded-lg border p-4">
              <label className="flex cursor-pointer items-center gap-3">
                <RadioGroupItem value="enterprise" id="enterprise" />
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Enterprise
                  </p>
                  <p className="text-xs text-muted-foreground">
                    For large organizations
                  </p>
                </div>
              </label>
              <div className="mt-4">
                <p className="text-2xl font-semibold text-foreground">
                  ${plans.enterprise[billingCycle]}
                </p>
                <p className="text-xs text-muted-foreground">
                  {billingCycle === "monthly" ? "per month" : "per year"}
                </p>
              </div>
            </div>
          </RadioGroup>

          {/* Order Summary */}
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Selected Plan</span>
              <span className="text-foreground">
                {selectedPlan.charAt(0).toUpperCase() + selectedPlan.slice(1)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Billing Cycle</span>
              <span className="text-foreground">
                {billingCycle === "monthly" ? "Monthly" : "Annual"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Price</span>
              <span className="text-foreground">${getPlanPrice()}</span>
            </div>
            {billingCycle === "annual" && (
              <div className="flex justify-between">
                <span className="text-muted-foreground">Discount</span>
                <span className="text-emerald-500">-${getDiscount()}</span>
              </div>
            )}
            <div className="flex justify-between border-t pt-3 font-medium">
              <span className="text-foreground">Total</span>
              <span className="text-foreground">${getPlanPrice()}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Subscribe Now
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Payment processed by{" "}
            <span className="text-primary">Lemon Squeezy</span> for{" "}
            <span className="text-primary">DY-Comps LLC</span> - United States Of
            America
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
