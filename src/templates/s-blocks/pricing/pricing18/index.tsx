"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChevronLeft,
  ChevronRight,
  Layout,
  Users,
  Globe,
  Zap,
  Palette,
  ShieldCheck,
  Headphones,
  Smartphone,
  Cloud,
  Check,
} from "lucide-react";

const templates = [
  {
    name: "Basic Blog",
    price: 50,
    icon: Layout,
    features: ["Responsive design", "SEO optimized", "5 page templates"],
  },
  {
    name: "E-commerce Starter",
    price: 65,
    icon: ShieldCheck,
    features: ["Product catalog", "Shopping cart", "Secure checkout"],
  },
  {
    name: "Portfolio Pro",
    price: 55,
    icon: Palette,
    features: ["Gallery layout", "Project showcase", "Contact form"],
  },
  {
    name: "Corporate Suite",
    price: 70,
    icon: Users,
    features: ["Multi-page layout", "Team section", "Testimonials"],
  },
  {
    name: "Landing Page Plus",
    price: 60,
    icon: Zap,
    features: [
      "High conversion design",
      "A/B testing ready",
      "Call-to-action optimized",
    ],
  },
  {
    name: "Restaurant Delight",
    price: 55,
    icon: Globe,
    features: ["Menu display", "Reservation system", "Location map"],
  },
  {
    name: "Fitness Tracker",
    price: 75,
    icon: Smartphone,
    features: ["Workout planner", "Progress charts", "Nutrition log"],
  },
  {
    name: "Educational Platform",
    price: 70,
    icon: Cloud,
    features: ["Course management", "Student dashboard", "Quiz system"],
  },
  {
    name: "Travel Blog",
    price: 60,
    icon: Globe,
    features: ["Interactive maps", "Photo galleries", "Trip planner"],
  },
  {
    name: "Tech Support Portal",
    price: 65,
    icon: Headphones,
    features: ["Ticket system", "Knowledge base", "Live chat integration"],
  },
];

export default function WebsiteTemplateSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scrollToTemplate = (index: number) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / (isMobile ? 1 : 3);
      sliderRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  const nextTemplate = () => {
    setCurrentIndex((prevIndex) => {
      const increment = isMobile ? 1 : 3;
      const newIndex =
        (prevIndex + increment) %
        (isMobile ? templates.length : Math.ceil(templates.length / 3) * 3);
      scrollToTemplate(newIndex);
      return newIndex;
    });
  };

  const prevTemplate = () => {
    setCurrentIndex((prevIndex) => {
      const decrement = isMobile ? 1 : 3;
      const totalSlides = isMobile
        ? templates.length
        : Math.ceil(templates.length / 3) * 3;
      const newIndex = (prevIndex - decrement + totalSlides) % totalSlides;
      scrollToTemplate(newIndex);
      return newIndex;
    });
  };

  useEffect(() => {
    scrollToTemplate(currentIndex);
  }, [currentIndex, isMobile]);

  return (
    <section className="bg-background px-4 py-32 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-extrabold text-foreground sm:text-3xl md:text-4xl">
            Choose Your Perfect Website Template
          </h2>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Slide through our collection of 10 professionally designed templates
          </p>
        </div>
        <div className="relative">
          <div
            ref={sliderRef}
            className="scrollbar-hide flex snap-x snap-mandatory overflow-x-hidden"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {templates.map((template) => {
              const Icon = template.icon;
              return (
                <div
                  key={template.name}
                  className="w-full flex-shrink-0 snap-center px-2 md:w-1/3"
                >
                  <Card className="mx-auto flex h-full flex-col bg-card">
                    <CardHeader>
                      <div className="mb-2 flex items-center justify-between">
                        <Icon className="size-6 text-primary sm:h-8 sm:w-8" />
                        <Badge variant="secondary">${template.price}</Badge>
                      </div>
                      <CardTitle className="text-xl font-bold text-card-foreground sm:text-2xl">
                        {template.name}
                      </CardTitle>
                      <CardDescription className="text-xs text-muted-foreground sm:text-sm">
                        Perfect for {template.name.toLowerCase()} websites
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <ul className="space-y-2">
                        {template.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-card-foreground"
                          >
                            <Check className="mr-2 size-4 flex-shrink-0 text-primary sm:h-5 sm:w-5" />
                            <span className="text-sm sm:text-base">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button className="w-full">Choose Template</Button>
                    </CardFooter>
                  </Card>
                </div>
              );
            })}
          </div>
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-2 top-1/2 -translate-y-1/2 transform bg-background sm:-left-4"
            onClick={prevTemplate}
          >
            <ChevronLeft className="size-4" />
            <span className="sr-only">Previous templates</span>
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-2 top-1/2 -translate-y-1/2 transform bg-background sm:-right-4"
            onClick={nextTemplate}
          >
            <ChevronRight className="size-4" />
            <span className="sr-only">Next templates</span>
          </Button>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-muted-foreground">
            Showing template{isMobile ? "" : "s"}{" "}
            {isMobile
              ? currentIndex + 1
              : Math.min(currentIndex + 1, templates.length)}
            {!isMobile && ` - ${Math.min(currentIndex + 3, templates.length)}`}{" "}
            of {templates.length}
          </p>
        </div>
      </div>
    </section>
  );
}
