import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Monitor,
  ShoppingBag,
  Gamepad2,
  BookOpen,
  Home,
  CheckCircle,
} from "lucide-react";

const categories = [
  {
    name: "Electronics",
    description: "Discover the latest in gadgets and tech.",
    icon: Monitor,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    listStyle: "disc",
    items: [
      "Laptops & Computers",
      "Smartphones & Tablets",
      "Audio & Headphones",
      "Cameras & Photography",
      "Wearable Tech",
      "TV & Home Theater",
    ],
  },
  {
    name: "Fashion",
    description: "Explore trendy apparel and accessories.",
    icon: ShoppingBag,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    listStyle: "decimal", // Use a numbered list
    items: [
      "Men's Clothing",
      "Women's Clothing",
      "Shoes & Footwear",
      "Handbags & Wallets",
      "Jewelry & Watches",
      "Accessories",
    ],
  },
  {
    name: "Gaming",
    description: "Level up with the latest games and consoles.",
    icon: Gamepad2,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    listStyle: "none", // Use custom icons
    items: [
      { name: "Gaming Consoles", icon: CheckCircle },
      { name: "PC Gaming", icon: CheckCircle },
      { name: "Gaming Accessories", icon: CheckCircle },
      { name: "Video Games", icon: CheckCircle },
    ],
  },
  {
    name: "Books",
    description: "Dive into a world of literature and knowledge.",
    icon: BookOpen,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    listStyle: "disc",
    items: [
      "Fiction",
      "Non-Fiction",
      "Children's Books",
      "Textbooks & Education",
      "Audiobooks",
      "Magazines & Newspapers",
    ],
  },
  {
    name: "Home & Living",
    description: "Furnish and decorate your living space.",
    icon: Home,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    listStyle: "decimal",
    items: [
      "Furniture",
      "Home Decor",
      "Kitchen & Dining",
      "Bed & Bath",
      "Appliances",
      "Outdoor & Garden",
    ],
  },
];

export default function CategoryInfoPanels() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Explore Our Product Universe
        </h2>
        <div className="space-y-8">
          {categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-1 items-center gap-8 rounded-lg border md:grid-cols-2"
            >
              <div className="relative h-64 overflow-hidden rounded-b-none rounded-t-lg sm:rounded-lg sm:rounded-r-none md:h-96">
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                  <category.icon className="h-8 w-8 text-white" />
                  <span className="text-xl font-bold text-white">
                    {category.name}
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4 p-6">
                <h3 className="text-2xl font-semibold">{category.name}</h3>
                <p className="text-muted-foreground">{category.description}</p>
                <ul
                  className={`${
                    category.listStyle === "disc"
                      ? "list-disc"
                      : category.listStyle === "decimal"
                        ? "list-decimal"
                        : "list-none"
                  } space-y-2 pl-5`}
                >
                  {category.items.map((item) => (
                    <li
                      key={typeof item === "string" ? item : item.name}
                      className="flex items-center"
                    >
                      {category.listStyle === "none" && item.icon && (
                        <item.icon className="mr-2 h-4 w-4 text-primary" />
                      )}
                      <Link
                        href="#"
                        className="hover:text-primary hover:underline"
                      >
                        {typeof item === "string" ? item : item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Link href="#" passHref>
                    <Button variant="outline">
                      Explore Category
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
