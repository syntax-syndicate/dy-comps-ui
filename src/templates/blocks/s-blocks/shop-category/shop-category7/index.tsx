import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Laptop,
  Tv,
  Tablet,
  Headphones,
  Printer,
  Keyboard,
  Wifi,
  Tag,
} from "lucide-react";

const categories = [
  { name: "Laptops & Computers", icon: Laptop },
  { name: "TV", icon: Tv },
  { name: "Tablets", icon: Tablet },
  { name: "Audio", icon: Headphones },
  { name: "Printers", icon: Printer },
  { name: "Computer Accessories", icon: Keyboard },
  { name: "Security & Wi-Fi", icon: Wifi },
  { name: "Deals", icon: Tag },
];

export default function InterestingCategories() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="mb-8 flex flex-col items-center justify-between sm:flex-row">
          <h2 className="mb-4 text-2xl font-semibold text-foreground sm:mb-0">
            Categories that might interest you
          </h2>
          <Button variant="outline" className="hidden lg:inline-flex">
            See all categories
          </Button>
        </div>

        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          {categories.map((category) => (
            <Link key={category.name} href="#" passHref>
              <Card className="flex h-full flex-col items-center justify-center p-6 transition-colors hover:bg-accent hover:text-accent-foreground">
                <category.icon className="mb-6 h-14 w-14 text-primary" />
                <p className="text-center text-lg font-semibold">
                  {category.name}
                </p>
              </Card>
            </Link>
          ))}
        </div>

        <div className="lg:hidden">
          <Button variant="outline" className="w-full">
            See all categories
          </Button>
        </div>
      </div>
    </section>
  );
}
