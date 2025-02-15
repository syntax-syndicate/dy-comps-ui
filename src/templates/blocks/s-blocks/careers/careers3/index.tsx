"use client";

import { Badge } from "@/components/ui/badge";
import { Globe, ArrowRight, Search, MapPin, Briefcase } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React, { useState, useMemo } from "react";

interface Job {
  title: string;
  description: string;
  location: string;
  type?: "full-time" | "part-time" | "contract";
  department?: string;
}

interface JobCategory {
  name: string;
  jobs: Job[];
}

const jobCategories: JobCategory[] = [
  {
    name: "Global Technology",
    jobs: [
      {
        title: "Cloud Infrastructure Architect",
        description:
          "Design and deploy scalable cloud solutions for our global operations.",
        location: "Remote, Global Opportunities",
        type: "full-time",
        department: "Engineering",
      },
      {
        title: "AI Research Scientist",
        description:
          "Push the boundaries of AI and machine learning in our labs.",
        location: "Zurich, Switzerland / Remote",
        type: "full-time",
        department: "Research",
      },
      {
        title: "Cybersecurity Analyst",
        description:
          "Protect our systems and data from emerging security threats.",
        location: "Tokyo, Japan / Remote",
        type: "full-time",
        department: "Security",
      },
      {
        title: "Data Engineering Specialist",
        description:
          "Build and maintain robust data pipelines for advanced analytics.",
        location: "Cape Town, South Africa / Remote",
        type: "contract",
        department: "Data",
      },
    ],
  },
  {
    name: "Creative & Communications",
    jobs: [
      {
        title: "Brand Storyteller",
        description:
          "Craft compelling narratives that resonate with our global audience.",
        location: "Amsterdam, Netherlands",
        type: "full-time",
        department: "Marketing",
      },
      {
        title: "Digital Content Strategist",
        description:
          "Develop innovative content strategies for our online platforms.",
        location: "Buenos Aires, Argentina",
        type: "part-time",
        department: "Content",
      },
    ],
  },
];

export default function Careers3() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredCategories = useMemo(() => {
    return jobCategories
      .map((category) => ({
        ...category,
        jobs: category.jobs.filter((job) => {
          const matchesSearch =
            job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
            job.department?.toLowerCase().includes(searchQuery.toLowerCase());

          const matchesType = !selectedType || job.type === selectedType;

          return matchesSearch && matchesType;
        }),
      }))
      .filter((category) => category.jobs.length > 0);
  }, [searchQuery, selectedType]);

  const jobTypeOptions = ["full-time", "part-time", "contract"];

  return (
    <section className="bg-background py-24">
      <div className="container max-w-6xl">
        <div className="mx-auto mb-12 text-center">
          <Badge className="mb-4" variant="outline">
            We&apos;re Hiring!
          </Badge>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground md:text-6xl">
            Join Our Global Team
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore exciting opportunities and help us shape the future.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search jobs by title, location, or department..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {jobTypeOptions.map((type) => (
              <Button
                key={type}
                variant={selectedType === type ? "default" : "outline"}
                size="sm"
                onClick={() =>
                  setSelectedType(selectedType === type ? null : type)
                }
                className="capitalize"
              >
                <Briefcase className="mr-2 size-4" />
                {type}
              </Button>
            ))}
          </div>
        </div>

        {/* Results Section */}
        <div className="mx-auto flex flex-col gap-12 rounded-lg">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg border shadow-sm transition-all duration-200 hover:shadow-md"
              >
                <div className="border-b bg-muted/50 px-6 py-4">
                  <Badge className="text-sm font-medium uppercase tracking-wide">
                    {category.name}
                  </Badge>
                </div>
                <div className="divide-y divide-border">
                  {category.jobs.map((job, jobIndex) => (
                    <a
                      key={jobIndex}
                      href="#"
                      className="group block px-6 py-5 transition-all duration-200 hover:bg-accent hover:text-accent-foreground"
                      onClick={(e) => e.preventDefault()}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-semibold group-hover:underline">
                              {job.title}
                            </h3>
                            {job.type && (
                              <Badge variant="outline" className="capitalize">
                                {job.type}
                              </Badge>
                            )}
                          </div>
                          <p className="mt-1 text-muted-foreground group-hover:text-accent-foreground">
                            {job.description}
                          </p>
                          <div className="mt-3 flex flex-wrap items-center gap-4 text-muted-foreground group-hover:text-accent-foreground">
                            <div className="flex items-center gap-2 text-sm">
                              <Globe className="size-4 shrink-0" />
                              <span>{job.location}</span>
                            </div>
                            {job.department && (
                              <div className="flex items-center gap-2 text-sm">
                                <MapPin className="size-4 shrink-0" />
                                <span>{job.department}</span>
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center">
                          <ArrowRight className="size-5 transform transition-transform duration-200 group-hover:translate-x-1" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center">
              <p className="text-lg text-muted-foreground">
                No jobs found matching your criteria. Try adjusting your search
                or filters.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedType(null);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
