"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Code, Layout, Zap } from "lucide-react";
import Link from "next/link";

const tags = [
  { name: "React", icon: Code },
  { name: "UI/UX", icon: Layout },
  { name: "Performance", icon: Zap },
];

export default function TagFocusCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="flex items-center gap-1 px-3 py-1"
              >
                <tag.icon className="size-3" />
                {tag.name}
              </Badge>
            ))}
          </div>
          <h2 className="text-2xl font-bold">
            Optimizing React Applications for Peak Performance
          </h2>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Learn advanced techniques to boost your React app&apos;s speed and
            efficiency. From code splitting to memoization, discover how to
            create lightning-fast user experiences.
          </p>
        </CardContent>
        <Separator className="my-4" />
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Jane Doe"
              />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Jane Doe</p>
              <p className="text-xs text-muted-foreground">Dec 25, 2023</p>
            </div>
          </div>
          <Button asChild size="sm">
            <Link href="#">
              Read More
              <span className="sr-only">
                about Optimizing React Applications for Peak Performance
              </span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
