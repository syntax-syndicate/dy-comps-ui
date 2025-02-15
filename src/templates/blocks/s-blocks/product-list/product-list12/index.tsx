"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Eye, Heart, SlidersHorizontal, ArrowUpDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Product {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviews: number;
  discount: string;
  image: string;
  badges: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Apple iMac 27", 1TB HDD, Retina 5K Display, M3 Max',
    price: 1699,
    rating: 5.0,
    reviews: 655,
    discount: "Up to 35% off",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    badges: ["Fast Delivery", "Best Price"],
  },
  {
    id: 2,
    name: "Apple iPhone 15 Pro Max, 256GB, Blue Titanium",
    price: 1199,
    rating: 4.9,
    reviews: 1233,
    discount: "Up to 15% off",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    badges: ["Best Seller", "Best Price"],
  },
  {
    id: 3,
    name: 'Apple MacBook Pro 16", 1TB SSD, M2 Pro',
    price: 2499,
    rating: 4.8,
    reviews: 987,
    discount: "Up to 20% off",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    badges: ["Fast Delivery", "Best Seller"],
  },
  {
    id: 4,
    name: "Apple iPad Pro 12.9”, 1TB, Wi-Fi + Cellular",
    price: 1499,
    rating: 4.7,
    reviews: 876,
    discount: "Up to 10% off",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    badges: ["Best Price", "New Arrival"],
  },
  {
    id: 5,
    name: "Apple Watch Ultra 2, Titanium Case, Ocean Band",
    price: 799,
    rating: 4.9,
    reviews: 543,
    discount: "Up to 25% off",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    badges: ["Best Seller", "Fast Delivery"],
  },
  {
    id: 6,
    name: "Apple AirPods Max, Silver",
    price: 549,
    rating: 4.6,
    reviews: 432,
    discount: "Up to 30% off",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    badges: ["Best Price", "New Arrival"],
  },
  {
    id: 7,
    name: "Apple TV 4K, 128GB",
    price: 199,
    rating: 4.5,
    reviews: 321,
    discount: "Up to 15% off",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    badges: ["Best Seller", "Fast Delivery"],
  },
  {
    id: 8,
    name: "Apple HomePod Mini, Space Gray",
    price: 99,
    rating: 4.7,
    reviews: 210,
    discount: "Up to 10% off",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    badges: ["Best Price", "New Arrival"],
  },
  {
    id: 9,
    name: 'Apple iMac 24", 512GB SSD, Retina 4.5K Display, M2',
    price: 1299,
    rating: 4.8,
    reviews: 765,
    discount: "Up to 25% off",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    badges: ["Fast Delivery", "Best Price"],
  },
  {
    id: 10,
    name: "Apple iPhone 15, 128GB, Pink",
    price: 799,
    rating: 4.7,
    reviews: 987,
    discount: "Up to 10% off",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    badges: ["Best Seller", "Best Price"],
  },
  {
    id: 11,
    name: 'Apple MacBook Air 13", 256GB SSD, M2',
    price: 1099,
    rating: 4.9,
    reviews: 876,
    discount: "Up to 15% off",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    badges: ["Fast Delivery", "Best Seller"],
  },
  {
    id: 12,
    name: "Apple iPad Air, 256GB, Wi-Fi",
    price: 699,
    rating: 4.6,
    reviews: 654,
    discount: "Up to 20% off",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    badges: ["Best Price", "New Arrival"],
  },
  {
    id: 13,
    name: "Apple Watch Series 9, Aluminum Case, Midnight",
    price: 399,
    rating: 4.8,
    reviews: 543,
    discount: "Up to 30% off",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    badges: ["Best Seller", "Fast Delivery"],
  },
  {
    id: 14,
    name: "Apple AirPods Pro (2nd Generation)",
    price: 249,
    rating: 4.7,
    reviews: 432,
    discount: "Up to 25% off",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    badges: ["Best Price", "New Arrival"],
  },
  {
    id: 15,
    name: "Apple TV HD, 32GB",
    price: 149,
    rating: 4.4,
    reviews: 321,
    discount: "Up to 10% off",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    badges: ["Best Seller", "Fast Delivery"],
  },
  {
    id: 16,
    name: "Apple HomePod Mini, White",
    price: 99,
    rating: 4.6,
    reviews: 210,
    discount: "Up to 10% off",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    badges: ["Best Price", "New Arrival"],
  },
];

export default function ElectronicsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8 flex items-center space-x-2 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-primary">
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
        <div className="flex items-center gap-4">
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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="group relative">
            {/* Discount Badge */}
            {product.discount && (
              <span className="absolute left-2 top-2 rounded bg-primary px-2 py-1 text-xs text-primary-foreground">
                {product.discount}
              </span>
            )}

            {/* Quick Actions */}
            <div className="absolute right-2 top-2 flex gap-2">
              <Button size="icon" variant="secondary" className="h-8 w-8">
                <Eye className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="secondary" className="h-8 w-8">
                <Heart className="h-4 w-4" />
              </Button>
            </div>

            <CardContent className="p-4">
              {/* Product Image */}
              <div className="mb-4 aspect-square overflow-hidden rounded-lg bg-muted">
                <Image
                  src={
                    product.image ||
                    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  }
                  alt={product.name}
                  width={280}
                  height={280}
                  className="h-full w-full object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <h3 className="line-clamp-2 font-medium text-foreground">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {product.rating} ({product.reviews})
                  </span>
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2">
                  {product.badges.map((badge) => (
                    <span
                      key={badge}
                      className="rounded bg-muted px-2 py-1 text-xs text-muted-foreground"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-lg font-semibold text-foreground">
                    ${product.price}
                  </span>
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Show More */}
      <div className="mt-8 text-center">
        <Button variant="outline">Show more</Button>
      </div>
    </div>
  );
}
