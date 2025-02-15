"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { HeartHandshake, InfoIcon, GiftIcon } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function DonationPaymentForm() {
  const [donationType, setDonationType] = useState<"once" | "monthly">("once");
  const [selectedAmount, setSelectedAmount] = useState<number>(25);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [showCustomAmount, setShowCustomAmount] = useState<boolean>(false);

  const donationTiers = [
    { amount: 10, label: "Supporter", popular: false },
    { amount: 25, label: "Helper", popular: true },
    { amount: 50, label: "Champion", popular: false },
    { amount: 100, label: "Hero", popular: false },
  ];

  const handleAmountSelection = (value: string) => {
    const amount = Number.parseInt(value, 10);
    if (!isNaN(amount)) {
      setSelectedAmount(amount);
      setShowCustomAmount(false);
      setCustomAmount("");
    } else {
      setShowCustomAmount(true);
    }
  };

  const handleCustomAmount = (value: string) => {
    setShowCustomAmount(true);
    setCustomAmount(value);
    const numValue = Number.parseFloat(value);
    if (!isNaN(numValue)) {
      setSelectedAmount(numValue);
    }
  };

  return (
    <section className="container py-16">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground">
            Support Our Cause
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Donation Type Toggle */}
          <div className="flex items-center justify-between rounded-lg bg-accent p-4">
            <div className="flex items-center gap-2">
              <HeartHandshake className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">
                {donationType === "once" ? "One-time" : "Monthly"} Donation
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Switch
                checked={donationType === "monthly"}
                onCheckedChange={(checked) =>
                  setDonationType(checked ? "monthly" : "once")
                }
              />
              <Badge variant="secondary" className="text-xs">
                {donationType === "monthly" ? "Ongoing Support" : "Single Gift"}
              </Badge>
            </div>
          </div>

          {/* Donation Tiers */}
          <RadioGroup
            value={showCustomAmount ? "custom" : selectedAmount.toString()}
            onValueChange={handleAmountSelection}
            className="grid gap-4 sm:grid-cols-2"
          >
            {donationTiers.map((tier) => (
              <div
                key={tier.amount}
                className="relative rounded-lg border p-4 hover:border-primary"
              >
                <label className="flex cursor-pointer items-center justify-between">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value={tier.amount.toString()}
                      id={`tier-${tier.amount}`}
                    />
                    <div>
                      <p className="text-lg font-semibold">${tier.amount}</p>
                      <p className="text-sm text-muted-foreground">
                        {tier.label}
                      </p>
                    </div>
                  </div>
                  {tier.popular && (
                    <Badge variant="outline" className="text-xs">
                      Most Popular
                    </Badge>
                  )}
                </label>
              </div>
            ))}

            {/* Custom Amount */}
            <div className="rounded-lg border p-4 hover:border-primary">
              <label className="flex cursor-pointer items-center gap-3">
                <RadioGroupItem value="custom" id="custom-amount" />
                <div className="w-full">
                  <p className="text-sm font-medium">Other Amount</p>
                  {showCustomAmount && (
                    <Input
                      type="number"
                      placeholder="Enter custom amount"
                      className="mt-2"
                      value={customAmount}
                      onChange={(e) => handleCustomAmount(e.target.value)}
                    />
                  )}
                </div>
              </label>
            </div>
          </RadioGroup>

          {/* Donor Information */}
          <div className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name (Optional)</Label>
                <Input id="name" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email (Optional)</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Encouraging Message (Optional)</Label>
              <Input id="message" placeholder="Add a personal message..." />
            </div>
          </div>

          {/* Payment Summary */}
          <div className="rounded-lg bg-accent p-4">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium">
                  {donationType === "once" ? "One-time" : "Monthly"} Donation
                </p>
                <p className="text-xs text-muted-foreground">
                  {donationType === "monthly" && "Recurring every month"}
                </p>
              </div>
              <p className="text-lg font-semibold">
                ${selectedAmount.toFixed(2)}
              </p>
            </div>
            {donationType === "monthly" && (
              <div className="mt-2 flex items-center gap-2 text-sm text-primary">
                <GiftIcon className="h-4 w-4" />
                <span>Includes exclusive supporter benefits</span>
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Donate Now
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            <InfoIcon className="mr-1 inline h-3 w-3" />
            Secure payment processing via Stripe. 100% of donations go directly
            to our programs.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
