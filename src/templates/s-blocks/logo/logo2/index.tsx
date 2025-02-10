"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const logos = [
  { src: "/logos/astro.svg", alt: "Astro Logo", url: "https://astro.build" },
  {
    src: "/logos/shadcn-ui.svg",
    alt: "shadcn/ui Logo",
    url: "https://ui.shadcn.com",
  },
  {
    src: "/logos/supabase.svg",
    alt: "Supabase Logo",
    url: "https://supabase.com",
  },
];

export default function LogosOriginal() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid overflow-hidden border md:grid-cols-2">
          <div className="my-auto px-6 py-10 sm:px-10 sm:py-12 lg:p-16">
            <div className="w-full md:max-w-md">
              <h2 className="mb-4 text-2xl font-semibold lg:text-3xl">
                We collaborate with industry leaders
              </h2>
              <p className="mb-6 text-lg text-muted-foreground">
                Our partnerships with top-tier companies ensure cutting-edge
                solutions and unparalleled expertise in every project we
                undertake.
              </p>
              <Button className="group w-full transition-all duration-300 hover:pr-8 md:w-fit">
                <span className="mr-2">Get in touch</span>
                <ArrowRight className="size-5 transition-all duration-300 group-hover:translate-x-2" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-3 border border-t md:border-l md:border-t-0">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="relative -mb-px flex cursor-pointer items-center justify-center overflow-hidden border border-b border-r p-5 sm:p-6 [&:nth-child(3n)]:border-r-0"
              >
                <a href={logo.url} target="_blank" rel="noopener noreferrer">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={100}
                    className="object-cover object-center transition-opacity duration-300 dark:invert"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
