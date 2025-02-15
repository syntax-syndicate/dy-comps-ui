"use client";

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
import { Badge } from "@/components/ui/badge";
import {
  AlertTriangle,
  Zap,
  Banknote,
  Mail,
  CalendarDays,
  Info,
} from "lucide-react";

export default function EnhancedWireTransferForm() {
  return (
    <section className="container py-8 md:py-12">
      <Card className="mx-auto max-w-2xl">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-foreground">
              International Wire Transfer
            </CardTitle>
            <Badge variant="outline" className="gap-2">
              <Info className="h-4 w-4" />
              SWIFT/BIC Required
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <form className="space-y-6">
            {/* Recipient Details */}
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Banknote className="h-4 w-4 text-primary" />
                Recipient Information
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="to">Beneficiary Name*</Label>
                  <Input id="to" defaultValue="DY-Comps LLC" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="account">Account Number*</Label>
                  <Input
                    id="account"
                    placeholder="SERP00 1234 5678 91011"
                    className="font-mono"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" placeholder="34 Scott Street" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="postal">Postal Code</Label>
                  <Input id="postal" placeholder="94103" />
                </div>
              </div>
            </div>

            {/* Transfer Details */}
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Banknote className="h-4 w-4 text-primary" />
                Transfer Details
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="amount">Amount*</Label>
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Input id="amount" placeholder="0.00" className="pl-8" />
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                        $
                      </span>
                    </div>
                    <Select defaultValue="USD">
                      <SelectTrigger className="w-[120px]">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="USD">USD</SelectItem>
                        <SelectItem value="EUR">EUR</SelectItem>
                        <SelectItem value="GBP">GBP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bic">BIC/SWIFT Code*</Label>
                  <Input
                    id="bic"
                    placeholder="AAAA BB CC 123"
                    className="uppercase"
                  />
                </div>
              </div>
            </div>

            {/* Payment Details */}
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Banknote className="h-4 w-4 text-primary" />
                Payment Information
              </h3>
              <div className="space-y-2">
                <Label htmlFor="purpose">Payment Purpose*</Label>
                <Textarea
                  id="purpose"
                  placeholder="e.g. Payment for professional consulting services"
                  className="min-h-[100px] resize-none"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="fees">Fee Structure*</Label>
                <Select defaultValue="split">
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select fee structure" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="split">
                      <div className="flex flex-col">
                        <span className="font-medium">SHA - Shared Fees</span>
                        <span className="text-xs text-muted-foreground">
                          Charges split between sender and receiver
                        </span>
                      </div>
                    </SelectItem>
                    <SelectItem value="sender">
                      <div className="flex flex-col">
                        <span className="font-medium">OUR - Sender Pays</span>
                        <span className="text-xs text-muted-foreground">
                          All fees paid by sender
                        </span>
                      </div>
                    </SelectItem>
                    <SelectItem value="receiver">
                      <div className="flex flex-col">
                        <span className="font-medium">BEN - Receiver Pays</span>
                        <span className="text-xs text-muted-foreground">
                          All fees paid by receiver
                        </span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Timing & Notifications */}
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
                <CalendarDays className="h-4 w-4 text-primary" />
                Transfer Timing
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="date">Execution Date*</Label>
                  <div className="relative">
                    <Input
                      id="date"
                      type="date"
                      defaultValue="2024-05-15"
                      className="pl-10"
                    />
                    <CalendarDays className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Confirmation Email</Label>
                  <div className="relative">
                    <Input
                      id="email"
                      type="email"
                      placeholder="example@gmail.com"
                      className="pl-10"
                    />
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </div>

            {/* Urgency Selection */}
            <div className="space-y-4">
              <Label>Transfer Speed*</Label>
              <RadioGroup
                defaultValue="urgent"
                className="grid gap-3 sm:grid-cols-2"
              >
                <div>
                  <RadioGroupItem
                    value="urgent"
                    id="urgent"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="urgent"
                    className="flex cursor-pointer items-center gap-3 rounded-lg border bg-card p-4 hover:border-primary peer-data-[state=checked]:border-primary"
                  >
                    <AlertTriangle className="h-6 w-6 text-destructive" />
                    <div>
                      <p className="font-medium text-foreground">
                        Urgent Transfer
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Processed within 24 hours
                      </p>
                    </div>
                  </Label>
                </div>
                <div>
                  <RadioGroupItem
                    value="instant"
                    id="instant"
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor="instant"
                    className="flex cursor-pointer items-center gap-3 rounded-lg border bg-card p-4 hover:border-primary peer-data-[state=checked]:border-primary"
                  >
                    <Zap className="h-6 w-6 text-emerald-600" />
                    <div>
                      <p className="font-medium text-foreground">
                        Instant Transfer
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Same-day processing
                      </p>
                    </div>
                  </Label>
                </div>
              </RadioGroup>
            </div>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Initiate Transfer
            </Button>

            <div className="flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
              <LockIcon className="h-4 w-4 text-primary" />
              <span>
                Secured by <span className="text-primary">Lemon Squeezy</span> •
                DY-Comps LLC - United States
              </span>
            </div>
          </form>
        </CardContent>
      </Card>
    </section>
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
