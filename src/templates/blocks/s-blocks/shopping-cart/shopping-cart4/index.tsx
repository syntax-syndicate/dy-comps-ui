"use client";

import Image from "next/image";
import { X, Minus, Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function ShoppingCartSidebar() {
  const cartItems: CartItem[] = [
    {
      id: "1",
      name: "Premium iPhone 15 Pro, 256GB, Titanium",
      price: 1797,
      quantity: 2,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: "2",
      name: "Xbox Series X, 1TB, Limited Edition",
      price: 599,
      quantity: 1,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: "3",
      name: "PlayStation 5 Digital Edition Bundle",
      price: 799,
      quantity: 1,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: "4",
      name: "Apple Watch SE 2nd Gen, 38mm",
      price: 299,
      quantity: 1,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: "5",
      name: 'iMac 24" Retina 4.5K, M3 Chip',
      price: 1799,
      quantity: 1,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const savings = 0;
  const storePickup = 99;
  const tax = 199;
  const total = subtotal - savings + storePickup + tax;

  return (
    <section className="container flex items-center justify-center py-16">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Show shopping cart</Button>
        </SheetTrigger>
        <SheetContent className="w-full sm:max-w-md">
          <SheetHeader className="space-y-4 border-b pb-4">
            <SheetTitle className="text-lg font-semibold">
              MY SHOPPING CART
            </SheetTitle>
            <Alert
              variant="default"
              className="border-primary/20 bg-primary/10"
            >
              <AlertDescription className="text-sm">
                You can have{" "}
                <span className="font-medium text-primary">free shipping</span>{" "}
                if you add products worth{" "}
                <span className="font-medium text-primary">$500</span> or more.{" "}
                <Button variant="link" className="h-auto p-0 text-primary">
                  How can I get this?
                </Button>
              </AlertDescription>
            </Alert>
          </SheetHeader>

          <div className="space-y-6 py-6">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="relative h-20 w-20 overflow-hidden rounded-lg bg-muted">
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
                <div className="flex-1 space-y-2">
                  <h3 className="text-sm font-medium leading-tight">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center rounded-md border">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="w-8 text-center text-sm">
                        {item.quantity}
                      </span>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Plus className="h-3 w-3" />
                      </Button>
                    </div>
                    <span className="font-medium">${item.price}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-auto p-0 text-muted-foreground"
                    >
                      <Heart className="mr-1 h-4 w-4" />
                      Move to Favorites
                    </Button>
                    <Button
                      variant="link"
                      size="sm"
                      className="h-auto text-destructive"
                    >
                      <X className="mr-1 h-4 w-4" />
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 border-t pt-6">
            <Button variant="outline" className="w-full text-primary" size="sm">
              Add coupon code
            </Button>

            <div className="space-y-1.5">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-green-600">Savings</span>
                <span className="text-green-600">${savings}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Store Pickup</span>
                <span>${storePickup}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax</span>
                <span>${tax}</span>
              </div>
              <Separator className="my-2" />
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="lg">
                Continue Shopping
              </Button>
              <Button size="lg">Checkout</Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}
