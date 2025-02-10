import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  ArrowRight,
  Monitor,
  ShoppingBag,
  Tv,
  Gamepad,
  Dumbbell,
  ShoppingCart,
  Heart,
  Car,
  BookOpen,
  Home,
  Camera,
  Trophy,
  Eye,
  Smartphone,
  Gem,
  Tent,
  Music,
  Headphones,
  Watch,
  Baby,
  Luggage,
  Printer,
  PrinterCheck,
  Leaf,
  PawPrint,
  Plane,
  Train,
  Ship,
  Bike,
  Coffee,
  Pizza,
  IceCream,
} from "lucide-react";

const categories = [
  { name: "Computers", icon: Monitor },
  { name: "Fashion", icon: ShoppingBag },
  { name: "Electronics", icon: Tv },
  { name: "Gaming", icon: Gamepad },
  { name: "TV/Projectors", icon: Tv },
  { name: "Toys", icon: Gamepad },
  { name: "Sport", icon: Dumbbell },
  { name: "Grocery", icon: ShoppingCart },
  { name: "Health", icon: Heart },
  { name: "Auto", icon: Car },
  { name: "Books", icon: BookOpen },
  { name: "Home", icon: Home },
  { name: "Photo/Video", icon: Camera },
  { name: "Collectibles", icon: Trophy },
  { name: "Beauty", icon: Eye },
  { name: "Phone/Tablets", icon: Smartphone },
  { name: "Jewelry", icon: Gem },
  { name: "Outdoor", icon: Tent },
  { name: "Music", icon: Music },
  { name: "Headphones", icon: Headphones },
  { name: "Watches", icon: Watch },
  { name: "Baby", icon: Baby },
  { name: "Luggage", icon: Luggage },
  { name: "Printers", icon: Printer },

  { name: "Gardening", icon: Leaf },
  { name: "Pets", icon: PawPrint },
  { name: "Travel", icon: Plane },
  { name: "Trains", icon: Train },
  { name: "Boats", icon: Ship },
  { name: "Bikes", icon: Bike },
  { name: "Coffee", icon: Coffee },
  { name: "Pizza", icon: Pizza },
];

export default function TopCategories() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="mb-8 flex flex-col items-center justify-between border-b pb-4 md:flex-row">
          <h2 className="mb-4 text-center text-3xl font-bold tracking-tighter md:mb-0 md:text-left">
            Top categories
          </h2>
          <Button
            variant="outline"
            className="hidden items-center md:inline-flex"
          >
            View more categories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-6 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
          {categories.map((category) => (
            <Link key={category.name} href="#" passHref>
              <Card className="group flex flex-col items-center p-4 transition-colors hover:bg-accent hover:text-accent-foreground">
                <div className="mb-4 rounded-full bg-muted p-3">
                  <category.icon className="h-6 w-6 text-primary" />
                </div>
                <p className="text-center text-sm font-semibold group-hover:underline">
                  {category.name}
                </p>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 md:hidden">
          <Button variant="outline" className="w-full">
            View more categories
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
