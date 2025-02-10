"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Star,
  Truck,
  RefreshCcw,
  ShieldCheck,
  Share2,
  Heart,
  HelpCircle,
  Plus,
  Minus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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
  name: "Artisan Leather Backpack",
  price: "$249.99",
  description:
    "Handcrafted from premium full-grain leather, this backpack combines timeless style with modern functionality. Perfect for the urban explorer or the weekend adventurer.",
  images: [
    {
      src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Artisan Leather Backpack - Front view",
    },
    {
      src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Artisan Leather Backpack - Side view",
    },
    {
      src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Artisan Leather Backpack - Interior view",
    },
    {
      src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Artisan Leather Backpack - Back view",
    },
  ],
  colors: [
    { name: "Rustic Brown", class: "bg-[#8B4513]" },
    { name: "Midnight Black", class: "bg-black" },
    { name: "Vintage Tan", class: "bg-[#D2B48C]" },
  ],
  sizes: ["Small", "Medium", "Large"],
  features: [
    "Made from full-grain leather",
    'Padded laptop compartment (fits up to 15" laptop)',
    "Multiple interior and exterior pockets",
    "Adjustable shoulder straps",
    "Top handle for easy carrying",
    "Water-resistant finish",
  ],
  reviews: {
    average: 4.8,
    totalCount: 128,
    featured: [
      {
        id: 1,
        rating: 5,
        content:
          "This backpack is a game-changer! The quality is outstanding, and it has so much room for all my daily essentials.",
        author: "Alex M.",
        date: "July 12, 2023",
      },
      {
        id: 2,
        rating: 4,
        content:
          "Beautiful craftsmanship and very functional. My only minor complaint is that it's a bit heavy when empty.",
        author: "Sam T.",
        date: "June 28, 2023",
      },
    ],
  },
  shipping:
    "Free shipping on orders over $100. Estimated delivery time: 3-5 business days.",
  returns:
    "30-day money-back guarantee. Return shipping is free for all orders.",
};

