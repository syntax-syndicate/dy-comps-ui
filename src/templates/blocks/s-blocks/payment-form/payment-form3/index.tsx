"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { PackageIcon } from "lucide-react";
import { InfoCircledIcon, ClockIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function PaymentForm() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="mb-6 text-2xl font-semibold">Payment</h2>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <RadioGroup defaultValue="visa" className="space-y-4">
            {/* Saved Payment Methods */}
            <div className="rounded-lg border">
              <label className="flex cursor-pointer items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="visa" id="visa" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Visa ending in 7158
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Expiry 10/2029
                    </p>
                  </div>
                </div>
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Visa"
                  width={48}
                  height={32}
                  className="h-8 w-auto"
                />
              </label>
              <div className="border-t px-4 py-2">
                <div className="flex gap-4">
                  <button className="text-sm text-destructive">Delete</button>
                  <button className="text-sm text-muted-foreground">
                    Edit
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-lg border">
              <label className="flex cursor-pointer items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="mastercard" id="mastercard" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Mastercard ending in 2529
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Expiry 04/2029
                    </p>
                  </div>
                </div>
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Mastercard"
                  width={48}
                  height={32}
                  className="h-8 w-auto"
                />
              </label>
              <div className="border-t px-4 py-2">
                <div className="flex gap-4">
                  <button className="text-sm text-destructive">Delete</button>
                  <button className="text-sm text-muted-foreground">
                    Edit
                  </button>
                </div>
              </div>
            </div>

            <div className="rounded-lg border">
              <label className="flex cursor-pointer items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <RadioGroupItem value="paypal" id="paypal" />
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      Paypal account
                    </p>
                  </div>
                </div>
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="PayPal"
                  width={48}
                  height={32}
                  className="h-8 w-auto"
                />
              </label>
              <div className="border-t px-4 py-2">
                <div className="flex gap-4">
                  <button className="text-sm text-destructive">Delete</button>
                  <button className="text-sm text-muted-foreground">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          </RadioGroup>

          <div className="text-center text-sm text-muted-foreground">or</div>

          {/* New Payment Method Form */}
          <div className="space-y-4">
            <p className="text-sm text-foreground">Add a new payment method</p>
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullname">
                    Full name (as displayed on card)*
                  </Label>
                  <Input id="fullname" placeholder="Ron Johnson" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardnumber">Card number*</Label>
                  <Input id="cardnumber" placeholder="xxxx xxxx xxxx xxxx" />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="expiration">Card expiration*</Label>
                  <Input id="expiration" placeholder="12/23" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Label htmlFor="cvv">CVV*</Label>
                    <InfoCircledIcon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <Input id="cvv" placeholder="•••" />
                </div>
              </div>
            </div>
          </div>

          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Pay now
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Payment processed by{" "}
            <span className="text-primary">Lemon Squeezy</span> for{" "}
            <span className="text-primary">DY-Comps LLC</span> - United States Of
            America
          </p>
        </div>

        <div className="space-y-6">
          <Card className="border">
            <CardContent className="pt-6">
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Original price</span>
                  <span className="text-foreground">$6,592.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Savings</span>
                  <span className="text-emerald-500">-$299.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Store Pickup</span>
                  <span className="text-foreground">$99</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span className="text-foreground">$799</span>
                </div>
                <div className="flex justify-between border-t pt-3 font-medium">
                  <span className="text-foreground">Total</span>
                  <span className="text-foreground">$7,191.00</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Promotions */}
          <div className="space-y-4">
            <div className="flex gap-4 rounded-lg border bg-accent p-4">
              <PackageIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium text-foreground">Free shipping</p>
                <p className="text-sm text-muted-foreground">
                  You have 3 months to try free shipping and exclusive DY-Comps
                  offers.
                </p>
                <Link href="#" className="text-sm text-primary hover:underline">
                  Try DY-Comps PRO 3 months free →
                </Link>
              </div>
            </div>

            <div className="flex gap-4 rounded-lg border p-4">
              <ClockIcon className="h-6 w-6 text-primary" />
              <div>
                <p className="font-medium text-foreground">-10% Extra</p>
                <p className="text-sm text-muted-foreground">
                  You get 10% extra when purchasing this product, for orders of
                  at least $100!
                </p>
                <Link href="#" className="text-sm text-primary hover:underline">
                  Save the promo code in your account
                </Link>
              </div>
            </div>
          </div>
          <div className="flex gap-4 rounded-lg border p-4">
            <PackageIcon className="h-6 w-6 text-primary" />
            <div>
              <p className="font-medium text-foreground">
                Free Shipping on Orders Over $50
              </p>
              <p className="text-sm text-muted-foreground">
                Enjoy free shipping on all orders over $50. No code needed,
                discount applied at checkout.
              </p>
              <Link href="#" className="text-sm text-primary hover:underline">
                Learn more about our shipping policy →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
