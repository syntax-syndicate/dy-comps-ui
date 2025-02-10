"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function BlogCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="group w-full max-w-2xl overflow-hidden">
        <div className="relative flex flex-col md:flex-row">
          <div className="relative aspect-[16/9] w-full md:aspect-auto md:w-2/5">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Sunset over a lake with silhouetted trees"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative flex-1 bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <Badge
                variant="secondary"
                className="bg-primary/10 text-primary hover:bg-primary/20"
              >
                Productivity
              </Badge>
              <span className="text-sm text-muted-foreground">6/15/2023</span>
            </div>

            <h2 className="mb-2 text-xl font-bold text-card-foreground">
              10 Essential Tips for Productive Remote Work
            </h2>

            <p className="mb-4 text-sm text-muted-foreground">
              Discover how to maximize your productivity and maintain work-life
              balance while working from home with these expert-approved
              strategies.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar className="size-8">
                  <AvatarImage
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="Alice Johnson"
                  />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium text-card-foreground">
                    Alice Johnson
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center text-muted-foreground">
                      <Clock className="mr-1 size-3" />
                      <span className="text-xs">5 min read</span>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <MessageCircle className="mr-1 size-3" />
                      <span className="text-xs">12 comments</span>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="ghost" className="ml-auto">
                Read More
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
