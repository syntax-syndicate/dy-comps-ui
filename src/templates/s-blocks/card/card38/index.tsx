"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShoppingCart, Zap, Cpu, Battery } from "lucide-react";
import Image from "next/image";

export default function ModernWideProductCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-5xl overflow-hidden bg-gradient-to-br from-card to-card/80">
        <CardContent className="p-6">
          <div className="flex flex-col gap-8 lg:flex-row">
            <div className="w-full lg:w-2/5">
              <div className="relative mb-4 aspect-[4/3] overflow-hidden rounded-lg">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Ultra-Slim Laptop"
                  fill
                  className="object-cover"
                />
                <Badge className="absolute left-4 top-4 bg-primary text-primary-foreground">
                  New Model
                </Badge>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="relative aspect-square overflow-hidden rounded-md"
                  >
                    <Image
                      src={`https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg`}
                      alt={`Product view ${i}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="flex w-full flex-col justify-between lg:w-3/5">
              <div>
                <h2 className="mb-2 text-3xl font-bold text-card-foreground">
                  Ultra-Slim Laptop Pro
                </h2>
                <p className="mb-4 text-lg font-semibold text-primary">
                  $1,299.99
                </p>
                <p className="mb-6 text-sm text-muted-foreground">
                  Experience unparalleled performance in an incredibly thin and
                  light design. Perfect for professionals and creatives on the
                  go.
                </p>
                <Tabs defaultValue="specs" className="mb-6">
                  <TabsList>
                    <TabsTrigger value="specs">Specs</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                  </TabsList>
                  <TabsContent value="specs" className="mt-4">
                    <ul className="grid grid-cols-2 gap-2 text-sm">
                      <li className="flex items-center">
                        <Cpu className="mr-2 size-4" /> Intel Core i7
                      </li>
                      <li className="flex items-center">
                        <Zap className="mr-2 size-4" /> 16GB RAM
                      </li>
                      <li className="flex items-center">512GB SSD</li>
                      <li className="flex items-center">14&quot; 4K Display</li>
                    </ul>
                  </TabsContent>
                  <TabsContent value="features" className="mt-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Thunderbolt 4 ports</li>
                      <li>• Fingerprint sensor</li>
                      <li>• Backlit keyboard</li>
                      <li>• AI-enhanced webcam</li>
                    </ul>
                  </TabsContent>
                </Tabs>
                <div className="mb-6 flex items-center">
                  <Battery className="mr-2 size-5 text-primary" />
                  <span className="mr-2 text-sm font-medium">
                    Battery Life:
                  </span>
                  <Slider
                    defaultValue={[75]}
                    max={100}
                    step={1}
                    className="w-[60%]"
                  />
                  <span className="ml-2 text-sm font-medium">18 hrs</span>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="w-full sm:w-2/3" size="lg">
                  <ShoppingCart className="mr-2 size-5" />
                  Add to Cart
                </Button>
                <Button variant="outline" className="w-full sm:w-1/3" size="lg">
                  Compare
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
