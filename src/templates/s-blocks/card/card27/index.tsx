"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function GradientCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-md overflow-hidden">
        <div className="relative h-64">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Blog post cover image"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
          <div className="absolute bottom-4 left-4 right-4 space-y-2">
            <div className="flex flex-wrap gap-2">
              <Badge>Technology</Badge>
              <Badge>AI</Badge>
            </div>
            <h2 className="text-2xl font-bold text-white">
              The Future of AI in Web Development
            </h2>
          </div>
        </div>
        <CardContent className="bg-card p-4">
          <p className="mb-4 text-sm text-card-foreground">
            Explore how artificial intelligence is revolutionizing web
            development, from automated coding to intelligent user interfaces
            and predictive analytics.
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between bg-card p-4">
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
              <div className="flex items-center text-xs text-muted-foreground">
                <CalendarDays className="mr-1 size-3" />
                <time dateTime="2023-12-23">December 23, 2023</time>
              </div>
            </div>
          </div>
          <Button asChild variant="ghost" size="sm">
            <Link href="#">
              Read More
              <span className="sr-only">
                about The Future of AI in Web Development
              </span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
