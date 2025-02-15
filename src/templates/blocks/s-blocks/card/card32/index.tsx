"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";

export default function NewsletterCard() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the subscription logic
    console.log("Subscribing email:", email);
    // Reset the email input
    setEmail("");
  };

  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-md overflow-hidden">
        <div className="bg-muted p-6">
          <CardHeader className="pb-2 text-center">
            <CardTitle className="mb-2 text-2xl font-bold">
              Stay Ahead in Web Development
            </CardTitle>
            <p className="text-lg text-muted-foreground">
              Subscribe to our newsletter for the latest tips and tricks
            </p>
          </CardHeader>
          <CardContent className="py-4 text-center">
            <ul className="mb-6 space-y-2">
              <li className="flex items-center justify-center">
                <Mail className="mr-2 size-4" />
                <span>Weekly curated articles</span>
              </li>
              <li className="flex items-center justify-center">
                <Mail className="mr-2 size-4" />
                <span>Exclusive tutorials</span>
              </li>
              <li className="flex items-center justify-center">
                <Mail className="mr-2 size-4" />
                <span>Early access to new features</span>
              </li>
            </ul>
          </CardContent>
        </div>
        <CardFooter className="p-6">
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full"
            />
            <Button type="submit" className="w-full">
              Subscribe Now
            </Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
