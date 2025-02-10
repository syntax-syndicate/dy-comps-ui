import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
}

const testimonials: Testimonial[] = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. id ut omnis repellat. Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis.",
  },
  {
    name: "Jane Doe",
    role: "CTO",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat. Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
  {
    name: "John Smith",
    role: "COO",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat. Lorem ipsum dolor sit.",
  },
  {
    name: "Jane Smith",
    role: "Tech Lead",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat. incidunt. Ratione, ullam? Iusto id ut omnis repellat ratione.",
  },
  {
    name: "Richard Doe",
    role: "Designer",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
  {
    name: "Gordon Doe",
    role: "Developer",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    content:
      "Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat. Lorem ipsum dolor sit, amet Odio, incidunt. Ratione, ullam? Iusto id ut omnis repellat.",
  },
];

export default function TestimonialCarousel() {
  return (
    <section className="py-32">
      <div className="container">
        <Carousel className="w-full">
          <div className="mb-8 flex justify-between px-1 lg:mb-12">
            <h2 className="text-2xl font-semibold lg:text-5xl">
              Why Clients <span className="text-primary">Love Us</span>
            </h2>
            <div className="flex items-center space-x-2">
              <CarouselPrevious className="static translate-y-0 bg-accent text-primary-foreground hover:bg-primary/90" />
              <CarouselNext className="static translate-y-0 bg-accent text-primary-foreground hover:bg-primary/90" />
            </div>
          </div>
          <CarouselContent>
            {testimonials.map((testimonial, idx) => (
              <CarouselItem
                key={idx}
                className="basis-full md:basis-1/2 lg:basis-1/3"
              >
                <div className="h-full p-1">
                  <div className="flex h-full flex-col justify-between rounded-lg border-2 p-6 transition-colors hover:border-primary hover:bg-primary/5">
                    <q className="leading-7 text-foreground/70">
                      {testimonial.content}
                    </q>
                    <div className="mt-6 flex gap-4 leading-5">
                      <Avatar className="h-9 w-9 rounded-full ring-2 ring-primary">
                        <AvatarImage
                          src={testimonial.avatar}
                          alt={testimonial.name}
                        />
                        <AvatarFallback>
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="text-sm">
                        <p className="font-medium">{testimonial.name}</p>
                        <p className="text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
