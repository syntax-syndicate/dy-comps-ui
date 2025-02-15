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
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const jobListings = [
  {
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "We're looking for an experienced frontend developer to join our team and help build.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Add your image paths here
  },
  {
    title: "UX Designer",
    department: "Design",
    location: "New York, NY",
    type: "Full-time",
    description:
      "Join our design team to create intuitive and beautiful interfaces for our products.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "DevOps Engineer",
    department: "Operations",
    location: "San Francisco, CA",
    type: "Contract",
    description:
      "Help us streamline our deployment processes and maintain our cloud infrastructure.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

const ceoQuote =
  "“Our team is our greatest asset. We're looking for passionate individuals who want to make a difference.” - [CEO's Name]";

export default function Careers6() {
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
            <Card key={index} className="flex flex-col">
              <div className="relative overflow-hidden rounded-t-md">
                <Image
                  src={job.image}
                  alt={job.title}
                  height={400}
                  width={400}
                  className="aspect-video h-56 w-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription className="text-primary">
                  {job.department}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {job.description}
                </p>
                <div className="mt-4 flex justify-between space-x-2">
                  <Badge variant="secondary">{job.location}</Badge>
                  <Badge>{job.type}</Badge>
                </div>
              </CardContent>
              <Separator />
              <CardFooter className="py-4">
                <Button className="my-auto w-full" variant="outline">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <blockquote className="italic text-muted-foreground">
            {ceoQuote}
          </blockquote>
        </div>
      </div>
    </section>
  );
}
