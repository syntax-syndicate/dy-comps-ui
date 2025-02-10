"use client";

import React from "react";
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    content:
      "This product has completely transformed our workflow. It's intuitive, powerful, and a joy to use every day.",
    author: "Alex Johnson",
    role: "CEO, TechCorp",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    rating: 5,
  },
  {
    id: 2,
    content:
      "I can't imagine running my business without this tool. It's been a game-changer for our team's productivity.",
    author: "Samantha Lee",
    role: "Founder, StartupX",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    rating: 5,
  },
  {
    id: 3,
    content:
      "The customer support is outstanding. They've gone above and beyond to ensure our success with the platform.",
    author: "Michael Chen",
    role: "CTO, InnovateNow",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    rating: 4,
  },
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({
  testimonial,
}) => (
  <Card className="flex flex-col justify-between">
    <CardContent className="p-6">
      <div className="mb-4 flex">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`size-5 ${
              i < testimonial.rating ? "text-primary" : "text-muted"
            }`}
            fill={i < testimonial.rating ? "currentColor" : "none"}
          />
        ))}
      </div>
      <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
      <div className="flex items-center">
        <Avatar className="mr-4 size-10">
          <AvatarImage src={testimonial.avatar} alt={testimonial.author} />
          <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <p className="font-semibold">{testimonial.author}</p>
          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function TestimonialSection() {
  return (
    <section className="bg-secondary py-16">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold">
          What Our Customers Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