export default function EnhancedSingleProduct() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  return (
    <div className="bg-background py-16">
      <div className="container mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          {/* Image gallery */}
          <div className="flex flex-col-reverse">
            <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
              <div className="grid grid-cols-4 gap-6">
                {product.images.map((image) => (
                  <button
                    key={image.src}
                    className="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-muted text-sm font-medium uppercase hover:bg-muted-foreground/10"
                    onClick={() => setMainImage(image)}
                  >
                    <span className="absolute inset-0 overflow-hidden rounded-md">
                      <Image
                        src={image.src}
                        alt=""
                        fill
                        className="h-full w-full object-cover object-center"
                      />
                    </span>
                    <span
                      className={`absolute inset-0 rounded-md ring-2 ring-offset-2 ${
                        mainImage?.src === image.src
                          ? "ring-primary"
                          : "ring-transparent"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                ))}
              </div>
            </div>
            <div className="aspect-h-1 aspect-w-1 w-full">
              <Image
                src={mainImage?.src ?? ""}
                alt={mainImage?.alt ?? ""}
                width={600}
                height={600}
                className="h-full w-full object-cover object-center sm:rounded-lg"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-foreground">
              {product.name}
            </h1>
            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-foreground">
                {product.price}
              </p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <Star
                      key={rating}
                      className={`size-5 flex-shrink-0 ${
                        product.reviews.average > rating
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="sr-only">
                  {product.reviews.average} out of 5 stars
                </p>
                <a
                  href="#reviews"
                  className="ml-3 text-sm font-medium text-primary hover:text-primary/80"
                >
                  {product.reviews.totalCount} reviews
                </a>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-muted-foreground">
                {product.description}
              </p>
            </div>

            <div className="mt-6">
              <div>
                <h3 className="text-sm font-medium text-foreground">Color</h3>
                <RadioGroup
                  value={selectedColor?.name}
                  onValueChange={(value) =>
                    setSelectedColor(
                      product.colors.find((c) => c.name === value) ??
                        product.colors[0],
                    )
                  }
                  className="mt-2"
                >
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <div key={color.name}>
                        <RadioGroupItem
                          value={color.name}
                          id={`color-${color.name}`}
                          className="sr-only"
                        />
                        <Label
                          htmlFor={`color-${color.name}`}
                          className={`relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none ${
                            selectedColor?.name === color.name
                              ? "ring-2 ring-primary"
                              : ""
                          }`}
                        >
                          <span
                            aria-hidden="true"
                            className={`size-8 rounded-full border border-black/10 ${color.class}`}
                          />
                          <span className="sr-only">{color.name}</span>
                        </Label>
                      </div>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-foreground">Size</h3>
              <RadioGroup
                value={selectedSize}
                onValueChange={setSelectedSize}
                className="mt-2"
              >
                <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
                  {product.sizes.map((size) => (
                    <RadioGroupItem
                      key={size}
                      value={size}
                      id={`size-${size}`}
                      className="sr-only"
                    >
                      <Label
                        htmlFor={`size-${size}`}
                        className={`flex cursor-pointer items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase focus:outline-none sm:flex-1 ${
                          selectedSize === size
                            ? "border-primary bg-primary/10 text-primary"
                            : "border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
                        }`}
                      >
                        {size}
                      </Label>
                    </RadioGroupItem>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <div className="mt-6">
              <p className="text-sm text-muted-foreground">
                Selected: {selectedColor?.name}, {selectedSize}
              </p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-foreground">Quantity</h3>
              <div className="mt-2 flex items-center">
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

            <div className="mt-6 flex items-center">
              <Button className="flex-grow">Add to cart</Button>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="outline"
                      size="icon"
                      className="ml-4"
                      onClick={() => setIsWishlisted(!isWishlisted)}
                    >
                      <Heart
                        className={`size-4 ${isWishlisted ? "fill-primary text-primary" : ""}`}
                      />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      {isWishlisted
                        ? "Remove from Wishlist"
                        : "Add to Wishlist"}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" className="ml-4">
                      <Share2 className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Share Product</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-4 text-center text-sm text-muted-foreground">
              <div className="flex flex-col items-center">
                <Truck className="mb-2 size-6" />
                <span>Free Shipping</span>
              </div>
              <div className="flex flex-col items-center">
                <RefreshCcw className="mb-2 size-6" />
                <span>Easy Returns</span>
              </div>
              <div className="flex flex-col items-center">
                <ShieldCheck className="mb-2 size-6" />
                <span>2-Year Warranty</span>
              </div>
            </div>
          </div>

          <Accordion type="single" collapsible className="mt-6 w-full">
            <AccordionItem value="features">
              <AccordionTrigger>Features</AccordionTrigger>
              <AccordionContent>
                <ul className="list-disc space-y-2 pl-5">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="shipping">
              <AccordionTrigger>Shipping</AccordionTrigger>
              <AccordionContent>
                <p>{product.shipping}</p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="returns">
              <AccordionTrigger>Returns</AccordionTrigger>
              <AccordionContent>
                <p>{product.returns}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Size Guide */}
          <div className="mt-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="w-full">
                  <HelpCircle className="mr-2 size-4" />
                  Size Guide
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Size Guide</DialogTitle>
                  <DialogDescription>
                    Find the perfect fit for your Artisan Leather Backpack
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-3 items-center gap-4">
                    <p className="text-sm font-medium">Size</p>
                    <p className="text-sm font-medium">Dimensions</p>
                    <p className="text-sm font-medium">Laptop Fit</p>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <p className="text-sm">Small</p>
                    <p className="text-sm">16&quot; x 12&quot; x 6&quot;</p>
                    <p className="text-sm">Up to 13&quot;</p>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <p className="text-sm">Medium</p>
                    <p className="text-sm">18&quot; x 13&quot; x 7&quot;</p>
                    <p className="text-sm">Up to 15&quot;</p>
                  </div>
                  <div className="grid grid-cols-3 items-center gap-4">
                    <p className="text-sm">Large</p>
                    <p className="text-sm">20&quot; x 14&quot; x 8&quot;</p>
                    <p className="text-sm">Up to 17&quot;</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          {/* Featured reviews */}
          <div className="mt-6" id="reviews">
            <h3 className="text-lg font-medium text-foreground">
              Featured Reviews
            </h3>
            <div className="mt-4 space-y-6">
              {product.reviews.featured.map((review) => (
                <div key={review.id} className="border-t border-gray-200 pt-4">
                  <div className="mb-2 flex items-center">
                    <div className="flex items-center">
                      {[0, 1, 2, 3, 4].map((rating) => (
                        <Star
                          key={rating}
                          className={`size-4 flex-shrink-0 ${
                            review.rating > rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <p className="ml-2 text-sm text-muted-foreground">
                      {review.author}
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {review.content}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {review.date}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
