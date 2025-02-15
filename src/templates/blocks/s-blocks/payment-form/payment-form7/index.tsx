"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { X, InfoIcon } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Image from "next/image";

export default function PaymentDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <section className="container py-16 text-center">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button variant="outline">Show drawer payment</Button>
        </DrawerTrigger>
        <DrawerContent className="h-[96vh]">
          <div className="mx-auto w-full max-w-2xl">
            <DrawerHeader className="flex items-center justify-between border-b pb-4">
              <DrawerTitle className="text-lg font-semibold">
                PAYMENT DETAILS
              </DrawerTitle>
              <DrawerClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </DrawerClose>
            </DrawerHeader>

            <div className="px-4 py-6">
              <div className="space-y-6">
                {/* Order Summary */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      Original price
                    </span>
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

                {/* Saved Payment Methods */}
                <RadioGroup defaultValue="visa" className="space-y-3">
                  <div className="rounded-lg border">
                    <label className="flex cursor-pointer items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="visa" id="visa" />
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            Visa ending in 6543
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Expiry 12/2028
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
                        <button className="text-sm text-destructive">
                          Delete
                        </button>
                        <button className="text-sm text-primary">Edit</button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-lg border">
                    <label className="flex cursor-pointer items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <RadioGroupItem value="mastercard" id="mastercard" />
                        <div>
                          <p className="text-sm font-medium text-foreground">
                            Mastercard ending in 8784
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Expiry 08/2028
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
                        <button className="text-sm text-destructive">
                          Delete
                        </button>
                        <button className="text-sm text-primary">Edit</button>
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
                        <button className="text-sm text-destructive">
                          Delete
                        </button>
                        <button className="text-sm text-primary">Edit</button>
                      </div>
                    </div>
                  </div>
                </RadioGroup>

                {/* Add New Payment Method */}
                <div className="space-y-4">
                  <p className="text-sm text-foreground">
                    Add a new payment method
                  </p>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullname">
                        Full name (as displayed on card)*
                      </Label>
                      <Input id="fullname" placeholder="Bonnie Green" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardnumber">Card number*</Label>
                      <Input
                        id="cardnumber"
                        placeholder="xxxx xxxx xxxx xxxx"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiration">Card expiration*</Label>
                        <Input id="expiration" placeholder="12/23" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV*</Label>

                        <Input id="cvv" placeholder="•••" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                    Pay now
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setOpen(false)}
                  >
                    Continue Shopping
                  </Button>
                </div>

                <p className="text-center text-xs text-muted-foreground">
                  Payment processed by{" "}
                  <span className="text-primary">Lemon Squeezy</span> for{" "}
                  <span className="text-primary">DY-Comps LLC</span> - United States
                  Of America
                </p>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  );
}
