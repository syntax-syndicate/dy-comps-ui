"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle, Headphones, MapPin, Phone } from "lucide-react";

export default function Contact14() {
  return (
    <div className="container mx-auto py-32">
      <div className="mb-12 text-center">
        <h1 className="mb-2 text-4xl font-bold tracking-tight">Get in touch</h1>
        <p className="text-muted-foreground">
          Ready to help your company scale faster? Let&apos;s chat about how we
          can help.
        </p>
      </div>

      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-accent/20">
          <CardContent className="p-6">
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
              <MessageCircle className="size-6 text-primary" />
            </div>
            <h2 className="mb-1 font-semibold">Chat to sales</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              Speak to our friendly team.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Chat to sales
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-accent/20">
          <CardContent className="p-6">
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
              <Headphones className="size-6 text-primary" />
            </div>
            <h2 className="mb-1 font-semibold">Chat to support</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              We&apos;re here to help.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Chat to support
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-accent/20">
          <CardContent className="p-6">
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="size-6 text-primary" />
            </div>
            <h2 className="mb-1 font-semibold">Visit us</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              Visit our office HQ.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Get directions
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-accent/20">
          <CardContent className="p-6">
            <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
              <Phone className="size-6 text-primary" />
            </div>
            <h2 className="mb-1 font-semibold">Call us</h2>
            <p className="mb-4 text-sm text-muted-foreground">
              Mon-Fri from 8am to 5pm.
            </p>
            <Button variant="outline" size="sm" className="w-full">
              Call our team
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="mx-auto max-w-md">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-2xl font-bold tracking-tight">Message us</h2>
          <p className="text-muted-foreground">
            We&apos;ll get back to you within 24 hours.
          </p>
        </div>

        <form className="space-y-4">
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
            <Input id="email" type="email" placeholder="you@company.com" />
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

          <Button className="w-full" size="lg">
            Send message
          </Button>
        </form>
      </div>
    </div>
  );
}
