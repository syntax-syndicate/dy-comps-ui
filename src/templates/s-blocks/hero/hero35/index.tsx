import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Users, Zap } from "lucide-react";
import Image from "next/image";

export default function Hero35() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary py-16">
      <div className="container grid items-center gap-8 lg:grid-cols-2">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Image
            src="/icons/abstract.png"
            width={100}
            height={100}
            alt="logo"
            className="dark:invert"
          />
          <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
            Empowering You to Innovate
          </h1>
          <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
            Unlock the full potential of your projects with our innovative
            platform. We provide cutting-edge tools and resources to help you
            bring your ideas to life.
          </p>
          <div className="flex w-full flex-col justify-center gap-4 sm:flex-row lg:justify-start">
            <Button size="lg">
              <span className="relative z-10 flex items-center">
                Get Started
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
            <Button size="lg" variant="outline">
              <span className="relative z-10">Learn More</span>
            </Button>
          </div>
        </div>
        <div className="grid aspect-[3/4] grid-cols-[1fr_10fr_1fr] grid-rows-[2fr_10fr_2fr] overflow-hidden rounded-lg bg-primary/10 shadow-xl">
          <div className="col-span-3 row-span-1"></div>
          <div></div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=667&fit=crop&q=80"
              alt="Developer working on laptop with code on screen"
              width={500}
              height={667}
              className="absolute left-[12%] top-[8%] aspect-[3/4] w-3/5 rounded-lg border object-cover shadow-md transition-transform hover:scale-105"
            />
            <Image
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=300&fit=crop&q=80"
              alt="Close-up of programming code on screen"
              width={300}
              height={300}
              className="absolute right-[10%] top-[20%] aspect-square w-[30%] rounded-lg border object-cover shadow-md transition-transform hover:scale-105"
            />
            <Image
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=450&fit=crop&q=80"
              alt="Team collaborating on software development project"
              width={600}
              height={450}
              className="absolute bottom-[8%] left-[36%] aspect-[4/3] w-[50%] rounded-lg border object-cover shadow-md transition-transform hover:scale-105"
            />
          </div>
          <div></div>
        </div>
      </div>
    </section>
  );
}
