import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Organize Basic Set (Walnut)",
    rating: 5,
    reviews: 38,
    price: 149,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 2,
    name: "Organize Pen Holder",
    rating: 5,
    reviews: 18,
    price: 15,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 3,
    name: "Organize Sticky Note Holder",
    rating: 5,
    reviews: 14,
    price: 15,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 4,
    name: "Organize Phone Holder",
    rating: 4,
    reviews: 21,
    price: 15,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 5,
    name: "Organize Small Tray",
    rating: 4,
    reviews: 22,
    price: 15,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 6,
    name: "Organize Basic Set (Maple)",
    rating: 5,
    reviews: 64,
    price: 149,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 7,
    name: "Out and About Bottle",
    rating: 4,
    reviews: 12,
    price: 25,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 8,
    name: "Daily Notebook Refill Pack",
    rating: 4,
    reviews: 41,
    price: 14,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function ProductList8() {
  return (
    <div className="container grid grid-cols-1 gap-4 py-16 md:grid-cols-2 lg:grid-cols-4">
      {products.map((product) => (
        <Card key={product.id} className="border bg-card">
          <CardContent className="p-4">
            <div className="relative mb-3 aspect-square">
              <Image
                src={product.image}
                alt={product.name}
                className="rounded-md bg-muted object-cover"
                loading="lazy"
                height={600}
                width={600}
              />
            </div>
            <h3 className="mb-2 text-sm font-medium text-card-foreground">
              {product.name}
            </h3>
            <div className="mb-1 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`size-4 ${
                    i < product.rating
                      ? "fill-primary text-primary"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
              <span className="ml-1 text-xs text-muted-foreground">
                {product.reviews} reviews
              </span>
            </div>
            <div className="text-sm font-medium text-card-foreground">
              ${product.price}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
