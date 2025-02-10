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
  ChevronRight,
} from "lucide-react";

const categories = [
  {
    name: "Electronics",
    description: "Discover the latest in gadgets and tech.",
    icon: Monitor,
    subcategories: [
      { name: "Laptops & Computers", href: "#" },
      { name: "Smartphones & Tablets", href: "#" },
      { name: "Audio & Headphones", href: "#" },
      { name: "Cameras & Photography", href: "#" },
    ],
    color: "border-gray-300", // Used for subtle border
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
    color: "border-gray-300",
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
    color: "border-gray-300",
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
    color: "border-gray-300",
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
    color: "border-gray-300",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function CategoryListWithDetails() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Explore Our Categories
        </h2>
        <div className="space-y-8">
          {categories.map((category) => (
            <Card
              key={category.name}
              className={`border-b-2 ${category.color} group`}
            >
              <div className="flex flex-col items-center md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="h-48 w-full rounded-t-lg object-cover md:rounded-l-lg md:rounded-tr-none"
                  />
                </div>
                <div className="p-6 md:w-2/3">
                  <CardHeader className="flex flex-row items-center justify-between space-x-4 p-0">
                    <div className="flex items-center space-x-4">
                      <category.icon className="h-8 w-8 text-muted-foreground" />
                      <div>
                        <CardTitle className="text-xl font-semibold">
                          {category.name}
                        </CardTitle>
                        <CardDescription className="text-sm text-muted-foreground">
                          {category.description}
                        </CardDescription>
                      </div>
                    </div>
                    <Link href="#" passHref>
                      <Button
                        variant="link"
                        className="text-muted-foreground group-hover:text-primary"
                      >
                        View All
                        <ChevronRight className="h-5 w-5" />
                      </Button>
                    </Link>
                  </CardHeader>
                  <CardContent className="mt-4 p-0">
                    <ul className="grid grid-cols-2 gap-2">
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
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
