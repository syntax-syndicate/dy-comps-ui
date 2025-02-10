"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import { PlusIcon, TrashIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { Badge } from "@/components/ui/badge";

export default function WalletPaymentForm() {
  const [selectedWallet, setSelectedWallet] = useState("wallet-1");
  const [showNewWallet, setShowNewWallet] = useState(false);

  const wallets = [
    {
      id: "wallet-1",
      name: "Primary Wallet",
      balance: "$542.50",
      lastFour: "4321",
      expiry: "12/25",
    },
    {
      id: "wallet-2",
      name: "Backup Wallet",
      balance: "$1,234.00",
      lastFour: "8765",
      expiry: "06/26",
    },
  ];

  return (
    <div className="mx-auto max-w-2xl p-6">
      <Card className="border">
        <CardHeader>
          <CardTitle className="text-xl font-semibold text-foreground">
            Digital Wallet Payment
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Saved Wallets */}
          <RadioGroup
            value={selectedWallet}
            onValueChange={setSelectedWallet}
            className="space-y-3"
          >
            {wallets.map((wallet) => (
              <div key={wallet.id} className="rounded-lg border p-4">
                <label className="flex cursor-pointer items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value={wallet.id} id={wallet.id} />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {wallet.name}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>•••• {wallet.lastFour}</span>
                        <span>Exp {wallet.expiry}</span>
                        <Badge
                          variant="outline"
                          className="border-emerald-600 text-emerald-600"
                        >
                          {wallet.balance} available
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <Button variant="destructive" size="icon">
                    <TrashIcon className="h-4 w-4" />
                  </Button>
                </label>
              </div>
            ))}

            {/* Add New Wallet */}
            <div
              className="cursor-pointer rounded-lg border p-4 hover:bg-accent"
              onClick={() => setShowNewWallet(true)}
            >
              <div className="flex items-center gap-3">
                <RadioGroupItem value="new" id="new" />
                <span className="text-sm font-medium text-foreground">
                  Add new wallet
                </span>
              </div>
            </div>
          </RadioGroup>

          {/* New Wallet Form */}
          {showNewWallet && (
            <div className="space-y-4 rounded-lg border p-4">
              <div className="space-y-2">
                <Label htmlFor="cardNumber" className="text-foreground">
                  Card Number
                </Label>
                <Input
                  id="cardNumber"
                  placeholder="0000 0000 0000 0000"
                  className="bg-background"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry" className="text-foreground">
                    Expiration
                  </Label>
                  <Input id="expiry" placeholder="MM/YY" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cvv" className="text-foreground">
                    CVV
                  </Label>
                  <Input id="cvv" placeholder="•••" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="cardName" className="text-foreground">
                  Cardholder Name
                </Label>
                <Input id="cardName" placeholder="John Doe" />
              </div>

              <div className="flex items-center gap-2">
                <Switch id="saveWallet" />
                <Label
                  htmlFor="saveWallet"
                  className="text-sm text-muted-foreground"
                >
                  Save this wallet for future payments
                </Label>
              </div>
            </div>
          )}

          {/* Payment Details */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">
                Amount to pay
              </span>
              <span className="text-lg font-semibold text-foreground">
                $349.00
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <InfoCircledIcon className="h-4 w-4" />
              <span>Transaction fee included (2.9% + $0.30)</span>
            </div>
          </div>

          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Confirm Payment
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Secured by <span className="text-primary">DY-Comps Vault</span> • PCI
            DSS compliant
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
