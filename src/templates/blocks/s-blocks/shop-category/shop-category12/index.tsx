import Link from "next/link";
import Image from "next/image";
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
  Gamepad2,
  BookOpen,
  ShoppingBag,
} from "lucide-react";

const categories = [
  {
    name: "Electronics",
    description: "Discover the latest gadgets and cutting-edge technology",
    icon: Monitor,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    color: "border-blue-500/80",
    badge: "Trending Now",
  },
  {
    name: "Fashion",
    description: "Explore curated collections for every style",
    icon: ShoppingBag,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    color: "border-pink-500/80",
    badge: "New Arrivals",
  },
  {
    name: "Gaming",
    description: "Immerse yourself in next-gen experiences",
    icon: Gamepad2,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    color: "border-green-500/80",
    badge: "Hot Deals",
  },
  {
    name: "Books",
    description: "Journey through worlds of knowledge and imagination",
    icon: BookOpen,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    color: "border-amber-500/80",
    badge: "Bestsellers",
  },
];

export default function CategorySpotlight() {
  return (
    <section className="w-full bg-background py-16 md:py-24 lg:py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-4xl font-bold tracking-tight md:text-5xl">
            Featured Collections
            <span className="mt-3 block text-lg font-normal text-muted-foreground md:text-xl">
              Curated selections for every interest
            </span>
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => (
              <Card
                key={category.name}
                className={`group relative overflow-hidden border-2 ${category.color} transition-all hover:shadow-xl`}
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={category.image}
                    alt={`${category.name} collection`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                  <div className="absolute right-4 top-4">
                    <Badge variant={"secondary"}>{category.badge}</Badge>
                  </div>

                  <div className="absolute left-4 top-4">
                    <category.icon className="h-8 w-8 text-primary" />
                  </div>
                </div>

                <CardHeader className="space-y-2 p-6">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    {category.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </CardHeader>

                <CardFooter className="p-6 pt-0">
                  <Button
                    asChild
                    variant="link"
                    className="w-fit p-0 text-base font-medium text-primary hover:no-underline"
                  >
                    <Link href="#">
                      Explore Collection
                      <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
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
