"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Zap, Users, BarChart } from "lucide-react";
import Image from "next/image";

export default function OriginalHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-32">
      <div className="container relative z-10">
        <div className="flex flex-col items-center gap-10 text-center">
          <a
            href="#"
            className="group flex items-center gap-2 rounded-full bg-background px-4 py-2 text-sm shadow-md transition-all hover:shadow-lg"
          >
            <Badge variant="secondary" className="bg-primary/20 text-primary">
              New
            </Badge>
            AI-powered analytics now available
            <ArrowRight className="h-auto w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <h1 className="text-4xl font-bold tracking-tight lg:text-7xl">
            Elevate Your Workflow with
            <span className="relative mx-2 whitespace-nowrap text-primary">
              Smart Canvas
              <span
                className="absolute -bottom-2 left-0 right-0 h-2 w-full bg-primary/30"
                aria-hidden="true"
              />
            </span>
          </h1>
          <p className="max-w-2xl text-xl text-muted-foreground">
            Seamlessly integrate design, collaboration, and productivity in one
            intuitive platform.
          </p>
          <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
            <Button size="lg" className="h-12 px-8 text-lg">
              Start for free
              <Zap className="ml-2 size-5" />
            </Button>
            <Button variant="outline" size="lg" className="h-12 px-8 text-lg">
              Schedule a demo
            </Button>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-8">
            <Stat icon={Users} value="10k+" label="Active users" />
            <Stat icon={BarChart} value="30%" label="Productivity boost" />
          </div>
        </div>
      </div>
      <BackgroundElements />
    </section>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType;
  value: string;
  label: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="rounded-full bg-primary/10 p-2">
        <Icon className="size-6 text-primary" />
      </div>
      <div className="text-left">
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

function BackgroundElements() {
  return (
    <>
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(45%_50%_at_50%_50%,rgba(56,189,248,0.13),transparent)]"
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <Image
        src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
        alt="Abstract design element"
        width={400}
        height={400}
        className="absolute -right-20 -top-20 -z-10 opacity-50 blur-2xl"
      />
      <Image
        src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
        alt="Abstract design element"
        width={300}
        height={300}
        className="absolute -bottom-32 -left-16 -z-10 opacity-40 blur-2xl"
      />
    </>
  );
}
