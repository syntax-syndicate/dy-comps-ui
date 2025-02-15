"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const logos = [
  {
    id: "logo-1",
    description: "Astro",
    image: "/logos/astro.svg",
  },
  {
    id: "logo-5",
    description: "shadcn/ui",
    image: "/logos/shadcn-ui.svg",
  },
  {
    id: "logo-6",
    description: "Supabase",
    image: "/logos/supabase.svg",
  },
  {
    id: "logo-8",
    description: "Vercel",
    image: "/logos/vercel.svg",
  },
];

export default function Logo7() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                Powering the Future of Digital Innovation
              </h2>
              <p className="text-lg text-muted-foreground">
                Join a league of visionaries who are building tomorrow&apos;s
                tech today. Our platform is the launchpad for groundbreaking
                projects and seamless collaboration. Ready to make your mark?
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Start Your Free Trial
              </Button>
              <Button variant="secondary" size="lg">
                Get in Touch
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 rounded-lg bg-accent p-2 md:grid-cols-2">
            {logos.map((logo) => (
              <div
                key={logo.id}
                className="group relative flex items-center justify-center rounded-lg border bg-background p-6 transition-transform hover:scale-105 hover:shadow-md"
              >
                <Image
                  src={logo.image}
                  alt={logo.description}
                  width={158}
                  height={48}
                  className="h-12 w-auto transition-opacity group-hover:opacity-90 dark:invert"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
