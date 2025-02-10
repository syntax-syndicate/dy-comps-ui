import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    href: "#",
    price: "$48",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
    rating: 4,
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    href: "#",
    price: "$35",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
    rating: 5,
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    href: "#",
    price: "$89",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
    rating: 3,
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    href: "#",
    price: "$35",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
    rating: 4,
  },
  {
    id: 5,
    name: "Leather Desk Pad",
    href: "#",
    price: "$59",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    imageAlt: "Leather desk pad with smooth surface and felt bottom.",
    rating: 5,
  },
  {
    id: 6,
    name: "Wooden Desk Organizer",
    href: "#",
    price: "$42",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    imageAlt:
      "Wooden desk organizer with multiple compartments for stationery items.",
    rating: 4,
  },
  {
    id: 7,
    name: "Ceramic Coffee Mug",
    href: "#",
    price: "$24",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    imageAlt: "White ceramic coffee mug with minimalist design.",
    rating: 3,
  },
  {
    id: 8,
    name: "Leather Bound Journal",
    href: "#",
    price: "$38",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    imageAlt: "Leather bound journal with high-quality paper pages.",
    rating: 5,
  },
];

export default function ProductList2() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <Card key={product.id} className="group">
              <CardContent className="p-0">
                <Link href={product.href} className="block">
                  <div className="aspect-h-1 aspect-w-1 xl:aspect-h-8 xl:aspect-w-7 w-full overflow-hidden rounded-lg rounded-b-none">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      width={500}
                      height={500}
                      className="h-full w-full object-cover object-center transition-opacity duration-300 group-hover:opacity-75"
                    />
                  </div>
                  <div className="px-4 py-3">
                    <h3 className="text-sm text-foreground transition-colors duration-300 group-hover:text-primary">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-lg font-medium text-foreground">
                      {product.price}
                    </p>
                    <div className="mt-1 flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${
                            i < product.rating
                              ? "fill-primary text-primary"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
