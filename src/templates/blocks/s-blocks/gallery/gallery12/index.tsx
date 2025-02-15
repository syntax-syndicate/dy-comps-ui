"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";

interface Slide {
  id: string;
  imageUrl: string;
  title: string;
  description: string;
}

const slides: Slide[] = [
  {
    id: "1",
    imageUrl:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=600&fit=crop&q=80",
    title: "Discover Nature's Beauty",
    description: "Explore breathtaking landscapes and natural wonders.",
  },
  {
    id: "2",
    imageUrl:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1200&h=600&fit=crop&q=80",
    title: "Urban Adventures Await",
    description: "Immerse yourself in the vibrant culture of city life.",
  },
  {
    id: "3",
    imageUrl:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&h=600&fit=crop&q=80",
    title: "Culinary Delights",
    description: "Savor exquisite flavors from around the world.",
  },
  {
    id: "4",
    imageUrl:
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=600&fit=crop&q=80",
    title: "Historical Wonders",
    description: "Step back in time and explore ancient civilizations.",
  },
];

export default function Gallery12() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = React.useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="container relative w-full max-w-6xl overflow-hidden py-16">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {slides.map((slide) => (
            <div key={slide.id} className="relative min-w-0 flex-[0_0_100%]">
              <Image
                src={slide.imageUrl}
                alt={slide.title}
                width={1200}
                height={600}
                className="aspect-video h-[800px] w-full rounded-lg object-cover"
              />
              <div className="absolute inset-0 flex h-full flex-col justify-end rounded-lg bg-gradient-to-t from-primary/60 to-transparent p-8">
                <h2 className="mb-2 text-4xl font-bold text-white">
                  {slide.title}
                </h2>
                <p className="text-xl text-gray-200">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 transform"
        onClick={scrollPrev}
      >
        <ChevronLeft className="size-6" />
        <span className="sr-only">Previous slide</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 transform"
        onClick={scrollNext}
      >
        <ChevronRight className="size-6" />
        <span className="sr-only">Next slide</span>
      </Button>
    </div>
  );
}
