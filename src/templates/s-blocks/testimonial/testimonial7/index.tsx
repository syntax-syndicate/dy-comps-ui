import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    quote:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
  {
    name: "Jane Doe",
    role: "CTO",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    quote:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
  {
    name: "John Smith",
    role: "COO",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    quote:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
  {
    name: "Jane Smith",
    role: "Tech Lead",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    quote:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
  {
    name: "Richard Doe",
    role: "Designer",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    quote:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
  {
    name: "Gordon Doe",
    role: "Developer",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    quote:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
];

const TestimonialCard: React.FC<Testimonial> = ({
  name,
  role,
  avatar,
  quote,
}) => (
  <Card className="max-w-96 select-none p-6">
    <CardContent className="p-0">
      <div className="mb-4 flex gap-4">
        <Avatar className="h-9 w-9 border-2 border-primary">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name[0]}</AvatarFallback>
        </Avatar>
        <div className="text-sm">
          <p className="font-medium">{name}</p>
          <p className="text-muted-foreground">{role}</p>
        </div>
      </div>
      <q>{quote}</q>
    </CardContent>
  </Card>
);

export default function TestimonialSection() {
  return (
    <section className="py-32">
      <div className="container flex flex-col items-center gap-6">
        <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
          Meet our happy clients
        </h2>
        <p className="text-muted-foreground lg:text-lg">
          All of our 1000+ clients are happy
        </p>
        <Button className="mt-6">Get started for free</Button>
      </div>
      <div className="lg:container">
        <div className="mt-16 space-y-4">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-auto pl-4">
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="basis-auto pl-4">
                  <TestimonialCard {...testimonial} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
