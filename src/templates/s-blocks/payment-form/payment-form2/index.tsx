"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Switch } from "@/components/ui/switch";
import Image from "next/image";
import {
  CreditCard,
  ShoppingCartIcon as Paypal,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function EnhancedPaymentForm() {
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState("");
  const [isSaved, setIsSaved] = useState(false);

  const detectCardType = (number: string) => {
    const visaPattern = /^4/;
    const mastercardPattern = /^5[1-5]/;
    const amexPattern = /^3[47]/;
    const discoverPattern = /^6(?:011|5)/;

    if (visaPattern.test(number)) return "visa";
    if (mastercardPattern.test(number)) return "mastercard";
    if (amexPattern.test(number)) return "amex";
    if (discoverPattern.test(number)) return "discover";
    return "";
  };

  const formatCardNumber = (value: string) => {
    return value.replace(/\D/g, "").replace(/(\d{4})(?=\d)/g, "$1 ");
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const number = e.target.value.replace(/\D/g, "");
    const formatted = formatCardNumber(number);
    setCardNumber(formatted);
    setCardType(detectCardType(number));
  };

  const getCardIcon = () => {
    switch (cardType) {
      case "visa":
        return "/visa.svg";
      case "mastercard":
        return "/mastercard.svg";
      case "amex":
        return "/amex.svg";
      case "discover":
        return "/discover.svg";
      default:
        return "/generic-card.svg";
    }
  };

  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-3xl rounded-xl border bg-background p-6 shadow-sm">
        {/* Progress Steps */}
        <div className="mb-8 flex items-center justify-between">
          {["Cart", "Checkout", "Payment", "Confirmation"].map(
            (step, index) => (
              <div key={step} className="flex items-center">
                <div className="relative flex flex-col items-center">
                  <div
                    className={`mb-2 flex h-8 w-8 items-center justify-center rounded-full ${index < 2 ? "bg-primary" : "bg-muted"} transition-colors`}
                  >
                    {index < 2 ? (
                      <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                    ) : (
                      <span className="text-sm font-medium text-foreground">
                        {index + 1}
                      </span>
                    )}
                  </div>
                  <span
                    className={`text-sm font-medium ${index < 2 ? "text-primary" : "text-muted-foreground"}`}
                  >
                    {step}
                  </span>
                </div>
                {index < 3 && <div className="mx-2 h-[2px] w-16 bg-border" />}
              </div>
            ),
          )}
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">
              Payment Details
            </h2>
            <p className="text-muted-foreground">
              Complete your purchase securely
            </p>
          </div>

          {/* Credit Card Form */}
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="fullname">Cardholder Name*</Label>
                <Input id="fullname" placeholder="Ron Weasley" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cardnumber">Card Number*</Label>
                <div className="relative">
                  <Input
                    id="cardnumber"
                    placeholder="4242 4242 4242 4242"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength={19}
                  />
                  {cardType && (
                    <Image
                      src={getCardIcon()}
                      alt={cardType}
                      width={40}
                      height={25}
                      className="absolute right-3 top-1/2 h-6 w-auto -translate-y-1/2"
                    />
                  )}
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="expiration">Expiration Date*</Label>
                <Input id="expiration" placeholder="MM/YY" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV*</Label>

                <Input id="cvv" placeholder="•••" maxLength={4} />
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="save-card"
                checked={isSaved}
                onCheckedChange={setIsSaved}
              />
              <Label
                htmlFor="save-card"
                className="text-sm text-muted-foreground"
              >
                Save card for future purchases
              </Label>
            </div>
          </div>

          {/* Payment Options */}
          <div className="space-y-4">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="grid gap-2 md:grid-cols-2">
              <Button variant="outline" className="h-12">
                <CreditCard className="mr-2 h-5 w-5 text-primary" />
                Google Pay
              </Button>
              <Button variant="outline" className="h-12">
                <Paypal className="mr-2 h-5 w-5 text-primary" />
                PayPal
              </Button>
            </div>
          </div>

          {/* Order Summary */}
          <Card className="border">
            <CardContent className="pt-6">
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-foreground">
                  Order Summary
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="text-foreground">$6,592.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Discount</span>
                    <span className="text-emerald-500">-$299.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Tax</span>
                    <span className="text-foreground">$799.00</span>
                  </div>
                  <div className="flex justify-between border-t pt-3 font-medium">
                    <span className="text-foreground">Total</span>
                    <div className="flex items-center gap-2">
                      <span className="text-foreground">$7,191.00</span>
                      <Badge variant="secondary">USD</Badge>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Complete Purchase
          </Button>

          <div className="flex flex-col items-center gap-2 text-center text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <LockIcon className="h-4 w-4 text-primary" />
              <span>Secure payment processing</span>
            </div>
            <span>
              Powered by <span className="text-primary">Lemon Squeezy</span> •
              DY-Comps LLC - United States
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function LockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  );
}
