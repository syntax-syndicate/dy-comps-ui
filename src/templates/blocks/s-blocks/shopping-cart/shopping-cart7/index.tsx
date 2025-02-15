"use client";

import Image from "next/image";
import { Check, HelpCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface CartItem {
  id: string;
  name: string;
  color: string;
  size?: string;
  price: number;
  image: string;
  inStock: boolean;
  shippingDelay?: string;
}

export default function ShoppingCart() {
  const cartItems: CartItem[] = [
    {
      id: "1",
      name: "Everyday Comfort Tee",
      color: "Desert Sand",
      size: "Large",
      price: 32.0,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      inStock: true,
    },
    {
      id: "2",
      name: "Everyday Comfort Tee",
      color: "Midnight",
      size: "Large",
      price: 32.0,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      inStock: false,
      shippingDelay: "Ships in 3-4 weeks",
    },
    {
      id: "3",
      name: "Wilderness Insulated Flask",
      color: "Pearl",
      price: 35.0,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      inStock: true,
    },
  ];

  const subtotal = 99.0;
  const shipping = 5.0;
  const tax = 8.32;
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <h1 className="mb-6 text-2xl font-semibold text-foreground">
            Shopping Cart
          </h1>

          <div className="space-y-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex gap-4 border-b pb-8">
                <div className="relative aspect-square w-32 overflow-hidden rounded-md bg-muted">
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
                  <div className="flex justify-between">
                    <div>
                      <h3 className="font-medium text-foreground">
                        {item.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.color} {item.size && `• ${item.size}`}
                      </p>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex items-center gap-4">
                    <Select defaultValue="1">
                      <SelectTrigger className="w-24">
                        <SelectValue placeholder="Quantity" />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4, 5].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <span className="font-medium">
                      ${item.price.toFixed(2)}
                    </span>
                  </div>
                  {item.inStock ? (
                    <p className="flex items-center gap-1 text-sm text-green-600">
                      <Check className="h-4 w-4" />
                      In stock
                    </p>
                  ) : (
                    <p className="flex items-center gap-1 text-sm text-muted-foreground">
                      {item.shippingDelay}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-lg font-semibold text-foreground">
            Order summary
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="text-muted-foreground">Shipping estimate</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Standard shipping rate</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <span>${shipping.toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="text-muted-foreground">Tax estimate</span>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <HelpCircle className="h-4 w-4 text-muted-foreground" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Calculated at checkout</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-medium">
                <span>Order total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <Button className="w-full" size="lg">
              Checkout
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
