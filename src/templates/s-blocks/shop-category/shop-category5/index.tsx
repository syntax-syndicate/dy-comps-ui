import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Monitor,
  Smartphone,
  Shirt,
  ShoppingCart,
  Wrench,
  Book,
  Zap,
  Dumbbell,
  Activity,
} from "lucide-react";

const categories = [
  {
    name: "Electronics",
    icon: Zap,
    description: "Explore the latest gadgets and tech.",
    badge: "New Arrivals",
    color: "from-blue-500 to-indigo-500",
    subcategories: [
      {
        name: "Laptops",
        icon: Monitor,
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Smartphones",
        icon: Smartphone,
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
  {
    name: "Fashion",
    icon: Shirt,
    description: "Discover trendy apparel and accessories.",
    badge: "Sale",
    color: "from-pink-500 to-rose-500",
    subcategories: [
      {
        name: "Men's Wear",
        icon: Shirt,
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Women's Wear",
        icon: Shirt,
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
  {
    name: "Groceries",
    icon: ShoppingCart,
    description: "Fresh produce and everyday essentials.",
    badge: "Organic",
    color: "from-green-500 to-emerald-500",
    subcategories: [
      {
        name: "Fruits & Veggies",
        icon: ShoppingCart,
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Dairy & Eggs",
        icon: ShoppingCart,
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
  {
    name: "Home & Garden",
    icon: Wrench,
    description: "Everything for your home improvement needs.",
    badge: "DIY",
    color: "from-yellow-500 to-orange-500",
    subcategories: [
      {
        name: "Tools",
        icon: Wrench,
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Decor",
        icon: Wrench,
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
  {
    name: "Books",
    icon: Book,
    description: "Dive into a world of stories and knowledge.",
    badge: "Bestsellers",
    color: "from-purple-500 to-violet-500",
    subcategories: [
      {
        name: "Fiction",
        icon: Book,
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Non-Fiction",
        icon: Book,
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
  {
    name: "Fitness & Sports",
    icon: Dumbbell, // Assuming you have a Dumbbell icon
    description: "Gear up for an active lifestyle.",
    badge: "Hot Deals",
    color: "from-red-500 to-orange-500",
    subcategories: [
      {
        name: "Gym Equipment",
        icon: Dumbbell,
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Outdoor Sports",
        icon: Activity,
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      }, // Assuming you have an Activity icon
    ],
  },
];

export default function DiscoverCategories() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Discover Categories
          </h2>
          <Link href="#" passHref>
            <Button variant="link" className="text-primary">
              View All
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.name} className="relative overflow-hidden">
              <div
                className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-80`}
              ></div>
              <CardHeader className="relative z-10">
                <category.icon className="h-8 w-8 text-white" />
                <CardTitle className="text-white">{category.name}</CardTitle>
                <p className="text-sm text-white">{category.description}</p>
                {category.badge && (
                  <Badge className="absolute right-4 top-4">
                    {category.badge}
                  </Badge>
                )}
              </CardHeader>
              <CardContent className="relative z-10 mt-4">
                <div className="grid grid-cols-2 gap-4">
                  {category.subcategories.map((subcategory) => (
                    <Link key={subcategory.name} href="#" passHref>
                      <Card className="flex flex-col items-center p-4 transition-transform hover:scale-105">
                        <img
                          src={subcategory.image}
                          alt={subcategory.name}
                          className="mb-2 h-16 w-16"
                        />
                        <p className="text-center text-sm font-medium">
                          {subcategory.name}
                        </p>
                      </Card>
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
