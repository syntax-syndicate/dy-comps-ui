"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

export default function CheckoutForm() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column - Forms */}
        <div className="space-y-8">
          {/* Contact Information */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              Contact information
            </h2>
            <div className="space-y-2">
              <Label htmlFor="email">Email address</Label>
              <Input id="email" type="email" />
            </div>
          </div>

          {/* Payment Details */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              Payment details
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardName">Name on card</Label>
                <Input id="cardName" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card number</Label>
                <Input id="cardNumber" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiration date (MM/YY)</Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">CVC</Label>
                  <Input id="cvc" />
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              Shipping address
            </h2>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Input id="address" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apartment">Apartment, suite, etc.</Label>
                <Input id="apartment" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State / Province</Label>
                  <Input id="state" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postal">Postal code</Label>
                  <Input id="postal" />
                </div>
              </div>
            </div>
          </div>

          {/* Billing Information */}
          <div>
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              Billing information
            </h2>
            <div className="flex items-center space-x-2">
              <Checkbox id="billing" />
              <Label
                htmlFor="billing"
                className="text-sm text-muted-foreground"
              >
                Same as shipping information
              </Label>
            </div>
          </div>

          <div className="flex items-center justify-between border-t pt-6">
            <p className="text-sm text-muted-foreground">
              You won&apos;t be charged until the next step.
            </p>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Continue
            </Button>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="rounded-lg bg-muted/50 p-6">
          <h2 className="mb-6 text-lg font-semibold text-foreground">
            Order summary
          </h2>
          <div className="space-y-4">
            {/* Product 1 */}
            <div className="flex gap-4">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Micro Backpack"
                width={72}
                height={72}
                className="rounded-md"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">
                      Micro Backpack
                    </h3>
                    <p className="text-sm text-muted-foreground">Moss</p>
                    <p className="text-sm text-muted-foreground">5L</p>
                  </div>
                  <p className="text-foreground">$70.00</p>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="flex gap-4">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Small Stuff Satchel"
                width={72}
                height={72}
                className="rounded-md"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">
                      Small Stuff Satchel
                    </h3>
                    <p className="text-sm text-muted-foreground">Sand</p>
                    <p className="text-sm text-muted-foreground">19L</p>
                  </div>
                  <p className="text-foreground">$180.00</p>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="flex gap-4">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Carry Clutch"
                width={72}
                height={72}
                className="rounded-md"
              />
              <div className="flex-1">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">
                      Carry Clutch
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      White and Black
                    </p>
                    <p className="text-sm text-muted-foreground">Small</p>
                  </div>
                  <p className="text-foreground">$70.00</p>
                </div>
              </div>
            </div>

            {/* Order Totals */}
            <div className="space-y-2 border-t pt-4">
              <div className="flex justify-between">
                <p className="text-muted-foreground">Subtotal</p>
                <p className="text-foreground">$320.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-muted-foreground">Shipping</p>
                <p className="text-foreground">$15.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-muted-foreground">Taxes</p>
                <p className="text-foreground">$26.80</p>
              </div>
              <div className="flex justify-between border-t pt-2 font-medium">
                <p className="text-foreground">Total</p>
                <p className="text-foreground">$361.80</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
