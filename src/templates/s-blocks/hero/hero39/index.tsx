import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, ArrowRight } from "lucide-react";
import Image from "next/image";

// Define an array of image objects
const features = [
  {
    src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    alt: "Feature 1",
  },
  {
    src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    alt: "Feature 2",
  },
  {
    src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    alt: "Feature 3",
  },
  {
    src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    alt: "Feature 4",
  },
];

export default function ModernHero() {
  return (
    <section className="overflow-hidden bg-gradient-to-b from-primary/10 to-background">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <Badge variant="secondary" className="mb-6 w-fit">
              <Rocket className="mr-2 size-4" /> Next-Gen Innovation
            </Badge>
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Elevate Your Digital Ecosystem
            </h1>
            <p className="mb-8 max-w-2xl text-lg text-muted-foreground">
              Unlock the full potential of your online presence with our
              cutting-edge platform. Seamlessly integrate advanced features and
              harness the power of AI to propel your business into the future.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group">
                Launch Your Journey
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline">
                Explore Features
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-primary/50 to-secondary/50 p-2 transition-transform hover:scale-105"
                >
                  <Image
                    src={feature.src}
                    alt={feature.alt}
                    width={300}
                    height={300}
                    className="h-full w-full rounded-lg object-cover transition-opacity group-hover:opacity-90"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
