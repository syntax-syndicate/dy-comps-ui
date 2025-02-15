"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Product Manager",
    department: "Product",
    location: "New York, NY",
    type: "Full-time",
  },
  {
    id: 3,
    title: "UX Designer",
    department: "Design",
    location: "San Francisco, CA",
    type: "Contract",
  },
  {
    id: 4,
    title: "Data Scientist",
    department: "Data",
    location: "Boston, MA",
    type: "Full-time",
  },
  {
    id: 5,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
  },
];

const values = [
  {
    title: "Innovation",
    description: "Pushing boundaries and embracing new ideas",
    icon: "🚀",
  },
  {
    title: "Collaboration",
    description: "Fostering teamwork and open communication",
    icon: "🤝",
  },
  {
    title: "Integrity",
    description: "Upholding the highest ethical standards",
    icon: "🛡️",
  },
  {
    title: "Customer Focus",
    description: "Exceeding customer expectations",
    icon: "🎯",
  },
];

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Senior Developer",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    quote: "Incredible journey of growth and innovation.",
  },
  {
    name: "Samantha Lee",
    role: "Product Manager",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    quote: "Empowered to make a real impact.",
  },
  {
    name: "Michael Chen",
    role: "UX Designer",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    quote: "Unparalleled inclusive culture and community.",
  },
];

export default function Careers9() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="container mx-auto space-y-8 px-4 py-32">
      <header className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold">Join Our Innovative Team</h1>
        <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
          Be part of a company that values creativity, collaboration, and
          continuous growth.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        <section className="space-y-6 border p-6">
          <div>
            <h2 className="mb-4 text-2xl font-bold">Current Openings</h2>
            <p className="mb-6 text-muted-foreground">
              Find your next career opportunity with us
            </p>
            <div className="mb-4">
              <Label htmlFor="search">Search Jobs</Label>
              <Input
                id="search"
                placeholder="Search by title, department, or location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <ScrollArea className="h-[400px] pr-4">
              {filteredJobs.map((job) => (
                <Card key={job.id} className="mb-4">
                  <CardHeader>
                    <CardTitle className="text-lg">{job.title}</CardTitle>
                    <CardDescription>{job.department}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">{job.location}</Badge>
                      <Badge>{job.type}</Badge>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant={"outline"} className="w-full">
                      Apply Now
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </ScrollArea>
          </div>
        </section>

        <section className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Our Core Values</CardTitle>
              <CardDescription>
                The principles that guide our work and culture
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-2">
                    <span className="text-2xl">{value.icon}</span>
                    <div>
                      <h3 className="font-semibold">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Employee Testimonials</CardTitle>
              <CardDescription>Hear from our team members</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <Avatar>
                      <AvatarImage
                        src={testimonial.avatar}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <p className="mt-1 text-sm italic">{testimonial.quote}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>

      <Separator />

      <footer className="my-auto text-center">
        <h2 className="mb-4 text-2xl font-bold">
          Ready to Take the Next Step?
        </h2>
        <Button size="lg">View All Openings</Button>
      </footer>
    </div>
  );
}
