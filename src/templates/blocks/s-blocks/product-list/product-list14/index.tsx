"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Heart, ChevronDown, ArrowUpDown, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const categories = [
  { id: "tv", label: "TV, Audio-Video" },
  { id: "desktop", label: "Desktop PC", checked: true },
  { id: "gaming", label: "Gaming" },
  { id: "monitors", label: "Monitors" },
  { id: "laptops", label: "Laptops", checked: true },
  { id: "console", label: "Console" },
  { id: "tablets", label: "Tablets", checked: true },
  { id: "foto", label: "Foto" },
  { id: "fashion", label: "Fashion" },
  { id: "books", label: "Books" },
];

const products = [
  {
    id: 1,
    name: "Apple Watch SE - Gen 3",
    price: 299,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    options: {
      size: "Display size",
      color: "Color",
      storage: null,
    },
    delivery: "Jun 23 - Jun 24",
  },
  {
    id: 2,
    name: "PlayStation®5 Console – 1TB",
    price: 599,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    options: {
      storage: "512GB",
      color: "Gray",
    },
    delivery: "Tomorrow",
  },
  {
    id: 3,
    name: "iPad Pro 13-Inch (M4)",
    price: 1299,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    options: {
      storage: "512GB",
      color: "Gold",
    },
    delivery: "Jul 2 2024",
  },
  {
    id: 4,
    name: `Apple iMac 27", M3 Max`,
    price: 2899,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    options: {
      storage: "512GB",
      color: "Choose a color",
    },
    delivery: "Aug 14 - Aug 15",
  },
  {
    id: 5,
    name: "Apple MacBook PRO M2 Max",
    price: 4999,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    options: {
      storage: "512GB",
      color: "Choose a color",
    },
    delivery: "Jul 2 2024",
  },
  {
    id: 6,
    name: "Apple iPhone 15 Pro Max",
    price: 1999,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    options: {
      storage: "512GB",
      color: "Choose a color",
    },
    delivery: "Tomorrow",
  },
];

export default function ElectronicsFilters() {
  return (
    <div className="container mx-auto py-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center space-x-2 text-sm text-muted-foreground">
        <Link href="/" className="flex items-center hover:text-primary">
          <Home className="mr-1 h-4 w-4" />
          Home
        </Link>
        <span>/</span>
        <Link href="/products" className="hover:text-primary">
          Products
        </Link>
        <span>/</span>
        <span className="text-foreground">Electronics</span>
      </nav>

      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Electronics</h1>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <ArrowUpDown className="h-4 w-4" />
          Sort
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-[280px_1fr]">
        {/* Filters Sidebar */}
        <div className="space-y-6">
          {/* Categories */}
          <div className="rounded-lg border">
            <div className="rounded-t-lg border-b p-4">
              <h2 className="font-semibold text-foreground">Categories</h2>
            </div>
            <div className="p-4">
              <div className="relative">
                <Input placeholder="Search for categories" className="pl-8" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <div className="mt-4 space-y-3">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    className="flex items-center space-x-2"
                  >
                    <Checkbox
                      id={category.id}
                      defaultChecked={category.checked}
                    />
                    <label
                      htmlFor={category.id}
                      className="cursor-pointer text-sm text-muted-foreground"
                    >
                      {category.label}
                    </label>
                  </div>
                ))}
              </div>
              <Button variant="link" className="mt-2 h-auto p-0 text-primary">
                See more
              </Button>
            </div>
          </div>

          {/* Other Filters */}
          {[
            "Rating",
            "Price",
            "Shipping to",
            "Color",
            "Delivery Method",
            "Condition",
            "Weight",
          ].map((filter) => (
            <Collapsible key={filter}>
              <CollapsibleTrigger className="flex w-full items-center justify-between rounded-lg border p-4 font-semibold text-foreground">
                {filter}
                <ChevronDown className="h-4 w-4" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 pt-2">
                <div className="text-sm text-muted-foreground">
                  Filter options for {filter}...
                </div>
              </CollapsibleContent>
            </Collapsible>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <Card key={product.id} className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-2 z-10"
              >
                <Heart className="h-4 w-4" />
              </Button>
              <CardContent className="p-4">
                <div className="relative mb-4 aspect-square">
                  <Image
                    src={
                      product.image ||
                      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    }
                    alt={product.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="font-medium text-foreground">
                    {product.name}
                  </h3>
                  <div className="text-2xl font-bold text-foreground">
                    ${product.price}
                  </div>

                  <div className="grid gap-3">
                    {Object.entries(product.options).map(
                      ([key, value]) =>
                        value && (
                          <div key={key} className="space-y-1.5">
                            <div className="flex items-center gap-1">
                              <span className="text-sm capitalize text-muted-foreground">
                                {key}
                              </span>
                            </div>
                            <Select defaultValue={value.toString()}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value={value.toString()}>
                                  {value}
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        ),
                    )}
                  </div>

                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Add to cart
                  </Button>

                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span>Estimated Delivery</span>
                    <span className="font-medium text-foreground">
                      {product.delivery}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
