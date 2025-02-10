"use client";

import * as React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  Instagram,
  Facebook,
  Twitter,
  MessageCircle,
  Check,
  Minus,
  Plus,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sizes = ["S", "M", "L", "XL"];

const features = [
  { icon: Check, text: "Branded shirt" },
  { icon: Check, text: "3 color shirt" },
  { icon: Check, text: "Pure Cotton Shirt with 60% as 40%" },
  { icon: Check, text: "All sizes available" },
  { icon: Check, text: "Comfortable fit" },
  { icon: Check, text: "Easy to care for" },
  { icon: Check, text: "Comfortable fit" },
  { icon: Check, text: "Easy to care for" },
];

export default function Component() {
  const [selectedSize, setSelectedSize] = React.useState("");
  const [quantity, setQuantity] = React.useState(2);

  const basePrice = 220;
  const totalPrice = basePrice * quantity;

  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Left Column - Images */}
        <div className="flex-1 space-y-4">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="White Light polka dots red top main view"
              fill
              className="object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-por relative overflow-hidden rounded-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="White Light polka dots red top side view"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="White Light polka dots red top back view"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right Column - Product Details */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold">
                  White Light polka dots red top
                </h1>
                <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                  #01 - Best seller
                </Badge>
              </div>
              <div className="flex gap-4">
                <Instagram className="size-6 cursor-pointer text-muted-foreground hover:text-primary" />
                <Facebook className="size-6 cursor-pointer text-muted-foreground hover:text-primary" />
                <Twitter className="size-6 cursor-pointer text-muted-foreground hover:text-primary" />
                <MessageCircle className="size-6 cursor-pointer text-muted-foreground hover:text-primary" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "size-4",
                      i < 4
                        ? "fill-yellow-400 text-yellow-400"
                        : "stroke-muted-foreground text-muted",
                    )}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">4.8</span>
              <span className="text-sm text-muted-foreground">
                (2.5k Reviews)
              </span>
              <Badge variant="secondary" className="ml-2">
                Pagedone
              </Badge>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Product Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <feature.icon className="size-4 text-primary" />
                    <span>{feature.text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Elevate your fashion game with our White Light Polka Dots Red
                Top, a delightful blend of classic charm and contemporary style.
                Perfect for a day out or a casual evening, this top effortlessly
                combines comfort with a touch of whimsy.
              </p>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Select Size</h2>
              <Button variant="ghost" className="text-primary">
                Size Guide <ChevronRight className="ml-1 size-4" />
              </Button>
            </div>
            <div className="flex gap-4">
              {sizes.map((size) => (
                <Button
                  key={size}
                  variant={selectedSize === size ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </Button>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              Refer to our size guide for accurate measurements and find the
              perfect fit for your style.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="mb-4 flex items-center justify-between">
                <div className="text-2xl font-bold">${basePrice}</div>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="size-4" />
                  </Button>
                  <span className="w-12 text-center">{quantity}</span>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="size-4" />
                  </Button>
                </div>
              </div>
              <div className="mb-4 flex items-center justify-between">
                <span className="text-muted-foreground">Total Price</span>
                <span className="text-xl font-bold">${totalPrice}</span>
              </div>
              <Button className="w-full" size="lg">
                Buy Now
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
