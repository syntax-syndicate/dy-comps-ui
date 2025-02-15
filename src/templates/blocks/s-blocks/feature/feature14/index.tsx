"use client";

import {
  Code,
  ArrowUpDown,
  Redo,
  ArrowDownToLine,
  Repeat,
  Scan,
  Scaling,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const features = [
  {
    icon: Code,
    title: "Integrations",
    description:
      "Connect and streamline your workflow with our wide range of integrations.",
  },
  {
    icon: ArrowUpDown,
    title: "Automation",
    description:
      "Save time and reduce errors with our powerful automation tools.",
  },
  {
    icon: Redo,
    title: "Customization",
    description:
      "Tailor the platform to your needs with extensive customization options.",
  },
  {
    icon: ArrowDownToLine,
    title: "Collaboration",
    description:
      "Work seamlessly with your team using our collaboration features.",
  },
  {
    icon: Repeat,
    title: "Security",
    description:
      "Rest easy knowing your data is protected by industry-leading security measures.",
  },
  {
    icon: Scan,
    title: "Performance",
    description:
      "Experience lightning-fast performance optimized for your workflow.",
  },
  {
    icon: Scaling,
    title: "Scalability",
    description:
      "Grow your business with a platform that scales with your needs.",
  },
];

export default function Feature14() {
  return (
    <section className="overflow-hidden py-12 md:py-24">
      <div className="container">
        <div className="mb-8 flex flex-col items-center gap-4 text-center md:mb-12">
          <Badge variant="outline" className="mb-2">
            Features
          </Badge>
          <h2 className="text-2xl font-semibold text-foreground sm:text-3xl md:text-4xl lg:text-5xl">
            Powerful features <br className="hidden sm:inline" />
            <span className="text-primary">
              Designed to boost productivity.
            </span>
          </h2>
        </div>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full"
        >
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-medium text-foreground md:text-xl">
              Our Features
            </h3>
            <div className="flex items-center space-x-2">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </div>
          <CarouselContent className="-ml-4">
            {features.map((feature, index) => (
              <CarouselItem
                key={index}
                className="pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <Card>
                    <CardContent className="flex flex-col justify-center p-4 md:p-6">
                      <div className="mb-3 flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 md:mb-5 md:h-10 md:w-10">
                        <feature.icon className="size-6 text-primary md:h-6 md:w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground md:text-xl">
                        {feature.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground md:text-base">
                        {feature.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}
