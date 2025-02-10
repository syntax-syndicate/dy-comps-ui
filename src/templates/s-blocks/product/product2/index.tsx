"use client";

import { useState } from "react";
import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const product = {
  name: "Zip Tote Basket",
  price: "$140",
  rating: 4,
  description:
    "The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.",
  images: [
    {
      src: "https://images.unsplash.com/photo-1720048170970-3848514c3d60?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Zip Tote Basket front view",
    },
    {
      src: "https://images.unsplash.com/photo-1728646995795-2e37aa8cb13e?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Zip Tote Basket side view",
    },
    {
      src: "https://images.unsplash.com/photo-1728607424948-3e3a75b28c34?q=80&w=2187&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Zip Tote Basket top view",
    },
    {
      src: "https://images.unsplash.com/photo-1726164023213-294bfe241ec7?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Zip Tote Basket angle view",
    },
  ],
  colors: [
    { name: "Navy", class: "bg-navy-900" },
    { name: "White", class: "bg-white border border-gray-200" },
    { name: "Gray", class: "bg-gray-500" },
  ],
  sizes: [
    { name: "XS", inStock: true },
    { name: "S", inStock: true },
    { name: "M", inStock: true },
    { name: "L", inStock: true },
    { name: "XL", inStock: false },
  ],
  features: [
    "Multiple carry options",
    "Spacious main compartment",
    "Durable canvas construction",
    "Water-resistant coating",
    "Premium hardware",
    "Interior pockets",
  ],
  care: [
    "Spot clean with mild detergent",
    "Air dry only",
    "Do not bleach",
    "Do not iron",
  ],
  shipping: [
    "Free standard shipping on orders over $100",
    "3-5 business days for standard shipping",
    "Express shipping available",
    "International shipping available to select countries",
  ],
  returns: [
    "30-day return window",
    "Free returns on unused items",
    "Original tags must be attached",
    "Return label included with order",
  ],
};

export default function Component() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]);
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  }>(
    product.images[0] ?? {
      src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Default image",
    },
  );
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleKeyDown = (
    event: React.KeyboardEvent,
    image: (typeof product.images)[0],
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setSelectedImage(image);
    }
  };

  return (
    <div className="bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Image gallery */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-lg border bg-white">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={600}
                height={600}
                className="h-full w-full object-cover object-center"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={cn(
                    "relative aspect-square overflow-hidden rounded-lg border bg-white",
                    selectedImage.src === image.src &&
                      "ring-2 ring-primary ring-offset-2",
                  )}
                  aria-label={`View ${image.alt}`}
                  aria-pressed={selectedImage.src === image.src}
                  onKeyDown={(e) => handleKeyDown(e, image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover object-center"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product info */}
          <div className="flex flex-col">
            <div className="space-y-4 border-b pb-6">
              <h1 className="text-3xl font-bold tracking-tight">
                {product.name}
              </h1>
              <div className="flex items-center justify-between">
                <div className="text-2xl font-bold">{product.price}</div>
                <div className="flex items-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "size-5",
                        i < product.rating
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted-foreground",
                      )}
                    />
                  ))}
                </div>
              </div>
              <p className="text-base text-muted-foreground">
                {product.description}
              </p>
            </div>

            <div className="space-y-6 py-6">
              {/* Color selector */}
              <div>
                <h3 className="text-sm font-medium">Color</h3>
                <RadioGroup
                  value={selectedColor?.name}
                  onValueChange={(value) =>
                    setSelectedColor(
                      product.colors.find((c) => c.name === value) ??
                        product.colors[0],
                    )
                  }
                  className="mt-4 flex gap-4"
                >
                  {product.colors.map((color) => (
                    <div key={color.name} className="flex items-center">
                      <RadioGroupItem
                        value={color.name}
                        id={`color-${color.name}`}
                        className="peer sr-only"
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

              {/* Size selector */}
              <div>
                <h3 className="text-sm font-medium">Size</h3>
                <RadioGroup
                  value={selectedSize?.name}
                  onValueChange={(value) =>
                    setSelectedSize(
                      product.sizes.find((s) => s.name === value) ??
                        product.sizes[0],
                    )
                  }
                  className="mt-4 grid grid-cols-5 gap-2"
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

              {/* Add to bag and wishlist */}
              <div className="flex gap-4">
                <Button className="flex-1" size="lg">
                  Add to bag
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="flex-none"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart
                    className={cn(
                      "size-5",
                      isWishlisted && "fill-primary text-primary",
                    )}
                  />
                  <span className="sr-only">Add to wishlist</span>
                </Button>
              </div>
            </div>

            {/* Product details accordion */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="features">
                <AccordionTrigger>Features</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                    {product.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="care">
                <AccordionTrigger>Care</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                    {product.care.map((instruction) => (
                      <li key={instruction}>{instruction}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="shipping">
                <AccordionTrigger>Shipping</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                    {product.shipping.map((info) => (
                      <li key={info}>{info}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="returns">
                <AccordionTrigger>Returns</AccordionTrigger>
                <AccordionContent>
                  <ul className="list-inside list-disc space-y-2 text-sm text-muted-foreground">
                    {product.returns.map((policy) => (
                      <li key={policy}>{policy}</li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
