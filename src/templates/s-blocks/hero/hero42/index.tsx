"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Gift } from "lucide-react";

export default function ResponsiveVerticalCarouselHero() {
  const services = [
    {
      title: "Construction",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      title: "Financial Services",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      title: "Consulting",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      title: "Real Estate",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  return (
    <div className="bg-background">
      <div className="container mx-auto flex flex-col items-center justify-center py-8 lg:flex-row lg:py-16">
        <div className="flex flex-col justify-center px-4 lg:w-1/2 lg:px-8">
          {/* Google Workspace Integration */}
          <div className="mb-6 flex items-center gap-2 lg:mb-8">
            <div className="flex items-center gap-2">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Gmail"
                width={20}
                height={20}
                className="lg:h-6 lg:w-6"
              />
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Google Drive"
                width={20}
                height={20}
                className="lg:h-6 lg:w-6"
              />
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Google Calendar"
                width={20}
                height={20}
                className="lg:h-6 lg:w-6"
              />
            </div>
            <span className="text-xs text-muted-foreground lg:text-sm">
              Recommended for Google Workspace
            </span>
          </div>

          {/* Hero Content */}
          <div className="space-y-6 lg:space-y-8">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Be there for your clients,{" "}
              <span className="text-primary">every step of the way.</span>
            </h1>
            <div className="flex flex-wrap justify-start gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Try Copper free
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                <Gift className="size-4" />
                Get a demo
              </Button>
            </div>
          </div>
        </div>

        {/* Responsive Image Carousel */}
        <div className="mt-8 w-full lg:mt-0 lg:w-1/2">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            orientation="horizontal"
          >
            <CarouselContent className="-ml-2">
              {services.map((service, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:basis-1/2 lg:basis-full"
                >
                  <div className="relative aspect-square overflow-hidden rounded-lg">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-black/10" />
                    <Badge
                      variant="secondary"
                      className="absolute bottom-4 left-4"
                    >
                      {service.title}
                    </Badge>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2" />
            <CarouselNext className="right-4 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
