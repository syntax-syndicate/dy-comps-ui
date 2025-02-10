"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, ShoppingCart } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Apple Watch Series 7",
    description:
      "The most advanced Apple Watch yet with a larger, more durable screen and faster charging.",
    price: 399,
    rating: 4.8,
    reviews: 2457,
    colors: ["Black", "Silver", "Gold"],
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 2,
    name: "MacBook Pro M2",
    description:
      "Supercharged by M2 Pro or M2 Max, MacBook Pro takes its power and efficiency further than ever.",
    price: 1999,
    rating: 4.9,
    reviews: 1233,
    colors: ["Space Gray", "Silver"],
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function ProductCarousel() {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-8">
      <Carousel className="w-full">
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id}>
              <Card className="border">
                <CardContent className="p-0">
                  <div className="grid gap-6 md:grid-cols-2">
                    {/* Product Image */}
                    <div className="relative aspect-square">
                      <Image
                        src={
                          product.image ||
                          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                        }
                        alt={product.name}
                        fill
                        className="rounded-l-lg object-cover"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="space-y-6 p-6">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-semibold text-foreground">
                          {product.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {product.description}
                        </p>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "fill-muted text-muted-foreground"}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {product.rating} ({product.reviews} reviews)
                        </span>
                      </div>

                      {/* Price */}
                      <div className="text-3xl font-bold text-foreground">
                        ${product.price}
                      </div>

                      {/* Color Selection */}
                      <div className="space-y-3">
                        <Label>Color</Label>
                        <RadioGroup
                          defaultValue={product.colors[0]}
                          className="flex gap-2"
                        >
                          {product.colors.map((color) => (
                            <div
                              key={color}
                              className="flex items-center space-x-2"
                            >
                              <RadioGroupItem
                                value={color}
                                id={`${product.id}-${color}`}
                                className="peer sr-only"
                              />
                              <Label
                                htmlFor={`${product.id}-${color}`}
                                className="rounded-md border px-3 py-2 hover:border-primary peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5"
                              >
                                {color}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                      </div>

                      {/* Quantity Selection */}
                      <div className="space-y-3">
                        <Label>Quantity</Label>
                        <Select defaultValue="1">
                          <SelectTrigger className="w-24">
                            <SelectValue placeholder="Select quantity" />
                          </SelectTrigger>
                          <SelectContent>
                            {[1, 2, 3, 4, 5].map((num) => (
                              <SelectItem key={num} value={num.toString()}>
                                {num}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Add to Cart Button */}
                      <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to cart
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
