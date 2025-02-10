"use client";

import { useState } from "react";
import { Link } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Award1() {
  const [selectedYear, setSelectedYear] = useState("all");

  const awards = [
    { id: 1, title: "Top Rated", year: "2024", color: "blue" },
    { id: 2, title: "Top Rated", year: "2023", color: "blue" },
    { id: 3, title: "Best Value Price", year: "2024", color: "green" },
    { id: 4, title: "Best Feature Set", year: "2024", color: "green" },
    { id: 5, title: "Best Relationship", year: "2024", color: "green" },
  ];

  const years = ["2023", "2024", "2025"];

  const filteredAwards =
    selectedYear === "all"
      ? awards
      : awards.filter((award) => award.year === selectedYear);

  return (
    <div className="bg-background py-16 text-foreground">
      <div className="container mx-auto">
        <div className="mb-4 flex items-center gap-2">
          <h2 className="text-2xl font-semibold">Awards to Company</h2>
          <Link className="size-4 text-muted-foreground" />
        </div>

        <p className="mb-6 text-muted-foreground">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
          nisi sed ligula venenatis laoreet. Nulla facilisi. Fusce eget dapibus
          augue, a ultrices qua Donec fringilla condimentum nulla et
          condimentum.{" "}
          <a href="#" className="text-primary hover:underline">
            More about DY-Comps Awards
          </a>
        </p>

        <div className="mb-8 flex flex-wrap gap-4">
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All awards" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All awards</SelectItem>
              <SelectItem value="rated">Top Rated</SelectItem>
              <SelectItem value="value">Best Value</SelectItem>
              <SelectItem value="feature">Best Feature</SelectItem>
              <SelectItem value="relationship">Best Relationship</SelectItem>
            </SelectContent>
          </Select>

          <div className="flex flex-wrap gap-2">
            {years.map((year) => (
              <Button
                key={year}
                onClick={() => setSelectedYear(year)}
                variant={selectedYear === year ? "secondary" : "ghost"}
                size="sm"
              >
                {year}
              </Button>
            ))}
            <Button
              onClick={() => setSelectedYear("all")}
              variant={selectedYear === "all" ? "secondary" : "ghost"}
              size="sm"
            >
              All Years
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {filteredAwards.map((award) => (
            <div
              key={award.id}
              className={`relative flex aspect-square flex-col items-center justify-center p-4 ${
                award.color === "blue" ? "text-blue-600" : "text-emerald-600"
              }`}
            >
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
                  <path
                    d="M50 0L93.3 25V75L50 100L6.7 75V25L50 0Z"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <div className="relative text-center">
                <div className="mb-1 font-medium">{award.title}</div>
                <div className="text-sm">{award.year}</div>
                <div className="mt-2 flex justify-center gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="size-4 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
