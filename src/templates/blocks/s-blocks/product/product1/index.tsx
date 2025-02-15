"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { Separator } from "@/components/ui/separator";

const product = {
  name: "Basic Tee",
  price: "$35",
  rating: 3.9,
  reviewCount: 512,
  images: [
    {
      src: "https://images.unsplash.com/photo-1726164023213-294bfe241ec7?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Back view of basic black t-shirt on model",
    },
    {
      src: "https://images.unsplash.com/photo-1728607424948-3e3a75b28c34?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Side view of basic black t-shirt on model",
    },
    {
      src: "https://images.unsplash.com/photo-1728646995795-2e37aa8cb13e?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Front view of basic black t-shirt on model",
    },
  ],
  colors: [
    { name: "Black", class: "bg-black", selectedClass: "ring-gray-900" },
    { name: "Gray", class: "bg-gray-400", selectedClass: "ring-gray-400" },
  ],
  sizes: [
    { name: "XXS", inStock: true },
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: true },
  ],
  description:
    "The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.",
  fabricCare: [
    "Only the best materials",
    "Ethically and locally made",
    "Pre-washed and pre-shrunk",
    "Machine wash cold with similar colors",
  ],
};

export default function Component() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [isSizingOpen, setIsSizingOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm">
          <Link href="#" className="text-muted-foreground hover:text-primary">
            Women
          </Link>
          <span className="text-muted-foreground">/</span>
          <Link href="#" className="text-muted-foreground hover:text-primary">
            Clothing
          </Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground">Basic Tee</span>
        </nav>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src={selectedImage?.src ?? ""}
                alt={selectedImage?.alt ?? ""}
                width={800}
                height={1000}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={cn(
                    "relative aspect-[3/4] overflow-hidden rounded-lg",
                    selectedImage?.src === image.src &&
                      "ring-2 ring-primary ring-offset-2",
                  )}
                  aria-label={`View ${image.alt}`}
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
          </div>

          {/* Product info */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold">{product.name}</h1>
              <div className="flex items-center gap-4">
                <span className="text-2xl font-semibold">{product.price}</span>
                <div className="flex items-center">
                  <div className="flex items-center">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          "size-5",
                          i < Math.floor(product.rating)
                            ? "fill-primary text-primary"
                            : i < Math.ceil(product.rating)
                              ? "fill-primary text-primary"
                              : "text-muted-foreground",
                        )}
                      />
                    ))}
                  </div>
                  <Link
                    href="#reviews"
                    className="ml-2 text-sm text-primary hover:text-primary/80"
                  >
                    See all {product.reviewCount} reviews
                  </Link>
                </div>
              </div>
            </div>

            <Separator />

            {/* Color and Size selectors */}
            <div className="space-y-6">
              <div>
                <h3 className="mb-4 text-sm font-medium text-foreground">
                  Color
                </h3>
                <RadioGroup
                  value={selectedColor?.name}
                  onValueChange={(value) =>
                    setSelectedColor(
                      product.colors.find((c) => c.name === value) ??
                        product.colors[0],
                    )
                  }
                  className="flex gap-4"
                >
                  {product.colors.map((color) => (
                    <div key={color.name} className="flex items-center">
                      <RadioGroupItem
                        value={color.name}
                        id={`color-${color.name}`}
                        className="sr-only"
                      />
                      <Label
                        htmlFor={`color-${color.name}`}
                        className={cn(
                          "relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 ring-2 focus:outline-none",
                          selectedColor?.name === color.name
                            ? "ring-primary"
                            : "ring-muted-foreground/25",
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            "size-8 rounded-full border border-black border-opacity-10",
                            color.class,
                          )}
                        />
                        <span className="sr-only">{color.name}</span>
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="text-sm font-medium text-foreground">Size</h3>
                  <Dialog open={isSizingOpen} onOpenChange={setIsSizingOpen}>
                    <DialogTrigger asChild>
                      <Button
                        variant="link"
                        className="text-sm text-primary hover:text-primary/80"
                      >
                        See sizing chart
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Sizing Chart</DialogTitle>
                        <DialogDescription>
                          Measurements in inches
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid grid-cols-4 gap-4 text-sm">
                        <div className="font-medium">Size</div>
                        <div className="font-medium">Chest</div>
                        <div className="font-medium">Waist</div>
                        <div className="font-medium">Hip</div>
                        {["XXS", "XS", "S", "M", "L", "XL"].map((size) => (
                          <>
                            <div>{size}</div>
                            <div>32-34</div>
                            <div>26-28</div>
                            <div>34-36</div>
                          </>
                        ))}
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
                <RadioGroup
                  value={selectedSize?.name}
                  onValueChange={(value) =>
                    setSelectedSize(
                      product.sizes.find((s) => s.name === value) ??
                        product.sizes[0],
                    )
                  }
                  className="grid grid-cols-6 gap-2"
                >
                  {product.sizes.map((size) => (
                    <div key={size.name}>
                      <RadioGroupItem
                        value={size.name}
                        id={`size-${size.name}`}
                        className="peer sr-only"
                        disabled={!size.inStock}
                      />
                      <Label
                        htmlFor={`size-${size.name}`}
                        className={cn(
                          "flex h-10 items-center justify-center rounded-md border text-sm font-medium",
                          "peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-primary",
                          "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
                          "cursor-pointer hover:bg-accent",
                        )}
                      >
                        {size.name}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </div>

            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Add to cart
            </Button>

            {/* Product details */}
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-sm font-medium">Description</h3>
                <p className="text-sm text-muted-foreground">
                  {product.description}
                </p>
              </div>

              <div>
                <h3 className="mb-2 text-sm font-medium">Fabric & Care</h3>
                <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                  {product.fabricCare.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg border p-4 text-center">
                  <div className="mb-1 text-sm font-medium">
                    International delivery
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Get your order in 2 years
                  </p>
                </div>
                <div className="rounded-lg border p-4 text-center">
                  <div className="mb-1 text-sm font-medium">
                    Loyalty rewards
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Don&apos;t look at other tees
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
