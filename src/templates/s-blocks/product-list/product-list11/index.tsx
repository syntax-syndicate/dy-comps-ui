import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  colors: string[];
  imageUrl: string;
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="border shadow-none">
      <CardHeader className="p-0">
        <div className="overflow-hidden rounded-lg rounded-b-none">
          <Image
            src={product.imageUrl}
            alt={product.name}
            height={400}
            width={400}
            className="aspect-square h-full w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-1.5 p-4">
        <h3 className="font-semibold text-foreground">{product.name}</h3>
        <p className="text-sm text-muted-foreground">{product.description}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start gap-2 p-4">
        <div className="text-sm text-primary">
          {product.colors.length > 1
            ? `${product.colors.length} colors`
            : product.colors[0]}
        </div>
        <div className="font-semibold">${product.price}</div>
      </CardFooter>
    </Card>
  );
}

const products: Product[] = [
  {
    id: "1",
    name: "Basic Tee 8-Pack",
    description:
      "Get the full lineup of our Basic Tees. Have a fresh shirt all week, and an extra for laundry day.",
    price: 256,
    colors: ["8 colors"],
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: "2",
    name: "Basic Tee",
    description:
      "Look like a visionary CEO and wear the same black t-shirt every day.",
    price: 32,
    colors: ["Black"],
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: "3",
    name: "Kinda White Basic Tee",
    description: "It's probably, like, 5000 Kelvin instead of 6000 K.",
    price: 32,
    colors: ["White"],
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: "4",
    name: "Stone Basic Tee",
    description:
      "White tees stain easily, and black tees fade. This is going to be gray for a while.",
    price: 32,
    colors: ["Charcoal"],
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: "5",
    name: "Fall Basic Tee 3-Pack",
    description:
      "Who need stark minimalism when you could have earth tones? Embrace the season.",
    price: 96,
    colors: ["Charcoal"],
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: "6",
    name: "Linework Artwork Tee 3-Pack",
    description:
      "Get all 3 colors of our popular Linework design and some variety to your monotonous life.",
    price: 108,
    colors: ["3 colors"],
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function ProductList11() {
  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
