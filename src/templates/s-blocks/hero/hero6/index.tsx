import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero6() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        {/* Header Section */}
        <div className="mx-auto flex max-w-5xl flex-col items-center">
          <div className="z-10 flex flex-col items-center gap-8 text-center">
            <div className="max-w-screen-md">
              <Image
                src="/logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="mx-auto mb-6 aspect-square object-cover dark:invert"
              />
              <h1 className="mb-4 text-pretty text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
                Empower Your Ideas with{" "}
                <span className="text-primary">Themeable Components</span>
              </h1>
              <p className="text-lg text-muted-foreground md:text-xl">
                Transform your vision into reality with innovative, themeable
                components designed for speed and style. Let’s redefine what’s
                possible, together.
              </p>
            </div>
            <div className="flex w-full flex-col justify-center gap-4 sm:flex-row sm:gap-6">
              <Button size="lg">Start Building</Button>
              <Button size="lg" variant="outline" className="group">
                Discover More
                <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Image Grid Section */}
        <div className="mx-auto mt-20 max-w-7xl overflow-hidden rounded-lg border border-muted/20 bg-accent/50 shadow-lg">
          <div className="grid grid-cols-1 gap-1 md:grid-cols-5">
            <div className="col-span-2">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="AI design"
                width={600}
                height={600}
                className="size-full max-h-[500px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="relative col-span-3">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="AI-powered feature"
                width={600}
                height={600}
                className="size-full max-h-[500px] object-cover transition-transform duration-300 hover:scale-105"
              />
              <Button
                variant="outline"
                className="group absolute bottom-6 right-6"
              >
                Explore AI Features
                <ChevronRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
