import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Leather Long Wallet",
    color: "Natural",
    price: "$75",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Machined Pencil and Pen Set",
    color: "Black",
    price: "$70",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Mini-Sketchbooks",
    color: "Light Brown",
    price: "$27",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Organizer Set",
    color: "Walnut",
    price: "$149",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function ProductList3() {
  return (
    <section className="bg-background px-4 py-12 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            Trending products
          </h2>
          <Link
            href="#"
            className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/90"
          >
            Shop the collection
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <Link key={i} href="#" className="group">
              <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <h3 className="mb-1 font-medium transition-colors duration-300 group-hover:text-primary">
                {product.name}
              </h3>
              <p className="mb-2 text-sm text-muted-foreground">
                {product.color}
              </p>
              <p className="font-medium text-primary">{product.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
