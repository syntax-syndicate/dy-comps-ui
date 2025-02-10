"use client";

import { Star, Heart } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

export default function ProductCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-sm overflow-hidden bg-card text-card-foreground">
        <CardContent className="p-0">
          <div className="relative">
            <Badge className="absolute right-3 top-3 bg-background/80 backdrop-blur-sm">
              Clothing
            </Badge>
            <div className="relative aspect-square">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Red baseball cap"
                width={280}
                height={280}
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-3 p-4">
            <h3 className="text-xl font-semibold">Red Hat</h3>
            <div className="flex items-center gap-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <Star key={i} className="size-4 fill-primary text-primary" />
              ))}
              <Star className="size-4 fill-primary/50 text-primary" />
              <span className="ml-1 text-sm text-muted-foreground">(4.5)</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Decor Wooden Stool, a stylish, versatile piece with natural wood
              finish.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">$28.99</span>
              <Badge variant="secondary">In Stock</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Input type="number" min="1" defaultValue="1" className="w-20" />
              <Button className="w-full">Add to Cart</Button>
            </div>
          </div>
        </CardContent>
        <CardFooter className="grid grid-cols-2 gap-2 p-4 pt-0">
          <Button variant="outline" className="w-full">
            <Heart className="mr-2 size-4" />
            Add to Wishlist
          </Button>
          <Button variant="secondary" className="w-full">
            View Details
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
