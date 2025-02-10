"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  InfoIcon as InfoCircled,
  ChevronLeft,
  ChevronRight,
  LayoutGrid,
  List,
  ChevronDown,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Apple iMac 27",
    description:
      "Apple M3 Octa Core, 23.8inch, RAM 8GB, SSD 256GB, Apple M3 8-Core, macOS Sonoma",
    price: 1199,
    colors: ["black", "blue", "pink", "mint"],
    images: [
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    ],
  },
  {
    id: 2,
    name: "PlayStation 5 Slim Console",
    description:
      "Up to 120fps with 120Hz output, 1TB HDD, 2 Controllers, Ray Tracing",
    price: 499,
    colors: ["black", "white", "gray"],
    images: [
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    ],
  },
  {
    id: 3,
    name: "iPad Pro 13-Inch (M4): XDR Display",
    description:
      "Ultra Retina XDR Display, 256GB, Landscape 12MP Front Camera/12MP",
    price: 1199,
    colors: ["black", "pink", "gray"],
    images: [
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    ],
  },
  {
    id: 4,
    name: "Xbox Series S 1TB SSD",
    description:
      "All-Digital Gaming Console 1440p Gaming 4K Streaming Carbon Black",
    price: 499,
    colors: ["black"],
    images: [
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    ],
  },
  {
    id: 5,
    name: "Apple iPhone 15 Pro Max",
    description:
      "256GB, Natural Titanium, 6.7 Inches - Unlocked (Renewed), Unlocked for All Carriers",
    price: 1299,
    colors: ["black", "purple", "gray"],
    images: [
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    ],
  },
  {
    id: 6,
    name: `iMac 24" (2024)`,
    description: "Retina 4.5K, 8GB, 256GB SSD, 8-core GPU, Orange, INT KB",
    price: 1999,
    colors: ["black", "blue", "orange", "mint"],
    images: [
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    ],
  },
];

export default function ProductListing() {
  const [currentImages, setCurrentImages] = useState(products.map(() => 0));

  const nextImage = (index: number) => {
    setCurrentImages((prev) =>
      prev.map((img, i) =>
        i === index ? (img + 1) % products[i].images.length : img,
      ),
    );
  };

  const prevImage = (index: number) => {
    setCurrentImages((prev) =>
      prev.map((img, i) =>
        i === index
          ? (img - 1 + products[i].images.length) % products[i].images.length
          : img,
      ),
    );
  };

  return (
    <div className="container mx-auto py-8">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-foreground">
            Electronics - Top Products
            <span className="ml-2 text-sm font-normal text-muted-foreground">
              298 products
            </span>
          </h1>
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            <InfoCircled className="mr-2 h-4 w-4" />
            How the results are ordered
          </Button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Brands <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Apple</DropdownMenuItem>
                <DropdownMenuItem>Samsung</DropdownMenuItem>
                <DropdownMenuItem>Sony</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Price <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>Under $500</DropdownMenuItem>
                <DropdownMenuItem>$500 - $1000</DropdownMenuItem>
                <DropdownMenuItem>Over $1000</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Rating <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>4+ Stars</DropdownMenuItem>
                <DropdownMenuItem>3+ Stars</DropdownMenuItem>
                <DropdownMenuItem>2+ Stars</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm">
                  Shipping to: Americas <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>North America</DropdownMenuItem>
                <DropdownMenuItem>South America</DropdownMenuItem>
                <DropdownMenuItem>Central America</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Seller:</span>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <Checkbox id="DY-Comps UI" />
                  <span className="text-sm">DY-Comps UI</span>
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox id="bestbuy" />
                  <span className="text-sm">BestBuy</span>
                </label>
                <label className="flex items-center gap-2">
                  <Checkbox id="amazon" />
                  <span className="text-sm">Amazon</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Sort and View Options */}
        <div className="flex items-center justify-between">
          <RadioGroup defaultValue="newest" className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="newest" id="newest" />
              <label htmlFor="newest" className="text-sm">
                Newest
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="increasing" id="increasing" />
              <label htmlFor="increasing" className="text-sm">
                Increasing price
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="decreasing" id="decreasing" />
              <label htmlFor="decreasing" className="text-sm">
                Decreasing price
              </label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="popular" id="popular" />
              <label htmlFor="popular" className="text-sm">
                Most popular
              </label>
            </div>
          </RadioGroup>

          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* FlowWallet Notice */}
        <div className="flex items-center gap-2 rounded-lg">
          <InfoCircled className="h-5 w-5 flex-shrink-0" />
          <p className="text-sm">
            You have up to $2000 budget available and you can pay up to 12
            installments with <span className="font-semibold">FlowWallet</span>{" "}
            <Link href="#" className="underline">
              see how it works
            </Link>
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <Card key={product.id} className="group">
              <CardContent className="p-4">
                <div className="relative">
                  <div className="relative mb-4 aspect-square rounded-lg bg-muted">
                    <Image
                      src={
                        product.images[currentImages[index]] ||
                        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                      }
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => prevImage(index)}
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <span className="flex items-center text-sm text-muted-foreground">
                      {currentImages[index] + 1} of {product.images.length}
                    </span>
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => nextImage(index)}
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.description}
                  </p>

                  <div className="flex gap-2">
                    {product.colors.map((color) => (
                      <div
                        key={color}
                        className={`h-6 w-6 rounded-full border ${
                          color === "black"
                            ? "bg-black"
                            : color === "white"
                              ? "bg-white"
                              : color === "blue"
                                ? "bg-blue-500"
                                : color === "pink"
                                  ? "bg-pink-500"
                                  : color === "mint"
                                    ? "bg-emerald-500"
                                    : color === "gray"
                                      ? "bg-gray-500"
                                      : color === "purple"
                                        ? "bg-purple-500"
                                        : color === "orange"
                                          ? "bg-orange-500"
                                          : ""
                        }`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <Link href="#" className="text-sm text-primary">
                      Buy in installments with SERPUI Wallet
                    </Link>
                  </div>

                  <div className="text-2xl font-bold text-foreground">
                    ${product.price}
                  </div>

                  <div className="mt-4 flex flex-col gap-2">
                    <Button variant="outline" className="w-full">
                      Wishlist
                    </Button>
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                      Buy now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center gap-2">
          <Button variant="outline" size="icon">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="sm">
            1
          </Button>
          <Button variant="outline" size="sm">
            2
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-primary text-primary-foreground"
          >
            3
          </Button>
          <Button variant="outline" size="sm">
            ...
          </Button>
          <Button variant="outline" size="sm">
            100
          </Button>
          <Button variant="outline" size="icon">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
