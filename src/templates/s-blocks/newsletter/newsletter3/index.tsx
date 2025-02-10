"use client";

import { Mail, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewsletterBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="absolute bottom-0 w-full border bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          <p className="text-sm font-medium">Sign up for our newsletter</p>
        </div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex w-full items-center gap-2 sm:w-auto"
        >
          <div className="relative flex-grow sm:flex-grow-0">
            <Label htmlFor="email-banner" className="sr-only">
              Email address
            </Label>
            <Input
              id="email-banner"
              type="email"
              placeholder="Enter your email"
              className="w-full bg-input"
            />
          </div>
          <Button type="submit" variant="outline" className="shrink-0">
            Subscribe
          </Button>
          <Button
            className="ml-96"
            variant={"ghost"}
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
