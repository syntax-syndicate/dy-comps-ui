import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  color: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Nomad Pouch",
    color: "White and Black",
    price: 50,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 2,
    name: "Zip Tote Basket",
    color: "Washed Black",
    price: 140,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: 3,
    name: "Medium Stuff Satchel",
    color: "Blue",
    price: 220,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function ProductList10() {
  return (
    <div className="container grid grid-cols-1 gap-6 py-16 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <Card
          key={product.id}
          className="group border transition-colors hover:border-primary/50"
        >
          <CardContent className="p-0">
            <div className="relative aspect-square overflow-hidden rounded-t-lg">
              <Image
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition-transform group-hover:scale-105"
                loading="lazy"
                height={300}
                width={300}
              />
            </div>
            <div className="space-y-2 p-4">
              <h3 className="font-medium text-card-foreground">
                {product.name}
              </h3>
              <Badge variant="secondary" className="font-normal">
                {product.color}
              </Badge>
              <p className="font-medium text-primary">${product.price}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
