"use client";

import { Heart } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export default function ProductCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-[280px] overflow-hidden border border-opacity-50 bg-gradient-to-b from-background to-background/80">
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Product Image"
              width={280}
              height={280}
              className="object-cover"
            />
          </div>
          <div className="space-y-1 p-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Gucci T Shirt</h3>
              <span className="text-lg">$29.99</span>
            </div>
            <p className="text-sm text-muted-foreground">Apparel</p>
          </div>
        </CardContent>
        <CardFooter className="flex gap-2 p-4 pt-0">
          <Button
            variant="outline"
            size="icon"
            className="size-10 shrink-0 rounded-full"
          >
            <Heart className="size-4" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
          <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
