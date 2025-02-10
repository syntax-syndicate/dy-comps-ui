"use client";

import { Zap, Rocket, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function SubscriptionPlanSelection() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle>Choose Your Subscription Plan</CardTitle>
          <CardDescription>
            Select a plan that best fits your needs.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <RadioGroup defaultValue="pro" className="grid grid-cols-3 gap-4">
            <div>
              <RadioGroupItem
                value="basic"
                id="basic"
                className="peer sr-only"
              />
              <Label
                htmlFor="basic"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Zap className="mb-3 size-6" />
                Basic
                <span className="mt-2 text-sm font-semibold">$9.99/mo</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem value="pro" id="pro" className="peer sr-only" />
              <Label
                htmlFor="pro"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Rocket className="mb-3 size-6" />
                Pro
                <span className="mt-2 text-sm font-semibold">$19.99/mo</span>
              </Label>
            </div>
            <div>
              <RadioGroupItem
                value="enterprise"
                id="enterprise"
                className="peer sr-only"
              />
              <Label
                htmlFor="enterprise"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Star className="mb-3 size-6" />
                Enterprise
                <span className="mt-2 text-sm font-semibold">$49.99/mo</span>
              </Label>
            </div>
          </RadioGroup>
          <div className="grid gap-2">
            <Label htmlFor="name">Cardholder Name</Label>
            <Input id="name" placeholder="John Doe" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="number">Card number</Label>
            <Input id="number" placeholder="1234 5678 9012 3456" />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="month">Expiry Month</Label>
              <Select>
                <SelectTrigger id="month">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">January</SelectItem>
                  <SelectItem value="2">February</SelectItem>
                  <SelectItem value="3">March</SelectItem>
                  <SelectItem value="4">April</SelectItem>
                  <SelectItem value="5">May</SelectItem>
                  <SelectItem value="6">June</SelectItem>
                  <SelectItem value="7">July</SelectItem>
                  <SelectItem value="8">August</SelectItem>
                  <SelectItem value="9">September</SelectItem>
                  <SelectItem value="10">October</SelectItem>
                  <SelectItem value="11">November</SelectItem>
                  <SelectItem value="12">December</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="year">Expiry Year</Label>
              <Select>
                <SelectTrigger id="year">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => (
                    <SelectItem
                      key={i}
                      value={`${new Date().getFullYear() + i}`}
                    >
                      {new Date().getFullYear() + i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="cvc">CVC</Label>
              <Input id="cvc" placeholder="123" />
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Subscribe Now</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
