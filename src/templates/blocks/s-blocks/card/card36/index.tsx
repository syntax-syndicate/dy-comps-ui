"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock, ShoppingCart } from "lucide-react";
import Image from "next/image";

export default function PromotionalProductCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-sm overflow-hidden">
        <div className="relative">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Stylish Smartwatch"
            width={400}
            height={300}
            className="w-full object-cover"
          />
          <Badge className="absolute left-4 top-4 bg-destructive px-2 py-1 text-destructive-foreground">
            30% OFF
          </Badge>
        </div>
        <CardContent className="p-6">
          <h2 className="mb-2 text-2xl font-bold text-card-foreground">
            Stylish Smartwatch
          </h2>
          <div className="mb-4 flex items-baseline">
            <span className="mr-2 text-3xl font-bold">$139.99</span>
            <span className="text-lg text-muted-foreground line-through">
              $199.99
            </span>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">
            Track your fitness, receive notifications, and stay connected with
            our latest smartwatch model.
          </p>
          <div className="mb-4 flex items-center text-muted-foreground">
            <Clock className="mr-2 size-4" />
            <span className="text-sm">Sale ends in 2 days</span>
          </div>
        </CardContent>
        <CardFooter className="bg-muted p-6">
          <Button className="w-full" size="lg">
            <ShoppingCart className="mr-2 size-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
