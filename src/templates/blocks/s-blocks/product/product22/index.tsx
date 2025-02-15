"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Heart, Star, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Component() {
  const [selectedColor, setSelectedColor] = useState("pink");
  const [selectedStorage, setSelectedStorage] = useState("256GB");
  const [selectedDelivery, setSelectedDelivery] = useState("shipping");
  const [selectedWarranty, setSelectedWarranty] = useState("none");
  const [quantity, setQuantity] = useState("1");
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  ];

  const colors = [
    { name: "Green", value: "green" },
    { name: "Pink", value: "pink" },
    { name: "Silver", value: "silver" },
    { name: "Blue", value: "blue" },
  ];

  const storage = [
    { name: "256GB", value: "256GB" },
    { name: "512GB", value: "512GB" },
    { name: "1TB", value: "1TB" },
  ];

  const faqs = [
    {
      question: "What are the system requirements?",
      answer:
        'The iMac 24" requires macOS Big Sur 11.0 or later. It comes with Apple M1 chip, 8GB unified memory, and various SSD storage options.',
    },
    {
      question: "Does it come with a warranty?",
      answer:
        "Yes, it comes with a standard one-year limited warranty. You can purchase AppleCare+ for extended coverage.",
    },
    {
      question: "Can I upgrade the RAM or storage later?",
      answer:
        "The RAM and SSD in the iMac 24\" are not user-upgradeable. It's recommended to choose the configuration you need at the time of purchase.",
    },
  ];

  return (
    <div className="bg-background py-16">
      <div className="container mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <Image
                src={images[currentImage] ?? ""}
                alt="Product image"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex gap-4 overflow-auto p-2">
              {images.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImage(idx)}
                  className={cn(
                    "relative aspect-square w-20 overflow-hidden rounded-lg bg-muted",
                    currentImage === idx && "ring-2 ring-primary ring-offset-2",
                  )}
                >
                  <Image
                    src={src}
                    alt={`Product view ${idx + 1}`}
                    fill
                    className="object-contain"
                  />
                </button>
              ))}
            </div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="mt-6 lg:mt-0">
            <Badge>In stock</Badge>
            <h1 className="mt-4 text-2xl font-bold tracking-tight lg:text-3xl">
              Apple iMac 24&quot; All-In-One Computer, Apple M1, 8GB RAM, 256GB
              SSD, Mac OS, Pink
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-primary text-primary" />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  (5.0)
                </span>
              </div>
              <Button variant="link" className="text-sm">
                345 Reviews
              </Button>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              <span>Deliver to Bonnie Green - Sacramento 23647</span>
            </div>

            <div className="mt-8">
              <div className="text-3xl font-bold">$1,249.99</div>
            </div>

            <div className="mt-8 space-y-6">
              <div>
                <label className="text-sm font-medium">Colour</label>
                <RadioGroup
                  defaultValue={selectedColor}
                  onValueChange={setSelectedColor}
                  className="mt-2 flex flex-wrap gap-2"
                >
                  {colors.map((color) => (
                    <div key={color.value}>
                      <RadioGroupItem
                        value={color.value}
                        id={`color-${color.value}`}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={`color-${color.value}`}
                        className="flex cursor-pointer items-center rounded-md border-2 border-muted bg-popover px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
                      >
                        {color.name}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <label className="text-sm font-medium">SSD capacity</label>
                <RadioGroup
                  defaultValue={selectedStorage}
                  onValueChange={setSelectedStorage}
                  className="mt-2 flex flex-wrap gap-2"
                >
                  {storage.map((option) => (
                    <div key={option.value}>
                      <RadioGroupItem
                        value={option.value}
                        id={`storage-${option.value}`}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={`storage-${option.value}`}
                        className="flex cursor-pointer items-center rounded-md border-2 border-muted bg-popover px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary"
                      >
                        {option.name}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <label className="text-sm font-medium">Pickup</label>
                <RadioGroup
                  defaultValue={selectedDelivery}
                  onValueChange={setSelectedDelivery}
                  className="mt-2 space-y-2"
                >
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <RadioGroupItem
                      value="shipping"
                      id="shipping"
                      className="sr-only"
                    />
                    <label htmlFor="shipping" className="flex flex-col">
                      <span className="font-medium">Shipping - $19</span>
                      <span className="text-sm text-muted-foreground">
                        Arrives Nov 17
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center justify-between rounded-lg border p-4">
                    <RadioGroupItem
                      value="pickup"
                      id="pickup"
                      className="sr-only"
                    />
                    <label htmlFor="pickup" className="flex flex-col">
                      <span className="font-medium">
                        Pickup from Flowbox - $9
                      </span>
                      <Button
                        variant="link"
                        className="h-auto justify-start p-0 text-sm"
                      >
                        Pick a Flowbox near you
                      </Button>
                    </label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <label className="text-sm font-medium">
                  Add extra warranty
                </label>
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
                        className="sr-only"
                      />
                      <label
                        htmlFor={option.value}
                        className="flex w-full cursor-pointer items-center justify-between"
                      >
                        <span className="font-medium">{option.label}</span>
                        <Check
                          className={cn(
                            "size-5 text-primary",
                            selectedWarranty === option.value
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-32">
                  <Select value={quantity} onValueChange={setQuantity}>
                    <SelectTrigger>
                      <SelectValue />
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
                <Button className="flex-1">Add to cart</Button>
                <Button variant="outline" size="icon">
                  <Heart className="size-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
