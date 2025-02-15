"use client";

import { Button } from "@/components/ui/button";
import { Rocket } from "lucide-react";
import Image from "next/image";

export default function Hero37() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-background to-secondary/10 py-32">
      <div className="container flex flex-col items-center text-center">
        <div className="mt-8 flex justify-center">
          <div className="rounded-full bg-primary px-4 py-2 text-primary-foreground">
            <p className="text-sm font-medium">
              Join 10,000+ satisfied users today!
            </p>
          </div>
        </div>
        <h1 className="my-3 text-pretty text-2xl font-bold sm:text-4xl md:my-6 lg:text-5xl">
          Revolutionize Your Digital Experience
        </h1>
        <p className="mb-6 max-w-xl text-muted-foreground md:mb-12 lg:text-xl">
          Embark on a journey of innovation and efficiency. Our cutting-edge
          platform transforms the way you interact with technology, making every
          click count.
        </p>
        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
          <Button size="lg" className="w-full sm:w-auto">
            <Rocket className="mr-2 size-4" />
            Launch Now
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto">
            Explore Features
          </Button>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-center">
        <div className="relative mx-auto aspect-square w-[95%] max-w-[31.25rem] sm:w-full">
          <CardStack />
        </div>
      </div>
    </section>
  );
}

function CardStack() {
  const images = [
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  ];

  return (
    <>
      <div className="absolute inset-0 z-10 m-auto flex aspect-square w-4/5 max-w-64 -translate-x-3/4 scale-[0.85] justify-center rounded-lg border md:w-[21.25rem] md:max-w-[21.25rem]">
        <Image
          src={images[0] ?? ""}
          alt="Card 1"
          fill
          className="rounded-lg object-cover"
        />
        <div className="absolute inset-0 rounded-lg shadow-[0_0_40px_8px_hsl(var(--primary)/0.4)]" />
      </div>
      <div className="absolute inset-0 z-20 m-auto flex aspect-square w-4/5 max-w-64 justify-center rounded-lg border md:w-[21.25rem] md:max-w-[21.25rem]">
        <Image
          src={images[1] ?? ""}
          alt="Card 2"
          fill
          className="rounded-lg object-cover"
        />
        <div className="absolute inset-0 rounded-lg shadow-[0_0_40px_8px_hsl(var(--primary)/0.4)]" />
      </div>
      <div className="absolute inset-0 z-10 m-auto flex aspect-square w-4/5 max-w-64 translate-x-3/4 scale-[0.85] justify-center rounded-lg border md:w-[21.25rem] md:max-w-[21.25rem]">
        <Image
          src={images[2] ?? ""}
          alt="Card 3"
          fill
          className="rounded-lg object-cover"
        />
        <div className="absolute inset-0 rounded-lg shadow-[0_0_40px_8px_hsl(var(--primary)/0.4)]" />
      </div>
    </>
  );
}
