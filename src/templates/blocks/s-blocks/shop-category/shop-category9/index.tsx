import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowRight, Info } from "lucide-react";

const categories = [
  {
    title: "Top Categories",
    items: [
      {
        name: "Laptops & Computers",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Gaming Gear",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Tablets & E-Readers",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Fashion & Apparel",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
  {
    title: "Consumer Electronics",
    items: [
      {
        name: "Smartphones",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Smart Watches",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Headphones & Audio",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Accessories",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
  {
    title: "Leisure & Entertainment",
    items: [
      {
        name: "Gaming Consoles",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Cameras & Drones",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Fitness Gear",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Outdoor Equipment",
        image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
];

export default function ShopMemberDeals() {
  return (
    <section className="w-full bg-background py-16 md:py-24 lg:py-32">
      <div className="container">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Exclusive Member Deals
              <span className="block text-xl font-normal text-muted-foreground md:mt-2">
                Special offers curated for you
              </span>
            </h2>
            <Button
              variant="outline"
              className="hidden w-fit md:inline-flex"
              size="lg"
            >
              Explore All Categories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <Alert className="items mb-10 flex">
            <AlertDescription className="flex gap-2 text-balance">
              <Info className="h-5 w-5" />
              Available for shipping to your location.{" "}
              <Link
                href="#"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                Manage shipping preferences
              </Link>
            </AlertDescription>
          </Alert>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group relative overflow-hidden transition-shadow hover:shadow-lg"
              >
                <div className="p-6">
                  <h3 className="mb-6 text-xl font-semibold tracking-tight">
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {category.items.map((item, itemIndex) => (
                      <Link
                        key={itemIndex}
                        href="#"
                        className="rounded-lg p-4 transition-colors hover:bg-accent/50"
                      >
                        <div className="relative mb-4 aspect-square overflow-hidden rounded-lg bg-muted/20">
                          <Image
                            src={
                              item.image ||
                              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                            }
                            alt={item.name}
                            fill
                            className="object-contain p-2"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                        <span className="line-clamp-2 text-center text-sm font-medium leading-tight">
                          {item.name}
                        </span>
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 border-t pt-4">
                    <Link
                      href="#"
                      className="flex w-fit items-center font-medium text-primary transition-opacity hover:opacity-80"
                    >
                      Shop Collection
                      <ArrowRight className="ml-2 h-4 w-4 translate-x-0 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 text-center lg:hidden">
            <Button variant="outline" className="w-full max-w-sm" size="lg">
              View All Categories
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
