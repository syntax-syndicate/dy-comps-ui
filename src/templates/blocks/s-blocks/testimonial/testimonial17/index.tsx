"use client";

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Our team has seen an incredible boost in productivity since adopting this platform. It's a game-changer for us!",
    author: "Sarah Williams",
    role: "Head of Product, @company",
    logo: "/logos/shadcn-ui.svg",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Add avatar image path
  },
  {
    quote:
      "This tool has streamlined our development process and improved team collaboration like never before.",
    author: "David Parker",
    role: "CTO, @company",
    logo: "/logos/astro.svg",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Add avatar image path
  },
  {
    quote:
      "We've reduced our development cycles by 30% thanks to the efficiency this platform brings.",
    author: "Maria Gonzalez",
    role: "Lead Developer, @company",
    logo: "/logos/tailwind.svg",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Add avatar image path
  },
];

export default function TestimonialSection() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex flex-col gap-14 lg:grid lg:grid-cols-3">
          <h2 className="text-center text-3xl font-bold lg:text-left lg:text-4xl">
            Teams are thriving with our platform
          </h2>
          <div className="col-span-2 hidden grid-cols-2 items-center gap-6 lg:grid">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className={index === 1 ? "col-start-2" : ""}>
                <CardContent className="p-8">
                  <Image
                    src={testimonial.logo}
                    alt="logo"
                    className="mb-6 h-8 dark:invert"
                    width={32}
                    height={32}
                  />
                  <p className="mb-10 text-xl font-semibold">
                    {testimonial.quote}
                  </p>
                  <div className="flex gap-4">
                    <Avatar className="border-2 border-primary">
                      <AvatarImage
                        src={testimonial.image} // Use AvatarImage to display the avatar
                        alt={testimonial.author}
                      />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="lg:hidden">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="mb-6">
                <CardContent className="p-8">
                  <Image
                    src={testimonial.logo}
                    alt="logo"
                    className="mb-6 h-6 sm:h-8"
                    width={24}
                    height={24}
                  />
                  <p className="mb-10 text-xl font-semibold">
                    {testimonial.quote}
                  </p>
                  <div className="flex gap-4">
                    <Avatar className="border-2 border-primary">
                      <AvatarImage
                        src={testimonial.image} // Use AvatarImage to display the avatar
                        alt={testimonial.author}
                      />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
