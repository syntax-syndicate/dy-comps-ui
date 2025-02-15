"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, HelpCircle } from "lucide-react";

export default function Contact19() {
  return (
    <div className="relative bg-background">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-[url('https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg')] bg-cover bg-center"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-background" />
      </div>

      <div className="container relative z-10 mx-auto py-12">
        <div className="mb-12 text-center">
          <h1 className="mb-3 text-3xl font-bold tracking-tight">Contact Us</h1>
          <p className="text-muted-foreground">
            We use an agile approach to test assumptions and connect
            <br />
            with the needs of your audience early and often.
          </p>
        </div>

        <Card className="mx-auto max-w-2xl bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6">
            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    placeholder="Bonnie"
                    className="border bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    placeholder="Green"
                    className="border bg-background/50"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="email">Your email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    className="border bg-background/50"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+12 345 6789"
                    className="border bg-background/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Your message</Label>
                <Textarea
                  className="min-h-[150px] border bg-background/50"
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
                which explains how we may collect, use and disclose your
                personal information including to third parties.
              </div>

              <Button className="w-full" size="lg">
                Send message
              </Button>
            </form>
          </CardContent>
        </Card>

        <div className="mx-auto mt-16 grid max-w-4xl gap-8 sm:grid-cols-3">
          <div className="space-y-2 text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
              <Mail className="size-6 text-primary" />
            </div>
            <h2 className="font-semibold">Email us:</h2>
            <p className="mb-2 text-sm text-muted-foreground">
              Email us for general queries, including marketing and partnership
              opportunities.
            </p>
            <a
              href="mailto:example@gmail.com"
              className="text-primary hover:underline"
            >
              example@gmail.com
            </a>
          </div>

          <div className="space-y-2 text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
              <Phone className="size-6 text-primary" />
            </div>
            <h2 className="font-semibold">Call us:</h2>
            <p className="mb-2 text-sm text-muted-foreground">
              Call us to speak to a member of our team. We are always happy to
              help.
            </p>
            <a href="tel:+16467865060" className="text-primary hover:underline">
              +1 (646) 786-5060
            </a>
          </div>

          <div className="space-y-2 text-center">
            <div className="mx-auto flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
              <HelpCircle className="size-6 text-primary" />
            </div>
            <h2 className="font-semibold">Support</h2>
            <p className="mb-2 text-sm text-muted-foreground">
              Email us for general queries, including marketing and partnership
              opportunities.
            </p>
            <Button variant="outline" size="sm">
              Support center
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
