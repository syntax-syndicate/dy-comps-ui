import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Zap,
  ShoppingBag,
  Gamepad2,
  BookOpen,
  Home,
} from "lucide-react";

const categories = [
  {
    name: "Electronics",
    description: "Gadgets, devices, and tech accessories.",
    icon: Zap,
    color: "bg-primary/10",
    items: [
      {
        name: "Laptops & Computers",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Smartphones & Tablets",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Audio & Headphones",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
  {
    name: "Fashion",
    description: "Apparel, shoes, and stylish accessories.",
    icon: ShoppingBag,
    color: "bg-secondary/10",
    items: [
      {
        name: "Men's Clothing",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Women's Clothing",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Shoes & Footwear",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
  {
    name: "Gaming",
    description: "Consoles, games, and gaming gear.",
    icon: Gamepad2,
    color: "bg-accent/10",
    items: [
      {
        name: "Gaming Consoles",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "PC Gaming",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Gaming Accessories",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
  {
    name: "Books",
    description: "Explore a world of literature and knowledge.",
    icon: BookOpen,
    color: "bg-muted/50",
    items: [
      {
        name: "Fiction",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Non-Fiction",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Children's Books",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
  {
    name: "Home & Living",
    description: "Furnish and decorate your living space.",
    icon: Home,
    color: "bg-card/50",
    items: [
      {
        name: "Furniture",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Home Decor",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Kitchen & Dining",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
];

export default function CategoryMosaic() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:text-5xl">
            Category Mosaic
          </h2>
          <Link href="#" passHref>
            <Button variant="outline">
              View All Categories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.name} className={`group ${category.color}`}>
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <category.icon className="h-10 w-10 text-primary" />
                  <div>
                    <CardTitle className="text-xl font-semibold text-foreground">
                      {category.name}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="mt-4">
                <div className="grid grid-cols-2 gap-4">
                  {category.items.map((item) => (
                    <Link key={item.name} href="#" passHref>
                      <div className="relative overflow-hidden rounded-md border-2 hover:border-primary">
                        <Image
                          src={
                            item.image ||
                            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                          }
                          alt={item.name}
                          width={200}
                          height={96}
                          className="h-24 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
                        <p className="absolute bottom-2 left-2 text-sm font-medium">
                          {item.name}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
