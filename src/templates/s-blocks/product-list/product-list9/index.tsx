import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

interface Product {
  title: string;
  category: string;
  price: number;
  image: string;
  href: string;
}

const products: Product[] = [
  {
    title: "Fusion",
    category: "UI Kit",
    price: 49,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    href: "#",
  },
  {
    title: "Marketing Icon Pack",
    category: "Icons",
    price: 19,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    href: "#",
  },
  {
    title: "Scaffold",
    category: "Wireframe Kit",
    price: 29,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    href: "#",
  },
  {
    title: "Bones",
    category: "Wireframe Kit",
    price: 29,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    href: "#",
  },
];

export default function ProductList9() {
  return (
    <section className="container w-full py-16">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-medium text-foreground">
          Customers also viewed
        </h2>
        <Link href="#" className="text-sm text-primary hover:underline">
          View all →
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <Card key={product.title} className="overflow-hidden border">
            <Link href={product.href}>
              <div className="relative aspect-[3/2]">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  height={400}
                  width={600}
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-foreground">{product.title}</h3>
                <p className="text-sm text-primary">{product.category}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <p className="font-medium text-foreground">${product.price}</p>
              </CardFooter>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
