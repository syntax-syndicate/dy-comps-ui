"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const products = [
  {
    id: 1,
    name: "Micro Backpack",
    price: 70.0,
    color: "Moss",
    size: "5L",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 2,
    name: "Small Stuff Satchel",
    price: 180.0,
    color: "Sand",
    size: "19L",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 3,
    name: "Carry Clutch",
    price: 70.0,
    color: "White and Black",
    size: "Small",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

const subtotal = products.reduce((sum, product) => sum + product.price, 0);
const shipping = 15.0;
const taxes = (subtotal + shipping) * 0.08;
const total = subtotal + shipping + taxes;

export default function CheckoutForm() {
  return (
    <div className="container mx-auto py-8">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column - Forms */}
        <div className="space-y-8">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contact information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">
                  Email address <span className="text-destructive">*</span>
                </Label>
                <Input id="email" type="email" required />
              </div>
            </CardContent>
          </Card>

          {/* Payment Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Payment details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardName">
                  Name on card <span className="text-destructive">*</span>
                </Label>
                <Input id="cardName" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cardNumber">
                  Card number <span className="text-destructive">*</span>
                </Label>
                <div className="relative">
                  <Input id="cardNumber" required />
                  <div className="absolute right-3 top-3 flex gap-1.5">
                    <span className="h-4 w-4 rounded-full bg-blue-900" />
                    <span className="h-4 w-4 rounded-full bg-yellow-400" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">
                    Expiration date <span className="text-destructive">*</span>
                  </Label>
                  <Input id="expiry" placeholder="MM/YY" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvc">
                    CVC <span className="text-destructive">*</span>
                  </Label>
                  <Input id="cvc" required />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Shipping Address */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Shipping address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="company">Company (optional)</Label>
                <Input id="company" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">
                  Address <span className="text-destructive">*</span>
                </Label>
                <Input id="address" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apartment">
                  Apartment, suite, etc. (optional)
                </Label>
                <Input id="apartment" />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="city">
                    City <span className="text-destructive">*</span>
                  </Label>
                  <Input id="city" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">
                    State <span className="text-destructive">*</span>
                  </Label>
                  <Input id="state" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postal">
                    Postal code <span className="text-destructive">*</span>
                  </Label>
                  <Input id="postal" required />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Billing Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Billing information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2">
                <Checkbox id="billing" />
                <Label htmlFor="billing" className="text-sm">
                  Use same address for billing
                </Label>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-4 border-t pt-6">
            <p className="text-sm text-muted-foreground">
              You won't be charged until the next step.
            </p>
            <Button className="w-full lg:w-auto" size="lg">
              Continue to shipping
            </Button>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <Card className="h-fit">
          <CardHeader>
            <CardTitle className="text-lg">Order summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-6">
                {products.map((product) => (
                  <div key={product.id} className="flex gap-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={80}
                      height={80}
                      className="rounded-md border"
                    />
                    <div className="flex-1 space-y-1">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        Color: {product.color}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Size: {product.size}
                      </p>
                    </div>
                    <p className="font-medium">
                      $
                      {product.price.toLocaleString("en-US", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </p>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Separator />
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Taxes</span>
                  <span>${taxes.toFixed(2)}</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>
                    $
                    {total.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
