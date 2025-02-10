"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building, Phone, Mail } from "lucide-react";

export default function Contact22() {
  return (
    <div className="relative bg-background">
      {/* Grid background */}

      <div className="container relative mx-auto py-12">
        <div className="mx-auto grid max-w-6xl items-start gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold tracking-tight">
                Get in touch
              </h1>
              <p className="mt-4 text-muted-foreground">
                Proin volutpat consequat porttitor cras nullam gravida at. Orci
                molestie a eu arcu. Sed ut tincidunt integer elementum id sem.
                Arcu sed malesuada et magna.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <Building className="size-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    545 Mavis Island
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Chicago, IL 99191
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <Phone className="size-5 text-primary" />
                </div>
                <div>
                  <a
                    href="tel:+15552345678"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    +1 (555) 234-5678
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <Mail className="size-5 text-primary" />
                </div>
                <div>
                  <a
                    href="mailto:hello@example.com"
                    className="text-sm text-muted-foreground hover:text-foreground"
                  >
                    hello@example.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <form className="grid gap-6">
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

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Email" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Phone number</Label>
                <Input id="phone" type="tel" placeholder="Phone number" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="min-h-[150px]"
                  id="message"
                  placeholder="Enter your message"
                />
              </div>

              <Button size="lg" type="submit">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
