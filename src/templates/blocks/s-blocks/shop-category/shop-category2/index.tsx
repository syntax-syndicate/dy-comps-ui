import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gamepad, Laptop, Keyboard, Percent } from "lucide-react";

const categories = [
  {
    title: "Gaming Deals",
    description:
      "Find great deals on the most popular video games and gaming consoles",
    image:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=240&width=360",
    discount: "25% off",
    link: "See more gaming deals",
    icon: Gamepad,
  },
  {
    title: "Laptop Accessories",
    description:
      "MacBook Pro Accessories, from Apple, Belkin, Logitech, Anker, and more",
    image:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=240&width=360",
    discount: "50% off",
    link: "See more laptop deals",
    icon: Laptop,
  },
  {
    title: "Electronics",
    description:
      "Find great deals on PC games, desktops, accessories and more from top brands.",
    image:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=240&width=360",
    discount: "25% off",
    link: "See more electronics deals",
    icon: Keyboard,
  },
];

export default function FeaturedCategories() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="mb-8 flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Categories
          </h2>
          <Link href="#" passHref>
            <Button variant="link" className="text-primary">
              See all categories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all hover:shadow-lg"
            >
              <CardHeader className="p-0">
                <img
                  src={
                    category.image ||
                    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  }
                  alt={category.title}
                  className="h-60 w-full object-cover transition-transform hover:scale-105"
                />
              </CardHeader>
              <CardContent className="p-6">
                <Badge variant="secondary" className="mb-2">
                  <Percent className="mr-1 h-3 w-3" />
                  Up to {category.discount} today
                </Badge>
                <h3 className="mb-2 text-lg font-semibold">{category.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </CardContent>
              <CardFooter>
                <Link href="#" passHref>
                  <Button variant="link" className="p-0">
                    {category.link}
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
