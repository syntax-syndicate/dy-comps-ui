"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { InfoIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function PaymentModal() {
  const [showNewCard, setShowNewCard] = useState(false);

  return (
    <section className="container py-16 text-center">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Open Payment Modal</Button>
        </DialogTrigger>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-foreground">
              {showNewCard ? "Add new card" : "Select payment method"}
            </DialogTitle>
          </DialogHeader>

          {!showNewCard ? (
            <div className="space-y-6">
              <RadioGroup defaultValue="visa" className="space-y-3">
                {/* Saved Payment Methods */}
                <div className="rounded-lg border">
                  <label className="flex cursor-pointer items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="visa" id="visa" />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Visa ending in 7858
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Expiry 10/2024
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
                </div>

                <div className="rounded-lg border">
                  <label className="flex cursor-pointer items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="mastercard" id="mastercard" />
                      <div>
                        <p className="text-sm font-medium text-foreground">
                          Mastercard ending in 7887
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Expiry 09/2029
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
                </div>

                {/* Add New Card Option */}
                <div
                  onClick={() => setShowNewCard(true)}
                  className="cursor-pointer rounded-lg border p-4 hover:bg-accent"
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="new" id="new" />
                    <span className="text-sm text-foreground">
                      Add new card
                    </span>
                  </div>
                </div>
              </RadioGroup>

              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                Continue with selected method
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* New Card Form */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullname">
                    Full name (as displayed on card)*
                  </Label>
                  <Input id="fullname" placeholder="Enter your full name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="cardnumber">Card number*</Label>
                  <Input id="cardnumber" placeholder="xxxx xxxx xxxx xxxx" />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="expiration">Card expiration*</Label>
                    <Input id="expiration" placeholder="MM/YY" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Label htmlFor="cvv">CVV*</Label>
                      <InfoIcon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <Input id="cvv" placeholder="•••" />
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  className="flex-1"
                  onClick={() => setShowNewCard(false)}
                >
                  Back
                </Button>
                <Button className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90">
                  Add card
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
