"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ModernCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-sm overflow-hidden transition-shadow duration-300 hover:shadow-xl">
        <div className="relative">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Blog post cover image"
            width={400}
            height={300}
            className="h-48 w-full object-cover"
          />
          <Badge className="absolute left-4 top-4 bg-primary/80 text-primary-foreground hover:bg-primary">
            Technology
          </Badge>
        </div>
        <CardContent className="p-6">
          <h2 className="mb-2 text-xl font-bold text-card-foreground">
            The Rise of Progressive Web Apps
          </h2>
          <p className="mb-4 line-clamp-3 text-sm text-muted-foreground">
            Explore how Progressive Web Apps are changing the landscape of web
            development, offering native-like experiences and offline
            functionality to users across all devices.
          </p>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t border-border px-6 py-4">
          <span className="text-sm text-muted-foreground">5 min read</span>
          <Button
            asChild
            variant="ghost"
            className="group h-auto p-0 font-semibold hover:bg-transparent"
          >
            <Link href="#" className="flex items-center">
              Read More
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              <span className="sr-only">
                about The Rise of Progressive Web Apps
              </span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
