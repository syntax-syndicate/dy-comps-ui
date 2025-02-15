"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function EnhancedPaymentForm() {
  return (
    <div className="mx-auto max-w-5xl p-6">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">
          Complete Your Purchase
        </h2>
        <Badge variant="outline" className="gap-2 px-4 py-2">
          <InfoCircledIcon className="h-4 w-4" />
          Secure SSL Encryption
        </Badge>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <Card className="border">
          <CardContent className="pt-6">
            <Tabs defaultValue="card">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="card">Credit Card</TabsTrigger>
                <TabsTrigger value="paypal">PayPal</TabsTrigger>
              </TabsList>

              <TabsContent value="card" className="mt-6">
                <div className="space-y-6">
                  <RadioGroup defaultValue="new" className="space-y-4">
                    <div className="rounded-lg border p-4">
                      <label className="flex cursor-pointer items-center gap-4">
                        <RadioGroupItem value="new" id="new" />
                        <span className="text-sm font-medium text-foreground">
                          Use new payment method
                        </span>
                      </label>
                    </div>

                    <div className="rounded-lg border p-4">
                      <label className="flex cursor-pointer items-center gap-4">
                        <RadioGroupItem value="saved" id="saved" />
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            Visa ending in 4321
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Expires 12/25
                          </p>
                        </div>
                        <Image
                          src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                          alt="Visa"
                          width={40}
                          height={25}
                          className="ml-auto h-6 w-auto"
                        />
                      </label>
                    </div>
                  </RadioGroup>

                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Cardholder Name*</Label>
                      <Input id="name" placeholder="John Doe" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="card">Card Number*</Label>
                      <Input id="card" placeholder="4242 4242 4242 4242" />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiration Date*</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV*</Label>
                        <div className="relative">
                          <Input id="cvv" placeholder="•••" />
                          <InfoCircledIcon className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="zip">ZIP Code*</Label>
                      <Input id="zip" placeholder="Enter ZIP code" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="promo">Promo Code</Label>
                      <div className="flex gap-2">
                        <Input id="promo" placeholder="Enter promo code" />
                        <Button variant="outline">Apply</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="paypal" className="mt-6">
                <div className="flex flex-col items-center space-y-6 py-8">
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
                  <Button className="w-full">Continue with PayPal</Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        <Card className="border">
          <CardContent className="pt-6">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Order Summary
                </h3>
                <div className="flex items-center gap-4 border-b pb-4">
                  <Image
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="Product"
                    width={64}
                    height={64}
                    className="rounded-lg border"
                  />
                  <div>
                    <p className="font-medium text-foreground">
                      DY-Comps Pro Studio Suite
                    </p>
                    <p className="text-sm text-muted-foreground">License x1</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>$7,999.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Discount (10%)
                    </span>
                    <span className="text-emerald-600">-$799.90</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span>$149.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax (8%)</span>
                    <span>$588.65</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between border-t pt-4 font-medium">
                  <span>Total</span>
                  <div className="flex items-center gap-2">
                    <span>$7,936.75</span>
                    <Badge variant="secondary">USD</Badge>
                  </div>
                </div>

                <div className="flex items-center gap-2 rounded-lg bg-accent p-4">
                  <InfoCircledIcon className="h-5 w-5 text-primary" />
                  <p className="text-sm text-muted-foreground">
                    30-day money back guarantee. Cancel anytime.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-4">
                  <Image
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="Visa"
                    width={48}
                    height={30}
                    className="h-8 w-auto grayscale hover:grayscale-0"
                  />
                  <Image
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="Mastercard"
                    width={48}
                    height={30}
                    className="h-8 w-auto grayscale hover:grayscale-0"
                  />
                  <Image
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="American Express"
                    width={48}
                    height={30}
                    className="h-8 w-auto grayscale hover:grayscale-0"
                  />
                </div>

                <p className="text-xs text-muted-foreground">
                  Secured by Stripe • PCI DSS compliant • DY-Comps LLC - United
                  States
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
