"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { ArrowRightLeft } from "lucide-react";

export default function MultiCurrencyPaymentForm() {
  const [baseCurrency, setBaseCurrency] = useState("USD");
  const [targetCurrency, setTargetCurrency] = useState("EUR");
  const [amount, setAmount] = useState(100);
  const [showBillingAddress, setShowBillingAddress] = useState(false);

  // Mock exchange rates
  const exchangeRates = {
    USD: { EUR: 0.92, GBP: 0.79, JPY: 148.36 },
    EUR: { USD: 1.09, GBP: 0.86, JPY: 161.23 },
    GBP: { USD: 1.27, EUR: 1.17, JPY: 187.92 },
    JPY: { USD: 0.0068, EUR: 0.0062, GBP: 0.0053 },
  };

  const calculateConvertedAmount = () => {
    return (amount * exchangeRates[baseCurrency][targetCurrency]).toFixed(2);
  };

  return (
    <section className="container py-16">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground">
            International Payment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Currency Converter */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label className="text-sm text-muted-foreground">
                Payment Currency
              </Label>
              <Badge variant="outline" className="text-xs">
                Live Exchange Rate: 1 {baseCurrency} ≈{" "}
                {calculateConvertedAmount() / amount} {targetCurrency}
              </Badge>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex-1 space-y-2">
                <Label>You pay</Label>
                <div className="flex gap-2">
                  <Select value={baseCurrency} onValueChange={setBaseCurrency}>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="GBP">GBP</SelectItem>
                      <SelectItem value="JPY">JPY</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                  />
                </div>
              </div>

              <ArrowRightLeft className="mt-5 h-6 w-6 text-muted-foreground" />

              <div className="flex-1 space-y-2">
                <Label>Recipient gets</Label>
                <div className="flex gap-2">
                  <Select
                    value={targetCurrency}
                    onValueChange={setTargetCurrency}
                  >
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="EUR">EUR</SelectItem>
                      <SelectItem value="USD">USD</SelectItem>
                      <SelectItem value="GBP">GBP</SelectItem>
                      <SelectItem value="JPY">JPY</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    value={calculateConvertedAmount()}
                    readOnly
                    className="bg-accent"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="space-y-4">
            <Label className="text-sm text-muted-foreground">
              Payment Method
            </Label>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number*</Label>
                <Input id="cardNumber" placeholder="xxxx xxxx xxxx xxxx" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date*</Label>
                <Input id="expiry" placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV*</Label>
                <Input id="cvv" placeholder="•••" />
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
                    <SelectItem value="jp">Japan</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Billing Address Toggle */}
          <div className="flex items-center justify-between">
            <Label className="text-sm text-muted-foreground">
              Billing Address
            </Label>
            <div className="flex items-center gap-2">
              <Switch
                checked={showBillingAddress}
                onCheckedChange={setShowBillingAddress}
              />
              <span className="text-sm">
                {showBillingAddress
                  ? "Different from shipping"
                  : "Same as shipping"}
              </span>
            </div>
          </div>

          {/* Billing Address Form */}
          {showBillingAddress && (
            <div className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="billingStreet">Street Address*</Label>
                  <Input
                    id="billingStreet"
                    placeholder="Enter street address"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingCity">City*</Label>
                  <Input id="billingCity" placeholder="Enter city" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingState">State/Province*</Label>
                  <Input id="billingState" placeholder="Enter state/province" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="billingPostal">Postal Code*</Label>
                  <Input id="billingPostal" placeholder="Enter postal code" />
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Confirm International Payment
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Payments processed through our secure global network. Conversion
            rates may vary.
            <span className="mt-1 block">
              Powered by <span className="text-primary">DY-Comps Financial</span>
            </span>
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
