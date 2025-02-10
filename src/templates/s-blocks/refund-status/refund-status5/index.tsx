import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  Wallet,
  FileCheck,
  Truck,
  CheckCircle,
  FileText,
  X,
  ArrowLeft,
} from "lucide-react";

const RefundDetails = () => (
  <div>
    <h4 className="mb-4 text-lg font-semibold md:mb-5">
      Refund request details
    </h4>
    <div className="space-y-4 divide-y divide-border">
      <div className="flex justify-between pb-4">
        <dt className="font-semibold">Order date</dt>
        <dd className="text-muted-foreground">24 November 2023</dd>
      </div>
      <div className="flex justify-between py-4">
        <dt className="font-semibold">Refund reason</dt>
        <dd className="text-muted-foreground">Missing parts</dd>
      </div>
      <div className="flex justify-between py-4">
        <dt className="font-semibold">Package condition</dt>
        <dd className="text-muted-foreground">New</dd>
      </div>
      <div className="flex justify-between py-4">
        <dt className="font-semibold">Refund method</dt>
        <dd className="text-muted-foreground">Gift card</dd>
      </div>
      <div className="flex justify-between pt-4">
        <dt className="font-semibold">Amount to be refunded</dt>
        <dd className="text-muted-foreground">$1,299</dd>
      </div>
    </div>
  </div>
);

const TimelineItem = ({
  icon: Icon,
  title,
  date,
  description,
  status,
}: {
  icon: React.ElementType;
  title: string;
  date: string;
  description?: string;
  status: "completed" | "pending";
}) => (
  <li className="mb-10 ms-6">
    <span
      className={`absolute -start-4 flex h-8 w-8 items-center justify-center rounded-full bg-background ring-4 ring-background ${status === "completed" ? "text-green-500" : "text-muted-foreground"}`}
    >
      <Icon className="h-5 w-5" />
    </span>
    <h3 className="mb-1 flex items-center text-lg font-semibold">{title}</h3>
    <time className="mb-2 block text-sm text-muted-foreground">{date}</time>
    {description && (
      <p className="text-base text-muted-foreground">{description}</p>
    )}
  </li>
);

export default function RefundTrackingModal() {
  return (
    <section className="container flex items-center justify-center py-16">
      <Dialog>
        <DialogTrigger asChild>
          <Button>Show refund tracking modal</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[900px]">
          <DialogHeader>
            <DialogTitle>
              Track the delivery of order{" "}
              <a href="#" className="hover:underline">
                #957684673
              </a>
            </DialogTitle>
          </DialogHeader>
          <div className="grid gap-5 md:grid-cols-2 md:gap-8">
            <RefundDetails />
            <ol className="relative ms-3 border-s border-dashed">
              <TimelineItem
                icon={Wallet}
                title="Refund the amount"
                date="Estimated time will be 22 September 2024"
                description="The amount will be refunded based on the chosen option."
                status="pending"
              />
              <TimelineItem
                icon={FileCheck}
                title="Product check"
                date="Estimated time will be 22 September 2024"
                description="We will carefully check the product and inform you if you are eligible for a refund."
                status="pending"
              />
              <TimelineItem
                icon={Truck}
                title="Pick up product from the address"
                date="16-17 September 2024"
                status="pending"
              />
              <TimelineItem
                icon={CheckCircle}
                title="Refund accepted"
                date="13 September 2024 at 12:07"
                status="completed"
              />
              <TimelineItem
                icon={FileText}
                title="Order placed"
                date="12 September 2024 at 10:45"
                status="completed"
              />
            </ol>
          </div>
          <Separator className="my-4" />
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-end sm:space-x-4 sm:space-y-0">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to your account
            </Button>
            <Button variant="destructive">
              <X className="mr-2 h-4 w-4" />
              Cancel the refund
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

//
