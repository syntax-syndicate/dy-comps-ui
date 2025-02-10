"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Users, Wand2 } from "lucide-react";

export default function Contact10() {
  const [userType, setUserType] = useState("solo");

  return (
    <div className="mx-auto max-w-6xl px-4 py-32">
      <div className="grid items-center gap-16 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Get in touch</h1>
            <p className="mt-2 text-muted-foreground">
              Our friendly team would love to hear from you.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First name</Label>
                <Input id="firstName" placeholder="First name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last name</Label>
                <Input id="lastName" placeholder="Last name" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="you@company.com" type="email" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <div className="flex gap-2">
                <Select defaultValue="US">
                  <SelectTrigger className="w-[100px]">
                    <SelectValue placeholder="Country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="US">US</SelectItem>
                    <SelectItem value="UK">UK</SelectItem>
                    <SelectItem value="CA">CA</SelectItem>
                    <SelectItem value="AU">AU</SelectItem>
                  </SelectContent>
                </Select>
                <Input id="phone" placeholder="+1 (555) 000-0000" type="tel" />
              </div>
            </div>

            <RadioGroup
              className="grid grid-cols-2 gap-4"
              defaultValue="solo"
              onValueChange={setUserType}
            >
              <div>
                <RadioGroupItem
                  value="solo"
                  id="solo"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="solo"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Wand2 className="mb-3 size-6" />
                  <div className="text-center">
                    <p className="mb-2 font-medium leading-none">
                      I&apos;m a solo creator
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Automate basic tasks and manage workflows.
                    </p>
                  </div>
                </Label>
              </div>

              <div>
                <RadioGroupItem
                  value="team"
                  id="team"
                  className="peer sr-only"
                />
                <Label
                  htmlFor="team"
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                >
                  <Users className="mb-3 size-6" />
                  <div className="text-center">
                    <p className="mb-2 font-medium leading-none">
                      I&apos;m part of a team
                    </p>
                    <p className="text-sm text-muted-foreground">
                      I need multi-user business automations.
                    </p>
                  </div>
                </Label>
              </div>
            </RadioGroup>

            <div className="text-sm text-muted-foreground">
              You agree to our friendly{" "}
              <a
                href="#"
                className="text-primary underline-offset-4 hover:underline"
              >
                privacy policy
              </a>
              .
            </div>

            <Button className="w-full" size="lg" type="submit">
              Get in touch
            </Button>
          </form>
        </div>

        <div className="relative h-full">
          <div className="relative h-full overflow-hidden rounded-lg">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 to-black/0" />
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Testimonial background"
              className="h-full w-full object-cover"
              height={400}
              width={400}
            />
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 text-white">
              <blockquote className="mb-2 text-lg font-medium">
                Untitled UI is the perfect tool for startups to keep track of
                their financials. Their intuitive dashboard and reporting
                capabilities have saved our team hours of manual work.
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-medium">Aliah Lane</div>
                  <div className="text-sm text-gray-200">Founder, Layer.io</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      className="size-5 fill-current text-primary"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-24 rounded-lg border bg-accent py-24 text-center">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          Let&apos;s get started on something great
        </h2>
        <p className="mb-8 text-xl text-muted-foreground">
          Join over 4,000+ freelancers and teams already growing with Untitled.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" size="lg">
            Chat to us
          </Button>
          <Button size="lg">Get started</Button>
        </div>
      </div>
    </div>
  );
}
