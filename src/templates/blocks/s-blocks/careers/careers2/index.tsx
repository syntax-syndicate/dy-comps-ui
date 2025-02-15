"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Briefcase,
  Globe,
  Compass,
  ChevronRight,
  Code,
  Palette,
  Users,
  MessageSquare,
  Database,
  FileText,
  Search,
} from "lucide-react";
import { useState } from "react";
import { Input } from "@/components/ui/input";

export default function CareerOpportunities() {
  const [locationFilter, setLocationFilter] = useState("all");
  const [commitmentFilter, setCommitmentFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const positions = [
    {
      title: "Lead Frontend Developer",
      commitment: "Full-time",
      location: "San Francisco, CA",
      isFlexible: true,
      icon: Code,
    },
    {
      title: "UX/UI Designer",
      commitment: "Contract",
      location: "Berlin, Germany",
      isFlexible: true,
      icon: Palette,
    },
    {
      title: "Backend Engineer",
      commitment: "Full-time",
      location: "Remote",
      isFlexible: true,
      icon: Database,
    },
    {
      title: "Community Manager",
      commitment: "Part-time",
      location: "New York, NY",
      isFlexible: false,
      icon: Users,
    },
    {
      title: "Technical Writer",
      commitment: "Contract",
      location: "Remote",
      isFlexible: true,
      icon: FileText,
    },
    {
      title: "Customer Support Specialist",
      commitment: "Full-time",
      location: "London, UK",
      isFlexible: false,
      icon: MessageSquare,
    },
  ];

  const filteredPositions = positions.filter((position) => {
    const matchesLocation =
      locationFilter === "all" || position.location === locationFilter;
    const matchesCommitment =
      commitmentFilter === "all" || position.commitment === commitmentFilter;
    const matchesSearch = position.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesLocation && matchesCommitment && matchesSearch;
  });

  const uniqueLocations = [...new Set(positions.map((p) => p.location))];
  const uniqueCommitments = [...new Set(positions.map((p) => p.commitment))];

  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="border-x">
          <div className="relative flex flex-col gap-5 px-5 py-12 sm:items-center md:pb-24">
            <div className="absolute inset-0 -z-10 size-full bg-[linear-gradient(to_right,hsl(var(--muted))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted))_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_80%_at_50%_50%,#000_40%,transparent_100%)]"></div>
            <Badge className="z-0 w-fit">Career Opportunities</Badge>
            <h1 className="text-center text-3xl font-extrabold md:text-5xl">
              Join Our Team at DY-Comps.blocks
            </h1>
            <p className="text-muted-foreground">
              Can&apos;t find your dream role?
              <a
                href="#"
                className="ml-1 font-medium underline underline-offset-4 hover:text-foreground"
              >
                Let&apos;s chat anyway.
              </a>
            </p>
          </div>

          {/* Filters Section */}
          <div className="border border-b bg-muted/30 px-6 py-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="relative flex items-center">
                <Search className="absolute left-3 size-4 text-muted-foreground" />
                <Input
                  placeholder="Search positions..."
                  className="pl-9"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                <Select
                  value={locationFilter}
                  onValueChange={setLocationFilter}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All locations</SelectItem>
                    {uniqueLocations.map((location) => (
                      <SelectItem key={location} value={location}>
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  value={commitmentFilter}
                  onValueChange={setCommitmentFilter}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by commitment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All types</SelectItem>
                    {uniqueCommitments.map((commitment) => (
                      <SelectItem key={commitment} value={commitment}>
                        {commitment}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results Section */}
          <div className="divide-y divide-dotted">
            {filteredPositions.length === 0 ? (
              <div className="flex flex-col items-center gap-4 py-16 text-center">
                <p className="text-lg font-medium">No positions found</p>
                <p className="text-sm text-muted-foreground">
                  Try adjusting your filters or search terms
                </p>
              </div>
            ) : (
              filteredPositions.map((position, index) => (
                <PositionListing key={index} {...position} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function PositionListing({
  title,
  commitment,
  location,
  isFlexible,
  icon: Icon,
}: {
  title: string;
  commitment: string;
  location: string;
  isFlexible: boolean;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="grid items-center gap-6 px-6 py-12 transition-colors hover:bg-muted/20 lg:grid-cols-4">
      <div className="flex items-center gap-3">
        <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10">
          <Icon className="size-5 text-primary" />
        </div>
        <h2 className="text-xl font-semibold">{title}</h2>
      </div>
      <div className="col-span-2 flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:gap-8 lg:justify-center">
        <div className="flex items-center gap-2">
          <Briefcase className="h-auto w-4" />
          {commitment}
        </div>
        <div className="flex items-center gap-2">
          <Globe className="h-auto w-4" />
          {location}
        </div>
        {isFlexible && (
          <div className="flex items-center gap-2">
            <Compass className="h-auto w-4" />
            Flexible
          </div>
        )}
      </div>
      <Button className="group w-fit gap-1 transition-all hover:gap-2 lg:ml-auto">
        Explore Role
        <ChevronRight className="h-auto w-4 transition-all group-hover:translate-x-1" />
      </Button>
    </div>
  );
}
