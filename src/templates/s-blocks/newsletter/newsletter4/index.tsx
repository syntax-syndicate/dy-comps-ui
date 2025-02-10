"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 5000); // Show popup after 5 seconds
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-full max-w-sm sm:w-[380px]">
      <Card className="w-full shadow-lg">
        <CardHeader className="relative pb-2">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2"
            onClick={() => setIsVisible(false)}
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </Button>
          <CardTitle className="text-lg font-semibold">
            Subscribe to Our Newsletter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-muted-foreground">
            Stay updated with our latest news and special offers!
          </p>
          <form onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="email" className="sr-only">
                Email address
              </Label>
              <Input
                id="email"
                placeholder="Enter your email"
                type="email"
                required
              />
            </div>
            <Button type="submit" className="mt-4 w-full">
              Subscribe
            </Button>
          </form>
        </CardContent>
        <CardFooter className="pt-0">
          <p className="text-xs text-muted-foreground">
            By subscribing, you agree to our{" "}
            <a href="#" className="underline hover:text-primary">
              Privacy Policy
            </a>
            .
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
