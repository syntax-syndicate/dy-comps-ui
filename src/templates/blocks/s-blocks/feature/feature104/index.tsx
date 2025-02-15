"use client";

import {
  Rocket,
  Puzzle,
  Zap,
  Lightbulb,
  Microscope,
  Compass,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
}

export default function CustomFeatures() {
  const features = [
    {
      icon: Rocket,
      title: "Accelerated Innovation",
      description:
        "Boost your project's velocity with cutting-edge tools designed for rapid development and deployment.",
    },
    {
      icon: Puzzle,
      title: "Adaptive Integration",
      description:
        "Seamlessly connect new technologies with your existing ecosystem, ensuring smooth transitions and enhanced functionality.",
    },
    {
      icon: Zap,
      title: "Dynamic Performance Metrics",
      description:
        "Track and analyze performance in real-time, enabling swift optimizations and data-driven strategies.",
    },
    {
      icon: Lightbulb,
      title: "Innovative Expansion",
      description:
        "Harness cutting-edge tools to illuminate new growth opportunities and adapt to evolving market landscapes.",
    },
    {
      icon: Microscope,
      title: "Precision Analytics",
      description:
        "Dive deep into your data with advanced analytical tools, uncovering insights that drive informed decision-making.",
    },
    {
      icon: Compass,
      title: "Holistic Oversight",
      description:
        "Navigate your entire workflow from a centralized hub, providing comprehensive control and streamlined management.",
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-4">
          <Badge className="flex items-center gap-1 px-2.5 py-1.5 text-sm">
            <Rocket className="h-auto w-4" />
            Innovations
          </Badge>
          <h2 className="text-center text-3xl font-semibold lg:text-4xl">
            Elevate Your Workflow Ecosystem
          </h2>
          <p className="text-center text-muted-foreground lg:text-lg">
            Discover a suite of powerful tools designed to revolutionize your
            processes, boost efficiency, and drive unprecedented success.
          </p>
        </div>
        <div className="mt-14 grid gap-2.5 lg:grid-cols-3">
          <div className="flex flex-col gap-2.5">
            {features.slice(0, 3).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
          <div className="hidden h-full rounded-lg lg:block">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Innovative workflow illustration"
              width={400}
              height={600}
              className="h-full rounded-lg object-cover"
            />
          </div>
          <div className="flex flex-col gap-2.5">
            {features.slice(3).map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="flex flex-col gap-3 rounded-lg border p-6">
      <div className="flex items-center gap-2.5">
        <span className="flex size-12 items-center justify-center rounded-md bg-muted">
          <Icon className="h-auto w-6 text-primary" />
        </span>
        <h3 className="font-medium">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground md:text-base">
        {description}
      </p>
    </div>
  );
}
