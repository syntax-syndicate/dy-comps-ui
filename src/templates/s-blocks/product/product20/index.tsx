import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Component() {
  return (
    <div className="flex items-center justify-center bg-background py-16">
      <Card className="w-full max-w-4xl overflow-hidden bg-card text-card-foreground">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-square bg-muted">
            <div className="absolute inset-0 m-4 rounded-lg border-2 border-primary" />
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Men's Ragged Waterproof Jacket"
              fill
              className="object-contain p-4"
            />
          </div>
          <div className="flex flex-col justify-between p-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Badge className="bg-primary text-primary-foreground">
                  New Arrival
                </Badge>
                <h1 className="text-2xl font-bold tracking-tight">
                  MEN&apos;S RAGGED WATERPROOF JACKET
                </h1>
              </div>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos,
                voluptatum dolorum! Laborum blanditiis consequatur, voluptates,
                sint enim fugiat saepe, dolor fugit, magnam explicabo eaque quas
                id quo porro dolorum facilis. Excepturi quod cupiditate nemo
                enim odit unde eveniet temporibus sapiente optio.
              </p>
            </div>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold">$59.99</span>
                  <span className="text-sm text-muted-foreground line-through">
                    $79.99
                  </span>
                </div>
                <Badge
                  variant="outline"
                  className="border-primary text-primary"
                >
                  25% OFF
                </Badge>
              </div>
              <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                BUY NOW
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
