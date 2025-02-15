"use client";

import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartItem {
  id: string;
  name: string;
  color: string;
  size: string;
  price: number;
  image: string;
  inStock: boolean;
  shippingEstimate?: string;
}

export default function ShoppingCart() {
  const cartItems: CartItem[] = [
    {
      id: "1",
      name: "Signature Art Collection Tee",
      color: "Sage Mist",
      size: "Medium",
      price: 32.0,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      inStock: true,
    },
    {
      id: "2",
      name: "Essential Cotton Blend Tee",
      color: "Smoke Grey",
      size: "Large",
      price: 32.0,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      inStock: false,
      shippingEstimate: "Will ship in 7-8 weeks",
    },
    {
      id: "3",
      name: "Classic Comfort Tee",
      color: "Desert Gold",
      size: "Large",
      price: 32.0,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      inStock: true,
    },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="container mx-auto max-w-2xl p-6">
      <h1 className="mb-8 text-2xl font-semibold text-foreground">
        Shopping Cart
      </h1>

      <div className="space-y-8">
        {cartItems.map((item) => (
          <div key={item.id} className="flex gap-4 border-b pb-8">
            <div className="relative aspect-square w-24 overflow-hidden rounded-md bg-muted">
              <Image
                src={
                  item.image ||
                  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                }
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex justify-between">
                <div>
                  <h3 className="font-medium text-foreground">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">{item.color}</p>
                  <p className="text-sm text-muted-foreground">{item.size}</p>
                </div>
                <span className="font-medium">${item.price.toFixed(2)}</span>
              </div>

              {item.inStock ? (
                <p className="flex items-center gap-1 text-sm text-green-600">
                  <Check className="h-4 w-4" />
                  In stock
                </p>
              ) : (
                <p className="text-sm text-muted-foreground">
                  {item.shippingEstimate}
                </p>
              )}

              <Button
                variant="link"
                className="h-auto p-0 text-sm text-primary"
              >
                Remove
              </Button>
            </div>
          </div>
        ))}

        <div className="space-y-4 pt-4">
          <div className="flex justify-between text-base font-medium">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Shipping and taxes will be calculated at checkout.
          </p>
          <Button className="w-full" size="lg">
            Checkout
          </Button>
          <Button variant="outline" className="w-full" size="lg">
            Continue Shopping
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
