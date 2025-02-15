"use client";

import { useState } from "react";
import { Rocket, Globe, DollarSign, EuroIcon, Bitcoin } from "lucide-react";
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
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";

export default function SpaceDonationForm() {
  const [amount, setAmount] = useState("50");
  const [currency, setCurrency] = useState("USD");
  const [isRecurring, setIsRecurring] = useState(false);
  const [project, setProject] = useState("mars");
  const [impactLevel, setImpactLevel] = useState(50);

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value);
  };

  const handleCurrencyChange = (value: string) => {
    setCurrency(value);
  };

  const handleProjectChange = (value: string) => {
    setProject(value);
  };

  const getCurrencyIcon = () => {
    switch (currency) {
      case "USD":
        return <DollarSign className="h-4 w-4" />;
      case "EUR":
        return <EuroIcon className="h-4 w-4" />;
      case "BTC":
        return <Bitcoin className="h-4 w-4" />;
      default:
        return <DollarSign className="h-4 w-4" />;
    }
  };

  return (
    <section className="container flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-secondary/20 py-16">
      <Card className="w-full max-w-2xl border-border bg-card/90 shadow-lg backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl font-bold">
            <Rocket className="h-6 w-6 text-primary" />
            Space Exploration Donation
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="amount" className="text-foreground">
                Donation Amount
              </Label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Input
                    id="amount"
                    type="number"
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
                    <SelectItem value="USD">USD</SelectItem>
                    <SelectItem value="EUR">EUR</SelectItem>
                    <SelectItem value="BTC">BTC</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="project" className="text-foreground">
                Project to Support
              </Label>
              <Select value={project} onValueChange={handleProjectChange}>
                <SelectTrigger
                  id="project"
                  className="text-input-foreground border-input bg-input"
                >
                  <SelectValue placeholder="Select project" />
                </SelectTrigger>
                <SelectContent className="border-border bg-popover text-popover-foreground">
                  <SelectItem value="mars">Mars Colonization</SelectItem>
                  <SelectItem value="moon">Lunar Base Expansion</SelectItem>
                  <SelectItem value="asteroid">Asteroid Mining</SelectItem>
                  <SelectItem value="education">Space Education</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="impact" className="text-foreground">
                Impact Level
              </Label>
              <div className="flex items-center space-x-2">
                <Globe className="text-muted-foreground" />
                <Slider
                  id="impact"
                  min={0}
                  max={100}
                  step={1}
                  value={[impactLevel]}
                  onValueChange={(value) => setImpactLevel(value[0] ?? 0)}
                  className="flex-grow"
                />
                <span className="w-12 text-right text-muted-foreground">
                  {impactLevel}%
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Switch
                id="recurring"
                checked={isRecurring}
                onCheckedChange={setIsRecurring}
              />
              <Label htmlFor="recurring" className="text-foreground">
                Make this a monthly donation
              </Label>
            </div>

            <div className="space-y-2">
              <Label htmlFor="name" className="text-foreground">
                Full Name
              </Label>
              <Input
                id="name"
                className="text-input-foreground border-input bg-input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-foreground">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                className="text-input-foreground border-input bg-input"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-foreground">
                Message (optional)
              </Label>
              <Textarea
                id="message"
                placeholder="Share why you're supporting space exploration..."
                className="text-input-foreground resize-none border-input bg-input"
              />
            </div>

            <RadioGroup
              defaultValue="credit"
              className="grid grid-cols-3 gap-4"
            >
              <div>
                <RadioGroupItem
                  value="credit"
                  id="credit"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="credit"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <DollarSign className="mb-3 h-6 w-6" />
                  Credit Card
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="paypal"
                  id="paypal"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="paypal"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Globe className="mb-3 h-6 w-6" />
                  PayPal
                </Label>
              </div>
              <div>
                <RadioGroupItem
                  value="crypto"
                  id="crypto"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="crypto"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Bitcoin className="mb-3 h-6 w-6" />
                  Crypto
                </Label>
              </div>
            </RadioGroup>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Complete Donation
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}
