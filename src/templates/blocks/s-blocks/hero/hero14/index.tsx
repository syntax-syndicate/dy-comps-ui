"use client";
import { useRef, useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

const frameworks = [
  {
    name: "Next",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Vite",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Remix",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Gatsby",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Astro",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Laravel",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "React",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Angular",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Vue",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Svelte",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function Hero14() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [contentWidth, setContentWidth] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      setContentWidth(carouselRef.current.scrollWidth / 2);
    }
  }, []);

  useEffect(() => {
    if (contentWidth > 0) {
      controls
        .start({
          x: [0, -contentWidth],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          },
        })
        .catch((error) => {
          console.error("Animation start error:", error);
        });
    }
  }, [contentWidth, controls]);

  return (
    <section className="bg-background py-32 text-foreground">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mx-auto mb-4 max-w-screen-sm text-4xl font-bold md:mb-12 md:text-7xl">
            Choose your <span className="text-primary">flavor.</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground md:text-2xl">
            Compatible with{" "}
            <span className="font-semibold text-primary">
              all major JS frameworks.
            </span>
          </p>
        </div>
        <div
          className="relative mx-auto w-full max-w-screen-md overflow-hidden"
          role="region"
          aria-roledescription="carousel"
        >
          <motion.div ref={carouselRef} className="flex" animate={controls}>
            {[...frameworks, ...frameworks].map((framework, index) => (
              <div
                key={`${framework.name}-${index}`}
                role="group"
                aria-roledescription="slide"
                className="min-w-[33.333%] flex-shrink-0 select-none pl-4 sm:min-w-[25%] md:min-w-[16.666%]"
              >
                <Card className="flex items-center justify-center gap-2 p-6">
                  <CardContent className="flex items-center justify-center gap-2 p-0">
                    <Image
                      src={framework.logo}
                      alt={`${framework.name} logo`}
                      width={28}
                      height={28}
                      className="h-4 shrink-0 md:h-7"
                    />
                    <p className="text-sm font-medium md:text-base">
                      {framework.name}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
