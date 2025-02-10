"use client";

import AutoScroll from "embla-carousel-auto-scroll";

import Image from "next/image";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const logos = [
  {
    id: "logo-1",
    description: "Logo 1",
    image: "/logos/astro.svg",
  },

  {
    id: "logo-5",
    description: "Logo 5",
    image: "/logos/shadcn-ui.svg",
  },
  {
    id: "logo-6",
    description: "Logo 6",
    image: "/logos/supabase.svg",
  },
  {
    id: "logo-7",
    description: "Logo 7",
    image: "/logos/tailwind.svg",
  },
  {
    id: "logo-8",
    description: "Logo 8",
    image: "/logos/vercel.svg",
  },
  {
    id: "logo-1",
    description: "Logo 1",
    image: "/logos/astro.svg",
  },

  {
    id: "logo-5",
    description: "Logo 5",
    image: "/logos/shadcn-ui.svg",
  },
  {
    id: "logo-6",
    description: "Logo 6",
    image: "/logos/supabase.svg",
  },
  {
    id: "logo-7",
    description: "Logo 7",
    image: "/logos/tailwind.svg",
  },
  {
    id: "logo-8",
    description: "Logo 8",
    image: "/logos/vercel.svg",
  },
];

export default function Logos3() {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          Trusted by these companies
        </h2>
      </div>
      <div className="pt-10 md:pt-16 lg:pt-20">
        <div className="relative mx-auto flex items-center justify-center overflow-hidden lg:max-w-5xl">
          <Carousel
            opts={{ loop: true }}
            plugins={[
              AutoScroll({ playOnInit: true, stopOnInteraction: false }),
            ]}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="lg:basis-3/10 basis-1/3 pl-2 sm:basis-1/4 md:basis-1/5 md:pl-4"
                >
                  <div className="mx-10 flex shrink-0 items-center justify-center">
                    <Image
                      src={logo.image}
                      alt={logo.description}
                      width={200}
                      height={48}
                      className="w-auto dark:invert"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"></div>
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
