"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { X } from "lucide-react";

export default function ErrorPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center py-16">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center space-y-8 pb-12 pt-16 text-center">
          {/* Icon Container */}
          <div className="flex size-24 items-center justify-center rounded-lg bg-primary/10">
            <X className="size-12 text-primary" />
          </div>

          {/* Content */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">Oh no!</h1>
            <p className="text-lg text-muted-foreground">
              We&apos;re usually a treasure chest of knowledge, but we
              couldn&apos;t find what you&apos;re looking for
            </p>
          </div>

          {/* Action Button */}
          <Button size="lg" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
