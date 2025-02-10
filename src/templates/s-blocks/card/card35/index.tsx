"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function DiagonalCompositionCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="relative w-full max-w-md overflow-hidden bg-card">
        <CardContent className="p-6">
          <div className="flex h-[400px] flex-col">
            {/* Title in top-left corner */}
            <h2 className="mb-4 self-start text-2xl font-bold text-card-foreground">
              Sleek Watch
            </h2>

            {/* Tilted product image */}
            <div className="relative -mx-6 flex-grow -rotate-6 scale-110 transform overflow-hidden">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Sleek Watch"
                fill
                className="object-cover"
              />
            </div>

            {/* Price in bottom-right corner */}
            <p className="mt-4 self-end text-2xl font-bold">$199.99</p>

            {/* Action buttons aligned horizontally */}
            <div className="mt-6 flex justify-between space-x-4">
              <Button variant="outline" className="flex-1">
                Details
              </Button>
              <Button className="flex-1">Add to Cart</Button>
            </div>
          </div>
        </CardContent>

        {/* Diagonal background accent */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
      </Card>
    </div>
  );
}
