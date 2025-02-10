"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface CartItem {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
}

export default function ShoppingCartSidebar() {
  const cartItems: CartItem[] = [
    {
      id: "1",
      name: "Adventure Hip Pack",
      variant: "Sunset Orange",
      price: 90,
      quantity: 1,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: "2",
      name: "Explorer Daypack",
      variant: "Ocean Blue",
      price: 32,
      quantity: 1,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      id: "3",
      name: "Urban Commuter Tote",
      variant: "Monochrome",
      price: 140,
      quantity: 1,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  return (
    <section className="container flex items-center justify-center py-16">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">View Cart</Button>
        </SheetTrigger>
        <SheetContent className="flex w-full flex-col p-0 sm:max-w-lg">
          <SheetHeader className="border-b p-6">
            <SheetTitle className="text-lg font-semibold">
              Shopping cart
            </SheetTitle>
          </SheetHeader>

          <div className="flex flex-1 flex-col overflow-hidden">
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <div className="space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative h-24 w-24 overflow-hidden rounded-md bg-muted">
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
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h3 className="font-medium text-foreground">
                          {item.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.variant}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm">Qty {item.quantity}</p>
                        <Button
                          variant="link"
                          className="h-auto p-0 text-sm text-primary"
                        >
                          Remove
                        </Button>
                      </div>
                      <p className="font-medium">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Shipping and taxes calculated at checkout.
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
        </SheetContent>
      </Sheet>
    </section>
  );
}
