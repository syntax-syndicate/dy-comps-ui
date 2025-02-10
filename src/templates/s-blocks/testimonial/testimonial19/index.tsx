"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

// Sample testimonial data
const testimonials = [
  {
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using this project. In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her rights entire, and her liberties inviolate; and we will that it be thus observed; which is apparent from",
    author: "Casy Camilari Marx",
    position: "Digital Marketing Director",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    author: "Jane Doe",
    position: "CEO, Tech Innovations",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    author: "John Smith",
    position: "Lead Developer",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function Testimonial19() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length,
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="mx-auto w-full max-w-5xl">
      <Card className="border-none">
        <CardContent className="p-0">
          <div className="relative h-[300px] md:h-[400px]">
            <Image
              src={currentTestimonial?.image ?? ""}
              alt="Testimonial background"
              className="object-cover"
              fill
              priority
            />
          </div>
          <div className="relative p-8 md:p-12">
            <div className="absolute left-8 top-0 -translate-y-1/2 font-serif text-6xl text-primary">
              &quot;
            </div>
            <div className="mb-6 flex items-center justify-between">
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" onClick={prevTestimonial}>
                  <ChevronLeft className="size-6" />
                  <span className="sr-only">Previous testimonial</span>
                </Button>
                <Button variant="ghost" size="icon" onClick={nextTestimonial}>
                  <ChevronRight className="size-6" />
                  <span className="sr-only">Next testimonial</span>
                </Button>
              </div>
              <div className="absolute bottom-32 right-8 font-serif text-6xl text-primary">
                &quot;
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground md:text-xl">
                {currentTestimonial?.text}
              </p>
              <div className="space-y-1">
                <h3 className="text-xl font-semibold text-foreground">
                  {currentTestimonial?.author}
                </h3>
                <p className="text-muted-foreground">
                  {currentTestimonial?.position}
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
