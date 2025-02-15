"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Heart, ShoppingCart } from "lucide-react";

const productImages = [
  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
];

const productDetails = [
  {
    title: "Product Details",
    content:
      'The iMac 24" is a high-performance all-in-one computer featuring the Apple M1 chip, 8GB of RAM, and various SSD storage options. It offers a stunning 4.5K Retina display, advanced camera and audio systems, and comes in a range of vibrant colors to suit your style.',
  },
  {
    title: "Specifications",
    content:
      "24-inch 4.5K Retina display, Apple M1 chip with 8-core CPU and 7-core GPU, 8GB unified memory, 256GB SSD storage (configurable up to 1TB), 1080p FaceTime HD camera, Six-speaker sound system with force-cancelling woofers, Studio-quality three-mic array, Wi-Fi 6 and Bluetooth 5.0 wireless connectivity.",
  },
  {
    title: "Warranty",
    content:
      "Your iMac comes with 90 days of complimentary technical support and a one-year limited warranty. Purchase AppleCare+ to extend your coverage to three years from your AppleCare+ purchase date and add up to two incidents of accidental damage protection every 12 months, each subject to a service fee.",
  },
];

export default function ProductPage() {
  const [currentImage, setCurrentImage] = useState(0);
  const [selectedWarranty, setSelectedWarranty] = useState("none");
  const [quantity, setQuantity] = useState("1");

  return (
    <div className="container mx-auto py-16">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="space-y-8 lg:w-2/3">
          <div className="flex gap-4">
            {/* Left Sidebar - Image Navigation */}
            <div className="flex w-24 flex-col gap-4">
              {productImages.map((src, index) => (
                <button
                  key={index}
                  className={`relative size-20 overflow-hidden rounded-md ${
                    index === currentImage ? "ring-2 ring-primary" : ""
                  }`}
                  onClick={() => setCurrentImage(index)}
                >
                  <Image
                    src={src}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Product Display */}
            <div className="flex-1">
              <div className="relative aspect-square overflow-hidden rounded-lg">
                <Image
                  src={productImages[currentImage] ?? ""}
                  alt={`Product image ${currentImage + 1}`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* SSD Capacity and Finish Selection */}

          {/* FAQ Section */}
        </div>

        {/* Right Panel - Product Information & Purchase Options */}
        <div className="space-y-6 lg:w-1/3">
          <div>
            <Badge className="mb-2">Last 2 products</Badge>
            <h1 className="mb-2 text-2xl font-bold">
              Apple iMac 24&quot; All-In-One Computer, Apple M1, 8GB RAM, 256GB
              SSD
            </h1>
            <div className="mb-2 flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-primary" />
              ))}
              <span className="ml-2 text-sm">(5.0)</span>
              <Button variant="link" size="sm" className="ml-2">
                345 Reviews
              </Button>
            </div>
            <div className="flex items-center text-sm">
              <MapPin className="mr-1 size-4" />
              Deliver to Bonnie Green - Sacramento 23647
            </div>
          </div>

          <div className="text-3xl font-bold">$1,249.99</div>

          <Accordion type="single" collapsible className="w-full">
            {productDetails.map((detail, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{detail.title}</AccordionTrigger>
                <AccordionContent>{detail.content}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="space-y-4">
            <div>
              <label className="text-sm font-medium">Add extra warranty</label>
              <RadioGroup
                defaultValue={selectedWarranty}
                onValueChange={setSelectedWarranty}
                className="mt-2 space-y-2"
              >
                {[
                  { value: "1year", label: "1 year - $39" },
                  { value: "2years", label: "2 years - $69" },
                  { value: "3years", label: "3 years - $991" },
                ].map((option) => (
                  <div
                    key={option.value}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <RadioGroupItem
                      value={option.value}
                      id={option.value}
                      className="peer sr-only"
                    />
                    <label
                      htmlFor={option.value}
                      className="flex w-full cursor-pointer items-center justify-between"
                    >
                      <span className="font-medium">{option.label}</span>
                      {selectedWarranty === option.value && (
                        <div className="size-4 rounded-full bg-primary" />
                      )}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Select value={quantity} onValueChange={setQuantity}>
              <SelectTrigger className="w-24">
                <SelectValue placeholder="Quantity" />
              </SelectTrigger>
              <SelectContent>
                {[1, 2, 3, 4, 5].map((num) => (
                  <SelectItem key={num} value={num.toString()}>
                    {num}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Heart className="size-4" />
            </Button>
            <Button className="flex-1">
              <ShoppingCart className="mr-2 size-4" />
              Add to cart
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Also available at competitive prices from
            <Button variant="link" className="h-auto px-1 text-sm">
              authorized retailers
            </Button>
            , with optional Premium delivery for expedited shipping.
          </p>
        </div>
      </div>
    </div>
  );
}
