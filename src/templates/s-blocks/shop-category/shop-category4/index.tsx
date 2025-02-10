import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";

const categories = [
  {
    name: "Electronics & Gadgets",
    description:
      "Discover the latest in tech, from smartphones to smart homes.",
    subcategories: [
      "Smartphones",
      "Laptops",
      "Smart Watches",
      "Headphones",
      "TVs & Monitors",
      "Cameras",
    ],
    color: "bg-blue-500",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Fashion & Apparel",
    description: "Stay stylish with our curated collection of clothing.",
    subcategories: [
      "Men's Clothing",
      "Women's Clothing",
      "Kids' Clothing",
      "Shoes",
      "Accessories",
      "Jewelry",
    ],
    color: "bg-pink-500",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Home & Living",
    description: "Transform your space with our home essentials and decor.",
    subcategories: [
      "Furniture",
      "Kitchen Appliances",
      "Home Decor",
      "Bedding",
      "Lighting",
      "Garden & Outdoor",
    ],
    color: "bg-green-500",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function CategoryHighlights() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Category Highlights
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.name} className="overflow-hidden">
              <div
                className={`relative h-48 w-full ${category.color}`}
                style={{
                  backgroundImage: `url(${category.imageUrl})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <Badge
                  variant="outline"
                  className="absolute right-4 top-4 border-white text-white"
                >
                  Explore
                </Badge>
              </div>
              <CardHeader>
                <CardTitle>{category.name}</CardTitle>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2">
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory}>
                      <Link
                        href="#"
                        className="flex items-center text-sm text-muted-foreground hover:text-foreground hover:underline"
                      >
                        <ChevronRight className="mr-1 h-4 w-4" />
                        {subcategory}
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
