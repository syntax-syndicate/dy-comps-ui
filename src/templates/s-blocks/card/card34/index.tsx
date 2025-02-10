"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

export default function FrameWithinFrameCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="relative w-full max-w-md bg-secondary p-8">
        {/* Corner accents */}
        <div className="absolute left-2 top-2 size-4 border-l-2 border-t-2 border-primary"></div>
        <div className="absolute right-2 top-2 size-4 border-r-2 border-t-2 border-primary"></div>
        <div className="absolute bottom-2 left-2 size-4 border-b-2 border-l-2 border-primary"></div>
        <div className="absolute bottom-2 right-2 size-4 border-b-2 border-r-2 border-primary"></div>

        <Card className="overflow-hidden">
          <CardContent className="p-6">
            <div className="relative mb-4 aspect-square">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Elegant Watch"
                fill
                className="object-cover"
              />
            </div>
            <h2 className="mb-2 text-xl font-semibold text-card-foreground">
              Elegant Watch
            </h2>
            <p className="text-sm text-muted-foreground">
              Timeless design meets modern functionality
            </p>
          </CardContent>
          <CardFooter className="flex items-center justify-between bg-muted p-4 pl-0">
            <Button>Add to Cart</Button>
          </CardFooter>
        </Card>

        {/* Floating price tag */}
        <div className="absolute -right-4 -top-4 rounded-full bg-primary px-4 py-2 text-primary-foreground shadow-lg">
          <span className="text-lg font-bold">$299.99</span>
        </div>
      </Card>
    </div>
  );
}
