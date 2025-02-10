"use client";

import {
  Heart,
  Minus,
  Plus,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const images = [
  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
];

export default function Component() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="container mx-auto py-16">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Product Image */}
        <div className="relative aspect-square rounded-lg bg-accent p-8">
          <Image
            src={images[currentImage] ?? ""}
            alt={`Nike Men Teal Blue Outdoor Shoes - Image ${currentImage + 1}`}
            width={500}
            height={500}
            className="h-full w-full -rotate-12 transform rounded-lg object-contain drop-shadow-2xl"
          />
          <Button
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2"
            onClick={prevImage}
          >
            <ChevronLeft className="size-6" />
          </Button>
          <Button
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2"
            onClick={nextImage}
          >
            <ChevronRight className="size-6" />
          </Button>
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`size-2 rounded-full ${
                  index === currentImage ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentImage(index)}
                aria-label={`View image ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div>
            <h1 className="mb-4 text-3xl font-bold">
              Nike Men Teal Blue Outdoor Shoes
            </h1>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non
              erat quam. Vestibulum aliquam nibh dui, et aliquet nibh euismod
              quis. In auctor lacus in orci tristique, nec ultrices diam.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex space-x-8">
              <div className="flex-1">
                <h2 className="mb-4 text-sm font-medium">Size</h2>
                <RadioGroup defaultValue="40" className="flex flex-wrap gap-3">
                  {["32", "36", "40", "42"].map((size) => (
                    <div key={size}>
                      <RadioGroupItem
                        value={size}
                        id={`size-${size}`}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={`size-${size}`}
                        className="flex size-10 cursor-pointer items-center justify-center rounded-md border bg-background text-sm ring-offset-background transition-colors hover:bg-muted peer-aria-checked:border-primary peer-aria-checked:text-primary"
                      >
                        {size}
                      </label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Separator orientation="vertical" className="h-auto" />

              <div className="flex-1">
                <h2 className="mb-4 text-sm font-medium">Color</h2>
                <RadioGroup defaultValue="blue" className="flex gap-3">
                  {[
                    { name: "black", class: "bg-black" },
                    { name: "blue", class: "bg-blue-600" },
                    { name: "teal", class: "bg-teal-500" },
                  ].map((color) => (
                    <div key={color.name}>
                      <RadioGroupItem
                        value={color.name}
                        id={`color-${color.name}`}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={`color-${color.name}`}
                        className={`block size-8 cursor-pointer rounded-full ring-2 ring-accent ring-offset-background transition-colors hover:opacity-90 peer-aria-checked:ring-2 peer-aria-checked:ring-primary peer-aria-checked:ring-offset-2 ${color.class}`}
                      />
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>

            <div className="flex items-baseline justify-between">
              <div>
                <span className="text-3xl font-bold">$159.00</span>
                <p className="text-sm text-muted-foreground">Offer Available</p>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 4 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-primary text-primary" />
                ))}
                <Star className="size-5 fill-muted stroke-muted-foreground" />
                <span className="ml-2 text-sm text-muted-foreground">
                  115 Reviews
                </span>
              </div>
            </div>

            <Card>
              <CardContent className="p-4">
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Brand:</TableCell>
                      <TableCell>Nike</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Warranty:</TableCell>
                      <TableCell>3 months</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Color:</TableCell>
                      <TableCell>Blue</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Size:</TableCell>
                      <TableCell>Medium</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-r-none"
                >
                  <Minus className="size-4" />
                </Button>
                <div className="flex h-10 w-12 items-center justify-center border-y">
                  1
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-l-none"
                >
                  <Plus className="size-4" />
                </Button>
              </div>
              <Button className="flex-1">Add to Cart</Button>
              <Button variant="outline" size="icon">
                <Heart className="size-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
