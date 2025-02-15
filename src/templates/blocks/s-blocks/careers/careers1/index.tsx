"use client";

import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Search, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type Job = {
  id: string;
  title: string;
  location: string;
  department: string;
  description: string;
  isNew: boolean;
};

const jobs: Job[] = [
  {
    id: "1",
    title: "Sales Manager",
    location: "London",
    department: "Sales",
    description: "Lead our sales team to success.",
    isNew: true,
  },
  {
    id: "2",
    title: "Sales Development Representative",
    location: "London",
    department: "Sales",
    description: "Generate new business opportunities.",
    isNew: false,
  },
  {
    id: "3",
    title: "Senior Sales Manager",
    location: "New York",
    department: "Sales",
    description: "Develop and execute sales strategies.",
    isNew: false,
  },
  {
    id: "4",
    title: "Customer Success Associate",
    location: "London",
    department: "Customer Success",
    description: "Ensure customer satisfaction and retention.",
    isNew: true,
  },
  {
    id: "5",
    title: "Customer Success Manager",
    location: "Berlin",
    department: "Customer Success",
    description: "Manage key customer accounts.",
    isNew: false,
  },
];

export default function Careers1() {
  const [searchTerm, setSearchTerm] = useState("");
  const [expandedJob, setExpandedJob] = useState<string | null>(null);

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const groupedJobs = filteredJobs.reduce(
    (acc, job) => {
      if (!acc[job.department]) {
        acc[job.department] = [];
      }
      acc[job.department]?.push(job);
      return acc;
    },
    {} as Record<string, Job[]>,
  );

  return (
    <section className="bg-accent py-16 md:py-24 lg:py-32">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Apply Now
        </h1>
        <p className="mb-8 max-w-3xl text-xl text-muted-foreground md:mb-12 lg:mb-16">
          View our open roles and join our team.
        </p>

        <div className="relative mb-8">
          <Search className="pointer-events-none absolute left-3 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search jobs by title, location, or department"
            className="pl-10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {Object.entries(groupedJobs).length === 0 ? (
          <Card className="mt-8">
            <CardContent className="flex items-center justify-center p-6">
              <p className="text-center text-muted-foreground">
                No jobs found matching your search criteria.
              </p>
            </CardContent>
          </Card>
        ) : (
          Object.entries(groupedJobs).map(([department, departmentJobs]) => (
            <JobCategory
              key={department}
              title={department}
              jobs={departmentJobs}
              expandedJob={expandedJob}
              setExpandedJob={setExpandedJob}
            />
          ))
        )}
      </div>
    </section>
  );
}

function JobCategory({
  title,
  jobs,
  expandedJob,
  setExpandedJob,
}: {
  title: string;
  jobs: Job[];
  expandedJob: string | null;
  setExpandedJob: (id: string | null) => void;
}) {
  return (
    <div className="mt-12 md:mt-16 lg:mt-20">
      <h2 className="mb-6 text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <ul className="space-y-4">
        {jobs.map((job) => (
          <JobListItem
            key={job.id}
            job={job}
            isExpanded={expandedJob === job.id}
            onToggle={() =>
              setExpandedJob(expandedJob === job.id ? null : job.id)
            }
          />
        ))}
      </ul>
    </div>
  );
}

function JobListItem({
  job,
  isExpanded,
  onToggle,
}: {
  job: Job;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const [height, setHeight] = useState<number | undefined>(undefined);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isExpanded) {
      const contentEl = contentRef.current;
      if (contentEl) {
        setHeight(contentEl.scrollHeight);
      }
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  return (
    <li
      className={`group transition-all duration-300 ease-in-out ${job.isNew ? "animate-fadeIn" : ""}`}
    >
      <Card className={`overflow-hidden ${isExpanded ? "border-primary" : ""}`}>
        <button
          className="w-full text-left"
          onClick={onToggle}
          aria-expanded={isExpanded}
          aria-controls={`job-description-${job.id}`}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-medium">{job.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {job.location}
                </p>
              </div>
              <div className="flex items-center gap-4">
                {job.isNew && <Badge>New</Badge>}
                <ArrowRight
                  className={`size-5 transition-transform duration-300 ease-in-out ${isExpanded ? "rotate-90 text-primary" : "text-muted-foreground group-hover:translate-x-1"}`}
                />
              </div>
            </div>
          </CardContent>
        </button>
        <div
          id={`job-description-${job.id}`}
          className="overflow-hidden transition-[height] duration-300 ease-in-out"
          style={{ height: height }}
        >
          <div ref={contentRef}>
            <CardContent className="px-6 pb-6 pt-0">
              <p className="mb-4 text-sm text-muted-foreground">
                {job.description}
              </p>
              <Button className="w-full bg-primary hover:bg-primary/90 sm:w-auto">
                <Briefcase className="mr-2 size-4" />
                Apply Now
              </Button>
            </CardContent>
          </div>
        </div>
      </Card>
    </li>
  );
}
