"use client";

import React, { useRef, useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Globe,
  Shield,
  BarChart,
  Zap,
  Users,
  Rocket,
  Target,
} from "lucide-react";

const hideScrollbarClass = "scrollbar-none";

export default function EnhancedTimeline() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const milestones = [
    {
      date: "MAY 2023",
      title: "TechNova Named to CNBC Innovator 50 list for Second Year",
      icon: Award,
    },
    {
      date: "OCT 2023",
      title: "TechNova Expands Presence to Asia and European Markets",
      icon: Globe,
    },
    {
      date: "FEB 2023",
      title: "TechNova Incident Response Platform Launches",
      icon: Shield,
    },
    {
      date: "AUG 2023",
      title: "IDC Names TechNova a Leader in 2023 AI/ML MarketScape",
      icon: BarChart,
    },
    {
      date: "NOV 2023",
      title: "TechNova Achieves Carbon Neutrality Across Operations",
      icon: Zap,
    },
    {
      date: "JAN 2024",
      title: "TechNova Surpasses 1 Million Active Users Milestone",
      icon: Users,
    },
    {
      date: "MAR 2024",
      title: "Launch of TechNova's Revolutionary Quantum-Safe Encryption",
      icon: Rocket,
    },
    {
      date: "JUN 2024",
      title: "TechNova Sets Industry Benchmark with 99.999% Uptime",
      icon: Target,
    },
  ];

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1); // -1 to account for rounding errors
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      checkScroll();
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = isMobile
        ? scrollContainerRef.current.clientWidth
        : scrollContainerRef.current.clientWidth / 3;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gradient-to-b from-background to-muted/40 py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-6xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Journey
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground">
              Since our founding in 2012, TechNova has risen to the rank of
              market leader in security operations, serving thousands of
              enterprises and customers, as well as a trophy case of awards.
            </p>
          </div>

          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="absolute left-0 right-0 top-1/2 h-0.5 -translate-y-1/2 bg-border" />

            {/* Timeline content */}
            <div
              ref={scrollContainerRef}
              className={`relative flex overflow-x-hidden pb-8 ${hideScrollbarClass}`}
              onScroll={checkScroll}
            >
              {milestones.map((milestone, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4 md:w-1/3">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="z-10 flex size-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                      <milestone.icon className="size-6 text-primary" />
                    </div>
                    <span className="font-mono text-sm font-medium text-muted-foreground">
                      {milestone.date}
                    </span>
                    <Card className="w-full">
                      <CardContent className="p-4">
                        <h3 className="mb-2 text-lg font-semibold">
                          {milestone.title}
                        </h3>
                        <Button
                          variant="link"
                          className="mt-2 h-auto p-0 text-primary"
                        >
                          Read more
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <div className="mt-8 flex justify-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="size-10 rounded-full"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
              >
                <ArrowLeft className="size-4" />
                <span className="sr-only">Previous</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="size-10 rounded-full"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
              >
                <ArrowRight className="size-4" />
                <span className="sr-only">Next</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
