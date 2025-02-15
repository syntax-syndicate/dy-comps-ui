"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Building2, MapPin, Phone } from "lucide-react";

export default function Contact18() {
  return (
    <div className="container mx-auto py-12">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-3xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-muted-foreground">
            We use an agile approach to test assumptions and connect
            <br />
            with the needs of your audience early and often.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[2fr,1fr]">
          <form className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" placeholder="Bonnie" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" placeholder="Green" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="email">Your email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@gmail.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+12 345 6789" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Your message</Label>
              <Textarea
                className="min-h-[150px]"
                id="message"
                placeholder="Leave a comment..."
              />
            </div>

            <div className="text-sm text-muted-foreground">
              By submitting this form you agree to our{" "}
              <a href="#" className="text-primary hover:underline">
                terms and conditions
              </a>{" "}
              and our{" "}
              <a href="#" className="text-primary hover:underline">
                privacy policy
              </a>{" "}
              which explains how we may collect, use and disclose your personal
              information including to third parties.
            </div>

            <Button size="lg">Send message</Button>
          </form>

          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                <Building2 className="size-6 text-primary" />
              </div>
              <div>
                <h2 className="mb-1 font-semibold">Company information:</h2>
                <p className="text-muted-foreground">Themesberg LLC</p>
                <p className="text-muted-foreground">Tax id: USXXXXXX</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                <MapPin className="size-6 text-primary" />
              </div>
              <div>
                <h2 className="mb-1 font-semibold">Address:</h2>
                <p className="text-muted-foreground">
                  SILVER LAKE, United States
                  <br />
                  1941 Late Avenue
                  <br />
                  Zip Code/Postal code:03875
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                <Phone className="size-6 text-primary" />
              </div>
              <div>
                <h2 className="mb-1 font-semibold">Call us:</h2>
                <p className="mb-1 text-muted-foreground">
                  Call us to speak to a member of our team. We are always happy
                  to help.
                </p>
                <a
                  href="tel:+16467865060"
                  className="text-primary hover:underline"
                >
                  +1 (646) 786-5060
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
