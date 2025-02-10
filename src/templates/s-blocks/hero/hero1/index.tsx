import { ArrowRight, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero1() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Section */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge
              variant="outline"
              className="group flex items-center gap-2 border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary hover:bg-primary/20"
            >
              Explore Now
              <Rocket className="size-4 transition-transform group-hover:translate-x-1" />
            </Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Unleash Your Creativity with Us
            </h1>
            <p className="mb-8 max-w-xl text-lg text-muted-foreground">
              Embark on a journey of innovation and design. Discover the tools
              and resources that will empower you to create compelling digital
              experiences.
            </p>
            <div className="flex w-full flex-col gap-4 sm:flex-row sm:gap-6">
              <Button size="lg" className="w-full sm:w-auto">
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group w-full sm:w-auto"
              >
                Learn More
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Right Section */}
          <div className="aspect-square w-full overflow-hidden rounded-lg border border-muted/20 shadow-lg">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Hero illustration"
              width={600}
              height={600}
              className="size-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
