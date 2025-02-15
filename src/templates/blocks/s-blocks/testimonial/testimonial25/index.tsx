"use client";

import * as React from "react";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Testimonial {
  content: string;
  author: {
    name: string;
    title: string;
    image: string;
  };
}

const testimonials: Testimonial[] = [
  {
    content:
      "I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage. I never have any problem at all.",
    author: {
      name: "Jane Doe",
      title: "VP Operations, AlphaSquad",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  },
  {
    content:
      "I eeejust wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage. I never have any problem at all.",
    author: {
      name: "Rone Doe",
      title: "VP Operations, AlphaSquad",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  },
  // Add more testimonials here
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = React.useState(0);

  const next = () => {
    setCurrentTestimonial((current) =>
      current === testimonials.length - 1 ? 0 : current + 1,
    );
  };

  const previous = () => {
    setCurrentTestimonial((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  return (
    <section className="relative bg-muted/40 py-24">
      {/* Decorative dots */}
      <div className="absolute left-4 top-4 grid grid-cols-3 gap-1">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="size-1 rounded-full bg-primary/20" />
        ))}
      </div>
      <div className="absolute bottom-4 right-4 grid grid-cols-3 gap-1">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="size-1 rounded-full bg-primary/20" />
        ))}
      </div>

      <div className="container">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Hear From Our Customers
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            You made it so simple. My new site is so much faster and easier to
            work with than my old site. I just choose the page, make the change
            and click save.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <Card className="relative border-none bg-background/60 backdrop-blur-sm">
            <div className="p-8 md:p-12">
              <div className="mb-6 flex items-start gap-4">
                <Image
                  src={testimonials[currentTestimonial]?.author.image ?? ""}
                  alt="Profile"
                  className="rounded-full"
                  width={48}
                  height={48}
                />
                <div>
                  <h3 className="font-semibold text-primary">
                    {testimonials[currentTestimonial]?.author.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentTestimonial]?.author.title}
                  </p>
                </div>
                <Quote className="ml-auto size-10 text-muted-foreground/25" />
              </div>
              <p className="leading-relaxed text-muted-foreground">
                {testimonials[currentTestimonial]?.content}
              </p>
            </div>
          </Card>

          <div className="absolute -left-4 top-1/2 -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              className="size-12 rounded-full bg-background shadow-lg hover:bg-accent"
              onClick={previous}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="size-6" />
            </Button>
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2">
            <Button
              variant="ghost"
              size="icon"
              className="size-12 rounded-full bg-background shadow-lg hover:bg-accent"
              onClick={next}
              aria-label="Next testimonial"
            >
              <ChevronRight className="size-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
