"use client";

import { useState } from "react";
import Image from "next/image";

export default function Feature95() {
  const [selectedStep, setSelectedStep] = useState(1);

  const steps = [
    {
      number: 1,
      title: "Set up your data collection",
      description:
        "Configure your input sources and streamline data management.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      number: 2,
      title: "Generate custom reports",
      description:
        "Easily create and share detailed analytics reports across teams.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      number: 3,
      title: "Automate your processes",
      description:
        "Set up automated workflows for handling and processing data effortlessly.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      number: 4,
      title: "Share insights with stakeholders",
      description:
        "Provide transparent reporting with your custom-built dashboard.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  return (
    <section className="bg-background py-16">
      <div className="container">
        <div className="mx-auto max-w-5xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
            Build your custom
            <br />
            workflow in no time
          </h1>

          <a href="/">
            <p className="mt-4 text-lg font-bold text-muted-foreground">
              Deploy a fully optimized system and{" "}
              <span className="text-primary underline">
                upgrade your current setup.
              </span>
            </p>
          </a>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.number}
                className={`group relative cursor-pointer rounded-lg bg-muted/50 p-6 transition-colors hover:bg-muted ${
                  selectedStep === step.number ? "ring-2 ring-primary" : ""
                }`}
                onClick={() => setSelectedStep(step.number)}
              >
                <div className="mb-4 text-sm font-medium text-foreground">
                  {step.number}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 aspect-video overflow-hidden rounded-lg bg-muted">
            <Image
              src={steps[selectedStep - 1]?.image ?? ""}
              alt={`Step ${selectedStep}: ${steps[selectedStep - 1]?.title}`}
              width={800}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
