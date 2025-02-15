import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ArrowRight,
  Laptop,
  Shirt,
  BookOpen,
  Home,
  LayoutGrid,
} from "lucide-react";

const categories = [
  {
    name: "Electronics",
    description: "Laptops, smartphones, audio, and more.",
    icon: Laptop,
    color: "text-blue-500",
    cols: 2, // Span 2 columns on large screens
    rows: 1, // Span 1 row
    items: [
      {
        name: "Shop Laptops",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Explore Smartphones",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Discover Audio",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "New in Wearables",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
  {
    name: "Fashion",
    description: "Apparel, shoes, and accessories.",
    icon: Shirt,
    color: "text-pink-500",
    cols: 1,
    rows: 2, // Span 2 rows on large screens
    items: [
      {
        name: "Men's Style",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Women's Collection",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Kids' Fashion",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
  {
    name: "Books",
    description: "Fiction, non-fiction, and more.",
    icon: BookOpen,
    color: "text-amber-500",
    cols: 1,
    rows: 1,
    items: [
      {
        name: "Bestsellers",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "New Releases",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
  {
    name: "Home & Living",
    description: "Furniture, decor, and essentials.",
    icon: Home,
    color: "text-green-500",
    cols: 1,
    rows: 1,
    items: [
      {
        name: "Furniture",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Home Decor",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
];

export default function CategoryGrid() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Explore by Category
          </h2>
          <Link href="#" passHref>
            <Button variant="link" className="text-primary">
              See All Categories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card
              key={category.name}
              className={`group relative overflow-hidden ${category.cols ? `lg:col-span-${category.cols}` : ""} ${category.rows ? `lg:row-span-${category.rows}` : ""} `}
            >
              <div className="absolute inset-0 z-0">
                {/* Use a subtle pattern or texture instead of a solid color */}
                <div className="absolute inset-0 bg-gray-100/50 dark:bg-black/50"></div>

                {/* Placeholder for category image */}
                <img
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt={category.name}
                  className="absolute inset-0 h-full w-full object-cover opacity-75"
                />
              </div>

              <CardHeader className="relative z-10">
                <div className="flex items-center space-x-3">
                  <category.icon className={`h-8 w-8 ${category.color}`} />
                  <div>
                    <CardTitle className="text-xl font-semibold">
                      {category.name}
                    </CardTitle>
                    <p className="text-sm">{category.description}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="relative z-10 mt-4">
                <div className="grid grid-cols-2 gap-2">
                  {category.items.map((item) => (
                    <Link key={item.name} href="#" passHref>
                      <div className="flex items-center space-x-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="h-10 w-10 rounded-md object-cover"
                        />
                        <p className="text-sm group-hover:underline">
                          {item.name}
                        </p>
                      </div>
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
