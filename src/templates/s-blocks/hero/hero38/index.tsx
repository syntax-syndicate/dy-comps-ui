import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Image from "next/image";

export default function Hero38() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-16">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center py-16 text-center lg:mx-auto lg:items-start lg:px-0 lg:py-32 lg:text-left">
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              Transform Your Ideas into Reality
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              Unlock the power of innovation with our cutting-edge solutions.
              Whether you&apos;re building the next big thing or refining your
              vision, we&apos;re here to help you succeed every step of the way.
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Button size="lg" className="w-full sm:w-auto">
                <Rocket className="mr-2 size-4" />
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </div>
          </div>
          <div className="relative aspect-[3/4] lg:aspect-auto">
            <div className="group aspect-[5/6] lg:h-full">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Innovative Solutions"
                fill
                className="rounded-lg object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-4 left-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-lg font-semibold">Innovate with Us</p>
                <p className="text-sm">Explore limitless possibilities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
