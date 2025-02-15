"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check, X } from "lucide-react";
import Image from "next/image";

interface OrderDetail {
  label: string;
  value: string;
}

const OrderDetails: OrderDetail[] = [
  { label: "Order number", value: "#DY-Comps-2024-001" },
  { label: "Date", value: "15 May 2024" },
  { label: "Payment Method", value: "DY-Comps Financing Plan" },
  { label: "Name", value: "DY-Comps Innovations Inc." },
  {
    label: "Address",
    value: "Tech Park Boulevard, San Francisco, California, USA",
  },
  { label: "Phone", value: "+(987) 654 3210" },
  { label: "Email", value: "example@gmail.com" },
  { label: "Estimated delivery", value: "Thursday, May 16" },
];

const OrderDetailsCard = () => (
  <Card className="mb-6 md:mb-8">
    <CardContent className="divide-y divide-border p-4">
      {OrderDetails.map((detail, index) => (
        <dl
          key={index}
          className="items-center justify-between gap-4 py-3 sm:flex"
        >
          <dt className="mb-1 font-normal text-muted-foreground sm:mb-0">
            {detail.label}
          </dt>
          <dd
            className={`font-medium sm:text-end ${detail.label === "Estimated delivery" ? "text-green-500" : "text-foreground"}`}
          >
            {detail.value}
          </dd>
        </dl>
      ))}
    </CardContent>
  </Card>
);

export default function OrderConfirmationDrawer() {
  return (
    <section className="container flex items-center justify-center">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="m-5">Show order confirmation drawer</Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full sm:max-w-md">
          <SheetHeader className="flex-row items-center justify-between">
            <SheetTitle className="text-base font-semibold uppercase text-muted-foreground">
              Order confirmation
            </SheetTitle>
          </SheetHeader>
          <div className="mt-6 space-y-6">
            <div>
              <div className="mb-2 flex items-center space-x-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
                  <Check className="h-4 w-4 text-secondary-foreground" />
                </div>
                <h3 className="text-xl font-semibold leading-none text-foreground">
                  Thanks for choosing DY-Comps!
                </h3>
              </div>
              <p className="mb-6 text-muted-foreground">
                Your order is being processed by our advanced AI inventory
                system. You'll receive real-time shipping updates and
                personalized product optimization tips via email.
              </p>
            </div>
            <OrderDetailsCard />
            <p className="mb-6 text-muted-foreground md:mb-8">
              Need anything in the meantime? You can reach us at{" "}
              <a
                href="#"
                className="font-medium text-foreground underline hover:no-underline"
              >
                example@gmail.com
              </a>
              .
            </p>
          </div>
          <div className="mt-8 space-y-4 sm:flex sm:space-x-4 sm:space-y-0">
            <Button className="w-full">Track your order</Button>
            <SheetClose asChild>
              <Button variant="outline" className="w-full">
                Explore more tech
              </Button>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
