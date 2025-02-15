"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Heart, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const product = {
  name: "Leather Jacket",
  subtitle: "Special Black Edition",
  price: 80.0,
  rating: 4.8,
  reviews: 1624,
  soldCount: 1250,
  inStock: 750,
  description:
    "Elevate your outerwear collection with the Leather Jacket Special Black Edition. Meticulously crafted for the discerning individual, this jacket seamlessly fuses edgy aesthetics with premium quality, making it a standout piece in any wardrobe.",
  sizes: ["S", "M", "L", "XL", "2XL"],
  sleeveTypes: [
    {
      name: "Half Sleeve",
      description:
        "Stay cool and casual with our Half Sleeve collection – the perfect blend of comfort and style for any occasion",
    },
    {
      name: "Full Sleeve",
      description:
        "Wrap yourself in timeless sophistication with our Full Sleeve collection – where comfort meets elegance",
    },
  ],
  images: [
    {
      src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Leather jacket front view",
    },
    {
      src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Leather jacket side view",
    },
    {
      src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Leather jacket back view",
    },
    {
      src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Leather jacket detail view",
    },
  ],
};

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState(product?.sizes[1]);
  const [selectedSleeve, setSelectedSleeve] = useState(
    product?.sleeveTypes[1]?.name,
  );
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <div className="container mx-auto py-16">
      <div className="space-y-8">
        {/* Image Gallery */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="relative md:col-span-2">
            <Badge className="absolute right-4 top-4 bg-primary text-primary-foreground">
              Special Edition
            </Badge>
            <Image
              src={product?.images[0]?.src ?? ""}
              alt={product?.images[0]?.alt ?? ""}
              width={800}
              height={600}
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <Image
              src={product?.images[1]?.src ?? ""}
              alt={product?.images[1]?.alt ?? ""}
              width={400}
              height={300}
              className="h-auto w-full rounded-lg object-cover"
            />
            <Image
              src={product?.images[2]?.src ?? ""}
              alt={product?.images[2]?.alt ?? ""}
              width={400}
              height={300}
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product?.name}</h1>
            <p className="text-2xl text-muted-foreground">
              {product?.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-5 ${
                    i < Math.floor(product?.rating)
                      ? "fill-primary text-primary"
                      : "stroke-muted-foreground text-muted"
                  }`}
                />
              ))}
              <span className="ml-2 text-sm text-muted-foreground">
                {product?.rating}
              </span>
            </div>
            <span className="text-sm text-muted-foreground">
              {product?.reviews} Reviews
            </span>
            <span className="text-sm text-muted-foreground">
              {product?.soldCount} Sold
            </span>
            <span className="text-sm text-primary">
              {product?.inStock} In Stock
            </span>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-secondary/50 p-6">
            <div className="flex items-center gap-4">
              <span className="text-3xl font-bold">
                ${product?.price.toFixed(2)}
              </span>
              <Button variant="outline" size="icon">
                <Heart className="size-4" />
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                >
                  <Minus className="size-4" />
                </Button>
                <Input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="mx-2 w-16 text-center"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus className="size-4" />
                </Button>
              </div>
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                Buy Now
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="mb-3 text-sm font-medium">Size (kg)</h3>
              <RadioGroup
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="flex gap-2"
              >
                {product?.sizes.map((size) => (
                  <div key={size}>
                    <RadioGroupItem
                      value={size}
                      id={`size-${size}`}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={`size-${size}`}
                      className={`flex size-12 cursor-pointer items-center justify-center rounded-full border text-sm font-medium ${
                        selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-muted bg-background hover:bg-secondary"
                      }`}
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-medium">Sleeve</h3>
              <RadioGroup
                value={selectedSleeve}
                onValueChange={setSelectedSleeve}
                className="grid grid-cols-2 gap-4"
              >
                {product?.sleeveTypes.map((sleeve) => (
                  <div key={sleeve.name}>
                    <RadioGroupItem
                      value={sleeve.name}
                      id={`sleeve-${sleeve.name}`}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={`sleeve-${sleeve.name}`}
                      className={`block cursor-pointer rounded-lg border p-4 ${
                        selectedSleeve === sleeve.name
                          ? "border-primary bg-primary/5"
                          : "border-muted bg-background hover:bg-secondary"
                      }`}
                    >
                      <span
                        className={`font-medium ${
                          selectedSleeve === sleeve.name ? "text-primary" : ""
                        }`}
                      >
                        {sleeve.name}
                      </span>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {sleeve.description}
                      </p>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>

          <p className="text-muted-foreground">{product?.description}</p>
        </div>
      </div>
    </div>
  );
}
