import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Monitor,
  ShoppingBag,
  Gamepad2,
  BookOpen,
} from "lucide-react";
import Image from "next/image";

const categories = [
  {
    name: "Electronics",
    description: "Discover the latest in gadgets and cutting-edge technology.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    subcategories: ["Laptops", "Smartphones", "Headphones", "Smart Watches"],
    icon: Monitor,
  },
  {
    name: "Fashion",
    description: "Explore trendy apparel, shoes, and seasonal accessories.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    subcategories: ["Men's Wear", "Women's Wear", "Kids", "Accessories"],
    icon: ShoppingBag,
  },
  {
    name: "Gaming",
    description: "Level up your experience with new releases and gear.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    subcategories: ["Consoles", "PC Gaming", "Accessories", "Games"],
    icon: Gamepad2,
  },
  // {
  //   name: "Books",
  //   description: "Dive into worlds of stories and expand your knowledge.",
  //   image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  //   subcategories: ["Fiction", "Non-Fiction", "Children's", "Textbooks"],
  //   icon: BookOpen,
  // },
];

export default function CategoryShowcase() {
  return (
    <section className="w-full bg-background py-16 md:py-28 lg:py-36">
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-8">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              Explore Our Collections
              <span className="mt-2 block text-lg font-normal text-muted-foreground md:text-xl">
                Curated categories for every interest
              </span>
            </h2>
            <Button variant="outline" size="lg" className="gap-2" asChild>
              <Link href="#">
                Browse All
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Card
                key={category.name}
                className="group relative overflow-hidden transition-shadow hover:shadow-xl"
              >
                <div className="relative h-96 overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                </div>

                <CardHeader className="absolute left-0 top-0 z-10 space-y-6 p-8">
                  <Badge className="w-fit bg-background/80 text-foreground backdrop-blur-sm transition-colors group-hover:bg-primary">
                    {category.name}
                  </Badge>
                  <category.icon className="h-10 w-10 text-primary" />
                </CardHeader>

                <CardContent className="absolute bottom-10 left-0 z-10 w-full p-8">
                  <p className="mb-6 line-clamp-2 text-lg text-gray-100">
                    {category.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory}
                        href="#"
                        className="truncate rounded-sm bg-background/20 px-4 py-2 text-sm text-gray-100 backdrop-blur-sm transition-colors hover:bg-background/30 hover:text-white"
                      >
                        {subcategory}
                      </Link>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="absolute bottom-0 z-10 w-full p-0">
                  <Button
                    variant="link"
                    size="sm"
                    className="w-full rounded-none border-t bg-background/50 py-6 text-gray-100 backdrop-blur-sm transition-all hover:bg-background/70 hover:text-white"
                    asChild
                  >
                    <Link href="#" className="gap-2">
                      Shop Collection
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
