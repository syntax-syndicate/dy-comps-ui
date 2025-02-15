"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Briefcase, MapPin, Clock, ChevronRight } from "lucide-react";

const jobListings = [
  {
    id: 1,
    title: "AI Research Scientist",
    category: "Research",
    location: "San Francisco, CA",
    type: "Full-time",
    description:
      "Push the boundaries of AI and machine learning in our cutting-edge research team.",
  },
  {
    id: 2,
    title: "Full Stack Developer",
    category: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build and maintain our web applications using the latest technologies.",
  },
  {
    id: 3,
    title: "Product Marketing Manager",
    category: "Marketing",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Drive product adoption through strategic marketing initiatives.",
  },
  {
    id: 4,
    title: "UX Researcher",
    category: "Design",
    location: "London, UK",
    type: "Contract",
    description:
      "Conduct user research to inform our product design decisions.",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    category: "Operations",
    location: "Berlin, Germany",
    type: "Full-time",
    description:
      "Optimize our infrastructure and deployment processes for maximum efficiency.",
  },
];

export default function Careers7() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobListings.filter(
    (job) =>
      (selectedCategory === "All" || job.category === selectedCategory) &&
      (job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())),
  );

  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Explore Opportunities
          </h2>
          <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join our team of innovators and make a difference in the world of
            technology.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex-grow">
              <Label htmlFor="search" className="sr-only">
                Search jobs
              </Label>
              <Input
                id="search"
                placeholder="Search jobs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <RadioGroup
              defaultValue="All"
              onValueChange={setSelectedCategory}
              className="flex flex-wrap gap-2"
            >
              {[
                "All",
                "Engineering",
                "Design",
                "Marketing",
                "Research",
                "Operations",
              ].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={category}
                    id={category}
                    className="peer sr-only"
                  />
                  <Label
                    htmlFor={category}
                    className="flex cursor-pointer items-center justify-center rounded-lg border bg-background px-3 py-2 text-sm font-medium hover:bg-primary/10 hover:text-primary peer-data-[state=checked]:bg-primary/20 peer-data-[state=checked]:text-primary"
                  >
                    {category}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <ScrollArea className="h-[600px] rounded-md border p-4">
            <div className="space-y-8">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="flex flex-col justify-between rounded-lg border bg-card p-6 shadow-sm transition-all duration-200 hover:border hover:border-primary sm:flex-row sm:items-center"
                >
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Briefcase className="mr-1 size-4" />
                        {job.category}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="mr-1 size-4" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-1 size-4" />
                        {job.type}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {job.description}
                    </p>
                  </div>
                  <Button size={"lg"} variant={"outline"}>
                    Apply Now
                    <ChevronRight className="ml-2 size-4" />
                  </Button>
                </div>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </section>
  );
}
