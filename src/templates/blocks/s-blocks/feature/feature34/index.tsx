"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Layout,
  Lightbulb,
  Wand2,
  Palette,
  PenTool,
  Zap,
  CheckCircle,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const designSteps = [
  {
    icon: Palette,
    title: "Concept",
    description: "We brainstorm ideas tailored to your vision and needs.",
  },
  {
    icon: PenTool,
    title: "Design",
    description: "Our experts craft detailed plans and 3D models.",
  },
  {
    icon: Zap,
    title: "Implement",
    description: "We bring the designs to life with precision and care.",
  },
  {
    icon: CheckCircle,
    title: "Refine",
    description: "We perfect every detail to exceed your expectations.",
  },
];

export default function FeatureSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="bg-background py-32 text-foreground">
      <div className="container mx-auto">
        <div className="mx-auto mb-20 max-w-screen-md text-center">
          <h1 className="mb-6 text-4xl font-bold lg:text-5xl">
            <span className="text-primary">Crafting Spaces</span> <br /> That
            Inspire Creativity
          </h1>
          <p className="text-muted-foreground">
            Unleash your living spaces&apos; potential with innovative designs
            that harmonize aesthetics and practicality, creating a truly
            personalized sanctuary.
          </p>
        </div>
        <div className="mx-auto grid gap-10 lg:grid-cols-3">
          {/* Left Image with subtle tilt and animation */}
          <div className="order-3 overflow-hidden rounded-xl shadow-md transition-transform hover:scale-105 hover:shadow-lg lg:order-none">
            <div className="relative h-full w-full overflow-hidden">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Elegant living room design"
                width={450}
                height={600}
                className="h-full w-full transform rounded-xl object-cover transition-transform duration-300 hover:rotate-2"
              />
            </div>
          </div>

          {/* Central Highlighted Feature Card - Tailored */}
          <div className="order-1 flex items-center justify-center rounded-xl bg-accent p-4 lg:order-none">
            <div className="text-center">
              <div className="mb-4 flex items-center justify-center gap-2">
                <Wand2 className="size-7 text-primary" />
                <span className="text-xl font-semibold">Tailored Designs</span>
              </div>
              <p className="mb-4 text-sm text-muted-foreground">
                Designs crafted specifically for your vision and needs.
              </p>
              <Link
                href="#personalize"
                className="inline-flex items-center text-primary hover:underline"
              >
                Explore Options <ArrowRight className="ml-1 size-5" />
              </Link>
            </div>
          </div>

          {/* Redesigned Interactive Design Process Card */}
          <Card className="order-5 overflow-hidden lg:order-none">
            <CardContent className="p-6">
              <h3 className="mb-4 text-2xl font-semibold">
                Our Design Process
              </h3>
              <div className="relative mb-6 h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="absolute left-0 top-0 h-full bg-primary transition-all duration-500 ease-out"
                  style={{
                    width: `${((activeStep + 1) / designSteps.length) * 100}%`,
                  }}
                />
              </div>
              <div className="mb-6 grid grid-cols-4 gap-2">
                {designSteps.map((step, index) => (
                  <Button
                    key={step.title}
                    variant={index === activeStep ? "default" : "outline"}
                    className={cn(
                      "h-auto flex-col items-center justify-center p-2 text-xs",
                      index === activeStep &&
                        "ring-2 ring-primary ring-offset-2",
                    )}
                    onClick={() => setActiveStep(index)}
                  >
                    <step.icon className="mb-1 size-6" />
                    <span className="text-center">{step.title}</span>
                  </Button>
                ))}
              </div>
              <div className="text-center">
                <h4 className="mb-2 text-lg font-semibold">
                  {designSteps[activeStep]?.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {designSteps[activeStep]?.description}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Adaptability Card */}
          <div className="order-2 mt-0 max-w-[412px] lg:order-none">
            <div className="mb-4 flex items-center gap-2">
              <Layout className="size-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                Embrace versatility in design.
              </span>
            </div>

            <h3 className="mb-3 text-2xl font-semibold lg:mb-4">
              Adaptable to Every Space
            </h3>
            <p className="mb-6 text-muted-foreground">
              Our designs integrate seamlessly, from compact apartments to
              spacious homes. Experience the freedom of solutions that grow and
              change with your needs.
            </p>
            <Link
              href="#explore-adaptability"
              className="inline-flex items-center text-primary hover:underline"
            >
              Explore Adaptability <ArrowRight className="ml-1 size-5" />
            </Link>
          </div>

          {/* Elegance Card */}
          <div className="order-4 mt-0 max-w-[412px] lg:order-none">
            <div className="mb-4 flex items-center gap-2">
              <Lightbulb className="size-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                Cutting-edge meets functionality.
              </span>
            </div>

            <h3 className="mb-3 text-2xl font-semibold lg:mb-4">
              Contemporary Elegance
            </h3>
            <p className="mb-6 text-muted-foreground">
              Experience the perfect blend of modern design and practicality.
              Our creations captivate and enhance your life with smart features.
            </p>
            <Link
              href="#discover-elegance"
              className="inline-flex items-center text-primary hover:underline"
            >
              Discover Elegance <ArrowRight className="ml-1 size-5" />
            </Link>
          </div>

          {/* Portfolio Card */}
          <div className="order-6 mt-0 max-w-[412px] lg:order-none">
            <div className="mb-4 flex items-center gap-2">
              <Lightbulb className="size-5 text-primary" />
              <span className="text-sm text-muted-foreground">
                Unlimited possibilities.
              </span>
            </div>
            <h3 className="mb-3 text-2xl font-semibold lg:mb-4">
              Diverse Design Portfolio
            </h3>
            <p className="mb-6 text-muted-foreground">
              From minimalist to opulent, find your perfect match in our
              extensive collection, created for every style and need.
            </p>
            <Link
              href="#view-portfolio"
              className="inline-flex items-center text-primary hover:underline"
            >
              View Portfolio <ArrowRight className="ml-1 size-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
