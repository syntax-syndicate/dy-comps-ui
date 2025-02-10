"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Package,
  Truck,
  CheckCircle2,
  CreditCard,
  Download,
} from "lucide-react";

interface OrderDetail {
  label: string;
  value: string | React.ReactNode;
  icon?: React.ReactNode;
}

const OrderDetails: OrderDetail[] = [
  {
    label: "Order number",
    value: "#DY-Comps-2024-001",
    icon: <Package className="h-5 w-5 text-primary" />,
  },
  {
    label: "Date",
    value: "15 May 2024",
    icon: <CalendarDays className="h-5 w-5 text-primary" />,
  },
  {
    label: "Payment Method",
    value: (
      <div className="flex items-center gap-2">
        <CreditCard className="h-5 w-5 text-muted-foreground" />
        <span>DY-Comps Financing Plan</span>
      </div>
    ),
  },
  {
    label: "Contact",
    value: (
      <div className="space-y-1">
        <div>DY-Comps Innovations Inc.</div>
        <div className="text-muted-foreground">+(987) 654 3210</div>
        <div className="text-muted-foreground">example@gmail.com</div>
      </div>
    ),
  },
  {
    label: "Shipping Address",
    value: "Tech Park Boulevard, San Francisco, California, USA",
    icon: <MapPin className="h-5 w-5 text-primary" />,
  },
];

interface OrderItem {
  name: string;
  quantity: number;
  price: string;
  imageSrc: string;
}

const OrderItems: OrderItem[] = [
  {
    name: "DY-Comps Quantum Laptop",
    quantity: 1,
    price: "$2,499.00",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "DY-Comps Nova Smartphone",
    quantity: 3,
    price: "$799.00",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "DY-Comps Vision Pro AR Glasses",
    quantity: 2,
    price: "$1,299.00",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "DY-Comps Thunderbolt Monitor",
    quantity: 1,
    price: "$899.00",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "DY-Comps Fusion Wireless Earbuds",
    quantity: 4,
    price: "$199.00",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function EnhancedOrderConfirmation() {
  return (
    <section className="bg-background py-8 antialiased md:py-16">
      <div className="mx-auto max-w-5xl px-4 2xl:px-0">
        <div className="mb-6 flex items-start justify-between md:mb-8">
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-foreground">
              Order Confirmed 🎉
            </h2>
            <p className="text-muted-foreground">
              We've received your order and are preparing it for shipment
            </p>
          </div>
          <Badge variant="secondary" className="gap-2 px-4 py-2">
            <Truck className="h-4 w-4" />
            Processing
          </Badge>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Order Details Column */}
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {OrderDetails.map((detail, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex items-start gap-4">
                        {detail.icon && (
                          <div className="pt-1">{detail.icon}</div>
                        )}
                        <div className="flex-1">
                          <div className="text-sm font-medium text-muted-foreground">
                            {detail.label}
                          </div>
                          <div className="mt-1 text-foreground">
                            {detail.value}
                          </div>
                        </div>
                      </div>
                      {index < OrderDetails.length - 1 && <Separator />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button className="gap-2">
                <Truck className="h-4 w-4" />
                Track Order
              </Button>
              <Button variant="outline" className="gap-2">
                <Download className="h-4 w-4" />
                Download Invoice
              </Button>
            </div>
          </div>

          {/* Order Summary Column */}
          <div className="space-y-6">
            <Card>
              <CardHeader className="border-b">
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <Table>
                  <TableBody>
                    {OrderItems.map((item, index) => (
                      <TableRow key={index} className="hover:bg-accent/50">
                        <TableCell className="py-4">
                          <div className="flex items-center gap-4">
                            <div className="relative aspect-square h-12 w-12 overflow-hidden rounded-lg border">
                              <Image
                                src={item.imageSrc}
                                alt={item.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <div className="font-medium">{item.name}</div>
                              <div className="text-sm text-muted-foreground">
                                Qty: {item.quantity}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right font-medium">
                          {item.price}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>

                <div className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">$4,894.00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Discount</span>
                      <span className="font-medium text-green-500">
                        -$299.00
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium">$99.00</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Tax</span>
                      <span className="font-medium">$799.00</span>
                    </div>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between pt-2">
                    <span className="font-semibold text-foreground">Total</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-foreground">
                        $5,493.00
                      </span>
                      <Badge variant="secondary">USD</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="rounded-lg border p-4">
              <div className="flex items-center gap-4">
                <CheckCircle2 className="h-6 w-6 text-green-500" />
                <div>
                  <h3 className="font-medium text-foreground">
                    Payment Successful
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Your payment has been processed securely
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CalendarDays(props: React.SVGProps<SVGSVGElement>) {
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
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function MapPin(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
