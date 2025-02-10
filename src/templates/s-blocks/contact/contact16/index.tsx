"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  MessageCircle,
  MapPin,
  Phone,
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Chrome,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

export default function Contact16() {
  return (
    <TooltipProvider>
      <div className="bg-background">
        <div className="container grid gap-8 py-12 lg:grid-cols-[1fr,2fr]">
          {/* Left Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold">Untitled UI</h2>
            </div>

            <div className="space-y-6">
              {/* Chat to Us */}
              <div className="flex gap-3">
                <MessageCircle className="size-5 text-muted-foreground" />
                <div>
                  <h3 className="mb-1 font-semibold">Chat to us</h3>
                  <p className="mb-1 text-sm text-muted-foreground">
                    Our friendly team is here to help.
                  </p>
                  <a
                    href="mailto:hi@untitledui.com"
                    className="text-sm text-primary hover:underline"
                  >
                    hi@untitledui.com
                  </a>
                </div>
              </div>

              {/* Visit Us */}
              <div className="flex gap-3">
                <MapPin className="size-5 text-muted-foreground" />
                <div>
                  <h3 className="mb-1 font-semibold">Visit us</h3>
                  <p className="mb-1 text-sm text-muted-foreground">
                    Come say hello at our office HQ.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    100 Smith Street
                    <br />
                    Collingwood VIC 3066 AU
                  </p>
                </div>
              </div>

              {/* Call Us */}
              <div className="flex gap-3">
                <Phone className="size-5 text-muted-foreground" />
                <div>
                  <h3 className="mb-1 font-semibold">Call us</h3>
                  <p className="mb-1 text-sm text-muted-foreground">
                    Mon-Fri from 8am to 5pm.
                  </p>
                  <a
                    href="tel:+1555000000"
                    className="text-sm text-primary hover:underline"
                  >
                    +1 (555) 000-0000
                  </a>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon: <Facebook className="size-5" />, label: "Facebook" },
                { icon: <Twitter className="size-5" />, label: "Twitter" },
                { icon: <Linkedin className="size-5" />, label: "LinkedIn" },
                { icon: <Github className="size-5" />, label: "GitHub" },
                { icon: <Chrome className="size-5" />, label: "Chrome" },
              ].map((social, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {social.icon}
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{social.label}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <Card className="bg-accent shadow-sm">
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h1 className="mb-2 text-2xl font-bold tracking-tight">
                    Got ideas? We&apos;ve got the skills. Let&apos;s team up.
                  </h1>
                  <p className="text-muted-foreground">
                    Tell us more about yourself and what you&apos;ve got in
                    mind.
                  </p>
                </div>

                <form className="space-y-4">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Your name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                    />
                  </div>

                  {/* Project Description */}
                  <div className="space-y-2">
                    <Label htmlFor="project">
                      Tell us a little about the project...
                    </Label>
                    <Textarea
                      id="project"
                      placeholder="Tell us a little about the project..."
                      className="min-h-[100px]"
                    />
                  </div>

                  {/* Checkbox Group */}
                  <div className="space-y-4">
                    <Label>How can we help?</Label>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {[
                        { id: "website", label: "Website design" },
                        { id: "content", label: "Content creation" },
                        { id: "ux", label: "UX design" },
                        { id: "strategy", label: "Strategy & consulting" },
                        { id: "research", label: "User research" },
                        { id: "other", label: "Other" },
                      ].map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox id={item.id} />
                          <Label htmlFor={item.id}>{item.label}</Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button className="w-full" size="lg" type="submit">
                    Let&apos;s get started!
                  </Button>
                </form>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </TooltipProvider>
  );
}
