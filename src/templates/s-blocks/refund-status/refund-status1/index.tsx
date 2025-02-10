import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Check,
  Clock,
  ArrowLeft,
  X,
  Package,
  Wallet,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export default function RefundStatus() {
  const steps = [
    {
      status: "complete",
      date: "02 February 2024",
      title: "Request Registered",
      description: "Product ready for pickup in original packaging",
      icon: <Check className="h-4 w-4" />,
    },
    {
      status: "current",
      title: "Product Pickup",
      description: "Scheduled 2-5 February 2024",
      icon: <Package className="h-4 w-4" />,
    },
    {
      status: "pending",
      title: "Quality Inspection",
      description: "Thorough product evaluation process",
      icon: <ShieldCheck className="h-4 w-4" />,
    },
    {
      status: "pending",
      title: "Refund Processing",
      description: "Funds return via original payment method",
      icon: <Wallet className="h-4 w-4" />,
    },
  ];

  return (
    <section className="bg-background py-8 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-3xl space-y-8">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold text-foreground">
              Refund Progress
            </h2>
            <div className="flex items-center gap-4">
              <Progress value={25} className="h-2" />
              <Badge className="whitespace-nowrap" variant="secondary">
                Step 1 of 4
              </Badge>
            </div>
          </div>

          <Card className="hover:shadow-sm">
            <CardContent className="flex items-center gap-6 p-6">
              <div className="relative aspect-square h-20 w-20 overflow-hidden rounded-lg border">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Product image"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-1">
                <p className="font-medium text-foreground">
                  Sony PlayStation 5 Digital Edition
                </p>
                <div className="text-sm text-muted-foreground">
                  <p>Order #DY-Comps-02415</p>
                  <p>Total: $799.00</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="relative space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border ${step.status === "complete" ? "border-primary bg-primary/10" : step.status === "current" ? "border-primary bg-background" : "border-muted bg-muted/20"}`}
                >
                  {step.status === "complete" ? (
                    <Check className="h-5 w-5 text-primary" />
                  ) : (
                    <div className="text-muted-foreground">{step.icon}</div>
                  )}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="space-y-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-medium text-foreground">
                        {step.title}
                      </h3>
                      {step.date && (
                        <Badge variant="outline" className="gap-1.5 text-xs">
                          <Clock className="h-3.5 w-3.5" />
                          {step.date}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                  {index < steps.length - 1 && <div className="1-px w-full" />}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Return to Account
            </Button>
            <Button variant="destructive" className="gap-2">
              <X className="h-4 w-4" />
              Cancel Refund Request
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
