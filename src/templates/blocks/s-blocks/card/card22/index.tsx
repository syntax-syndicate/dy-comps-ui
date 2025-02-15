"use client";

import { ArrowRight, Tag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

export default function BlogPostCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="flex w-full max-w-md flex-col overflow-hidden">
        <CardHeader className="p-0">
          <div className="relative">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Blog post thumbnail"
              width={600}
              height={400}
              className="aspect-[3/2] object-cover"
            />
            <div className="absolute left-4 top-4">
              <span className="inline-flex items-center rounded-md bg-primary px-2 py-1 text-sm font-medium text-white">
                <Tag className="mr-1 size-3" />
                Technology
              </span>
            </div>
          </div>
        </CardHeader>
        <CardContent className="flex-1 p-6">
          <h2 className="mb-4 text-2xl font-bold tracking-tight">
            Getting Started with Web Development
          </h2>
          <p className="text-muted-foreground">
            Learn the fundamentals of web development and start building your
            first website. This comprehensive guide covers HTML, CSS, and
            JavaScript basics.
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Link
            href="#"
            className="inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Read more
            <ArrowRight className="ml-1 size-4" />
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
