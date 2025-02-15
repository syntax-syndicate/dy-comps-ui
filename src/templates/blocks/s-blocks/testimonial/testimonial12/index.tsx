"use client";

import * as React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

interface Testimonial {
  image: string;
  name: string;
  position: string;
  companyLogo: string;
  companyName: string;
  quote: string;
  stats: {
    value: string;
    label: string;
    subLabel: string;
  }[];
}

const testimonials: Testimonial[] = [
  {
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    name: "John Doe",
    position: "CEO, Company Name",
    companyLogo: "/logo.svg",
    companyName: "DY-Comps AI",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    stats: [
      {
        value: "2.2x",
        label: "Monthly Active Users",
        subLabel: "Since last month",
      },
      {
        value: "256%",
        label: "Increase in Revenue",
        subLabel: "Since last year",
      },
    ],
  },
  {
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    name: "Jane Doe",
    position: "CTO, Company 2",
    companyLogo: "/logo.svg",
    companyName: "DY-Comps CO",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    stats: [
      {
        value: "1.5x",
        label: "Monthly Active Users",
        subLabel: "Since last month",
      },
      {
        value: "150%",
        label: "Increase in Revenue",
        subLabel: "Since last year",
      },
    ],
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-32">
      <div className="container">
        <div className="relative bg-muted">
          <div className="overflow-hidden">
            <div className="grid grid-cols-1 gap-y-10 pb-14 pl-8 pr-4 pt-4 sm:pt-8 lg:grid-cols-3 lg:gap-10 lg:p-20">
              <div>
                <Image
                  src={
                    currentTestimonial?.image ??
                    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  }
                  alt={currentTestimonial?.name ?? "Testimonial Image"}
                  className="mx-auto max-h-80 lg:mx-0 lg:max-h-none"
                  width={400}
                  height={400}
                />
                <div className="mt-4 text-center">
                  <h3 className="font-semibold">
                    {currentTestimonial?.name ?? "John Doe"}
                  </h3>
                  <p className="text-muted-foreground">
                    {currentTestimonial?.position ?? "CEO, Company Name"}
                  </p>
                </div>
              </div>
              <div className="col-span-2">
                <div className="mb-6 flex items-center justify-center gap-2 lg:mb-8 lg:justify-start">
                  <Image
                    src={currentTestimonial?.companyLogo ?? "/logo.svg"}
                    alt={`${currentTestimonial?.companyName ?? "DY-Comps AI"} logo`}
                    className="h-auto w-7 lg:w-11"
                    width={44}
                    height={44}
                  />
                  <span className="text-xl font-semibold lg:text-3xl">
                    {currentTestimonial?.companyName ?? "DY-Comps AI"}
                  </span>
                </div>
                <p className="text-center text-xl font-semibold lg:text-left lg:text-2xl">
                  &quot;
                  {currentTestimonial?.quote ?? "Lorem ipsum dolor sit amet"}
                  &quot;
                </p>
                <Separator className="my-8 lg:my-10" />
                <div className="grid justify-center gap-10 text-center md:grid-cols-2 lg:justify-start lg:text-left">
                  {currentTestimonial?.stats?.map((stat, index) => (
                    <div key={index} className="flex flex-col">
                      <span className="mb-4 text-4xl font-semibold md:text-6xl">
                        {stat.value}
                      </span>
                      <span className="font-medium">{stat.label}</span>
                      <span className="text-muted-foreground">
                        {stat.subLabel}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-6 right-6 z-10 lg:bottom-10 lg:right-10">
            <div className="relative flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="size-8 rounded-full"
                onClick={prevSlide}
                disabled={currentIndex === 0}
              >
                <ArrowLeft className="size-4" />
                <span className="sr-only">Previous slide</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="size-8 rounded-full"
                onClick={nextSlide}
                disabled={currentIndex === testimonials.length - 1}
              >
                <ArrowRight className="size-4" />
                <span className="sr-only">Next slide</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
