"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Copy, FileText, Download, BadgeCheck, Lock } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

interface CopyFieldProps {
  label: string;
  value: string;
  className?: string;
  note?: string;
}

function CopyField({ label, value, className, note }: CopyFieldProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={className}>
      <div className="mb-1.5 flex items-center justify-between">
        <Label className="text-sm text-muted-foreground">{label}</Label>
        {note && <span className="text-xs text-muted-foreground">{note}</span>}
      </div>
      <div className="relative">
        <Input
          value={value}
          readOnly
          className="bg-background pr-10 font-mono"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
          onClick={copyToClipboard}
        >
          <Copy
            className={`h-4 w-4 ${copied ? "text-primary" : "text-muted-foreground"}`}
          />
        </Button>
      </div>
    </div>
  );
}

export default function EnhancedPaymentDetails() {
  return (
    <section className="container py-8 md:py-12">
      <Card className="mx-auto max-w-2xl">
        <CardHeader className="border-b">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold text-foreground">
              Payment Instructions
            </CardTitle>
            <Badge variant="outline" className="gap-2">
              <BadgeCheck className="h-4 w-4 text-primary" />
              Payment Pending
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            {/* Payment Overview */}
            <div className="rounded-lg bg-accent p-4">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-sm font-medium text-foreground">
                    Amount Due
                  </p>
                  <p className="text-2xl font-semibold text-foreground">
                    $149.00
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">USD</span>
                </div>
              </div>
            </div>

            {/* Banking Details */}
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Lock className="h-4 w-4 text-primary" />
                Banking Details
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                <CopyField label="Beneficiary Name" value="DY-Comps LLC" />
                <CopyField
                  label="Account Number"
                  value="SERP00 1234 5678 91011"
                />
                <CopyField
                  label="SWIFT/BIC Code"
                  value="SERP345SS"
                  note="Format: AAAA BB CC 123"
                />
                <CopyField label="Routing Number" value="021000021" />
              </div>
            </div>

            {/* Bank Information */}
            <CopyField
              label="Bank Address"
              value="Tech Park Boulevard, San Francisco, CA 94103, United States"
            />

            {/* Document Downloads */}
            <div className="space-y-4">
              <h3 className="flex items-center gap-2 text-sm font-medium text-foreground">
                <FileText className="h-4 w-4 text-primary" />
                Export Details
              </h3>
              <div className="grid gap-2 md:grid-cols-2">
                <Button variant="outline" className="h-12 justify-start gap-3">
                  <Download className="h-4 w-4" />
                  <div className="text-left">
                    <p className="font-medium text-foreground">Download CSV</p>
                    <p className="text-xs text-muted-foreground">
                      Spreadsheet format
                    </p>
                  </div>
                </Button>
                <Button variant="outline" className="h-12 justify-start gap-3">
                  <FileText className="h-4 w-4" />
                  <div className="text-left">
                    <p className="font-medium text-foreground">Download PDF</p>
                    <p className="text-xs text-muted-foreground">
                      Bank-ready format
                    </p>
                  </div>
                </Button>
              </div>
            </div>

            {/* Payment Notice */}
            <div className="flex items-start gap-3 rounded-lg border p-4">
              <Lock className="h-5 w-5 text-primary" />
              <p className="text-sm text-muted-foreground">
                Payments typically process within 1-2 business days. A 2.5% fee
                applies for international transfers.
              </p>
            </div>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Confirm Payment Receipt
            </Button>

            <div className="flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
              <Lock className="h-4 w-4 text-primary" />
              <span>
                Secured by <span className="text-primary">Lemon Squeezy</span> •
                DY-Comps LLC - United States
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
