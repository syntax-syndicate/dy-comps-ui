"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, ShoppingCart, Heart } from "lucide-react";
import Image from "next/image";

export default function WideDesignProductCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-4xl overflow-hidden">
        <CardContent className="p-0">
          <div className="flex flex-col md:flex-row">
            <div className="relative aspect-square w-full md:w-2/5">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Premium Wireless Headphones"
                fill
                className="object-cover"
              />
              <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">
                New Arrival
              </Badge>
            </div>
            <div className="flex w-full flex-col justify-between p-6 md:w-3/5">
              <div>
                <div className="flex items-start justify-between">
                  <h2 className="mb-2 text-2xl font-bold text-card-foreground">
                    Premium Wireless Headphones
                  </h2>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Add to favorites"
                  >
                    <Heart className="size-6" />
                  </Button>
                </div>
                <p className="mb-4 text-sm text-muted-foreground">
                  Experience crystal-clear audio with our latest
                  noise-cancelling technology. Perfect for music enthusiasts and
                  professionals alike.
                </p>
                <div className="mb-4 flex items-center">
                  <div className="mr-2 flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-5 fill-primary text-primary"
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    (128 reviews)
                  </span>
                </div>
                <ul className="mb-6 space-y-2 text-sm text-muted-foreground">
                  <li>• 40mm dynamic drivers for deep, rich sound</li>
                  <li>• Active noise cancellation</li>
                  <li>• 30-hour battery life</li>
                  <li>• Comfortable over-ear design</li>
                </ul>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-card-foreground">
                    $299.99
                  </span>
                  <span className="ml-2 text-sm text-muted-foreground">
                    Free shipping
                  </span>
                </div>
                <Button className="w-1/2" size="lg">
                  <ShoppingCart className="mr-2 size-5" />
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
