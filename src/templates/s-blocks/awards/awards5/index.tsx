"use client";

import { useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the Award interface
interface Award {
  id: number;
  title: string;
  year: string;
  color: "blue" | "green";
}

// Define the props for the AwardCard component
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
  <Card className="min-w-[200px] flex-shrink-0 bg-card">
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

export default function Award5() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <div className="container w-full bg-background py-16">
      <div className="mx-auto mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-foreground">Our Achievements</h1>
        <Button variant="outline">Learn More</Button>
      </div>
      <div className="relative mt-8">
        <div
          ref={sliderRef}
          className="scrollbar-hide flex gap-4 overflow-x-auto scroll-smooth pb-4"
        >
          {awards.map((award) => (
            <AwardCard key={award.id} award={award} />
          ))}
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute -left-4 top-1/2 -translate-y-1/2 transform"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="size-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute -right-4 top-1/2 -translate-y-1/2 transform"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
