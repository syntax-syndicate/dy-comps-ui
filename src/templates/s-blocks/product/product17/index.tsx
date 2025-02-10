"use client";

import { useState } from "react";
import { Star, Minus, Plus, Heart, Play } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

const colors = [
  { name: "Brown", class: "bg-amber-800" },
  { name: "Yellow", class: "bg-yellow-400" },
  { name: "Grey", class: "bg-slate-600" },
  { name: "Tan", class: "bg-amber-200" },
];

const features = [
  { text: "Free delivery from $1000" },
  { text: "Free store Pickup" },
  { text: "Expert Assembly for $93.45" },
];

const dimensions = [
  { label: "Height (cm)", value: "82" },
  { label: "Width (cm)", value: "75" },
  { label: "Arm Dimensions (hwd)", value: "53 × 7 × 69 cm" },
  { label: "Seat Dimensions (hwd)", value: "44 × 56 × 56 cm" },
  { label: "Leg Height (cm)", value: "23" },
  { label: "Weight (kg)", value: "17" },
];

const details = [
  { label: "Assembly", value: "No assembly Required" },
  { label: "Number of seats", value: "1 Seater" },
  { label: "Caring Instructions", value: "Professional cleaning only" },
  { label: "Material", value: "Micro Velvet, Wood" },
];

export default function Component() {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto py-16">
      <div className="mb-12 grid gap-8 lg:grid-cols-[120px_1fr_1fr]">
        {/* Thumbnails */}
        <div className="flex flex-row gap-4 lg:flex-col">
          {Array.from({ length: 2 }).map((_, i) => (
            <button key={i} className="relative aspect-square w-full">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt={`Product view ${i + 1}`}
                fill
                className="rounded-lg object-cover transition-all hover:ring-2 hover:ring-primary"
              />
            </button>
          ))}
          <button className="group relative aspect-square w-full">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Product video thumbnail"
              fill
              className="rounded-lg object-cover transition-all group-hover:ring-2 group-hover:ring-primary"
            />
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-black/20">
              <Play className="size-10 text-white" />
            </div>
          </button>
        </div>

        {/* Main Image */}
        <div className="relative aspect-square">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Chelsea Single Seater main view"
            fill
            className="rounded-lg object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">Chelsea Single Seater</h1>
            <div className="flex items-center gap-1">
              {Array.from({ length: 4 }).map((_, i) => (
                <Star key={i} className="size-5 fill-primary text-primary" />
              ))}
              <Star className="size-5 fill-muted stroke-muted-foreground" />
            </div>
            <p className="text-muted-foreground">
              The chair uses a safe, environmentally friendly filler. The
              special properties make the furniture not only soft but also
              comfortable. Made of Mat - the most popular furniture fabric,
              pleasant to touch while being durable and reliable.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="mb-3 text-sm font-medium">Colour</h2>
              <RadioGroup defaultValue="tan" className="flex gap-2">
                {colors.map((color) => (
                  <div key={color.name}>
                    <RadioGroupItem
                      value={color.name.toLowerCase()}
                      id={`color-${color.name}`}
                      className="peer sr-only"
                    />
                    <label
                      htmlFor={`color-${color.name}`}
                      className={`block size-6 cursor-pointer rounded-md ring-offset-background transition-colors hover:opacity-90 peer-aria-checked:ring-2 peer-aria-checked:ring-primary peer-aria-checked:ring-offset-2 ${color.class}`}
                    />
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <h2 className="mb-3 text-sm font-medium">Quantity</h2>
              <div className="flex w-32 items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-r-none"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="size-4" />
                </Button>
                <div className="flex-1 border-y py-2 text-center">
                  {quantity}
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-l-none"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="size-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-3">
              <h2 className="text-sm font-medium">Features</h2>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="text-sm text-muted-foreground">
                    {feature.text}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4">
              <Button className="flex-1">Add to Cart</Button>
              <Button variant="outline" size="icon">
                <Heart className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Description</h2>
          <p className="text-muted-foreground">
            The chair uses a safe, environmentally friendly filler. The special
            properties of which makes the furniture not only soft, but also
            comfortable. Made of Mat - the most popular furniture fabric
            pleasant to touch at the same time durable and reliable fabric.
            Large selection of color shades. Prepayment on a bank car. Delivery
            by mail or by courier.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Dimensions</h2>
          <Table>
            <TableBody>
              {dimensions.map((dim) => (
                <TableRow key={dim.label}>
                  <TableCell className="font-medium">{dim.label}</TableCell>
                  <TableCell>{dim.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Details</h2>
          <Table>
            <TableBody>
              {details.map((detail) => (
                <TableRow key={detail.label}>
                  <TableCell className="font-medium">{detail.label}</TableCell>
                  <TableCell>{detail.value}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
