"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function UniqueHero() {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => ({
        x: prev.x + 1,
        y: prev.y + 1,
        z: prev.z + 1,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
      <div className="pointer-events-none absolute -inset-y-20 inset-x-0 bg-[radial-gradient(ellipse_60%_60%_at_35%_50%,hsl(var(--accent))_0%,transparent_80%)]"></div>
      <div className="pointer-events-none absolute -inset-y-20 inset-x-0 bg-[radial-gradient(hsl(var(--accent-foreground)/0.1)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_60%_at_35%_50%,#000_0%,transparent_80%)]"></div>
      <div className="container relative mx-auto py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="flex flex-col justify-center space-y-8">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Innovate with <span className="text-primary">Confidence</span>
            </h1>
            <p className="max-w-prose text-lg text-muted-foreground sm:text-xl">
              Empower your projects with cutting-edge technology and
              unparalleled support. Experience the future of development, today.
            </p>
            <div>
              <Button size="lg" className="mr-4">
                Get Started
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center rounded-lg bg-accent p-6">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Placeholder"
                className="rounded-lg"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
