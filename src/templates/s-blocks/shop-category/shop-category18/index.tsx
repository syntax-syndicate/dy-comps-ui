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
  Sparkles,
} from "lucide-react";

const categories = [
  {
    name: "Electronics",
    description: "Discover the latest in gadgets and tech.",
    icon: Monitor,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    featured: [
      {
        name: "Laptops",
        description: "Powerful and portable for work and play.",
        href: "#",
      },
      {
        name: "Smartphones",
        description: "Stay connected with the latest mobile technology.",
        href: "#",
      },
    ],
  },
  {
    name: "Fashion",
    description: "Explore trendy apparel and accessories.",
    icon: ShoppingBag,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    featured: [
      {
        name: "Men's Clothing",
        description: "Stylish and comfortable outfits for any occasion.",
        href: "#",
      },
      {
        name: "Women's Clothing",
        description: "Elegant and fashionable pieces for every style.",
        href: "#",
      },
    ],
  },
  {
    name: "Gaming",
    description: "Level up with the latest games and consoles.",
    icon: Gamepad2,
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    featured: [
      {
        name: "Gaming Consoles",
        description: "Experience immersive gaming with powerful hardware.",
        href: "#",
      },
      {
        name: "PC Gaming",
        description: "Build your ultimate gaming rig with top components.",
        href: "#",
      },
    ],
  },
];

export default function CategoryHighlightCards() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Category Highlights
          </h2>
          <p className="mt-4 text-muted-foreground">
            Explore our curated selection of top categories
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card
              key={category.name}
              className="group relative overflow-hidden transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={
                    category.image ||
                    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  }
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <category.icon className="h-6 w-6 text-white" />
                  <h3 className="text-lg font-semibold text-white">
                    {category.name}
                  </h3>
                </div>
              </div>

              <CardHeader className="border-b p-4">
                <CardTitle className="flex items-center gap-2 text-base">
                  <Badge variant="secondary" className="gap-1.5">
                    <Sparkles className="h-4 w-4 text-yellow-500" />
                    Featured Picks
                  </Badge>
                </CardTitle>
              </CardHeader>

              <CardContent className="p-4">
                <ul className="space-y-2">
                  {category.featured.map((item) => (
                    <li key={item.name}>
                      <Button
                        variant="ghost"
                        className="h-auto w-full justify-start text-wrap px-3 py-2 text-left"
                        asChild
                      >
                        <Link href={item.href} className="flex items-start">
                          <div className="flex-grow space-y-1">
                            <p className="line-clamp-1 font-medium">
                              {item.name}
                            </p>
                            <p className="line-clamp-2 text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </div>
                          <ArrowRight className="ml-2 h-4 w-4 flex-shrink-0 opacity-0 transition-opacity group-hover:opacity-100" />
                        </Link>
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant={"outline"} asChild size="lg">
            <Link href="#">
              View All Categories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
