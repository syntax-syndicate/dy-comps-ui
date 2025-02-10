"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Acme's project management tool has revolutionized our workflow. The intuitive interface and real-time collaboration features have increased our team's productivity by 40%. It's not just a tool; it's our competitive edge.",
    author: "Sarah Chen",
    position: "CTO at TechNova Solutions",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    quote:
      "As a startup founder, every minute counts. Acme's platform has streamlined our operations, cutting meeting times in half and boosting our output. The customizable dashboards provide invaluable insights for data-driven decisions.",
    author: "Alex Rodriguez",
    position: "Founder of GrowthX Ventures",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    quote:
      "Acme has transformed our remote work setup. The seamless video conferencing and document sharing make it feel like we're all in the same room. Our team's engagement and collaboration have never been stronger, even across time zones.",
    author: "Emily Patel",
    position: "Head of Global Operations at RemoteForce",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function Testimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <section className="bg-gradient-to-b from-secondary to-background py-24">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold text-foreground md:text-4xl">
          Empowering Teams, Elevating Results
        </h2>
        <div className="relative" role="region" aria-roledescription="carousel">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  role="group"
                  aria-roledescription="slide"
                  className="w-full flex-shrink-0"
                >
                  <div className="flex flex-col items-center text-center">
                    <p className="mb-8 max-w-4xl text-xl font-medium text-foreground md:px-8 lg:text-3xl">
                      &quot;{testimonial.quote}&quot;
                    </p>
                    <Avatar className="mb-4 size-24 ring-2 ring-primary">
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.author}
                      />
                      <AvatarFallback>
                        {testimonial.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <p className="mb-1 text-lg font-medium text-foreground">
                      {testimonial.author}
                    </p>
                    <p className="mb-6 text-sm text-muted-foreground">
                      {testimonial.position}
                    </p>
                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className="size-5 fill-primary text-primary"
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center py-8">
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant="ghost"
                size="icon"
                className="mx-1"
                onClick={() => setCurrentTestimonial(index)}
              >
                <div
                  className={`h-2.5 w-2.5 rounded-full ${
                    index === currentTestimonial ? "bg-primary" : "bg-muted"
                  }`}
                />
                <span className="sr-only">Go to slide {index + 1}</span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
