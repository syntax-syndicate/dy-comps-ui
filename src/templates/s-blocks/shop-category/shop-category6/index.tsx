import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Laptop,
  Shirt,
  ShoppingCart,
  Home,
  BookOpen,
  ChevronRight,
} from "lucide-react";

const categories = [
  {
    name: "Computers & Laptops",
    icon: Laptop,
    description: "High-performance laptops and desktops for work and play.",
    subcategories: [
      "Gaming Laptops",
      "Ultrabooks",
      "Workstations",
      "All-in-One PCs",
    ],
    color: "bg-blue-50", // Example using a lighter shade
    borderColor: "border-blue-500",
  },
  {
    name: "Fashion & Apparel",
    icon: Shirt,
    description: "Explore the latest trends in clothing and accessories.",
    subcategories: [
      "Men's Clothing",
      "Women's Clothing",
      "Shoes",
      "Accessories",
    ],
    color: "bg-red-50",
    borderColor: "border-red-500",
  },
  {
    name: "Groceries & Essentials",
    icon: ShoppingCart,
    description: "Shop for fresh produce, pantry staples, and more.",
    subcategories: ["Fresh Produce", "Dairy & Eggs", "Snacks", "Beverages"],
    color: "bg-green-50",
    borderColor: "border-green-500",
  },
  {
    name: "Home & Living",
    icon: Home,
    description: "Furnish and decorate your home with style.",
    subcategories: ["Furniture", "Home Decor", "Kitchenware", "Appliances"],
    color: "bg-yellow-50",
    borderColor: "border-yellow-500",
  },
  {
    name: "Books & Media",
    icon: BookOpen,
    description: "Discover a wide selection of books, music, and movies.",
    subcategories: ["Fiction", "Non-Fiction", "Audiobooks", "Movies & TV"],
    color: "bg-purple-50",
    borderColor: "border-purple-500",
  },
];

export default function CategoryShowcase() {
  return (
    <section className="w-full bg-secondary py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="mb-8 flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Category Showcase
          </h2>
          <Link href="#" passHref>
            <Button variant="secondary" className="text-primary">
              See All Categories
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.name}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <category.icon className="h-10 w-10 text-primary" />
                  <div>
                    <CardTitle>{category.name}</CardTitle>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="grid gap-4">
                {category.subcategories.slice(0, 3).map((subcategory) => (
                  <Link key={subcategory} href="#" passHref>
                    <div className="flex items-center justify-between text-muted-foreground hover:text-foreground hover:underline">
                      <p className="text-sm">{subcategory}</p>
                      <ChevronRight className="h-4 w-4" />
                    </div>
                  </Link>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
