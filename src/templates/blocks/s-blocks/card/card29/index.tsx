"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Clock } from "lucide-react";
import Link from "next/link";

const categories = ["Design", "UX", "Minimalism"];

export default function MinimalistCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-md transition-colors">
        <CardHeader className="space-y-2">
          <div className="flex flex-wrap gap-2">
            {categories.map((category, index) => (
              <Badge key={index} variant="secondary">
                {category}
              </Badge>
            ))}
          </div>
          <h2 className="text-xl font-semibold">
            The Art of Minimalist Design in Modern Web Development
          </h2>
        </CardHeader>
        <CardContent>
          <p className="text-sm">
            Explore how minimalist principles can enhance user experience and
            improve website performance. Learn to create impactful designs with
            less, focusing on essential elements and clean aesthetics.
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between text-xs">
          <time dateTime="2023-12-24">December 24, 2023</time>
          <div className="flex items-center">
            <Clock className="mr-1 size-3" />
            <span>4 min read</span>
          </div>
        </CardFooter>
        <CardFooter className="pt-0">
          <Button asChild variant="link" className="h-auto px-0">
            <Link href="#">
              Read More
              <span className="sr-only">
                about The Art of Minimalist Design in Modern Web Development
              </span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
