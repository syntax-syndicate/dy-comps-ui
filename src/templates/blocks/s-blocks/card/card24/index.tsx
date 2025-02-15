"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Clock } from "lucide-react";
import Link from "next/link";

export default function MinimalCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-md border border-border/50 shadow-sm transition-shadow hover:shadow-md">
        <CardContent className="p-6">
          <h2 className="mb-2 text-xl font-semibold text-card-foreground">
            The Art of Minimalism in Web Design
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Explore how minimalist principles can create powerful and effective
            web interfaces. Learn to communicate more with less and enhance user
            experience through simplicity.
          </p>
          <div className="flex items-center text-xs text-muted-foreground">
            <Clock className="mr-1 size-3" />
            <span>5 min read</span>
          </div>
        </CardContent>
        <CardFooter className="border-t border-border/50 px-6 py-4">
          <Button asChild variant="link" className="h-auto px-0 font-normal">
            <Link href="#">
              Read More
              <span className="sr-only">
                about The Art of Minimalism in Web Design
              </span>
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
