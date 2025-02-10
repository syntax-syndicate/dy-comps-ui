"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CalendarDays } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ClassicBlogCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-md overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative h-48">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Blog post cover image"
              fill
              className="object-cover"
            />
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <h2 className="mb-2 line-clamp-2 text-2xl font-bold">
            The Future of Web Development: Trends to Watch in 2024
          </h2>
          <p className="mb-4 line-clamp-3 text-muted-foreground">
            Explore the cutting-edge technologies and methodologies that are
            shaping the future of web development. From AI-driven design to
            serverless architectures, discover what&apos;s next in the world of
            web tech.
          </p>
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
                <time dateTime="2023-12-20">December 20, 2023</time>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button asChild variant="link" className="px-0">
            <Link href="#">
              Read More
              <span className="sr-only">
                about The Future of Web Development
              </span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
