"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Home,
  ArrowUpDown,
  SlidersHorizontal,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    brand: "APPLE",
    name: 'Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max',
    rating: 4.8,
    reviews: 2868,
    price: 2499,
    vatPrice: 2066,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 2,
    brand: "APPLE",
    name: "Apple Watch SE (2nd Gen) [GPS 40mm] Smartwatch",
    rating: 5.0,
    reviews: 455,
    price: 1399.0,
    vatPrice: 1041.94,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 3,
    brand: "SONY",
    name: "PlayStation®5 Console – 1TB, PRO Controller",
    rating: 4.9,
    reviews: 5654,
    price: 599.0,
    vatPrice: 499,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 4,
    brand: "MICROSOFT",
    name: "Microsoft Xbox Series X 1TB Gaming Console",
    rating: 4.9,
    reviews: 4035,
    price: 499,
    vatPrice: 399,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 5,
    brand: "APPLE",
    name: "Apple iPhone 15 Pro Max, 256GB, Blue Titanium",
    rating: 4.8,
    reviews: 1233,
    price: 1299.0,
    vatPrice: 1099,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 6,
    brand: "APPLE",
    name: "iPad Pro 13-inch (M4): XDR Display, 512GB",
    rating: 5.0,
    reviews: 900,
    price: 999.0,
    vatPrice: 899,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 7,
    brand: "APPLE",
    name: "Apple MacBook PRO Laptop with M2 chip",
    rating: 4.9,
    reviews: 2774,
    price: 3599.0,
    vatPrice: 3199,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 8,
    brand: "MICROSOFT",
    name: "Microsoft Surface Pro, Copilot+ PC, 13 inch",
    rating: 4.8,
    reviews: 806,
    price: 299,
    vatPrice: 199,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function ProductGrid() {
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

      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold text-foreground">Electronics</h1>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <SlidersHorizontal className="h-4 w-4" />
            Filters
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2"
          >
            <ArrowUpDown className="h-4 w-4" />
            Sort
          </Button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="group">
            <CardContent className="p-4">
              {/* Product Image */}
              <div className="relative mb-4 aspect-square rounded-lg bg-muted">
                <Image
                  src={
                    product.image ||
                    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  }
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
              </div>

              {/* Brand */}
              <div className="mb-1 text-sm font-medium text-primary">
                {product.brand}
              </div>

              {/* Product Name */}
              <h3 className="mb-2 line-clamp-2 font-medium text-foreground">
                {product.name}
              </h3>

              {/* Rating */}
              <div className="mb-3 flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews})
                </span>
              </div>

              {/* Price */}
              <div className="mb-4">
                <div className="text-xl font-bold text-foreground">
                  ${product.price.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">
                  ${product.vatPrice} ex. VAT
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Wishlist
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Compare
                  </Button>
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Add to cart
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-8 flex items-center justify-between">
        <p className="text-sm text-muted-foreground">
          Showing 1 to 8 of 100 Entries
        </p>
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            <ChevronLeft className="h-4 w-4" /> Prev
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-1"
          >
            Next <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
