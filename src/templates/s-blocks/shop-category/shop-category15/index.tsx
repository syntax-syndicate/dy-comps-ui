import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Monitor,
  ShoppingBag,
  Gamepad2,
  BookOpen,
  Home,
} from "lucide-react";
import Image from "next/image";

const categories = [
  {
    name: "Electronics",
    description: "Discover the latest in gadgets and technology.",
    icon: Monitor,
    subcategories: [
      { name: "Laptops & Computers", href: "#" },
      { name: "Smartphones & Tablets", href: "#" },
      { name: "Audio & Headphones", href: "#" },
      { name: "Cameras & Photography", href: "#" },
    ],
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Fashion",
    description: "Explore trendy apparel and accessories.",
    icon: ShoppingBag,
    subcategories: [
      { name: "Men's Clothing", href: "#" },
      { name: "Women's Clothing", href: "#" },
      { name: "Shoes & Footwear", href: "#" },
      { name: "Accessories", href: "#" },
    ],
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Gaming",
    description: "Level up with the latest games and consoles.",
    icon: Gamepad2,
    subcategories: [
      { name: "Gaming Consoles", href: "#" },
      { name: "PC Gaming", href: "#" },
      { name: "Gaming Accessories", href: "#" },
      { name: "Video Games", href: "#" },
    ],
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Books",
    description: "Dive into a world of literature and knowledge.",
    icon: BookOpen,
    subcategories: [
      { name: "Fiction", href: "#" },
      { name: "Non-Fiction", href: "#" },
      { name: "Children's Books", href: "#" },
      { name: "Textbooks & Education", href: "#" },
    ],
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Home & Living",
    description: "Furnish and decorate your living space.",
    icon: Home,
    subcategories: [
      { name: "Furniture", href: "#" },
      { name: "Home Decor", href: "#" },
      { name: "Kitchen & Dining", href: "#" },
      { name: "Bed & Bath", href: "#" },
    ],
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function CategoryGridList() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Explore Categories
          </h2>
          <Link href="#" passHref>
            <Button variant="outline">
              View All Categories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.name} className="group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  className="rounded-t-lga absolute inset-0 h-full w-full rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <Badge variant="outline" className="border-white text-white">
                    Explore
                  </Badge>
                </div>
              </div>
              <CardHeader>
                <div className="mt-[-8px] flex items-center space-x-3">
                  <category.icon className="h-8 w-8 text-primary" />
                  <div>
                    <CardTitle className="text-lg font-semibold">
                      {category.name}
                    </CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="mt-2 space-y-2">
                  {category.subcategories.map((subcategory) => (
                    <li key={subcategory.name}>
                      <Link
                        href={subcategory.href}
                        className="text-sm text-muted-foreground hover:text-primary hover:underline"
                      >
                        {subcategory.name}
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
