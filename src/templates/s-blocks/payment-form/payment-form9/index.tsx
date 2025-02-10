"use client";

import { useState } from "react";
import {
  Bitcoin,
  EclipseIcon as Ethereum,
  Tally2Icon as Tether,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";

export default function CryptoTransferForm() {
  const [amount, setAmount] = useState("0.1");
  const [currency, setCurrency] = useState("BTC");
  const [isAdvancedMode, setIsAdvancedMode] = useState(false);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (value: string) => {
    setCurrency(value);
  };

  const getCurrencyIcon = () => {
    switch (currency) {
      case "BTC":
        return <Bitcoin className="h-5 w-5" />;
      case "ETH":
        return <Ethereum className="h-5 w-5" />;
      case "USDT":
        return <Tether className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="container flex min-h-screen items-center justify-center py-16">
      <Card className="w-full max-w-2xl border-border bg-card/80 backdrop-blur-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-bold">
            {getCurrencyIcon()}
            Crypto Transfer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="to" className="text-foreground">
                  Recipient Address*
                </Label>
                <Input
                  id="to"
                  placeholder="e.g. 1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2"
                  className="text-input-foreground border-input bg-input"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount" className="text-foreground">
                  Amount
                </Label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Input
                      id="amount"
                      value={amount}
                      onChange={handleAmountChange}
                      className="text-input-foreground border-input bg-input pl-8"
                    />
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                      {getCurrencyIcon()}
                    </span>
                  </div>
                  <Select value={currency} onValueChange={handleCurrencyChange}>
                    <SelectTrigger className="bg-select text-select-foreground border-select w-24">
                      <SelectValue placeholder="Currency" />
                    </SelectTrigger>
                    <SelectContent className="border-border bg-popover text-popover-foreground">
                      <SelectItem value="BTC">BTC</SelectItem>
                      <SelectItem value="ETH">ETH</SelectItem>
                      <SelectItem value="USDT">USDT</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="network" className="text-foreground">
                  Network
                </Label>
                <Select defaultValue="mainnet">
                  <SelectTrigger
                    id="network"
                    className="bg-select text-select-foreground border-select"
                  >
                    <SelectValue placeholder="Select network" />
                  </SelectTrigger>
                  <SelectContent className="border-border bg-popover text-popover-foreground">
                    <SelectItem value="mainnet">Mainnet</SelectItem>
                    <SelectItem value="testnet">Testnet</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="fee" className="text-foreground">
                  Transaction Fee
                </Label>
                <Select defaultValue="standard">
                  <SelectTrigger
                    id="fee"
                    className="bg-select text-select-foreground border-select"
                  >
                    <SelectValue placeholder="Select fee" />
                  </SelectTrigger>
                  <SelectContent className="border-border bg-popover text-popover-foreground">
                    <SelectItem value="slow">Slow (1% fee)</SelectItem>
                    <SelectItem value="standard">Standard (2% fee)</SelectItem>
                    <SelectItem value="fast">Fast (3% fee)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="advanced-mode"
                checked={isAdvancedMode}
                onCheckedChange={setIsAdvancedMode}
              />
              <Label htmlFor="advanced-mode" className="text-foreground">
                Advanced Mode
              </Label>
            </div>

            {isAdvancedMode && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="memo" className="text-foreground">
                    Memo (optional)
                  </Label>
                  <Textarea
                    id="memo"
                    placeholder="Add a memo to this transaction"
                    className="text-input-foreground resize-none border-input bg-input"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="custom-data" className="text-foreground">
                    Custom Data (optional)
                  </Label>
                  <Input
                    id="custom-data"
                    placeholder="Enter custom transaction data"
                    className="text-input-foreground border-input bg-input"
                  />
                </div>
              </>
            )}

            <RadioGroup defaultValue="now" className="flex gap-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="now" id="now" className="text-primary" />
                <Label htmlFor="now" className="text-foreground">
                  Send now
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="schedule"
                  id="schedule"
                  className="text-primary"
                />
                <Label htmlFor="schedule" className="text-foreground">
                  Schedule
                </Label>
              </div>
            </RadioGroup>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Initiate Transfer
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              By proceeding, you agree to our{" "}
              <span className="cursor-pointer text-primary">
                Terms of Service
              </span>{" "}
              and acknowledge the risks associated with cryptocurrency
              transfers.
            </p>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
