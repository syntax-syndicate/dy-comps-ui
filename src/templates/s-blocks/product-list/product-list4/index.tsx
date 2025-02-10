import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const products = [
  {
    name: "Machined Pen",
    color: "Black",
    price: "$35",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    colors: [
      { name: "Black", class: "bg-black" },
      { name: "Gold", class: "bg-yellow-400" },
      { name: "Silver", class: "bg-gray-300" },
    ],
  },
  {
    name: "Earthen Mug",
    color: "Matte Black",
    price: "$28",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    colors: [
      { name: "Matte Black", class: "bg-black" },
      { name: "Gold", class: "bg-yellow-400" },
    ],
  },
  {
    name: "Leatherbound Daily Journal Set",
    color: "Natural",
    price: "$50",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    colors: [
      { name: "Gold", class: "bg-yellow-400" },
      { name: "Brown", class: "bg-brown-600" },
      { name: "Dark Brown", class: "bg-brown-900" },
    ],
  },
  {
    name: "Leatherbound Daily Journal",
    color: "Black",
    price: "$50",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    colors: [
      { name: "Black", class: "bg-black" },
      { name: "Brown", class: "bg-brown-600" },
      { name: "Gold", class: "bg-yellow-400" },
    ],
  },
];

export default function ProductList4() {
  return (
    <section className="px-4 py-12 md:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold tracking-tight">
            Trending products
          </h2>
          <Link
            href="#"
            className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/90"
          >
            See everything
            <ArrowRight className="size-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <div key={i} className="group">
              <Link href="#" className="block">
                <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={400}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>
              </Link>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">{product.color}</p>
                <Link
                  href="#"
                  className="block transition-colors group-hover:text-primary"
                >
                  <h3 className="font-medium">{product.name}</h3>
                </Link>
                <p className="font-medium text-primary">{product.price}</p>
                <div className="mt-2 flex gap-2">
                  {product.colors.map((color, colorIndex) => (
                    <button
                      key={colorIndex}
                      className={`size-4 rounded-full ring-1 ring-inset ring-gray-300 hover:ring-primary focus:outline-none focus:ring-2 focus:ring-primary ${color.class}`}
                      title={color.name}
                    >
                      <span className="sr-only">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
