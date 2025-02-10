"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { InfoIcon, MapPinIcon } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PaymentFormWithAddress() {
  const [selectedAddress, setSelectedAddress] = useState<string>("home");
  const [showNewAddressForm, setShowNewAddressForm] = useState<boolean>(false);

  const savedAddresses = [
    {
      id: "home",
      name: "Home",
      address: "123 Main St, San Francisco, CA 94107",
    },
    {
      id: "work",
      name: "Work",
      address: "456 Market St, San Francisco, CA 94103",
    },
  ];

  const handleAddressChange = (value: string) => {
    if (value === "new") {
      setShowNewAddressForm(true);
    } else {
      setShowNewAddressForm(false);
      setSelectedAddress(value);
    }
  };

  return (
    <section className="container py-16">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground">
            Payment Details
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Saved Addresses */}
          <div className="space-y-4">
            <Label className="text-sm text-muted-foreground">
              Shipping Address
            </Label>
            <RadioGroup
              value={selectedAddress}
              onValueChange={handleAddressChange}
              className="space-y-3"
            >
              {savedAddresses.map((address) => (
                <div key={address.id} className="rounded-lg border p-4">
                  <label className="flex cursor-pointer items-center gap-3">
                    <RadioGroupItem value={address.id} id={address.id} />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {address.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {address.address}
                      </p>
                    </div>
                  </label>
                </div>
              ))}
              <div
                className="cursor-pointer rounded-lg border p-4 hover:bg-accent"
                onClick={() => handleAddressChange("new")}
              >
                <label className="flex items-center gap-3">
                  <RadioGroupItem value="new" id="new" />
                  <span className="text-sm text-foreground">
                    Add new address
                  </span>
                </label>
              </div>
            </RadioGroup>
          </div>

          {/* New Address Form */}
          {showNewAddressForm && (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullname">Full Name*</Label>
                  <Input id="fullname" placeholder="Enter your full name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number*</Label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="address">Address*</Label>
                <Input id="address" placeholder="Enter your address" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="city">City*</Label>
                  <Input id="city" placeholder="Enter your city" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="state">State*</Label>
                  <Input id="state" placeholder="Enter your state" />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="postal">Postal Code*</Label>
                  <Input id="postal" placeholder="Enter your postal code" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="country">Country*</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Payment Details */}
          <div className="space-y-4">
            <Label className="text-sm text-muted-foreground">
              Payment Details
            </Label>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardnumber">Card Number*</Label>
                <Input id="cardnumber" placeholder="xxxx xxxx xxxx xxxx" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="expiration">Expiration Date*</Label>
                  <Input id="expiration" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV*</Label>
                  <Input id="cvv" placeholder="•••" />
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Pay Now
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
