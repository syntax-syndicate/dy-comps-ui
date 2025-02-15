import React from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function TestimonialSection() {
  const starCount = 5;
  return (
    <section className="bg-gradient-to-b from-primary/5 to-background py-32">
      <div className="container">
        <div className="flex flex-col items-center gap-8 border-y border-primary/20 py-14 text-center md:py-20">
          <div className="flex justify-center space-x-2">
            {Array(starCount)
              .fill(null)
              .map((_, i) => (
                <Star key={i} className="size-6 text-primary" />
              ))}
          </div>
          <q className="block max-w-4xl text-2xl font-medium text-foreground lg:text-3xl">
            This platform isn&apos;t just a game-changer; it&apos;s a whole new
            ballgame! Our hiring process went from snail-paced to warp speed.
            We&apos;ve uncovered gems of talent we never knew existed!
          </q>
          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <div className="relative size-16 overflow-hidden rounded-full border-2 border-primary">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Sarah Starlight"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col items-center sm:items-start">
              <p className="font-bold text-foreground">Sarah Starlight</p>
              <p className="text-sm text-muted-foreground">
                Chief Talent Hunter, Cosmic Careers Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
