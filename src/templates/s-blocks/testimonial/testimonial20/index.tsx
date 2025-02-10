"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  logo: string;
  avatar: string;
  rating: number;
  industry: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "This platform revolutionized our workflow. We've seen a 40% increase in project completion rates and our team's creativity has soared to new heights.",
    author: "Elena Rodriguez",
    role: "Creative Director, @company",
    logo: "/logos/shadcn-ui.svg",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    rating: 5,
    industry: "UI/UX Design",
  },
  {
    quote:
      "The AI-powered features have been a game-changer. We're now able to prototype and iterate 3x faster, giving us a significant edge in the market.",
    author: "Jamal Thompson",
    role: "Head of Innovation, @company",
    logo: "logos/nextjs.svg",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    rating: 5,
    industry: "Web Development",
  },
  {
    quote:
      "Our client satisfaction scores have jumped by 25% since implementing this tool. It's not just a productivity booster, it's a relationship enhancer.",
    author: "Sophia Chen",
    role: "Client Success Manager, @company",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    logo: "/logos/astro.svg",
    rating: 5,
    industry: "Client Management",
  },
];

export default function EnhancedTestimonials() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  // Ensure testimonials array is not empty
  const currentTestimonial = testimonials[currentIndex] ?? {
    quote: "No testimonial available.",
    author: "Unknown",
    role: "Unknown",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    rating: 0,
    industry: "Unknown",
  };

  return (
    <section className="bg-gradient-to-b from-background to-secondary/50 py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-extrabold">
          Transforming Industries, One Team at a Time
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-none shadow-xl backdrop-blur-sm transition-shadow duration-300 hover:shadow-2xl"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <Image
                    alt="Company logo"
                    className="h-8 w-auto dark:invert"
                    src={testimonial.logo}
                    width={32}
                    height={32}
                  />
                  <div className="flex">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`size-5 ${
                          i < testimonial.rating
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <blockquote className="relative mb-6">
                  <Quote className="absolute left-0 top-0 -ml-2 -mt-2 size-8 text-primary/20" />
                  <p className="pl-6 text-lg font-medium leading-relaxed text-foreground">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </blockquote>
                <div className="flex items-center gap-4">
                  <Avatar className="size-12 ring-2 ring-primary">
                    <AvatarImage
                      alt={testimonial.author}
                      src={testimonial.avatar}
                    />
                    <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </div>
                    <div className="mt-1 text-xs font-medium text-primary">
                      {testimonial.industry}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
