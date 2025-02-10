"use client";

import { useState } from "react";
import { Star, Minus, Plus, Heart, Play, Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const productData = {
  name: "Chelsea Single Seater",
  price: 599.99,
  rating: 4,
  reviewCount: 124,
  images: [
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  ],
  colors: [
    { name: "Brown", class: "bg-amber-800" },
    { name: "Yellow", class: "bg-yellow-400" },
    { name: "Grey", class: "bg-slate-600" },
    { name: "Tan", class: "bg-amber-200" },
  ],
  sizes: ["Small", "Medium", "Large", "Extra Large"],
  features: [
    "Free delivery from $1000",
    "Free store Pickup",
    "Expert Assembly for $93.45",
    "Custom sizing available",
    "Multiple color options",
    "30-day return policy",
    "5-year warranty",
    "Eco-friendly materials",
  ],
  dimensions: [
    { label: "Height (cm)", value: "82" },
    { label: "Width (cm)", value: "75" },

    { label: "Arm Height (cm)", value: "53" },
    { label: "Seat Height (cm)", value: "44" },
    { label: "Seat Width (cm)", value: "56" },
    { label: "Seat Depth (cm)", value: "56" },
    { label: "Leg Height (cm)", value: "23" },
    { label: "Weight (kg)", value: "17" },
  ],
  details: [
    { label: "Assembly", value: "No assembly Required" },
    { label: "Number of seats", value: "1 Seater" },
    { label: "Caring Instructions", value: "Professional cleaning only" },
    { label: "Material", value: "Micro Velvet, Wood" },
    { label: "Frame Material", value: "Solid Hardwood" },
    { label: "Cushion Fill", value: "High-density foam" },
    { label: "Leg Material", value: "Solid Oak" },
    { label: "Style", value: "Modern" },
  ],
  description:
    "The Chelsea Single Seater chair uses a safe, environmentally friendly filler. The special properties make the furniture not only soft but also comfortable. Made of Mat - the most popular furniture fabric, pleasant to touch while being durable and reliable. This chair is perfect for modern living spaces, offering both style and comfort. Its sleek design and high-quality materials ensure longevity and a luxurious seating experience.",
  faqs: [
    {
      question: "How do I clean the Chelsea Single Seater?",
      answer:
        "We recommend professional cleaning only for the Chelsea Single Seater to maintain its quality and appearance. Avoid using water or household cleaning products as they may damage the fabric.",
    },
    {
      question: "Can I customize the color of the chair?",
      answer:
        "Yes, the Chelsea Single Seater is available in multiple color options. You can choose from Brown, Yellow, Grey, and Tan. If you need a specific color not listed, please contact our customer service for custom options.",
    },
    {
      question: "What is the weight capacity of the chair?",
      answer:
        "The Chelsea Single Seater is designed to comfortably support up to 300 lbs (136 kg). It's built with a sturdy hardwood frame to ensure durability and stability.",
    },
    {
      question: "How long does delivery take?",
      answer:
        "Delivery times vary depending on your location. Typically, you can expect your Chelsea Single Seater to arrive within 5-10 business days. For orders over $1000, we offer free delivery.",
    },
    {
      question: "What is the return policy?",
      answer:
        "We offer a 30-day return policy for the Chelsea Single Seater. If you're not satisfied with your purchase, you can return it within 30 days for a full refund. The item must be in its original condition and packaging.",
    },
  ],
};

export default function Component() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto py-16">
      <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
        {/* Images Column */}
        <div className="grid h-fit grid-cols-2 gap-4">
          {productData.images.map((src, i) => (
            <div
              key={i}
              className={`relative aspect-square ${i === 0 ? "col-span-2 aspect-[4/3]" : ""}`}
            >
              <Image
                src={src}
                alt={`Product view ${i + 1}`}
                fill
                className="rounded-lg object-cover"
              />
              {i === 9 && (
                <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/20">
                  <Play className="size-12 text-white" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Details Column */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{productData.name}</h1>
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-6 ${i < productData.rating ? "fill-primary text-primary" : "fill-muted stroke-muted-foreground"}`}
                />
              ))}
              <span className="ml-2 text-muted-foreground">
                ({productData.reviewCount} reviews)
              </span>
            </div>
            <p className="text-3xl font-semibold">
              ${productData.price.toFixed(2)}
            </p>
          </div>

          <Separator />

          <div className="space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">Colour</h2>
              <RadioGroup
                defaultValue={productData?.colors[0]?.name.toLowerCase()}
                className="flex gap-2"
              >
                {productData.colors.map((color) => (
                  <div key={color.name}>
                    <RadioGroupItem
                      value={color.name.toLowerCase()}
                      id={`color-${color.name}`}
                      className="peer sr-only"
                    />
                    <label
                      htmlFor={`color-${color.name}`}
                      className={`block size-8 cursor-pointer rounded-full ring-offset-background transition-colors hover:opacity-90 peer-aria-checked:ring-2 peer-aria-checked:ring-primary peer-aria-checked:ring-offset-2 ${color.class}`}
                    />
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">Size</h2>
              <RadioGroup
                defaultValue={productData?.sizes[0]?.toLowerCase()}
                className="flex flex-wrap gap-2"
              >
                {productData.sizes.map((size) => (
                  <div key={size}>
                    <RadioGroupItem
                      value={size.toLowerCase()}
                      id={`size-${size.toLowerCase()}`}
                      className="peer sr-only"
                    />
                    <label
                      htmlFor={`size-${size.toLowerCase()}`}
                      className="flex items-center justify-center rounded-md border-2 border-muted bg-popover px-3 py-2 hover:bg-accent hover:text-accent-foreground peer-aria-checked:border-primary peer-aria-checked:bg-primary peer-aria-checked:text-primary-foreground"
                    >
                      {size}
                    </label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="space-y-3">
              <h2 className="text-2xl font-semibold">Quantity</h2>
              <div className="flex w-40 items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="size-12 rounded-r-none"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="size-6" />
                </Button>
                <div className="flex-1 border-y py-3 text-center text-xl">
                  {quantity}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="size-12 rounded-l-none"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="size-6" />
                </Button>
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1 px-8 py-6 text-lg">
                Add to Cart
              </Button>
              <Button variant="outline" size="icon" className="size-16">
                <Heart className="size-8" />
              </Button>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <ul className="grid grid-cols-2 gap-2">
              {productData.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <Check className="size-5 flex-shrink-0 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">Description</h2>
              <Card>
                <CardContent className="p-6">
                  <p className="text-muted-foreground">
                    {productData.description}
                  </p>
                </CardContent>
              </Card>
            </div>

            <Tabs defaultValue="dimensions">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="dimensions">Dimensions</TabsTrigger>
                <TabsTrigger value="details">Details</TabsTrigger>
              </TabsList>
              <TabsContent value="dimensions">
                <Card>
                  <CardContent className="p-6">
                    <Table>
                      <TableBody>
                        {productData.dimensions.map((dim) => (
                          <TableRow key={dim.label}>
                            <TableCell className="font-medium">
                              {dim.label}
                            </TableCell>
                            <TableCell>{dim.value}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="details">
                <Card>
                  <CardContent className="p-6">
                    <Table>
                      <TableBody>
                        {productData.details.map((detail) => (
                          <TableRow key={detail.label}>
                            <TableCell className="font-medium">
                              {detail.label}
                            </TableCell>
                            <TableCell>{detail.value}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {productData.faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
