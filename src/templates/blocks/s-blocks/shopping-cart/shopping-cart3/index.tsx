"use client";

import Image from "next/image";
import { X, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function CheckoutProcess() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Check className="h-4 w-4" />
          </div>
          <span className="text-sm font-medium">Cart</span>
        </div>
        <div className="h-px w-16 bg-border" />
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border">
            <span className="text-sm text-muted-foreground">2</span>
          </div>
          <span className="text-sm text-muted-foreground">Payment</span>
        </div>
        <div className="h-px w-16 bg-border" />
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-full border">
            <span className="text-sm text-muted-foreground">3</span>
          </div>
          <span className="text-sm text-muted-foreground">Order summary</span>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <h1 className="text-2xl font-semibold">Your Cart</h1>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="relative h-20 w-20 rounded-lg bg-muted">
                    <Image
                      src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                      alt="iMac"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-medium">
                        Premium iMac 24" (2024) with M3 Chip
                      </h3>
                      <span className="font-semibold">$1,499</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Select defaultValue="1">
                        <SelectTrigger className="w-24">
                          <SelectValue placeholder="Quantity" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                      >
                        <X className="mr-2 h-4 w-4" />
                        Remove
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Delivery on 18 Nov 2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="relative h-20 w-20 rounded-lg bg-muted">
                    <Image
                      src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                      alt="iPhone"
                      fill
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between">
                      <h3 className="font-medium">
                        iPhone 15 Pro Max 256GB Titanium
                      </h3>
                      <span className="font-semibold">$1,998</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <Select defaultValue="1">
                        <SelectTrigger className="w-24">
                          <SelectValue placeholder="Quantity" />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-destructive hover:text-destructive"
                      >
                        <X className="mr-2 h-4 w-4" />
                        Remove
                      </Button>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Delivery on 03 Dec 2024
                    </p>
                    <div className="pt-4">
                      <p className="mb-2 text-sm font-medium">
                        Extended Protection Plan
                      </p>
                      <RadioGroup defaultValue="none" className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="1year" id="1year" />
                          <Label htmlFor="1year">
                            Premium Care - 1 Year ($99)
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="2year" id="2year" />
                          <Label htmlFor="2year">
                            Premium Care - 2 Years ($199)
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div>
          <Card>
            <CardContent className="space-y-4 p-6">
              <h2 className="text-lg font-semibold">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>$8,094.00</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Savings</span>
                  <span>$0</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Store Pickup</span>
                  <span>$99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>$199</span>
                </div>
                <div className="border-t pt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$8,392.00</span>
                  </div>
                </div>
              </div>
              <Button className="w-full" size="lg">
                Proceed to Checkout
              </Button>
              <p className="text-center text-sm text-muted-foreground">
                One or more items in your cart require an account.{" "}
                <Button variant="link" className="h-auto p-0 font-normal">
                  Sign in or create an account now
                </Button>
              </p>
              <div className="border-t pt-4">
                <p className="mb-2 text-sm font-medium">
                  Do you have a voucher or gift card?
                </p>
                <div className="flex gap-2">
                  <Input placeholder="Enter code" />
                  <Button>Apply</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
