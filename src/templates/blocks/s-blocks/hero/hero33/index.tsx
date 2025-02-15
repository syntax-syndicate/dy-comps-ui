"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Hero33() {
  const [hoverState, setHoverState] = useState({
    primary: false,
    secondary: false,
  });

  return (
    <section className="overflow-hidden bg-gradient-to-br from-accent to-accent-foreground/10">
      <div className="container grid w-full gap-8 py-12 lg:grid-cols-2">
        <div className="flex flex-col items-center py-12 text-center lg:items-start lg:text-left">
          <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
            Revolutionize Your <span className="text-primary">Workflow</span>
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            Experience a paradigm shift in productivity with our cutting-edge
            platform. Streamline your processes, enhance collaboration, and
            unlock your team&apos;s full potential.
          </p>
          <div className="mb-12 flex w-full flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button
              size="lg"
              className="group relative w-full overflow-hidden sm:w-auto"
              onMouseEnter={() =>
                setHoverState({ ...hoverState, primary: true })
              }
              onMouseLeave={() =>
                setHoverState({ ...hoverState, primary: false })
              }
            >
              <span className="relative z-10 flex items-center">
                Explore Now
                <ArrowRight
                  className={`ml-2 size-4 transition-transform duration-300 ${hoverState.primary ? "translate-x-1" : ""}`}
                />
              </span>
              <span className="absolute inset-0 origin-left scale-x-0 transform bg-primary-foreground transition-transform duration-300 group-hover:scale-x-100"></span>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group relative w-full overflow-hidden sm:w-auto"
              onMouseEnter={() =>
                setHoverState({ ...hoverState, secondary: true })
              }
              onMouseLeave={() =>
                setHoverState({ ...hoverState, secondary: false })
              }
            >
              <span className="relative z-10">Watch Demo</span>
              <span className="absolute inset-0 origin-bottom scale-y-0 transform bg-accent transition-transform duration-300 group-hover:scale-y-100"></span>
            </Button>
          </div>
          <div className="rounded-lg border bg-background/80 px-8 py-6 shadow-lg backdrop-blur-sm">
            <p className="mb-2 text-xl font-medium">Limited Time Offer</p>
            <div className="mb-4 flex items-baseline justify-center lg:justify-start">
              <div className="text-4xl font-bold text-primary lg:text-6xl">
                $79
              </div>
              <div className="ml-2 text-xl font-bold leading-none lg:text-2xl lg:leading-none">
                /month
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Unlock premium features and save 20% with our annual plan. Offer
              ends soon!
            </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Innovative workspace showcasing our platform's interface"
            className="h-full rounded-lg border object-cover shadow-2xl"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}
