"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

export default function MinimalProductCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-sm">
        <CardContent className="p-4">
          <div className="relative mb-4 aspect-square">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Minimal Watch"
              fill
              className="rounded-md object-cover"
            />
          </div>
          <h2 className="mb-1 text-lg font-semibold text-card-foreground">
            Minimal Watch
          </h2>
          <p className="mb-2 text-sm text-muted-foreground">
            Elegant timepiece for everyday wear
          </p>
          <p className="text-lg font-bold text-card-foreground">$129.99</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button className="w-full">Add to Cart</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
