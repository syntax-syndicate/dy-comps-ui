"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Package,
  ShieldCheck,
  CreditCard,
  Gift,
  Clock,
  CalendarDays,
  X,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

const ProcessStep = ({
  icon: Icon,
  title,
  date,
  details,
  phase,
}: {
  icon: React.ElementType;
  title: string;
  date?: string;
  details?: string;
  phase: "done" | "awaiting" | "active";
}) => (
  <li className="mb-8 ms-6">
    <span
      className={`absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ring-background ${
        phase === "done"
          ? "bg-emerald-600 text-primary-foreground"
          : phase === "active"
            ? "bg-amber-500 text-white"
            : "bg-muted text-muted-foreground"
      }`}
    >
      <Icon className="h-4 w-4" />
    </span>
    <div className="flex flex-col space-y-1.5">
      {date && (
        <span className="flex items-center text-sm font-medium text-muted-foreground">
          <CalendarDays className="mr-1 h-4 w-4" />
          {date}
        </span>
      )}
      <h3
        className={`text-lg font-semibold ${
          phase === "done"
            ? "text-emerald-600"
            : phase === "active"
              ? "text-amber-500"
              : "text-foreground"
        }`}
      >
        {title}
      </h3>
      {details && <p className="text-sm text-muted-foreground">{details}</p>}
    </div>
  </li>
);

const ReturnInformation = () => (
  <div className="space-y-6">
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Return Specifications</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="mb-1 font-medium">Initiation Reason</h4>
          <p className="text-sm text-muted-foreground">
            Received incorrect item that doesn't match the order description.
          </p>
        </div>
        <Separator />
        <div>
          <h4 className="mb-1 font-medium">Resolution Deadline</h4>
          <p className="flex items-center text-sm text-muted-foreground">
            <Clock className="mr-2 h-4 w-4" />
            15 October 2024
          </p>
        </div>
        <Separator />
        <div>
          <h4 className="mb-1 font-medium">Product State</h4>
          <p className="text-sm text-muted-foreground">
            Original packaging intact with all protective seals unbroken.
          </p>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Approved Compensation</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-3xl font-bold text-emerald-600">$489.99</p>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Selected Resolution Method</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h4 className="mb-1 font-medium">Store Credit Issuance</h4>
          <p className="text-sm text-muted-foreground">
            Funds will be added to your digital wallet for future purchases.
          </p>
        </div>
        <Alert variant="success">
          <AlertDescription>
            Credit balance updates typically appear within 48 hours of return
            verification.
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  </div>
);

export default function ReturnProcessPanel() {
  return (
    <section className="container flex items-center justify-center py-16">
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            View Return Progress
            <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full p-0 pt-6 sm:max-w-xl">
          <div className="flex h-[calc(100vh-2rem)] flex-col">
            <ScrollArea className="flex-grow px-4">
              <div className="space-y-8 pb-6">
                <SheetHeader className="space-y-4 px-6 pb-6">
                  <SheetTitle className="text-2xl font-bold">
                    Order Resolution Tracker
                  </SheetTitle>
                  <Badge
                    variant="outline"
                    className="w-fit font-mono text-base"
                  >
                    #RC-2289-4916
                  </Badge>
                </SheetHeader>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">
                      Return Process Timeline
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="relative border-l border-muted">
                      <ProcessStep
                        icon={ShieldCheck}
                        title="Return Authorization Approved"
                        date="15 March 2024"
                        details="Please keep all original packaging materials intact for carrier inspection."
                        phase="done"
                      />
                      <ProcessStep
                        icon={Package}
                        title="Carrier Collection Scheduled"
                        details="Anticipated window: 16 March 2024 - 19 March 2024."
                        phase="active"
                      />
                      <ProcessStep
                        icon={CreditCard}
                        title="Quality Verification"
                        details="Our team will confirm product condition matches return requirements."
                        phase="awaiting"
                      />
                      <ProcessStep
                        icon={Gift}
                        title="Credit Allocation"
                        details="Digital wallet will reflect updated balance post-verification."
                        phase="awaiting"
                      />
                    </ol>
                  </CardContent>
                </Card>
                <ReturnInformation />
              </div>
            </ScrollArea>
            <div className="sticky bottom-0 mt-auto border-t bg-background p-4">
              <div className="flex flex-col space-y-2">
                <SheetClose asChild>
                  <Button variant="outline">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Account Overview
                  </Button>
                </SheetClose>
                <Button variant="destructive">
                  <X className="mr-2 h-4 w-4" />
                  Dispute Resolution
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
