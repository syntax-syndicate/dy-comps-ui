"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
    rating: 4.5,
    reviewCount: 38,
    isNew: true,
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    imageAlt: "Front of men's Basic Tee in white.",
    price: "$35",
    color: "White",
    rating: 4.2,
    reviewCount: 42,
    isPopular: true,
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    imageAlt: "Front of men's Basic Tee in navy.",
    price: "$35",
    color: "Navy",
    rating: 4.0,
    reviewCount: 31,
  },
  {
    id: 4,
    name: "Artwork Tee",
    href: "#",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    imageAlt: "Front of men's Artwork Tee in peach.",
    price: "$40",
    color: "Peach",
    rating: 4.7,
    reviewCount: 54,
    isPopular: true,
  },
];

export default function ProductList1() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1,
    );
  };

  return (
    <section className="bg-background py-12 sm:py-16">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Customers also purchased
          </h2>
          <div className="flex space-x-2 lg:hidden">
            <Button variant="outline" size="icon" onClick={prevSlide}>
              <ChevronLeft className="size-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={nextSlide}>
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product, index) => (
              <Card
                key={product.id}
                className={`group relative transition-opacity duration-300 ${
                  index === currentIndex
                    ? "opacity-100"
                    : "opacity-0 lg:opacity-100"
                } ${index !== currentIndex ? "absolute left-0 top-0 lg:static" : ""}`}
              >
                <CardContent className="flex h-[450px] flex-col p-0">
                  <div
                    className="relative w-full flex-shrink-0 overflow-hidden rounded-t-lg bg-muted"
                    style={{ height: "350px" }}
                  >
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    {(product.isNew ?? product.isPopular) && (
                      <Badge
                        className="absolute right-2 top-2"
                        variant={product.isNew ? "default" : "secondary"}
                      >
                        {product.isNew ? "New" : "Popular"}
                      </Badge>
                    )}
                  </div>
                  <div className="flex flex-grow flex-col justify-between p-4">
                    <div className="flex-grow">
                      <h3 className="text-sm text-foreground">
                        <Link href={product.href}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          />
                          {product.name}
                        </Link>
                      </h3>
                      <p className="mt-1 text-sm text-primary">
                        {product.color}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center justify-between">
                      <p className="text-sm font-medium text-foreground">
                        {product.price}
                      </p>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <Star
                              key={rating}
                              className={`size-4 flex-shrink-0 ${
                                product.rating > rating
                                  ? "text-primary"
                                  : "text-secondary"
                              }`}
                              fill="currentColor"
                            />
                          ))}
                        </div>
                        <p className="ml-1 text-sm text-muted-foreground">
                          {product.reviewCount}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline">View All Related Products</Button>
        </div>
      </div>
    </section>
  );
}
