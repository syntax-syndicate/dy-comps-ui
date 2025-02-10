"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  CopyCheck,
  DollarSign,
  MessagesSquare,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    title: "Commercial Use",
    description:
      "Use all these blocks in your commercial projects without any restrictions on use.",
    icon: CopyCheck,
  },
  {
    title: "Transparent Pricing",
    description:
      "No hidden fees. Our pricing is clear and upfront. A once off payment and optional subscription for our AI tools.",
    icon: DollarSign,
  },
  {
    title: "Dedicated Support",
    description:
      "Get help when you need it with our responsive support team. Talk to a real life human, not a bot.",
    icon: MessagesSquare,
  },
];

const showcaseImages = [
  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
];

export default function Hero21() {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section className="bg-gradient-to-b from-background to-secondary/20 py-24">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <Badge variant="outline" className="mb-4">
            Platform
          </Badge>
          <h1 className="mb-6 bg-clip-text text-6xl font-bold">
            Build Your Dream Platform
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Empower your ideas with our flexible and powerful platform building
            tools.
          </p>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-background/60 backdrop-blur-sm transition-all duration-300 hover:bg-background/80"
              >
                <CardContent className="flex items-start p-6">
                  <div className="mr-4 flex size-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-primary">
                    <feature.icon />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
            <div className="flex gap-2">
              {" "}
              <Button className="w-full sm:w-auto" size="lg">
                Get Started <ArrowRight className="ml-2 size-4" />
              </Button>{" "}
              <Button
                variant={"outline"}
                className="w-full sm:w-auto"
                size="lg"
              >
                Learn More <ArrowRight className="ml-2 size-4" />
              </Button>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImage}
                src={showcaseImages[activeImage]}
                alt={`Platform showcase ${activeImage + 1}`}
                className="shadow-l absolute inset-0 h-full w-full rounded-lg object-cover"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
              {showcaseImages.map((_, index) => (
                <Button
                  key={index}
                  variant={index === activeImage ? "default" : "outline"}
                  size="sm"
                  className="size-6 rounded-full p-0"
                  onClick={() => setActiveImage(index)}
                  aria-label={`View showcase image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
