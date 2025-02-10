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
import { Clock, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function BlogCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-md overflow-hidden bg-card">
        <div className="relative">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Workspace with laptop and coffee"
            width={500}
            height={300}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </div>
        <CardHeader className="space-y-4">
          <div className="flex items-center justify-between">
            <Badge variant="secondary">Productivity</Badge>
            <span className="text-sm text-muted-foreground">6/15/2023</span>
          </div>
          <h2 className="text-xl font-bold leading-tight text-card-foreground">
            10 Essential Tips for Productive Remote Work
          </h2>
          <p className="text-sm text-muted-foreground">
            Discover how to maximize your productivity and maintain work-life
            balance while working from home with these expert-approved
            strategies.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-4">
            <Avatar className="size-10">
              <AvatarImage
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Alice Johnson"
              />
              <AvatarFallback>AJ</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm font-medium text-card-foreground">
                Alice Johnson
              </p>
              <div className="flex items-center space-x-4">
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
        </CardContent>
        <CardFooter>
          <Button className="w-full">Read More</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
