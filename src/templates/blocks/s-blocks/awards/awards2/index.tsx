"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const awards = [
  { id: 1, title: "Top Rated", year: "2023", color: "blue" },
  { id: 2, title: "Top Rated", year: "2025", color: "blue" },
  { id: 3, title: "Best Value Price", year: "2025", color: "green" },
  { id: 4, title: "Best Feature Set", year: "2025", color: "green" },
  { id: 5, title: "Best Relationship", year: "2025", color: "green" },
];

const years = ["all", "2025", "2023"];
const awardTypes = ["all", "rated", "value", "feature", "relationship"];

export default function Award2() {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedType, setSelectedType] = useState("all");

  const filteredAwards = awards.filter((award) => {
    const yearMatch = selectedYear === "all" || award.year === selectedYear;
    const typeMatch =
      selectedType === "all" ||
      (selectedType === "rated" && award.title === "Top Rated") ||
      (selectedType === "value" && award.title === "Best Value Price") ||
      (selectedType === "feature" && award.title === "Best Feature Set") ||
      (selectedType === "relationship" && award.title === "Best Relationship");
    return yearMatch && typeMatch;
  });

  return (
    <div className="container w-full bg-background py-16">
      <div className="mx-auto mb-8 flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-foreground">
            Our Achievements
          </h1>
          <p className="text-muted-foreground">
            Recognized excellence in our industry
          </p>
        </div>
        <Button variant="outline">Learn More</Button>
      </div>

      {/* Filters */}
      <div className="mx-auto mb-8 flex flex-wrap items-center gap-4">
        <Select value={selectedType} onValueChange={setSelectedType}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Awards</SelectItem>
            <SelectItem value="rated">Top Rated</SelectItem>
            <SelectItem value="value">Best Value</SelectItem>
            <SelectItem value="feature">Best Feature Set</SelectItem>
            <SelectItem value="relationship">Best Relationship</SelectItem>
          </SelectContent>
        </Select>

        <div className="flex flex-wrap gap-2">
          {years.map((year) => (
            <Button
              key={year}
              onClick={() => setSelectedYear(year)}
              variant={selectedYear === year ? "secondary" : "outline"}
              size="sm"
            >
              {year === "all" ? "All Years" : year}
            </Button>
          ))}
        </div>
      </div>

      {/* Awards Grid */}
      {filteredAwards.length > 0 ? (
        <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {filteredAwards.map((award) => (
            <Card
              key={award.id}
              className="bg-card transition-all hover:shadow-lg"
            >
              <CardHeader>
                <CardTitle className="text-center text-lg text-foreground">
                  {award.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col items-center">
                <div className="relative aspect-square w-full max-w-[160px]">
                  <div
                    className={`absolute inset-0 ${
                      award.color === "blue"
                        ? "text-blue-600"
                        : "text-emerald-600"
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
                      <path
                        d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="mb-2 text-sm text-foreground">{award.year}</p>
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
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="flex h-32 items-center justify-center text-muted-foreground">
          No awards found for current filters
        </div>
      )}
    </div>
  );
}
