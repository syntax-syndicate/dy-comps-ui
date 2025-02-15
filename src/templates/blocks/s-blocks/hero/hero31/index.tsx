"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero31() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="container relative">
        <div className="flex flex-col items-center text-center">
          <Image
            src="/icons/abstract.png"
            width={150}
            height={150}
            alt="Abstract logo"
            className="dark:invert"
          />
          <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
            Innovate, Create, Elevate
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            Embark on a journey of digital transformation. Our cutting-edge
            platform empowers you to turn visionary ideas into tangible
            realities.
          </p>
          <div className="flex w-full flex-col justify-center gap-2 sm:flex-row">
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Explore Features
            </Button>
            <Button size="lg" className="w-full sm:w-auto">
              Get Started Now
            </Button>
          </div>
        </div>
      </div>
      <div className="container relative">
        <div className="-mb-48 mt-16 flex justify-center gap-4 pt-4">
          <div className="relative">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Digital Innovation Concept"
              width={800}
              height={600}
              className="rounded-t-lg"
            />
            <div className="absolute inset-0 rounded-t-lg shadow-[0_0_40px_8px_hsl(var(--primary)/0.4)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
