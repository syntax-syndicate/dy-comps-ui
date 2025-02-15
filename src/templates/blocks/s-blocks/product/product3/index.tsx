"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Star, Info, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

const product = {
  name: "Everyday Ruck Snack",
  price: "$220",
  rating: 4,
  reviewCount: 1624,
  description:
    "Don't compromise on snack-carrying capacity with this lightweight and spacious bag. The drawstring top keeps all your favorite chips, crisps, fries, biscuits, crackers, and cookies secure.",
  image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  sizes: [
    {
      value: "18L",
      label: "18L",
      description: "Perfect for a reasonable amount of snacks.",
    },
    {
      value: "20L",
      label: "20L",
      description: "Enough room for a serious amount of snacks.",
    },
  ],
  breadcrumbs: [
    { name: "Travel", href: "#" },
    { name: "Bags", href: "#" },
  ],
};

export default function Component() {
  const [selectedSize, setSelectedSize] = useState(product?.sizes[0]?.value);

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center space-x-2 text-sm text-muted-foreground">
          {product.breadcrumbs.map((breadcrumb, index) => (
            <div key={breadcrumb.name} className="flex items-center">
              <Link
                href={breadcrumb.href}
                className="transition-colors hover:text-primary"
              >
                {breadcrumb.name}
              </Link>
              {index < product.breadcrumbs.length - 1 && (
                <span className="mx-2">/</span>
              )}
            </div>
          ))}
        </nav>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Product Image */}
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={600}
              className="h-full w-full object-cover"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight">
                {product.name}
              </h1>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold">{product.price}</span>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "size-5",
                          i < product.rating
                            ? "fill-primary text-primary"
                            : "fill-muted text-muted-foreground",
                        )}
                      />
                    ))}
                  </div>
                  <Link
                    href="#reviews"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {product.reviewCount} reviews
                  </Link>
                </div>
              </div>
            </div>

            <p className="text-base text-muted-foreground">
              {product.description}
            </p>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base">Size</Label>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <Button variant="ghost" size="sm" className="size-8 p-0">
                      <Info className="size-4" />
                      <span className="sr-only">Size guide</span>
                    </Button>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div className="text-sm">
                      <h4 className="mb-2 font-medium leading-none">
                        Size Guide
                      </h4>
                      <p>18L is perfect for day trips and casual use.</p>
                      <p>20L is ideal for longer trips and heavy packers.</p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
              </div>

              <RadioGroup
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="grid gap-4"
              >
                {product.sizes.map((size) => (
                  <div key={size.value}>
                    <RadioGroupItem
                      value={size.value}
                      id={size.value}
                      className="peer sr-only"
                    />
                    <Label
                      htmlFor={size.value}
                      className={cn(
                        "flex flex-col space-y-1 rounded-lg border p-4",
                        "cursor-pointer transition-all hover:bg-accent",
                        "peer-data-[state=checked]:border-primary",
                        "[&:has([data-state=checked])]:border-primary",
                      )}
                    >
                      <span className="font-medium">{size.label}</span>
                      <span className="text-sm text-muted-foreground">
                        {size.description}
                      </span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="flex items-center text-sm text-muted-foreground">
                <Check className="mr-2 size-4 text-primary" />
                In stock and ready to ship
              </div>
              <Button size="lg" className="w-full">
                Add to bag
              </Button>
              <div className="flex items-center justify-center space-x-2 text-sm">
                <Badge variant="secondary" className="rounded-full">
                  <Check className="mr-1 size-3" />
                  Lifetime Guarantee
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
