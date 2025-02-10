"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const caseStudies = [
  {
    id: 1,
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    description:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    image:
      "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    description:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    image:
      "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    description:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    image:
      "https://images.unsplash.com/photo-1536735561749-fc87494598cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxNzd8fHx8fHwyfHwxNzIzNjM0NDc0fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    description:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    image:
      "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 5,
    title: "Duis sem sem, gravida vel porttitor eu, volutpat ut arcu",
    description:
      "Pellentesque eget quam ligula. Sed felis ante, consequat nec ultrices ut, ornare quis metus. Vivamus sit amet tortor vel enim sollicitudin hendrerit.",
    image:
      "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

export default function BlogList4() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  return (
    <section className="py-8 md:py-16 lg:py-32">
      <div className="container">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:mb-14 md:flex-row md:items-end lg:mb-16">
          <h2 className="text-3xl font-medium md:text-4xl lg:text-5xl">
            All Case Studies
          </h2>
          <div className="flex shrink-0 gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollPrev()}
              disabled={current === 1}
              className="size-10 bg-background/80 backdrop-blur-sm hover:bg-accent"
            >
              <ArrowLeft className="size-5" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => api?.scrollNext()}
              className="size-10 bg-background/80 backdrop-blur-sm hover:bg-accent"
            >
              <ArrowRight className="size-5" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>

        <Carousel setApi={setApi} className="w-full">
          <CarouselContent>
            {caseStudies.map((study) => (
              <CarouselItem
                key={study.id}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <article className="group relative h-full min-h-[20rem] overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
                  <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 z-10 bg-black/50 transition-colors duration-300 group-hover:bg-black/60" />
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      placeholder="blur"
                      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 to-gray-900/40" /> */}
                  </div>

                  <div className="relative flex h-full flex-col justify-end p-6 text-white sm:p-8">
                    <div className="space-y-4">
                      <h3 className="text-2xl font-semibold leading-tight transition-transform duration-300 group-hover:-translate-y-1 lg:text-3xl">
                        {study.title}
                      </h3>
                      <p className="line-clamp-3 text-sm leading-relaxed opacity-90 sm:text-base">
                        {study.description}
                      </p>
                      <div className="flex items-center font-medium text-primary transition-all duration-300 hover:text-primary">
                        <span className="border-b border-transparent group-hover:border-primary">
                          Read Case Study
                        </span>
                        <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </article>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
