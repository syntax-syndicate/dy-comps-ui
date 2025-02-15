import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero3() {
  return (
    <section className="py-24 md:py-32">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Section */}
        <div className="flex flex-col items-center text-center lg:max-w-2xl lg:items-start lg:text-left">
          <h1 className="my-6 text-pretty text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Craft Your Vision with{" "}
            <span className="text-primary">Versatile Blocks</span>
          </h1>
          <p className="mb-8 max-w-xl text-lg text-muted-foreground md:text-xl">
            Unleash your creativity with our library of pre-designed,
            customizable blocks. Stop wrestling with code and start bringing
            your ideas to life.
          </p>

          {/* Rating Section */}
          <div className="mb-12 flex w-fit flex-col items-center gap-4 sm:flex-row">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-6 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <p className="text-left text-sm font-medium text-muted-foreground">
                by 600+ creators
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-6">
            <Button size="lg" className="w-full sm:w-auto">
              Join Now
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group w-full sm:w-auto"
            >
              Explore Blocks
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex aspect-square overflow-hidden rounded-lg border border-muted/20 shadow-lg">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Hero illustration"
            width={600}
            height={600}
            className="size-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
}
