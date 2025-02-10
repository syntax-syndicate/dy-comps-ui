"use client";

import { useRef, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Award {
  id: number;
  title: string;
  year: string;
  color: "blue" | "green";
}

interface AwardCardProps {
  award: Award;
}

const awards: Award[] = [
  { id: 1, title: "Top Rated", year: "2023", color: "blue" },
  { id: 2, title: "Top Rated", year: "2025", color: "blue" },
  { id: 3, title: "Best Value Price", year: "2025", color: "green" },
  { id: 4, title: "Best Feature Set", year: "2025", color: "green" },
  { id: 5, title: "Best Relationship", year: "2025", color: "green" },
  { id: 6, title: "Innovation Award", year: "2024", color: "blue" },
  { id: 7, title: "Customer Choice", year: "2024", color: "green" },
  { id: 8, title: "Best Support", year: "2020", color: "green" },
  { id: 9, title: "Rising Star", year: "2020", color: "blue" },
  { id: 10, title: "Best ROI", year: "2019", color: "green" },
];

const AwardCard = ({ award }: AwardCardProps) => (
  <Card className="w-[250px] flex-shrink-0 bg-card transition-all hover:scale-[1.02] hover:shadow-lg">
    <CardHeader>
      <CardTitle className="text-center text-foreground">
        {award.title}
      </CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col items-center">
      <p className="mb-4 text-foreground">{award.year}</p>
      <div className="relative aspect-square w-full max-w-[160px]">
        <div
          className={`absolute inset-0 ${
            award.color === "blue" ? "text-blue-600" : "text-emerald-600"
          }`}
        >
          <svg
            viewBox="0 0 100 100"
            className="h-full w-full fill-current opacity-10"
          >
            <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" />
          </svg>
          <svg
            viewBox="0 0 100 100"
            className="absolute inset-0 h-full w-full fill-none stroke-current"
          >
            <path d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z" strokeWidth="2" />
          </svg>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="mb-1 text-xs">TrustRadius</div>
            <div className="mb-1 text-sm font-bold">{award.title}</div>
            <div className="text-xs">{award.year}</div>
            <div className="mt-2 flex justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  className="size-3 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default function Award4() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);

  const updateScrollArrows = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = clientWidth * 0.8;
      const scrollTo =
        direction === "left"
          ? scrollLeft - scrollAmount
          : scrollLeft + scrollAmount;

      sliderRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });
    }
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.touches[0]?.clientX ?? 0);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const touchEnd = e.changedTouches[0]?.clientX ?? 0;
    const diff = touchStart - touchEnd;
    if (Math.abs(diff) > 50) {
      scroll(diff > 0 ? "right" : "left");
    }
  };

  useEffect(() => {
    const slider = sliderRef.current;
    const handleScroll = () => {
      if (slider) {
        const itemWidth = slider.firstElementChild?.clientWidth || 0;
        const newIndex = Math.round(slider.scrollLeft / itemWidth);
        setCurrentIndex(newIndex);
      }
      updateScrollArrows();
    };

    slider?.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", updateScrollArrows);

    return () => {
      slider?.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", updateScrollArrows);
    };
  }, []);

  return (
    <div className="container w-full bg-background py-16">
      <div className="mx-auto mb-8 flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-foreground">
            Our Achievements
          </h1>
          <p className="mt-2 text-muted-foreground">
            Recognized excellence through the years
          </p>
        </div>
        <Button variant="outline">View All Awards</Button>
      </div>

      <div className="relative mt-8">
        <div
          ref={sliderRef}
          className="scrollbar-hide flex gap-4 overflow-x-hidden overscroll-x-contain pb-4"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {awards.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
        </div>

        <div className="absolute -top-14 right-0 hidden gap-2 md:flex">
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "transition-opacity",
              !showLeftArrow && "pointer-events-none opacity-0",
            )}
            onClick={() => scroll("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft className="size-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className={cn(
              "transition-opacity",
              !showRightArrow && "pointer-events-none opacity-0",
            )}
            onClick={() => scroll("right")}
            aria-label="Scroll right"
          >
            <ChevronRight className="size-4" />
          </Button>
        </div>
      </div>

      <div className="mt-4 flex justify-center gap-1">
        {awards.map((_, index) => (
          <div
            key={index}
            className={cn(
              "h-1 w-4 rounded-full transition-all",
              index === currentIndex
                ? "w-6 bg-primary"
                : "bg-muted-foreground/20",
            )}
          />
        ))}
      </div>
    </div>
  );
}
