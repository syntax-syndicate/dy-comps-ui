"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
];

interface RecommendedProduct {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
}

const RecommendedProducts: RecommendedProduct[] = [
  {
    name: "DY-Comps Quantum Laptop",
    description:
      "A high-performance laptop designed for professionals, featuring a 4K display and 12-hour battery life.",
    price: "$2,499",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "DY-Comps Nova Smartphone",
    description:
      "A flagship smartphone with a 120Hz AMOLED display, 5G connectivity, and 48MP camera.",
    price: "$799",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function OrderConfirmationWithRecommendations() {
  return (
    <section className="bg-background py-8 antialiased md:py-16">
      <div className="mx-auto max-w-3xl px-4 2xl:px-0">
        <h2 className="mb-2 text-xl font-semibold text-foreground sm:text-2xl">
          Thanks for choosing DY-Comps!
        </h2>
        <p className="mb-6 text-muted-foreground md:mb-8">
          Your order is being processed by our advanced AI inventory system.
          You'll receive real-time shipping updates and personalized product
          optimization tips via email.
        </p>
        <div className="mb-6 flex items-center space-x-4 md:mb-8">
          <Button>Track your order</Button>
          <Button variant="outline">Explore more tech</Button>
        </div>
        <Card className="mb-6 md:mb-8">
          <CardContent className="divide-y divide-border p-4 md:p-6">
            {OrderDetails.map((detail, index) => (
              <dl
                key={index}
                className="items-center justify-between gap-4 py-3 sm:flex"
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
        <h3 className="mb-4 text-xl font-semibold text-foreground">
          Recommended for you
        </h3>
        <div className="grid gap-6 sm:grid-cols-2">
          {RecommendedProducts.map((product, index) => (
            <Card key={index} className="hover:shadow-md">
              <CardContent className="p-4 md:p-6">
                <div className="h-60 w-full">
                  <Image
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt={`${product.name} image`}
                    width={300}
                    height={300}
                    className="h-auto max-h-full w-full"
                  />
                </div>
                <h4 className="mb-2 mt-6 text-lg font-semibold leading-tight text-foreground">
                  {product.name}
                </h4>
                <p className="mb-4 text-muted-foreground">
                  {product.description}
                </p>
                <p className="text-xl font-bold text-foreground">
                  {product.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
