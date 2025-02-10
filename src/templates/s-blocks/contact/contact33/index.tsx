"use client";
import * as React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";

export default function ContactFormHero() {
  return (
    <section className="bg-background text-foreground">
      {/* Hero Section with Geometric Pattern */}
      <div className="relative bg-gradient-to-br from-primary/10 to-muted/20">
        <div className="mx-auto max-w-screen-xl px-4 py-24 lg:px-6 lg:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold tracking-tight xl:text-5xl">
                Shape Tomorrow's Solutions
              </h2>
              <p className="text-lg text-muted-foreground">
                Partner with our AI experts to unlock transformative business
                potential through intelligent automation and predictive
                analytics.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Direct Line</p>
                    <p className="text-muted-foreground">+1 (415) 555-0199</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Support Hub</p>
                    <p className="text-muted-foreground">connect@aetheria.ai</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Innovation Center</p>
                    <p className="text-muted-foreground">
                      Silicon Valley Campus, Building 42
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <Card className="border-0 bg-background/95 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <h3 className="text-2xl font-semibold">
                  Start Your AI Journey
                </h3>
                <p className="text-muted-foreground">
                  Complete the form to schedule your consultation
                </p>
              </CardHeader>
              <CardContent>
                <form className="grid grid-cols-1 gap-6">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input
                      placeholder="Dr. Sarah Mitchell"
                      className="focus-visible:ring-primary"
                    />
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Work Email</Label>
                      <Input
                        type="email"
                        placeholder="sarah@techcorp.com"
                        className="focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Company</Label>
                      <Input
                        placeholder="TechCorp Innovations"
                        className="focus-visible:ring-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Project Overview</Label>
                    <Textarea
                      rows={4}
                      placeholder="Describe your AI initiative..."
                      className="focus-visible:ring-primary"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button type="submit" className="gap-2">
                      Request Consultation
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                    <span className="text-sm text-muted-foreground">
                      Response within 24hrs
                    </span>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="border-t bg-muted/40">
        <div className="mx-auto max-w-screen-xl px-4 py-8 lg:px-6">
          <p className="text-center text-sm text-muted-foreground">
            Trusted by leaders at{" "}
            <span className="font-medium text-foreground">
              Fortune 500 companies • Tech unicorns • Research institutions
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
