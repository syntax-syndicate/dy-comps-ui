import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge"; // Correct import for Badge
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
    description:
      "Discover the latest gadgets, from smartphones to laptops and more.",
    icon: Monitor,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    tags: ["New Arrivals", "Best Sellers", "Smart Tech"],
  },
  {
    name: "Fashion",
    description: "Explore trendy apparel, shoes, and accessories for all.",
    icon: ShoppingBag,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    tags: ["Men's", "Women's", "Accessories", "Sale"],
  },
  {
    name: "Gaming",
    description:
      "Level up your gaming experience with the latest consoles and games.",
    icon: Gamepad2,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    tags: ["Consoles", "PC Gaming", "Accessories", "Deals"],
  },
  {
    name: "Books",
    description:
      "Dive into a world of literature, from fiction to non-fiction.",
    icon: BookOpen,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    tags: ["Fiction", "Non-Fiction", "Children's", "Bestsellers"],
  },
  {
    name: "Home & Living",
    description: "Furnish and decorate your space with our curated selection.",
    icon: Home,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    tags: ["Furniture", "Decor", "Kitchen", "Bed & Bath"],
  },
];

export default function CategoryTagList() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Category Highlights
          </h2>
          <Link href="#" passHref>
            <Button variant="outline">
              Explore All Categories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.name} className="group">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 h-full w-full rounded-t-lg object-cover transition-transform duration-300 group-hover:scale-105"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute left-4 top-4">
                  <category.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <CardHeader className="mt-4">
                <CardTitle className="text-xl font-semibold">
                  {category.name}
                </CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {category.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-2 flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="secondary" // You can change the variant as needed
                      className="rounded-md px-2 py-1 text-xs font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Link href="#" passHref>
                  <Button
                    variant="link"
                    className="text-primary group-hover:underline"
                  >
                    Shop Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
