"use client";

import Image from "next/image";
import { Check, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";

interface CartItem {
  id: string;
  name: string;
  color: string;
  size?: string;
  price: number;
  image: string;
  inStock: boolean;
  quantity: number;
}

export default function ShoppingCart() {
  const cartItems: CartItem[] = [
    {
      id: "1",
      name: "Wilderness Explorer Tumbler",
      color: "Alpine White",
      price: 35.0,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      inStock: true,
      quantity: 1,
    },
    {
      id: "2",
      name: "Everyday Essentials Tee",
      color: "Desert Sand",
      size: "Large",
      price: 32.0,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      inStock: true,
      quantity: 1,
    },
    {
      id: "3",
      name: "Urban Comfort Tee",
      color: "Midnight Black",
      size: "Large",
      price: 32.0,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      inStock: false,
      quantity: 1,
    },
  ];

  const subtotal = 99.0;
  const shipping = 5.0;
  const tax = 8.32;
  const total = subtotal + shipping + tax;

  return (
    <div className="container mx-auto max-w-3xl p-6">
      <h1 className="mb-8 text-2xl font-semibold text-foreground">
        Shopping Cart
      </h1>

      <div className="space-y-6">
        {cartItems.map((item) => (
          <Card key={item.id}>
            <CardContent className="flex gap-4 p-4">
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
              <div className="flex-1 space-y-2">
                <div className="flex justify-between">
                  <div>
                    <h3 className="font-medium text-foreground">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.color}
                    </p>
                    {item.size && (
                      <p className="text-sm text-muted-foreground">
                        {item.size}
                      </p>
                    )}
                  </div>
                  <p className="font-medium">${item.price.toFixed(2)}</p>
                </div>

                <div className="flex items-center justify-between">
                  <Select defaultValue={item.quantity.toString()}>
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
                  <Button variant="link" className="h-auto p-0 text-primary">
                    Remove
                  </Button>
                </div>

                {item.inStock ? (
                  <p className="flex items-center gap-1 text-sm text-green-600">
                    <Check className="h-4 w-4" />
                    In stock
                  </p>
                ) : (
                  <p className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    Ships in 3-4 weeks
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        ))}

        <Card className="mt-8">
          <CardContent className="space-y-4 p-4">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <Separator />
              <div className="flex justify-between font-medium">
                <span>Order total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button className="w-full" size="lg">
              Checkout
            </Button>

            <div className="text-center">
              <Button variant="link" className="text-primary">
                Continue Shopping
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
