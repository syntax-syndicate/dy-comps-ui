"use client";

import { Truck, Clock, Calendar } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function DeliveryOptions() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-md">
        <CardHeader className="pb-3">
          <CardTitle>Delivery Options</CardTitle>
          <CardDescription>
            Choose how you want your order to be delivered.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-1">
          <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
            <Truck className="mt-px size-5" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Standard Shipping
              </p>
              <p className="text-sm text-muted-foreground">
                Delivery in 3-5 business days. Free for orders over $50.
              </p>
            </div>
          </div>
          <div className="-mx-2 flex items-start space-x-4 rounded-md bg-accent p-2 text-accent-foreground transition-all">
            <Clock className="mt-px size-5" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Express Delivery
              </p>
              <p className="text-sm text-muted-foreground">
                Guaranteed delivery within 1-2 business days. Additional $15
                fee.
              </p>
            </div>
          </div>
          <div className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-accent hover:text-accent-foreground">
            <Calendar className="mt-px size-5" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">
                Scheduled Delivery
              </p>
              <p className="text-sm text-muted-foreground">
                Choose a specific date and time for delivery. Additional $10
                fee.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
