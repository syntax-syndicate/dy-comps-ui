"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Share2, Star, Plus, Minus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const product = {
  name: "Adjective Attire | T-shirt",
  brand: "Well-Versed Commerce",
  price: 30,
  originalPrice: 42,
  rating: 4.8,
  reviews: 87,
  likes: 100,
  sizes: ["SM", "MD", "LG", "XL"],
  colors: [
    { name: "Black", class: "bg-black" },
    { name: "Gray", class: "bg-gray-400" },
    { name: "Orange", class: "bg-orange-400" },
    { name: "Red", class: "bg-red-400" },
  ],
  images: [
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  ],
  description:
    "Elevate your casual style with our premium men's t-shirt. Crafted for comfort and designed with a modern fit, this versatile shirt is an essential addition to your wardrobe. The soft and breathable fabric ensures all-day comfort, making it perfect for everyday wear. Its classic crew neck and short sleeves offer a timeless look.",
  features: [
    "A gray t-shirt is a wardrobe essential because it is so versatile.",
    "Available in a wide range of sizes, from extra small to extra large, and even in tall and petite sizes.",
    "This is easy to care for. They can usually be machine-washed and dried on low heat.",
    "You can add your own designs, paintings, or embroidery to make it your own.",
  ],
  specifications: [
    { name: "Material", value: "100% Cotton" },
    { name: "Fit", value: "Regular" },
    { name: "Neck Style", value: "Crew Neck" },
    { name: "Sleeve Type", value: "Short Sleeve" },
    { name: "Care Instructions", value: "Machine Wash Cold, Tumble Dry Low" },
  ],
};

export default function Component() {
  const [selectedSize, setSelectedSize] = useState(product.sizes[1]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <div className="py-16 font-sans">
      <div className="container mx-auto">
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="top-0 w-full text-center lg:sticky">
            <div className="lg:h-[560px]">
              <Image
                src={mainImage ?? ""}
                alt="Product"
                width={500}
                height={560}
                className="h-full w-full rounded-md object-cover object-top lg:w-11/12"
              />
            </div>

            <div className="mx-auto mt-4 flex flex-wrap justify-center gap-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`relative size-16 overflow-hidden rounded-md ${mainImage === img ? "ring-2 ring-primary" : ""}`}
                >
                  <Image
                    src={img}
                    alt={`Product ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex flex-wrap items-start gap-4">
              <div>
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {product.brand}
                </p>
              </div>

              <div className="ml-auto flex flex-wrap gap-4">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Heart className="size-4 text-primary" />
                        <span className="sr-only">Add to favorites</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Add to favorites</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="icon">
                        <Share2 className="size-4" />
                        <span className="sr-only">Share</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Share this product</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>

            <hr className="my-8" />

            <div className="flex flex-wrap items-start gap-4">
              <div>
                <p className="text-4xl font-bold">${product.price}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  ${product.originalPrice}
                  <span className="ml-1">Tax included</span>
                </p>
              </div>

              <div className="ml-auto flex flex-wrap gap-4">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Star className="size-3 fill-primary text-primary" />
                  {product.rating}
                </Badge>
                <Badge variant="outline" className="flex items-center gap-1">
                  {product.reviews} Reviews
                </Badge>
              </div>
            </div>

            <hr className="my-8" />

            <div>
              <h3 className="mb-4 text-xl font-bold">Choose a Color</h3>
              <RadioGroup
                defaultValue={selectedColor?.name}
                onValueChange={(value) =>
                  setSelectedColor(
                    product.colors.find((c) => c.name === value) ??
                      product.colors[0],
                  )
                }
              >
                <div className="flex flex-wrap gap-4">
                  {product.colors.map((color) => (
                    <TooltipProvider key={color.name}>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <div>
                            <RadioGroupItem
                              value={color.name}
                              id={`color-${color.name}`}
                              className="sr-only"
                            />
                            <Label
                              htmlFor={`color-${color.name}`}
                              className={`size-10 cursor-pointer rounded-md transition-all ${color.class} flex items-center justify-center ${
                                selectedColor?.name === color.name
                                  ? "ring-2 ring-primary"
                                  : "ring-1 ring-primary"
                              }`}
                            >
                              {selectedColor?.name === color.name && (
                                <Check className="text-white" />
                              )}
                              <span className="sr-only">{color.name}</span>
                            </Label>
                          </div>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>{color.name}</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <hr className="my-8" />

            <div>
              <h3 className="mb-4 text-xl font-bold">Choose a Size</h3>
              <RadioGroup
                defaultValue={selectedSize}
                onValueChange={setSelectedSize}
              >
                <div className="flex flex-wrap gap-4">
                  {product.sizes.map((size) => (
                    <div key={size}>
                      <RadioGroupItem
                        value={size}
                        id={`size-${size}`}
                        className="sr-only"
                      />
                      <Label
                        htmlFor={`size-${size}`}
                        className={`flex size-10 cursor-pointer items-center justify-center rounded-md text-sm font-semibold transition-all ${
                          selectedSize === size
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary hover:bg-secondary/80"
                        }`}
                      >
                        {size}
                      </Label>
                    </div>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <hr className="my-8" />

            <div className="mb-8 flex items-center gap-4">
              <h3 className="text-xl font-bold">Quantity</h3>
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
            </div>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="flex-1">
                Buy now
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                Add to cart
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-20 max-w-4xl">
          <Tabs defaultValue="description">
            <TabsList>
              <TabsTrigger value="description">Description</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="mt-8">
              <h3 className="text-xl font-bold">Product Description</h3>
              <p className="mt-4 text-sm text-muted-foreground">
                {product.description}
              </p>
              <h4 className="mb-2 mt-6 text-lg font-semibold">Key Features</h4>
              <ul className="list-disc space-y-3 pl-4 text-sm text-muted-foreground">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </TabsContent>
            <TabsContent value="specifications" className="mt-8">
              <h3 className="mb-4 text-xl font-bold">Product Specifications</h3>
              <div className="grid grid-cols-2 gap-4">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-sm font-semibold">{spec.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="reviews" className="mt-8">
              <h3 className="mb-4 text-xl font-bold">Customer Reviews</h3>
              <div className="mb-6 flex items-center gap-4">
                <div className="text-4xl font-bold">{product.rating}</div>
                <div>
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`size-5 ${i < Math.floor(product.rating) ? "fill-primary text-primary" : "text-muted-foreground"}`}
                      />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Based on {product.reviews} reviews
                  </p>
                </div>
              </div>
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger>Read all reviews</AccordionTrigger>
                  <AccordionContent>
                    {/* Add actual reviews here */}
                    <p className="text-sm text-muted-foreground">
                      Customer reviews would be displayed here.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
