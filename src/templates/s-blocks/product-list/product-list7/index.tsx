import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: "black-tee",
    name: "Black Basic Tee",
    price: 32,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: "off-white-tee",
    name: "Off-White Basic Tee",
    price: 32,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: "mountains-tee",
    name: "Mountains Artwork Tee",
    price: 36,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function ProductList7() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-12">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-foreground">
          Our Favorites
        </h2>
        <Link
          href="/favorites"
          className="flex items-center text-sm text-primary transition-colors hover:text-primary/90"
        >
          Browse all favorites
          <ArrowRight className="ml-1 size-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((product) => (
          <Card key={product.id} className="border-none p-6 shadow-none">
            <CardContent className="p-0">
              <Link href={`/products/${product.id}`}>
                <div className="relative aspect-[3/4] overflow-hidden rounded-md bg-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    height={600}
                    width={500}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="font-medium text-foreground">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    ${product.price}
                  </p>
                </div>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
