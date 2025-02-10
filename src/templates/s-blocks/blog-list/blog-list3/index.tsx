"use client";

import React, { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
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
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    tag: "Ut varius dolor turpis",
  },
  {
    id: 2,
    title: "Nulla facilisi. Praesent vel risus sed quam convallis ultricies",
    description:
      "Maecenas euismod, nisi vel consectetur euismod, nisl nunc egestas nunc, vitae tincidunt nisl nunc euismod nunc. Sed euismod, nisi vel consectetur euismod.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    tag: "Sed euismod nisi vel",
  },
  {
    id: 3,
    title: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices",
    description:
      "Fusce quis quam eget sapien bibendum tincidunt. Curabitur condimentum aliquam nulla, vitae lobortis justo. Nulla facilisi. Praesent vel risus sed quam.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    tag: "Curabitur condimentum",
  },
  {
    id: 4,
    title: "Aenean lacinia bibendum nulla sed consectetur",
    description:
      "Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    tag: "Integer posuere erat",
  },
  {
    id: 5,
    title: "Cras mattis consectetur purus sit amet fermentum",
    description:
      "Nullam quis risus eget urna mollis ornare vel eu leo. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    tag: "Nullam quis risus",
  },
  {
    id: 6,
    title: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor",
    description:
      "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Donec ullamcorper nulla non metus auctor fringilla.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    tag: "Duis mollis est non",
  },
];

export default function BlogList3() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };

    updateSelection();
    carouselApi.on("select", updateSelection);

    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-8 md:py-16 lg:py-32">
      <div className="container lg:px-8">
        <div className="mb-6 flex flex-col items-start justify-between gap-4 md:mb-14 md:flex-row md:items-end lg:mb-16">
          <h2 className="text-2xl font-medium md:text-3xl lg:text-4xl xl:text-5xl">
            All case studies
          </h2>
          <div className="flex shrink-0 gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => carouselApi?.scrollPrev()}
              disabled={!canScrollPrev}
            >
              <ArrowLeft className="size-5" />
              <span className="sr-only">Previous slide</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => carouselApi?.scrollNext()}
              disabled={!canScrollNext}
            >
              <ArrowRight className="size-5" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
        </div>
      </div>
      <div className="container w-full overflow-hidden">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            align: "start",
            loop: true,
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {caseStudies.map((study) => (
              <CarouselItem
                key={study.id}
                className="pl-4 md:basis-1/2 md:pl-6 lg:basis-1/3"
              >
                <div className="h-full">
                  <a
                    href="#"
                    className="group flex h-full flex-col justify-between rounded-lg border bg-accent p-4 md:p-6"
                  >
                    <div>
                      <div className="aspect-[3/2] overflow-hidden">
                        <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                          <Image
                            src={study.image}
                            alt={study.title}
                            layout="fill"
                            objectFit="cover"
                            objectPosition="center"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 md:mt-6">
                      <Badge>{study.tag}</Badge>
                    </div>
                    <h3 className="mb-2 line-clamp-2 break-words pt-3 text-base font-medium md:mb-3 md:pt-4 md:text-lg lg:pt-4 lg:text-xl xl:text-2xl">
                      {study.title}
                    </h3>
                    <p className="mb-6 line-clamp-2 text-sm text-muted-foreground md:mb-8 md:text-base lg:mb-9">
                      {study.description}
                    </p>
                    <div className="flex items-center text-sm text-primary">
                      Read more
                      <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </a>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
