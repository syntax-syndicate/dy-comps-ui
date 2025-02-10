"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  AlertCircle,
  ArrowLeft,
  Calendar,
  Check,
  ClipboardList,
  CreditCard,
  PackageOpen,
  RotateCw,
  ShoppingCart,
  Truck,
  Undo,
  X,
} from "lucide-react";

const timelineItems = [
  {
    icon: CreditCard,
    title: "Payment reversal initiated",
    date: "Processing completion by 15 November 2024",
    description: "Funds will be returned to your original payment method",
    status: "pending",
  },
  {
    icon: PackageOpen,
    title: "Item quality inspection",
    date: "Scheduled for 14 November 2024",
    description: "Verifying product condition matches return requirements",
    status: "pending",
  },
  {
    icon: Truck,
    title: "In transit to retailer",
    date: "Estimated arrival 12 November 2024",
    description: "Package is en route to our fulfillment center",
    status: "pending",
  },
  {
    icon: ClipboardList,
    title: "Return processed",
    date: "8 November 2024 at 14:30",
    status: "completed",
  },
  {
    icon: RotateCw,
    title: "Return request approved",
    date: "5 November 2024 at 09:15",
    status: "completed",
  },
  {
    icon: ShoppingCart,
    title: "Original purchase",
    date: "28 October 2024 at 16:45",
    status: "completed",
  },
];

const TimelineItem = ({ item }: { item: (typeof timelineItems)[0] }) => (
  <li className="mb-10 ms-6">
    <span
      className={`absolute -start-3 flex h-6 w-6 items-center justify-center rounded-full ring-8 ${
        item.status === "completed"
          ? "bg-primary text-white ring-primary/20"
          : "bg-background text-muted-foreground ring-background"
      }`}
    >
      {item.status === "completed" ? (
        <Check className="h-3 w-3" />
      ) : (
        <item.icon className="h-3 w-3" />
      )}
    </span>
    <h3 className="mb-1 flex items-center text-lg font-semibold text-foreground">
      {item.title}
    </h3>
    <time className="mb-2 block text-sm font-normal leading-none text-muted-foreground">
      {item.date}
    </time>
    {item.description && (
      <p className="text-base font-normal text-muted-foreground">
        {item.description}
      </p>
    )}
  </li>
);

const DetailCard = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

const CancelRefundModal = ({
  isOpen,
  onClose,
  onConfirm,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) => (
  <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Cancel Return Process</DialogTitle>
        <DialogDescription>
          This will permanently stop your current return procedure. Are you
          certain?
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button variant="outline" onClick={onClose}>
          Go Back
        </Button>
        <Button variant="destructive" onClick={onConfirm}>
          Confirm Cancellation
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default function RefundTracker() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-background py-8 md:py-16">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-lg md:max-w-5xl">
          <h2 className="text-xl font-semibold text-foreground sm:text-2xl">
            Tracking return for order{" "}
            <a href="#" className="hover:underline">
              #RTK78451209
            </a>
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-6 sm:mt-8 sm:gap-8 md:grid-cols-2 xl:mt-12">
            <div>
              <ol className="relative ms-3 border-s border-dashed">
                {timelineItems.map((item, index) => (
                  <TimelineItem key={index} item={item} />
                ))}
              </ol>
            </div>

            <div className="space-y-4">
              <DetailCard title="Return Overview">
                <dl className="space-y-1">
                  <dt className="font-medium text-foreground">Return Reason</dt>
                  <dd className="font-normal text-muted-foreground">
                    Received incorrect color variant of the product
                  </dd>
                </dl>
                <dl className="mt-4 space-y-1">
                  <dt className="font-medium text-foreground">
                    Final Resolution Date
                  </dt>
                  <dd className="flex items-center font-medium text-muted-foreground">
                    <Calendar className="mr-1 h-4 w-4" />
                    18 November 2024
                  </dd>
                </dl>
                <dl className="mt-4 space-y-1">
                  <dt className="font-medium text-foreground">
                    Packaging Status
                  </dt>
                  <dd className="font-normal text-muted-foreground">
                    Original packaging with all accessories included
                  </dd>
                </dl>
              </DetailCard>

              <DetailCard title="Refund Total">
                <dl className="space-y-1">
                  <dt className="sr-only">Amount</dt>
                  <dd className="font-bold text-foreground">$299.99</dd>
                </dl>
              </DetailCard>

              <DetailCard title="Refund Method">
                <dl className="space-y-1">
                  <dt className="font-medium text-foreground">Store Credit</dt>
                  <dd className="font-normal text-muted-foreground">
                    Amount will be added to your account wallet for future
                    purchases
                  </dd>
                </dl>
                <div
                  className="mt-4 flex items-start rounded-lg bg-primary/10 px-4 py-2 text-sm text-primary"
                  role="alert"
                >
                  <AlertCircle className="mr-2 h-4 w-4 shrink-0" />
                  <p>
                    Credit balance updates typically appear within 1 business
                    day after processing completes
                  </p>
                </div>
              </DetailCard>
            </div>
          </div>

          <div className="mt-6 flex flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 md:mt-8">
            <Button variant="outline" className="w-full sm:w-auto">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Order History
            </Button>
            <Button
              variant="destructive"
              className="w-full sm:w-auto"
              onClick={() => setIsModalOpen(true)}
            >
              <Undo className="mr-2 h-4 w-4" />
              Reverse Return
            </Button>
          </div>
        </div>
      </div>

      <CancelRefundModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={() => {
          // Handle cancellation logic
          setIsModalOpen(false);
        }}
      />
    </section>
  );
}
