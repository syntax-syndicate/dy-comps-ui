"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardFooter } from "@/components/ui/card";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HorizontalCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-3xl overflow-hidden">
        <div className="flex flex-col sm:flex-row">
          <div className="relative h-48 w-full sm:h-auto sm:w-2/5">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Blog post cover image"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex w-full flex-col justify-between p-6 sm:w-3/5">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Technology
              </Badge>
              <h2 className="line-clamp-2 text-2xl font-bold">
                The Impact of Artificial Intelligence on Modern Web Development
              </h2>
              <p className="line-clamp-3 text-muted-foreground">
                Discover how AI is revolutionizing the way we build and interact
                with websites. From chatbots to personalized user experiences,
                explore the cutting-edge applications of AI in web development.
              </p>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <User className="size-4" />
                <span>John Doe</span>
                <span>•</span>
                <time dateTime="2023-12-22">December 22, 2023</time>
              </div>
            </div>
            <CardFooter className="px-0 pt-4">
              <Button asChild variant="link" className="px-0">
                <Link href="#">
                  Read More
                  <span className="sr-only">
                    about The Impact of Artificial Intelligence on Modern Web
                    Development
                  </span>
                </Link>
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
}
