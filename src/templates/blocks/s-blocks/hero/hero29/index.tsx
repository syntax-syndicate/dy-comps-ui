"use client";

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 py-20">
      <div className="container relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16">
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              Revolutionize Your Team with{" "}
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                AI-Driven Innovation
              </span>
            </h1>
            <p className="max-w-2xl text-xl text-muted-foreground">
              Experience the next level of collaboration. Our AI-powered
              platform streamlines communication, automates workflows, and
              empowers your team to achieve peak performance.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="w-full sm:w-auto">
                Try for Free
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Book a Demo
              </Button>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="size-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm font-medium">
                4.8 stars (207 reviews)
              </span>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-lg shadow-2xl">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="AI-powered collaboration hero"
                width={1200}
                height={800}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 opacity-30">
        <svg
          className="h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <radialGradient
              id="herogradient"
              cx="50%"
              cy="50%"
              r="50%"
              fx="50%"
              fy="50%"
            >
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.3" />
              <stop
                offset="100%"
                stopColor="var(--background)"
                stopOpacity="0"
              />
            </radialGradient>
          </defs>
          <rect
            x="0"
            y="0"
            width="100"
            height="100"
            fill="url(#herogradient)"
          />
        </svg>
      </div>
    </section>
  );
}
