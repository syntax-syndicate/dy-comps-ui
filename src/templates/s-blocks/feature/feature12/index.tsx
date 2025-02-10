"use client";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  Code,
  ArrowUpDown,
  Redo,
  ArrowDownToLine,
  Scaling,
  Globe,
  ShieldCheck,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = [
  {
    icon: Code,
    title: "Code Integration",
    description:
      "Seamlessly integrate with existing codebases for rapid development.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    icon: ArrowUpDown,
    title: "Automated Workflows",
    description:
      "Automate repetitive tasks to improve efficiency and consistency.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    icon: Redo,
    title: "Customizable Experiences",
    description:
      "Tailor the experience to meet your specific needs and brand identity.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    icon: ArrowDownToLine,
    title: "Simplified Collaboration",
    description:
      "Collaborate more effectively with real-time updates and shared workspaces.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    icon: ShieldCheck,
    title: "Enhanced Security",
    description:
      "Protect your data with advanced security features and compliance protocols.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Expand your reach to a global audience with our multi-language support.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    icon: Scaling,
    title: "Scalable Performance",
    description:
      "Handle growth and traffic surges effortlessly with a scalable architecture.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function Feature12() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = features.length;
  const carouselRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translate3d(${
        (-currentSlide * 100) / 3
      }%, 0, 0)`;
    }
  }, [currentSlide]);

  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-10 flex flex-col items-center gap-6">
          <Badge
            variant="outline"
            className="rounded-full px-2.5 py-0.5 text-xs font-semibold"
          >
            Explore Our Key Features
          </Badge>
          <h2 className="text-center text-3xl font-semibold lg:text-5xl">
            Explore Our Key Features
          </h2>
        </div>
        <div
          className="relative w-full border-t py-6"
          role="region"
          aria-roledescription="carousel"
        >
          <div className="mb-4 flex justify-between px-1 md:mb-5">
            <p className="font-medium">Rules</p>
            <div className="flex items-center space-x-2">
              <div className="mr-2 hidden items-center gap-3 text-xs text-muted-foreground md:flex">
                <span>0{currentSlide + 1}</span>
                <div
                  aria-valuemax={100}
                  aria-valuemin={0}
                  role="progressbar"
                  data-state="indeterminate"
                  data-max="100"
                  className="relative h-[2px] w-52 overflow-hidden rounded-full bg-secondary"
                >
                  <div
                    data-state="indeterminate"
                    data-max="100"
                    className="h-full w-full flex-1 bg-primary transition-all"
                    style={{
                      transform: `translateX(-${
                        100 - ((currentSlide + 1) / totalSlides) * 100
                      }%)`,
                    }}
                  ></div>
                </div>
                <span>0{totalSlides}</span>
              </div>
              <Button
                size="icon"
                variant="outline"
                className="size-8 rounded-full"
                onClick={prevSlide}
                disabled={currentSlide === 0}
              >
                <ArrowLeft className="size-4" />
                <span className="sr-only">Previous slide</span>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="size-8 rounded-full"
                onClick={nextSlide}
                disabled={currentSlide === totalSlides - 3}
              >
                <ArrowRight className="size-4" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              ref={carouselRef}
              className="-ml-4 flex transition-transform duration-300 ease-in-out"
              style={{ width: `${(totalSlides / 3) * 100}%` }}
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  role="group"
                  aria-roledescription="slide"
                  className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex justify-between p-0">
                        <div className="flex flex-col justify-center p-6 pr-4">
                          <span className="mb-5 flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                            <feature.icon className="size-6 text-primary" />
                          </span>
                          <p className="text-xl font-semibold md:text-2xl lg:text-2xl">
                            {feature.title}
                          </p>
                          <p className="pt-2 text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                        <div className="flex items-center justify-center">
                          <Image
                            src={feature.image}
                            alt={feature.title}
                            width={192}
                            height={192}
                            className="h-48 w-48 rounded-r-lg object-contain"
                          />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
