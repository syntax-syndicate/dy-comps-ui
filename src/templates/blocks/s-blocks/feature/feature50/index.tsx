import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Library } from "lucide-react";

export default function Feature50() {
  return (
    <section className="bg-background py-24 text-foreground">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-16 flex max-w-screen-md flex-col items-center gap-8">
          <h2 className="text-center text-3xl font-bold lg:text-4xl">
            Design Stunning Websites, Effortlessly
          </h2>
          <p className="text-center text-muted-foreground lg:text-lg">
            Unleash your creativity with our collection of pre-designed blocks.
            Build beautiful, cohesive websites in minutes with our intuitive
            block system.
          </p>
          <Button variant="outline" className="mt-4">
            Explore Themed Blocks
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
        <div className="mx-auto grid max-w-screen-lg grid-cols-1 gap-8 md:gap-10 lg:grid-cols-7">
          {/* Block 1 */}
          <div className="col-span-7 overflow-hidden rounded-xl border border-border transition-shadow duration-300 hover:shadow-lg">
            <div className="grid sm:grid-cols-2">
              <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-12">
                <div>
                  <div className="mb-4 flex items-center gap-2 text-xs text-primary">
                    <Library className="size-4" />
                    THEMED BLOCK LIBRARY
                  </div>
                  <h3 className="mb-2 text-xl font-semibold lg:text-2xl">
                    Discover Ready-to-Use Design Blocks
                  </h3>
                  <p className="text-sm text-muted-foreground lg:text-base">
                    Browse hundreds of pre-designed blocks that integrate with
                    your design.
                  </p>
                </div>
                <div className="mt-6 sm:mt-8">
                  <Button variant="link">
                    Explore Library
                    <ArrowRight className="ml-1 size-4" />
                  </Button>
                </div>
              </div>
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Themed Blocks Illustration"
                width={512}
                height={384}
                className="order-first aspect-video w-full object-cover sm:order-last lg:aspect-auto"
              />
            </div>
          </div>
          {/* Block 2 */}
        </div>
      </div>
    </section>
  );
}
