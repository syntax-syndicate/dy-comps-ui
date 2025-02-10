"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Advanced Reporting",
    description:
      "Transform your data into actionable insights with our advanced reporting tools. Visualize trends, track key performance indicators, and make data-driven decisions.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Secure Data Storage",
    description:
      "Protect your valuable information with our robust security measures. Benefit from encrypted storage and secure access controls, ensuring your data is safe and reliable.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Dedicated Customer Support",
    description:
      "Experience unparalleled support from our dedicated customer service team. We're here to assist you every step of the way, ensuring a smooth and hassle-free experience.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function Feature70() {
  const [openFeature, setOpenFeature] = useState(0);
  const [prevFeature, setPrevFeature] = useState(0);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (openFeature !== prevFeature) {
      if (imageRefs.current[prevFeature] && imageRefs.current[openFeature]) {
        imageRefs.current[prevFeature].style.transform = "translateY(-100%)";
        imageRefs.current[openFeature].style.transform = "translateY(0)";
      }
      setPrevFeature(openFeature);
    }
  }, [openFeature, prevFeature]);

  return (
    <section className="bg-background py-16 text-foreground md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Card className="order-2 overflow-hidden rounded-3xl bg-accent lg:order-1">
            <CardContent className="relative h-[600px] p-0">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    imageRefs.current[index] = el; // No return value
                  }}
                  className="absolute inset-0 transition-transform duration-500 ease-in-out"
                  style={{
                    transform:
                      index === openFeature
                        ? "translateY(0)"
                        : "translateY(100%)",
                    zIndex: index === openFeature ? 1 : 0,
                  }}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
          <div className="order-1 flex flex-col space-y-8 lg:order-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Explore Our Key Capabilities
              </h2>
              <p className="mt-4 max-w-[85%] text-lg text-muted-foreground sm:text-xl">
                Uncover a suite of powerful capabilities designed to elevate
                your workflow and enhance your overall efficiency. We&apos;ve
                created a platform that delivers.
              </p>
            </div>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={`cursor-pointer transition-colors ${
                    openFeature === index
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setOpenFeature(index)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <ChevronDown
                        className={`h-5 w-5 transition-transform duration-200 ${
                          openFeature === index ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    {openFeature === index && (
                      <div className="mt-4">
                        <p className="text-sm">{feature.description}</p>
                        <Button
                          variant="link"
                          className="group mt-4 h-auto p-0 font-semibold text-accent-foreground hover:text-accent-foreground/80"
                        >
                          Learn more
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
