"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const caseStudies = [
  {
    title: "Case study 1",
    image:
      "https://images.unsplash.com/photo-1730304539413-02706e6705db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    logo: "/logos/shadcn-ui-small.svg",
    link: "#",
  },
  {
    title: "Case study 2",
    image:
      "https://images.unsplash.com/photo-1730304539413-02706e6705db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    logo: "logos/nextjs.svg",
    link: "#",
  },
  {
    title: "Case study 3",
    image:
      "https://images.unsplash.com/photo-1730304539413-02706e6705db?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    logo: "/logos/shadcn-ui.svg",
    link: "#",
  },
];

export default function Gallery1() {
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  return (
    <section className="py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study, index) => (
            <a
              key={index}
              href={study.link}
              className={cn(
                "group relative overflow-hidden rounded-lg bg-primary text-primary-foreground",
                "transition-all duration-500 ease-in-out",
                "aspect-square w-full",
                "flex flex-col justify-between",
              )}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="absolute inset-0">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={800}
                  height={800}
                  className="h-full w-full object-cover object-center transition-all duration-500 ease-in-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/30 to-primary/10" />
              </div>
              <div className="relative flex h-full flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <Image
                    src={study.logo}
                    alt="Company Logo"
                    width={32}
                    height={32}
                    className="h-8 invert"
                  />
                  <div className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform duration-300 ease-in-out group-hover:scale-110">
                    <ArrowUpRight className="size-5" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white transition-all duration-300 ease-in-out group-hover:translate-y-0">
                    {study.title}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
