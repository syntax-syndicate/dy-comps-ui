"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function Contact20() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="container mx-auto px-6 py-24 sm:py-32 lg:px-8">
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Contact sales
        </h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>

      <Card className="mx-auto mt-16 max-w-xl sm:mt-20">
        <CardContent className="p-6">
          <form action="#" method="POST" className="space-y-6">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="company">Company</Label>
                <Input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="phone-number">Phone number</Label>
                <div className="flex">
                  <Select defaultValue="US">
                    <SelectTrigger className="w-[100px]">
                      <SelectValue placeholder="Country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US">US</SelectItem>
                      <SelectItem value="CA">CA</SelectItem>
                      <SelectItem value="EU">EU</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="ml-2 flex-1"
                  />
                </div>
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" rows={4} />
              </div>
              <div className="flex items-center space-x-2 sm:col-span-2">
                <Checkbox
                  id="privacy-policy"
                  checked={agreed}
                  onCheckedChange={(checked) => setAgreed(checked as boolean)}
                />
                <Label
                  htmlFor="privacy-policy"
                  className="text-sm text-muted-foreground"
                >
                  By selecting this, you agree to our{" "}
                  <a
                    href="#"
                    className="font-semibold text-primary hover:underline"
                  >
                    privacy&nbsp;policy
                  </a>
                  .
                </Label>
              </div>
            </div>
            <Button type="submit" className="w-full">
              Let&apos;s talk
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
