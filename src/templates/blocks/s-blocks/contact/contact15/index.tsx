"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, HelpCircle, MessageSquare } from "lucide-react";

export default function Contact15() {
  return (
    <div className="bg-background">
      <div className="container mx-auto py-32">
        <div className="mb-12 text-center">
          <h1 className="mb-2 text-3xl font-bold tracking-tight">
            Get in Touch
          </h1>
          <p className="text-muted-foreground">
            Contact our sales team and we&apos;ll get back to you in 24 hours.
          </p>
        </div>

        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[1fr,1.5fr]">
          <div className="space-y-6">
            <div>
              <h2 className="mb-4 text-xl font-semibold">Uick Contact Form</h2>
              <p className="mb-4 text-sm text-muted-foreground">
                If you have any issues while using the platform, please feel
                free to reach out to us regarding issues.
              </p>
              <p className="mb-4 text-sm text-muted-foreground">
                We&apos;ll be happy to assist! Feel free to reach out to us
                regarding issues.
              </p>
              <p className="text-sm text-muted-foreground">
                Before sending a message, you may want to thoroughly review the{" "}
                <a href="#" className="text-primary hover:underline">
                  privacy policy page
                </a>{" "}
                or{" "}
                <a href="#" className="text-primary hover:underline">
                  spam guidelines
                </a>
                .
              </p>
              <p className="mt-4 text-sm text-muted-foreground">
                Please send the product, order and your service issue details
                when submitting your message via the contact form.
              </p>
            </div>
          </div>

          <Card className="bg-card">
            <CardContent className="p-6">
              <h3 className="mb-6 text-lg font-semibold">
                Send us your message now!
              </h3>
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
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your company" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    className="min-h-[100px]"
                    id="message"
                    placeholder="Your message..."
                  />
                </div>

                <Button className="w-full" size="lg">
                  Submit
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-8 sm:grid-cols-3">
          <div className="text-center">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
              <MessageSquare className="size-6 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold">Sales</h3>
            <p className="mb-2 text-sm text-muted-foreground">
              Reach out to our sales team
            </p>
            <a href="#" className="text-sm text-primary hover:underline">
              Contact Sales
            </a>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
              <BookOpen className="size-6 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold">Documentation</h3>
            <p className="mb-2 text-sm text-muted-foreground">
              Learn more about our platform
            </p>
            <a href="#" className="text-sm text-primary hover:underline">
              View Documentation
            </a>
          </div>

          <div className="text-center">
            <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-primary/10">
              <HelpCircle className="size-6 text-primary" />
            </div>
            <h3 className="mb-2 font-semibold">Help Center</h3>
            <p className="mb-2 text-sm text-muted-foreground">
              Get help with any issues
            </p>
            <a href="#" className="text-sm text-primary hover:underline">
              Visit Help Center
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
