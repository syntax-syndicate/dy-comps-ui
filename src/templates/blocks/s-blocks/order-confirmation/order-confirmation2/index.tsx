"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Package,
  CreditCard,
  CalendarCheck,
  AlertCircle,
} from "lucide-react";
import Image from "next/image";

interface OrderDetail {
  label: string;
  value: string | React.ReactNode;
  icon?: React.ReactNode;
}

interface Product {
  name: string;
  price: string;
  quantity: number;
  image: string;
}

const OrderDetails: OrderDetail[] = [
  {
    label: "Order Total",
    value: "$2,499.00",
    icon: <CreditCard className="h-5 w-5 text-primary" />,
  },
  {
    label: "Shipping Method",
    value: "Express Delivery (2-3 days)",
    icon: <Package className="h-5 w-5 text-primary" />,
  },
  {
    label: "Estimated Delivery",
    value: "17 May 2024",
    icon: <CalendarCheck className="h-5 w-5 text-primary" />,
  },
  {
    label: "Payment Status",
    value: <Badge variant="default">Completed</Badge>,
    icon: <AlertCircle className="h-5 w-5 text-primary" />,
  },
];

const Products: Product[] = [
  {
    name: "DY-Comps Pro Studio License",
    price: "$1,999.00",
    quantity: 1,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Priority Support Package",
    price: "$499.00",
    quantity: 1,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function EnhancedOrderConfirmation() {
  return (
    <section className="bg-background py-8 antialiased md:py-16">
      <div className="mx-auto max-w-4xl px-4 2xl:px-0">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              Order Confirmed 🎉
            </h2>
            <p className="mt-2 text-muted-foreground">
              Order #7564804 • Placed on 14 May 2024
            </p>
          </div>
          <Badge variant="secondary" className="gap-2 px-4 py-2">
            <Clock className="h-4 w-4" />
            Processing
          </Badge>
        </div>

        <Card className="mb-6 border">
          <CardContent className="p-6">
            <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
              <Package className="h-5 w-5 text-primary" />
              Items Purchased
            </h3>
            <div className="space-y-4">
              {Products.map((product, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 border-b pb-4 last:border-0"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={64}
                    height={64}
                    className="rounded-lg border"
                  />
                  <div className="flex-1">
                    <p className="font-medium text-foreground">
                      {product.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Qty: {product.quantity}
                    </p>
                  </div>
                  <p className="font-medium text-foreground">{product.price}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border">
            <CardContent className="p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <CreditCard className="h-5 w-5 text-primary" />
                Payment Details
              </h3>
              <dl className="space-y-3">
                {OrderDetails.slice(0, 2).map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <dt className="flex items-center gap-2 text-sm text-muted-foreground">
                      {detail.icon}
                      {detail.label}
                    </dt>
                    <dd className="font-medium text-foreground">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </CardContent>
          </Card>

          <Card className="border">
            <CardContent className="p-6">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-semibold text-foreground">
                <Package className="h-5 w-5 text-primary" />
                Shipping Details
              </h3>
              <dl className="space-y-3">
                {OrderDetails.slice(2).map((detail, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <dt className="flex items-center gap-2 text-sm text-muted-foreground">
                      {detail.icon}
                      {detail.label}
                    </dt>
                    <dd className="font-medium text-foreground">
                      {detail.value}
                    </dd>
                  </div>
                ))}
                <div className="pt-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <AlertCircle className="h-4 w-4" />
                    Signature required for delivery
                  </div>
                </div>
              </dl>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h3 className="font-medium text-foreground">Order Timeline</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>Order confirmed</span>
              <div className="h-px flex-1 bg-border" />
              <div className="h-2 w-2 rounded-full bg-border" />
              <span className="text-muted-foreground">Shipped</span>
              <div className="h-px flex-1 bg-border" />
              <div className="h-2 w-2 rounded-full bg-border" />
              <span className="text-muted-foreground">Delivered</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button className="gap-2">
              <Package className="h-4 w-4" />
              Track Order
            </Button>
            <Button variant="outline">Download Invoice</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
