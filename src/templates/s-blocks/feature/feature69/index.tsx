"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Intuitive Interface",
    description:
      "Navigate our platform with ease. Our intuitive interface ensures a seamless experience, allowing you to focus on your goals without getting lost in complexities.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Powerful Analytics",
    description:
      "Gain actionable insights with our robust analytics tools. Track key metrics, understand user behavior, and make informed decisions to optimize your strategies.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Customizable Workflow",
    description:
      "Tailor our platform to fit your unique needs. Our customizable workflow options let you adapt the tools and processes to match your specific requirements.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function Feature69() {
  const [openFeature, setOpenFeature] = useState(0);

  return (
    <section className="bg-background py-16 text-foreground md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Card className="overflow-hidden rounded-3xl bg-accent lg:order-last">
            <CardContent className="p-0">
              <div className="relative aspect-[5/6]">
                <Image
                  src={features[openFeature]?.image ?? ""}
                  alt={features[openFeature]?.title ?? ""}
                  fill
                  className="object-cover object-center"
                />
              </div>
            </CardContent>
          </Card>
          <div className="flex flex-col space-y-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Explore Our Core Features
              </h2>
              <p className="mt-4 max-w-[85%] text-lg text-muted-foreground sm:text-xl">
                Dive into our innovative feature set designed to enhance your
                experience and streamline your workflow. Discover the power of
                seamless integration and intuitive design, built to empower your
                success.
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
