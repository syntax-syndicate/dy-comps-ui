"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-md overflow-hidden">
        <CardHeader className="pb-2">
          <Badge variant="secondary" className="w-max">
            Featured
          </Badge>
          <h2 className="text-2xl font-bold">Master Modern Web Development</h2>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-muted-foreground">
            Dive into the latest web technologies and frameworks. Learn to build
            responsive, accessible, and high-performance web applications.
          </p>
          <ul className="mb-6 space-y-2">
            {[
              "React & Next.js",
              "TypeScript",
              "Tailwind CSS",
              "API Integration",
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <ArrowRight className="mr-2 size-4" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </CardContent>
        <CardFooter className="flex items-center justify-between bg-muted p-6">
          <div>
            <p className="font-semibold">Course starts in:</p>
            <p className="text-2xl font-bold">7 days</p>
          </div>
          <Button asChild>
            <Link href="#">
              Enroll Now
              <ArrowRight className="ml-2 size-4" />
              <span className="sr-only">
                Enroll in Master Modern Web Development course
              </span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
