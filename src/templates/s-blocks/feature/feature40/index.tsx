"use client";

import { useState, useRef, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Zap,
  Shield,
  Smartphone,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description:
      "Experience blazing fast load times and smooth interactions across all devices.",
    details:
      "Our optimized codebase and efficient algorithms ensure that your application runs at peak performance, providing users with a seamless experience that keeps them engaged and coming back for more.",
  },
  {
    icon: Shield,
    title: "Advanced Security Measures",
    description:
      "Protect your data with state-of-the-art security protocols and encryption.",
    details:
      "We implement industry-leading security measures, including end-to-end encryption, regular security audits, and compliance with international data protection regulations to keep your information safe and secure.",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description:
      "Enjoy a consistent experience across all devices and screen sizes.",
    details:
      "Our responsive design approach ensures that your application looks great and functions flawlessly on desktops, tablets, and mobile devices, providing a seamless user experience regardless of the platform.",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description:
      "Reach users worldwide with multi-language support and localization.",
    details:
      "With built-in internationalization features, your application can easily adapt to different languages and cultural preferences, allowing you to expand your reach and connect with users around the globe.",
  },
];

export default function Feature40() {
  const [isExpanded, setIsExpanded] = useState(false);
  const detailsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    detailsRefs.current = detailsRefs.current.slice(0, features.length);
  }, []);

  const toggleFeatures = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Powerful Features for Modern Applications
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Discover the tools that will revolutionize your development process
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="flex flex-col transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <feature.icon className="mb-4 size-10 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-grow flex-col">
                <div
                  ref={(el) => {
                    detailsRefs.current[index] = el; // No return value
                  }}
                  className="overflow-hidden transition-all duration-500 ease-in-out"
                  style={{
                    maxHeight: isExpanded
                      ? `${detailsRefs.current[index]?.scrollHeight}px`
                      : "0px",
                    opacity: isExpanded ? 1 : 0,
                  }}
                >
                  <p className="border-t p-6 text-sm text-muted-foreground">
                    {feature.details}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12">
          <Button
            variant="outline"
            className="mx-auto flex items-center justify-center transition-all duration-300 ease-in-out"
            onClick={toggleFeatures}
          >
            {isExpanded ? (
              <>
                Show Less{" "}
                <ChevronUp className="ml-2 size-4 transition-transform duration-300 ease-in-out" />
              </>
            ) : (
              <>
                Show More{" "}
                <ChevronDown className="ml-2 size-4 transition-transform duration-300 ease-in-out" />
              </>
            )}
          </Button>
        </div>
      </div>
    </section>
  );
}
