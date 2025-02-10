import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RocketIcon, MapPinIcon, ClockIcon } from "lucide-react";

const jobListings = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "We're looking for an experienced frontend developer to join our team and help build amazing user experiences.",
    salary: "$120,000 - $140,000",
  },
  {
    title: "UX Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Join our design team to create intuitive and beautiful interfaces for our products.",
    salary: "$100,000 - $120,000",
  },
  {
    title: "DevOps Engineer",
    department: "Operations",
    location: "San Francisco, CA",
    type: "Contract",
    description:
      "Help us streamline our deployment processes and maintain our cloud infrastructure.",
    salary: "$80 - $100/hour",
  },
];

export default function CareersSection() {
  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Join Our Team
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We&apos;re always looking for talented individuals to help us
              build the future. Check out our open positions below.
            </p>
          </div>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobListings.map((job, index) => (
            <Card
              key={index}
              className="flex flex-col transition-all hover:shadow-lg"
            >
              <CardHeader className="flex-1">
                <CardTitle className="text-2xl">{job.title}</CardTitle>
                <CardDescription className="text-primary">
                  {job.department}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-sm text-muted-foreground">
                  {job.description}
                </p>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPinIcon className="size-4" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <ClockIcon className="size-4" />
                    <span>{job.type}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <RocketIcon className="size-4" />
                    <span>{job.salary}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant="default">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Don&apos;t see a role that fits?{" "}
            <a
              href="#"
              className="text-primary hover:underline"
              aria-label="Contact us for other opportunities"
            >
              Contact us
            </a>{" "}
            to discuss other opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
