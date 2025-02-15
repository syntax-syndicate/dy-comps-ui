import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Star, Heart, ShoppingCart } from "lucide-react";

export default function Component() {
  return (
    <section className="container bg-background py-8 text-foreground md:py-16">
      <div className="mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="mx-auto shrink-0">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Apple iMac 24 All-In-One Computer"
              width={500}
              height={500}
              className="w-full"
            />
          </div>

          <div className="mt-6 sm:mt-8 lg:mt-0">
            <h1 className="text-xl font-semibold sm:text-2xl">
              Apple iMac 24&quot; All-In-One Computer, Apple M1, 8GB RAM, 256GB
              SSD, Mac OS, Pink
            </h1>
            <div className="mt-4 sm:flex sm:items-center sm:gap-4">
              <p className="text-2xl font-extrabold sm:text-3xl">$1,249.99</p>

              <div className="mt-2 flex items-center gap-2 sm:mt-0">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-sm font-medium leading-none text-muted-foreground">
                  (5.0)
                </p>
                <a
                  href="#"
                  className="text-sm font-medium leading-none text-foreground underline hover:no-underline"
                >
                  345 Reviews
                </a>
              </div>
            </div>

            <div className="mt-6 sm:mt-8 sm:flex sm:items-center sm:gap-4">
              <Button variant="outline" className="w-full sm:w-auto">
                <Heart className="mr-2 size-5" />
                Add to favorites
              </Button>

              <Button className="mt-4 w-full sm:mt-0 sm:w-auto">
                <ShoppingCart className="mr-2 size-5" />
                Add to cart
              </Button>
            </div>

            <Separator className="my-6 md:my-8" />

            <p className="mb-6 text-muted-foreground">
              Studio quality three mic array for crystal clear calls and voice
              recordings. Six-speaker sound system for a remarkably robust and
              high-quality audio experience. Up to 256GB of ultrafast SSD
              storage.
            </p>

            <p className="text-muted-foreground">
              Two Thunderbolt USB 4 ports and up to two USB 3 ports. Ultrafast
              Wi-Fi 6 and Bluetooth 5.0 wireless. Color matched Magic Mouse with
              Magic Keyboard or Magic Keyboard with Touch ID.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
