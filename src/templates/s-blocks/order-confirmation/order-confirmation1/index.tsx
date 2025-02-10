import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface OrderDetail {
  label: string;
  value: string;
}

const OrderDetails: OrderDetail[] = [
  { label: "Date", value: "14 May 2024" },
  { label: "Payment Method", value: "JPMorgan monthly installments" },
  { label: "Name", value: "DY-Comps Studios LLC" },
  {
    label: "Address",
    value: "34 Scott Street, San Francisco, California, USA",
  },
  { label: "Phone", value: "+(123) 456 7890" },
];

export default function OrderConfirmation() {
  return (
    <section className="bg-background py-8 antialiased md:py-16">
      <div className="mx-auto max-w-2xl px-4 2xl:px-0">
        <h2 className="mb-2 text-xl font-semibold text-foreground sm:text-2xl">
          Thanks for your order!
        </h2>
        <p className="mb-6 text-muted-foreground md:mb-8">
          Your order{" "}
          <a href="#" className="font-medium text-foreground hover:underline">
            #7564804
          </a>{" "}
          will be processed within 24 hours during working days. We will notify
          you by email once your order has been shipped.
        </p>
        <Card className="mb-6 md:mb-8">
          <CardContent className="p-6">
            {OrderDetails.map((detail, index) => (
              <dl
                key={index}
                className="mb-4 items-center justify-between gap-4 last:mb-0 sm:flex"
              >
                <dt className="mb-1 font-normal text-muted-foreground sm:mb-0">
                  {detail.label}
                </dt>
                <dd className="font-medium text-foreground sm:text-end">
                  {detail.value}
                </dd>
              </dl>
            ))}
          </CardContent>
        </Card>
        <div className="flex items-center space-x-4">
          <Button>Track your order</Button>
          <Button variant="outline">Return to shopping</Button>
        </div>
      </div>
    </section>
  );
}
