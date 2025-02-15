"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Minus, Plus, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const product = {
  name: "Adjective Attire | T-shirt",
  originalPrice: 16,
  price: 12,
  rating: 4,
  totalReviews: 10,
  sizes: ["SM", "MD", "LG", "XL"],
  colors: [
    { name: "Gray", class: "bg-gray-400" },
    { name: "White", class: "bg-white" },
    { name: "Black", class: "bg-black" },
  ],
  description: [
    "A versatile t-shirt is a wardrobe essential.",
    "Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.",
    "Easy to care for. Machine-wash and dry on low heat.",
    "Customize with your own designs, paintings, or embroidery.",
  ],
  ratingDistribution: [
    { stars: 5, percentage: 66 },
    { stars: 4, percentage: 33 },
    { stars: 3, percentage: 16 },
    { stars: 2, percentage: 8 },
    { stars: 1, percentage: 6 },
  ],
  images: [
    {
      src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Gray t-shirt front view",
    },
    {
      src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "White t-shirt front view",
    },
    {
      src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Black t-shirt front view",
    },
    {
      src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Model wearing black t-shirt",
    },
    {
      src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Model wearing black t-shirt",
    },
  ],
};

export default function Component() {
  const [selectedSize, setSelectedSize] = useState("MD");
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <div className="container mx-auto py-16">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex gap-4">
          <div className="flex flex-col gap-2">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(image)}
                className={`relative aspect-square w-20 overflow-hidden rounded-lg border-2 ${
                  selectedImage === image
                    ? "border-primary"
                    : "border-transparent"
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
          <div className="relative aspect-[4/5] flex-grow overflow-hidden rounded-lg bg-muted">
            <Image
              src={selectedImage?.src ?? ""}
              alt={selectedImage?.alt ?? ""}
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl font-bold">${product.price}</span>
              <span className="text-lg text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
              <Badge variant="secondary">25% OFF</Badge>
            </div>
            <div className="mt-2 flex items-center gap-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`size-5 ${
                      i < product.rating
                        ? "fill-primary text-primary"
                        : "fill-muted text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                ({product.totalReviews} reviews)
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h2 className="mb-3 text-sm font-medium">Color</h2>
              <RadioGroup
                value={selectedColor?.name}
                onValueChange={(value) =>
                  setSelectedColor(
                    product.colors.find((c) => c.name === value) ??
                      product.colors[0],
                  )
                }
                className="flex gap-2"
              >
                {product.colors.map((color) => (
                  <div key={color.name}>
                    <RadioGroupItem
                      value={color.name}
                      id={`color-${color.name}`}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={`color-${color.name}`}
                      className={`block size-8 rounded-full border-2 ${color.class} cursor-pointer ${
                        selectedColor?.name === color.name
                          ? "border-primary"
                          : "border-muted hover:border-primary"
                      }`}
                    >
                      <span className="sr-only">{color.name}</span>
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <div className="mb-3 flex items-center justify-between">
                <h2 className="text-sm font-medium">Size</h2>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="link" className="h-auto p-0 text-primary">
                      Size guide
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Size Guide</DialogTitle>
                      <DialogDescription>
                        Measurements are in inches. For the best fit, measure
                        your body and compare to the size chart below.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid grid-cols-5 gap-4 text-center">
                      <div className="font-bold">Size</div>
                      <div className="font-bold">Chest</div>
                      <div className="font-bold">Waist</div>
                      <div className="font-bold">Hips</div>
                      <div className="font-bold">Length</div>
                      {product.sizes.map((size) => (
                        <>
                          <div>{size}</div>
                          <div>{36 + product.sizes.indexOf(size) * 2}</div>
                          <div>{30 + product.sizes.indexOf(size) * 2}</div>
                          <div>{38 + product.sizes.indexOf(size) * 2}</div>
                          <div>{27 + product.sizes.indexOf(size)}</div>
                        </>
                      ))}
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              <RadioGroup
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="flex flex-wrap gap-2"
              >
                {product.sizes.map((size) => (
                  <div key={size}>
                    <RadioGroupItem
                      value={size}
                      id={`size-${size}`}
                      className="sr-only"
                    />
                    <Label
                      htmlFor={`size-${size}`}
                      className={`flex size-10 cursor-pointer items-center justify-center rounded-full border-2 text-sm font-medium ${
                        selectedSize === size
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-muted hover:border-primary"
                      }`}
                    >
                      {size}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center rounded-md border">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(-1)}
                >
                  <Minus className="size-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleQuantityChange(1)}
                >
                  <Plus className="size-4" />
                </Button>
              </div>
              <Button className="flex-1" size="lg">
                Add to cart
              </Button>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon">
                      <Share2 className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share this product</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

            <div className="space-y-4">
              <h2 className="font-medium">About the item</h2>
              <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                {product.description.map((text, index) => (
                  <li key={index}>{text}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="font-medium">Customer Reviews</h2>
                <Button variant="link" className="h-auto p-0">
                  Read all {product.totalReviews} reviews
                </Button>
              </div>
              <div className="space-y-2">
                {product.ratingDistribution.map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-2">
                    <span className="w-6 text-sm">{rating.stars}.0</span>
                    <Progress value={rating.percentage} className="h-2" />
                    <span className="w-8 text-sm text-muted-foreground">
                      {rating.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
