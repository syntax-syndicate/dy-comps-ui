"use client";

import Image from "next/image";
import { Minus, Plus, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export default function ShoppingCartModal() {
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
      name: "iPad Air M2 Chip 256GB",
      price: 898,
      quantity: 1,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: "4",
      name: 'MacBook Pro 16" M2 Max',
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
    <section className="container flex items-center justify-center py-16">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Show shopping cart</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold">
              Shopping Cart
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="max-h-[400px] space-y-4 overflow-auto pr-2">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="relative h-16 w-16 overflow-hidden rounded-md bg-muted">
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
                  <div className="min-w-0 flex-1">
                    <h3 className="truncate text-sm font-medium text-foreground">
                      {item.name}
                    </h3>
                    <div className="mt-2 flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="outline"
                          size="icon"
                          className="h-7 w-7"
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      <span className="font-medium">${item.price}</span>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="coupon" />
              <label
                htmlFor="coupon"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Add coupon
              </label>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold">Order summary</h3>
              <div className="space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Original price</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-green-600">
                  <span>Savings</span>
                  <span>-${savings.toFixed(2)}</span>
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
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline">Continue Shopping</Button>
              <Button>Proceed to Checkout</Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
