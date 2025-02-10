"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building } from "lucide-react";
import Image from "next/image";

export default function Contact25() {
  return (
    <div className="container mx-auto py-12">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
        <div>
          <div className="mb-8">
            <h1 className="mb-2 text-3xl font-bold tracking-tight">
              Let&apos;s talk about your project
            </h1>
            <p className="text-muted-foreground">
              We help companies and individuals build out their brand
              guidelines.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="First name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Last name" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="budget">Budget</Label>
                <Input id="budget" placeholder="Budget range" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" type="url" placeholder="Your website" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                className="min-h-[150px]"
                id="message"
                placeholder="Tell us about your project..."
              />
            </div>

            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                By submitting this form, I agree to the{" "}
                <a href="#" className="text-primary hover:underline">
                  privacy policy
                </a>
                .
              </p>

              <Button className="w-full" size="lg">
                Let&apos;s talk
              </Button>
            </div>
          </form>
        </div>

        <Card className="bg-muted/50">
          <CardContent className="space-y-8 p-6">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-primary/10 p-2">
                <Building className="size-6 text-primary" />
              </div>
              <span className="text-xl font-semibold">Workcation</span>
            </div>

            <blockquote className="text-lg text-muted-foreground">
              &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nemo expedita voluptas culpa sapiente alias molestiae. Numquam
              corrupti in laborum sed rerum et corporis.&rdquo;
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="relative size-12">
                <Image
                  alt="Brenna Goyette"
                  className="rounded-full object-cover"
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <div className="font-semibold">Brenna Goyette</div>
                <div className="text-sm text-muted-foreground">
                  CEO of Workcation
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
