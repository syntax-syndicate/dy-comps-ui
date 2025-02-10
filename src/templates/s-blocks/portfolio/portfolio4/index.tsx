"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import Image from "next/image"; // Import next/image

interface Technology {
  name: string;
  logo: string;
}

interface CaseStudy {
  companyLogo: string;
  title: string;
  description: string;
  livePreviewUrl: string;
  technologies: Technology[];
}

interface CarouselItem {
  caseStudies: CaseStudy[];
}

const carouselItems: CarouselItem[] = [
  {
    caseStudies: [
      {
        companyLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        title: "Digital Community Platform",
        description:
          "We crafted a digital hub that fosters connections, allowing users to engage with like-minded individuals and vibrant communities.",
        livePreviewUrl: "#",
        technologies: [
          {
            name: "SERPUI Framework",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "Tailwind CSS",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "HTML5",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "CSS3",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
        ],
      },
      {
        companyLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        title: "Unified Management Suite",
        description:
          "A cohesive management system designed to streamline operations, enhancing efficiency, and optimizing resource allocation.",
        livePreviewUrl: "#",
        technologies: [
          {
            name: "TypeScript",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "Java",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "Tailwind CSS",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "React.js",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "HTML5",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "AWS Cloud Services",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
        ],
      },
      {
        companyLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        title: "Visual Identity Creation",
        description:
          "We conceptualized and brought to life a distinctive visual identity, capturing the essence and values of the brand.",
        livePreviewUrl: "#",
        technologies: [
          {
            name: "Figma",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "Adobe Illustrator",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
        ],
      },
    ],
  },
  {
    caseStudies: [
      {
        companyLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        title: "E-Commerce Experience",
        description:
          "An engaging e-commerce platform built to provide a seamless shopping journey for customers and a robust management system for vendors.",
        livePreviewUrl: "#",
        technologies: [
          {
            name: "Next.js",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "Stripe",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "MongoDB",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "Vercel",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
        ],
      },
      {
        companyLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        title: "Cross-Platform Mobile Solution",
        description:
          "A versatile cross-platform mobile app, providing users with real-time updates, personalized experiences, and effortless access to content.",
        livePreviewUrl: "#",
        technologies: [
          {
            name: "React Native",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "Firebase",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "Redux",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "Expo",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
        ],
      },
      {
        companyLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        title: "Data-Driven Analytics Engine",
        description:
          "An innovative AI-powered analytics solution, unlocking deeper insights and enabling businesses to make more strategic, informed choices.",
        livePreviewUrl: "#",
        technologies: [
          {
            name: "Python",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "TensorFlow",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "Docker",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "Kubernetes",
            logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
        ],
      },
    ],
  },
];

function CaseStudyCard({ caseStudy }: { caseStudy: CaseStudy }) {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader>
        <Image
          src={
            caseStudy.companyLogo ||
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
          }
          alt={`${caseStudy.title} logo`}
          className="h-12 w-auto object-contain"
          width={120}
          height={48}
        />
      </CardHeader>
      <CardContent className="flex-grow space-y-4">
        <CardTitle>{caseStudy.title}</CardTitle>
        <a
          href={caseStudy.livePreviewUrl}
          className="inline-flex items-center text-lg font-medium text-primary hover:underline"
        >
          Live preview
          <ArrowUpRight className="ml-2.5 h-5 w-5" />
        </a>
        <p className="text-muted-foreground">{caseStudy.description}</p>
        <div className="flex flex-wrap items-center gap-2">
          <TooltipProvider>
            {caseStudy.technologies.map((tech, techIndex) => (
              <Tooltip key={techIndex}>
                <TooltipTrigger asChild>
                  <div className="rounded-lg p-1 hover:bg-accent">
                    <Image
                      className="h-8 w-auto object-contain"
                      src={
                        tech.logo ||
                        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                      }
                      alt={tech.name}
                      width={32}
                      height={32}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="outline">View case study</Button>
      </CardFooter>
    </Card>
  );
}

export default function TrustedWorldwideSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + carouselItems.length) % carouselItems.length,
    );
  };

  return (
    <section className="bg-background py-8 antialiased sm:py-16 lg:py-24">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-6">
        <div className="mb-8 max-w-2xl lg:mb-16">
          <p className="text-lg font-medium text-primary">Trusted Worldwide</p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            Endorsed by Over 100 Companies and 10,000+ Independent Professionals
          </h2>
          <p className="mt-4 text-xl text-muted-foreground">
            Our unwavering commitment to security and compliance is at the core
            of everything we do. We continuously strive to safeguard you and
            your customers.
          </p>
          <div className="mt-6 flex items-center gap-12">
            <Button variant="link" className="p-0">
              Explore all projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="link" className="p-0">
              See what our clients say
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {carouselItems.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {item.caseStudies.map((caseStudy, caseIndex) => (
                      <CaseStudyCard key={caseIndex} caseStudy={caseStudy} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-8 flex justify-center">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="mr-4"
              aria-label="Previous slide"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
