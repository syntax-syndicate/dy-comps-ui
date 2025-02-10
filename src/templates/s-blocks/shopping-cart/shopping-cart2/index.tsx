"use client";

import Image from "next/image";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function ShoppingCart() {
  const cartItems: CartItem[] = [
    {
      id: "1",
      name: 'Premium iMac 27" Retina 5K Display',
      price: 1499,
      quantity: 1,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: "2",
      name: "iPhone 14 Pro Max 256GB",
      price: 1998,
      quantity: 2,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: "3",
      name: "iPad Air M1 Chip 256GB",
      price: 898,
      quantity: 1,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: "4",
      name: 'MacBook Pro 16" M2 Pro',
      price: 4499,
      quantity: 4,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: "5",
      name: "PlayStation 5 Digital Edition",
      price: 499,
      quantity: 1,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: "6",
      name: "Xbox Series X 1TB",
      price: 499,
      quantity: 1,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: "7",
      name: "Apple Watch SE 2nd Generation",
      price: 799,
      quantity: 2,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const savings = 299;
  const storePickup = 99;
  const tax = 799;
  const total = subtotal - savings + storePickup + tax;

  return (
    <div className="container mx-auto max-w-3xl p-6">
      <h1 className="mb-6 text-2xl font-semibold text-foreground">
        Shopping Cart
      </h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <CardContent className="p-4">
              <div className="flex items-center gap-4">
                <div className="relative h-16 w-16 overflow-hidden rounded-md bg-muted">
                  <Image
                    src={
                      item.image ||
                      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    }
                    alt={item.name}
                    fill
                    className="object-contain p-2"
                  />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="truncate text-sm font-medium text-foreground">
                    {item.name}
                  </h3>
                </div>
                <div className="flex items-center gap-3">
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-8 text-center text-sm">
                    {item.quantity}
                  </span>
                  <Button variant="outline" size="icon" className="h-8 w-8">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="min-w-[80px] text-right">
                  <span className="font-medium">${item.price}</span>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-muted-foreground"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="mt-8">
          <CardContent className="p-4">
            <h2 className="mb-4 text-lg font-medium">Order summary</h2>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Original price</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Savings</span>
                <span>-${savings.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Store Pickup</span>
                <span>${storePickup}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>${tax}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <Button variant="outline" className="w-full">
                Continue Shopping
              </Button>
              <Button className="w-full">Proceed to Checkout</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
