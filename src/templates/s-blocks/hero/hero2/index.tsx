import { Sparkles, Lightbulb } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero2() {
  return (
    <section className="container py-24 md:py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Section */}
        <div className="flex justify-end rounded-lg">
          <div className="overflow-hidden rounded-lg border border-muted/20 shadow-lg">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Hero illustration"
              width={600}
              height={600}
              className="max-h-[600px] w-full object-cover transition-transform duration-300 hover:scale-105 lg:max-h-[800px]"
            />
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center text-center lg:max-w-2xl lg:items-start lg:text-left">
          <Badge
            variant="secondary"
            className="group flex items-center gap-2 border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20"
          >
            Fresh Ideas
            <Sparkles className="size-4 transition-transform group-hover:translate-x-1" />
          </Badge>
          <h1 className="my-6 text-pretty text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Crafting Exceptional User Interfaces
          </h1>
          <p className="mb-8 max-w-xl text-lg text-muted-foreground md:text-xl">
            Dive into a world where design meets functionality. Our platform
            offers a unique blend of creative tools and powerful frameworks,
            enabling you to{" "}
            <span className="font-semibold text-primary">
              build seamless digital experiences.
            </span>
          </p>
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-6">
            <Button size="lg" className="w-full sm:w-auto">
              Start Building
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group w-full sm:w-auto"
            >
              Explore Features
              <Lightbulb className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
