"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

const testimonials = [
  {
    quote:
      "Implementing this solution transformed our workflow. The efficiency gains were immediate, and the user-friendly interface made adoption across our team seamless. It's rare to find a product that delivers on all its promises, but this one exceeded our expectations.",
    author: "Sarah Johnson",
    role: "CTO, TechInnovate Inc.",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    initials: "SJ",
  },
  {
    quote:
      "This product has been a game-changer for our organization. The intuitive design and powerful features have significantly improved our productivity. I can't imagine going back to our old way of working.",
    author: "Michael Chen",
    role: "Operations Manager, GlobalTech Solutions",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    initials: "MC",
  },
  {
    quote:
      "I was skeptical at first, but after using this solution for just a week, I was completely sold. The customer support is outstanding, and the product itself is constantly improving. It's been a fantastic investment for our company.",
    author: "Emily Rodriguez",
    role: "CEO, Innovate Dynamics",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    initials: "ER",
  },
];

export default function Testimonial() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleTestimonialChange = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-24">
      <div className="container mx-auto max-w-5xl px-4">
        <Card className="relative overflow-hidden">
          <CardContent className="p-8 md:p-12">
            <QuoteIcon className="absolute left-4 top-4 size-8 text-primary/20" />
            <div className="flex flex-col items-center text-center">
              <p className="relative z-10 mb-8 text-lg font-medium italic text-foreground/80 md:text-xl lg:text-2xl">
                &quot;{currentTestimonial?.quote}&quot;
              </p>
              <div className="flex items-center gap-4">
                <Avatar className="size-16 ring-2 ring-primary ring-offset-2 ring-offset-background">
                  <AvatarImage
                    src={currentTestimonial?.avatar}
                    alt={currentTestimonial?.author}
                  />
                  <AvatarFallback>
                    {currentTestimonial?.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="text-left">
                  <p className="text-base font-semibold">
                    {currentTestimonial?.author}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {currentTestimonial?.role}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="mt-12 flex justify-center gap-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`size-3 rounded-full transition-colors ${
                index === currentIndex
                  ? "bg-primary"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`View testimonial ${index + 1}`}
              onClick={() => handleTestimonialChange(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
