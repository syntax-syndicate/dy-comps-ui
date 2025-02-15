"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

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
    description:
      "We constantly push boundaries and embrace new ideas to stay ahead in our industry.",
    icon: "🚀",
  },
  {
    title: "Collaboration",
    description:
      "We believe in the power of teamwork and foster an environment of open communication.",
    icon: "🤝",
  },
  {
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in all our actions and decisions.",
    icon: "🛡️",
  },
  {
    title: "Customer Focus",
    description:
      "We put our customers at the heart of everything we do, striving to exceed their expectations.",
    icon: "🎯",
  },
];

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Senior Developer",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    quote:
      "Working here has been an incredible journey of growth and innovation. The collaborative environment and cutting-edge projects keep me excited every day.",
  },
  {
    name: "Samantha Lee",
    role: "Product Manager",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    quote:
      "I've never felt more empowered in my career. The leadership truly values our input and provides us with the resources to make a real impact.",
  },
  {
    name: "Michael Chen",
    role: "UX Designer",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    quote:
      "The inclusive culture here is unparalleled. I feel supported not just in my work, but in my personal growth as well. It's more than just a job - it's a community.",
  },
];

function JobListings({ searchTerm }: { searchTerm: string }) {
  const filteredJobs = jobs.filter(
    (job) =>
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {filteredJobs.map((job) => (
        <Card key={job.id}>
          <CardHeader>
            <CardTitle>{job.title}</CardTitle>
            <CardDescription>{job.department}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between">
              <Badge variant="secondary">{job.location}</Badge>
              <Badge>{job.type}</Badge>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" variant={"outline"}>
              Apply Now
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

function CompanyValues() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {values.map((value, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="flex items-center">
              <span className="mr-2 text-2xl">{value.icon}</span>
              {value.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{value.description}</CardDescription>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

function EmployeeTestimonials() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <Card key={index}>
          <CardHeader>
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                <AvatarFallback>
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                <CardDescription>{testimonial.role}</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <blockquote className="italic text-muted-foreground">
              {testimonial.quote}
            </blockquote>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default function Careers8() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container mx-auto py-8">
      <h1 className="mb-8 text-4xl font-bold">Join Our Team</h1>

      <Tabs defaultValue="openings" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="openings">Job Openings</TabsTrigger>
          <TabsTrigger value="values">Our Values</TabsTrigger>
          <TabsTrigger value="testimonials">Employee Stories</TabsTrigger>
        </TabsList>

        <TabsContent value="openings" className="mt-6">
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
            <JobListings searchTerm={searchTerm} />
          </div>
        </TabsContent>

        <TabsContent value="values" className="mt-6">
          <CompanyValues />
        </TabsContent>

        <TabsContent value="testimonials" className="mt-6">
          <EmployeeTestimonials />
        </TabsContent>
      </Tabs>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Why Join Us?</CardTitle>
          <CardDescription>
            Discover the benefits of being part of our team
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="benefits">
              <AccordionTrigger>Comprehensive Benefits</AccordionTrigger>
              <AccordionContent>
                We offer competitive salaries, health insurance, retirement
                plans, and generous paid time off to ensure our employees&apos;
                well-being.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="growth">
              <AccordionTrigger>Career Growth</AccordionTrigger>
              <AccordionContent>
                We invest in our employees&apos; professional development
                through training programs, mentorship opportunities, and clear
                career progression paths.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="culture">
              <AccordionTrigger>Inclusive Culture</AccordionTrigger>
              <AccordionContent>
                We foster a diverse and inclusive workplace where every voice is
                heard and valued, promoting innovation and collaboration.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant={"outline"}>
            Learn More About Our Culture
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
