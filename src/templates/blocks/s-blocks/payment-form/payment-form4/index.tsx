"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  CreditCard,
  Calendar,
  Bitcoin,
  ShoppingCartIcon as Paypal,
  LockIcon,
} from "lucide-react";

export default function EnhancedPaymentSelector() {
  return (
    <div className="mx-auto max-w-xl p-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold text-foreground">
            Select Payment Method
          </h2>
          <p className="text-muted-foreground">
            Choose your preferred payment option
          </p>
        </div>

        <Tabs defaultValue="credit-card" className="w-full">
          <TabsList className="grid h-auto w-full grid-cols-4 p-1">
            {[
              { value: "credit-card", icon: CreditCard, label: "Card" },
              { value: "monthly", icon: Calendar, label: "Subscriptions" },
              { value: "crypto", icon: Bitcoin, label: "Crypto" },
              { value: "paypal", icon: Paypal, label: "PayPal" },
            ].map((tab) => (
              <TabsTrigger
                key={tab.value}
                value={tab.value}
                className="flex h-auto flex-col gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <tab.icon className="h-5 w-5" />
                <span className="text-xs font-medium">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Credit Card Content */}
          <TabsContent value="credit-card" className="mt-4">
            <RadioGroup defaultValue="visa" className="space-y-3">
              {[
                {
                  id: "visa",
                  lastFour: "7818",
                  expiry: "10/2029",
                  brand: "Visa",
                  logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
                },
                {
                  id: "mastercard",
                  lastFour: "3297",
                  expiry: "04/2029",
                  brand: "Mastercard",
                  logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
                },
              ].map((card) => (
                <div
                  key={card.id}
                  className="rounded-lg border bg-card transition-colors hover:border-primary"
                >
                  <label className="flex cursor-pointer items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value={card.id} id={card.id} />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          {card.brand} ending in {card.lastFour}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Expires {card.expiry}
                        </p>
                      </div>
                    </div>
                    <Image
                      src={card.logo}
                      alt={card.brand}
                      width={48}
                      height={32}
                      className="h-8 w-auto"
                    />
                  </label>
                  <div className="flex gap-4 border-t px-4 py-2">
                    <button className="text-sm text-destructive hover:text-destructive/80">
                      Remove
                    </button>
                    <button className="text-sm text-muted-foreground hover:text-foreground">
                      Edit details
                    </button>
                  </div>
                </div>
              ))}

              <label className="flex cursor-pointer items-center gap-3 rounded-lg border p-4 transition-colors hover:border-primary">
                <RadioGroupItem value="new" id="new" />
                <span className="text-sm font-medium text-foreground">
                  Add new payment card
                </span>
              </label>
            </RadioGroup>
          </TabsContent>

          {/* Subscription Plans */}
          <TabsContent value="monthly" className="mt-4">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Select your subscription plan:
              </p>
              <RadioGroup defaultValue="basic" className="space-y-4">
                {[
                  {
                    id: "basic",
                    name: "Starter",
                    price: "$9.99/mo",
                    features: [
                      "Basic features",
                      "5 projects",
                      "2 team members",
                    ],
                  },
                  {
                    id: "pro",
                    name: "Professional",
                    price: "$19.99/mo",
                    features: [
                      "Advanced features",
                      "Unlimited projects",
                      "5 team members",
                    ],
                    popular: true,
                  },
                  {
                    id: "enterprise",
                    name: "Enterprise",
                    price: "$49.99/mo",
                    features: [
                      "Premium features",
                      "Unlimited projects",
                      "Priority support",
                    ],
                  },
                ].map((plan) => (
                  <div
                    key={plan.id}
                    className="rounded-lg border bg-card p-4 transition-colors hover:border-primary"
                  >
                    <label className="flex cursor-pointer items-start gap-3">
                      <RadioGroupItem value={plan.id} id={plan.id} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-foreground">
                              {plan.name}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {plan.price}
                            </p>
                          </div>
                          {plan.popular && (
                            <Badge variant="secondary">Most Popular</Badge>
                          )}
                        </div>
                        <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                          {plan.features.map((feature) => (
                            <li key={feature}>{feature}</li>
                          ))}
                        </ul>
                      </div>
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </TabsContent>

          {/* Crypto Content */}
          <TabsContent value="crypto" className="mt-4">
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Select cryptocurrency:
              </p>
              <RadioGroup defaultValue="bitcoin" className="space-y-3">
                {[
                  {
                    id: "bitcoin",
                    name: "Bitcoin (BTC)",
                    logo: "/bitcoin.svg",
                    rate: "1 BTC ≈ $63,420",
                  },
                  {
                    id: "ethereum",
                    name: "Ethereum (ETH)",
                    logo: "/ethereum.svg",
                    rate: "1 ETH ≈ $3,240",
                  },
                  {
                    id: "usdc",
                    name: "USD Coin (USDC)",
                    logo: "/usdc.svg",
                    rate: "1 USDC = $1.00",
                  },
                ].map((crypto) => (
                  <div
                    key={crypto.id}
                    className="flex items-center justify-between rounded-lg border bg-card p-4 transition-colors hover:border-primary"
                  >
                    <label className="flex cursor-pointer items-center gap-3">
                      <RadioGroupItem value={crypto.id} id={crypto.id} />
                      <Image
                        src={crypto.logo}
                        alt={crypto.name}
                        width={32}
                        height={32}
                        className="h-8 w-8"
                      />
                      <div>
                        <p className="font-medium text-foreground">
                          {crypto.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {crypto.rate}
                        </p>
                      </div>
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </TabsContent>

          {/* PayPal Content */}
          <TabsContent value="paypal" className="mt-4">
            <div className="space-y-4">
              <div className="flex flex-col items-center gap-4">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="PayPal"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
                <p className="text-center text-muted-foreground">
                  You will be redirected to PayPal to complete your payment
                </p>
              </div>
              <div className="space-y-2">
                <Label htmlFor="paypal-email">PayPal Email</Label>
                <Input
                  id="paypal-email"
                  type="email"
                  placeholder="you@example.com"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="space-y-4">
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Confirm Payment
          </Button>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <LockIcon className="h-4 w-4 text-primary" />
            <span>
              Secure payment processing by{" "}
              <span className="text-primary">Lemon Squeezy</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
