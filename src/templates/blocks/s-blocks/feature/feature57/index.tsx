"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Code, ShieldCheck, BookOpen, Rocket } from "lucide-react";
const features = [
  {
    icon: Code,
    title: "Code Snippets",
    description:
      "Explore powerful code examples tailored for your needs. We empower you with the tools to build better software.",
    placeholder:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    icon: ShieldCheck,
    title: "Secure Data Handling",
    description:
      "We ensure top-tier data security, so you can focus on your creative process. Trust our platform to keep your information secure.",
    placeholder:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    icon: BookOpen,
    title: "Extensive Resources",
    description:
      "Dive into a vast library of resources to elevate your craft. Learn everything you need to master the tools and techniques.",
    placeholder:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    icon: Rocket,
    title: "Rapid Prototyping",
    description:
      "Iterate quickly with our intuitive platform and streamline your product development lifecycle. See your ideas come to life with ease and speed.",
    placeholder:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function Feature57() {
  const [selectedFeature, setSelectedFeature] = useState(0);
  return (
    <section className="bg-background py-12 text-foreground md:py-24">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 md:flex-row md:gap-12">
          {/* Features List */}
          <div className="w-full md:w-1/2">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  onClick={() => setSelectedFeature(index)}
                  className={`group cursor-pointer rounded-lg p-4 transition ${
                    selectedFeature === index
                      ? "border border-primary bg-primary/10"
                      : "border border-transparent hover:border-primary/50"
                  }`}
                >
                  <div className="flex items-start">
                    {React.createElement(feature.icon, {
                      // Correct case for React
                      className: "mr-4 size-6 mt-1 shrink-0 text-primary",
                    })}
                    <div>
                      <h3
                        className={`mb-2 text-lg font-semibold ${
                          selectedFeature === index
                            ? "text-primary"
                            : "text-foreground"
                        }`}
                      >
                        {feature.title}
                      </h3>
                      <p
                        className={`text-sm ${
                          selectedFeature === index
                            ? "text-foreground"
                            : "text-muted-foreground"
                        }`}
                      >
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Image Carousel */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-square overflow-hidden rounded-lg border bg-accent">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
                    selectedFeature === index ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Image
                    src={feature.placeholder}
                    alt={feature.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
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
