"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import {
  Star,
  Truck,
  RotateCcw,
  Settings2,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";

const productImages = [
  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
];

function Carousel({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () =>
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  const next = () => setCurrentIndex((currentIndex + 1) % images.length);

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <Image
                src={src}
                alt={`Product image ${index + 1}`}
                width={600}
                height={600}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-2 top-1/2 -translate-y-1/2"
        onClick={prev}
      >
        <ChevronLeft className="size-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2"
        onClick={next}
      >
        <ChevronRight className="size-4" />
      </Button>
    </div>
  );
}

export default function Component() {
  return (
    <div className="container bg-background py-16 text-foreground">
      <Card className="mx-auto max-w-7xl">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Left Column - Product Image */}
            <div className="space-y-4">
              <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
                <Image
                  src={productImages[0] ?? ""}
                  alt="PlayStation 5 Console"
                  fill
                  className="object-contain p-4"
                />
              </div>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="w-full">
                    Open gallery
                  </Button>
                </DialogTrigger>
                <DialogContent className="p-10">
                  <Carousel images={productImages} />
                </DialogContent>
              </Dialog>
            </div>

            {/* Middle Column - Product Details */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge>Save $50.00</Badge>
                <h1 className="text-3xl font-bold tracking-tight">
                  PlayStation®5 Console
                </h1>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-4 fill-primary" />
                    ))}
                  </div>
                  <Separator orientation="vertical" className="h-4" />
                  <Link
                    href="#reviews"
                    className="text-sm text-muted-foreground hover:underline"
                  >
                    34.5k Reviews
                  </Link>
                </div>
              </div>

              <div className="flex gap-2">
                <Badge variant="secondary">
                  <Truck className="mr-2 size-4" />
                  Free delivery
                </Badge>
                <Badge variant="secondary">
                  <RotateCcw className="mr-2 size-4" />
                  Free returns
                </Badge>
              </div>

              <div className="space-y-4">
                <h2 className="text-lg font-semibold">Quick description:</h2>
                <p className="text-sm text-muted-foreground">
                  The PS5® console unleashes new gaming possibilities that you
                  never anticipated. Experience lightning fast loading with an
                  ultra-high speed SSD, deeper immersion with support for haptic
                  feedback, adaptive triggers, and 3D Audio, and an all-new
                  generation of incredible PlayStation® games.
                </p>
                <p className="text-sm text-muted-foreground">
                  Powered by an eight-core AMD Zen 2 CPU and custom AMD Radeon
                  GPU, the PS5 is offered in two models: with and without a 4K
                  Blu-ray drive. Supporting a 120Hz video refresh, the PS5 is
                  more powerful than the PS4 Pro. Rather than GDDR5 memory,
                  GDDR6 is supported with capacity doubled from 8 to 16GB.
                  Storage is an NVMe 825GB SSD rather than a hard drive.
                </p>
              </div>
            </div>

            {/* Right Column - Pricing and Purchase Options */}
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="text-3xl font-bold">Starting from $499</div>
                <p className="text-sm text-muted-foreground">
                  Flexible payments available with PayPal and VISA or
                  Mastercard.
                </p>
              </div>

              <div className="space-y-2">
                <Button className="w-full" variant="outline">
                  <Settings2 className="mr-2 size-4" />
                  Customize your device
                </Button>
                <Button className="w-full">
                  <ShoppingCart className="mr-2 size-4" />
                  Buy now
                </Button>
              </div>

              <p className="text-sm text-muted-foreground">
                Available at a lower price from{" "}
                <Link href="#" className="text-primary hover:underline">
                  other sellers
                </Link>
                .
              </p>

              <Separator />

              <div className="space-y-2 text-sm">
                {[
                  "Due to high demand, there is a limit of 1 console per order.",
                  "Only 1 DualSense included.",
                  "PS5 consoles will ship separately.",
                  "A signature will be required upon delivery for this product.",
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Check className="size-4 text-primary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
