import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  colors: string;
  price: number;
  image: string;
}

const products: Product[] = [
  {
    id: "zip-tote-basket",
    name: "Zip Tote Basket",
    colors: "White and black",
    price: 140,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: "zip-high-wall-tote",
    name: "Zip High Wall Tote",
    colors: "White and blue",
    price: 150,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: "halfsize-tote",
    name: "Halfsize Tote",
    colors: "Clay",
    price: 210,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: "high-wall-tote",
    name: "High Wall Tote",
    colors: "Black and orange",
    price: 210,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function ProductList6() {
  return (
    <section className="w-full py-12">
      <div className="container">
        <h2 className="mb-8 text-2xl font-semibold tracking-tight text-foreground">
          Customers also bought
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {products.map((product) => (
            <Card key={product.id} className="border-none p-4 shadow-none">
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-b from-background to-muted">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute bottom-2 right-2 rounded-md bg-background/80 px-2 py-1 backdrop-blur-sm">
                    <span className="text-sm font-semibold text-foreground">
                      ${product.price}
                    </span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-start space-y-2 p-0 pt-2">
                <div>
                  <h3 className="font-medium text-foreground">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {product.colors}
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="w-full border-primary/10 bg-primary/5 text-primary hover:border-primary/20 hover:bg-primary/10"
                >
                  Add to bag
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
