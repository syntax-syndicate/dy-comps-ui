"use client";
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Search,
  Mail,
  MapPin,
  Phone,
  BookOpen,
  ChevronRight,
} from "lucide-react";

export default function FAQAndContactSection() {
  return (
    <section className="bg-background text-foreground">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6">
        {/* Enhanced Search Header */}
        <div className="max-w-screen-lg">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:mb-6">
            Accelerate Your Success with Instant Knowledge
          </h2>
          <div className="relative">
            <Label htmlFor="search-faq" className="sr-only">
              Search Expertise Database
            </Label>
            <div className="relative">
              <Input
                type="text"
                id="search-faq"
                className="py-6 pl-14 pr-28 text-lg"
                placeholder="Search our AI expertise repository..."
              />
              <Search className="absolute left-4 top-1/2 h-6 w-6 -translate-y-1/2 text-muted-foreground" />
              <Button
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2 gap-1.5"
                variant="secondary"
              >
                Expert Search <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Knowledge Matrix Grid */}
        <div className="my-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {[
            {
              title: "AI Architecture",
              count: "42+",
              description: "Framework implementation guides",
            },
            {
              title: "Data Integration",
              count: "35+",
              description: "Data pipeline configurations",
            },
            {
              title: "Model Optimization",
              count: "28+",
              description: "Performance enhancement techniques",
            },
            {
              title: "Security Protocols",
              count: "56+",
              description: "Compliance & safety measures",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="group transition-colors hover:border-primary"
            >
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center justify-between text-base font-semibold">
                  <span>{item.title}</span>
                  <span className="text-primary">{item.count}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Expert Connect Section */}
        <div className="mb-16 flex flex-col gap-8 rounded-xl border bg-card p-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold">Need Human Expertise?</h3>
            <p className="text-muted-foreground">
              Schedule a consultation with our AI architects
            </p>
          </div>
          <Button className="gap-2 sm:w-fit">
            <Phone className="h-4 w-4" />
            Book Expert Session
          </Button>
        </div>

        {/* Hybrid Contact Grid */}
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Global Network */}
          <div className="space-y-8 lg:col-span-2">
            <div className="space-y-6">
              <h3 className="text-lg font-semibold">Global Neural Network</h3>
              {[
                {
                  icon: <MapPin className="h-5 w-5" />,
                  title: "Silicon Valley Hub",
                  text: "100 Innovation Way\nCA 94301, United States",
                },
                {
                  icon: <MapPin className="h-5 w-5" />,
                  title: "EMEA Headquarters",
                  text: "42 Tech Valley\nLondon, UK",
                },
                {
                  icon: <MapPin className="h-5 w-5" />,
                  title: "APAC Innovation Center",
                  text: "789 Future Street\nSingapore 238867",
                },
              ].map((office, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 rounded-full bg-primary/10 p-2">
                    {office.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{office.title}</h4>
                    <p className="whitespace-pre-line text-sm text-muted-foreground">
                      {office.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 border-t pt-8">
              <h3 className="text-lg font-semibold">Direct Channels</h3>
              {[
                {
                  icon: <Mail className="h-5 w-5" />,
                  title: "Technical Support",
                  contact: "support@aetheria.ai",
                },
                {
                  icon: <Mail className="h-5 w-5" />,
                  title: "Strategic Partnerships",
                  contact: "partners@aetheria.ai",
                },
                {
                  icon: <Phone className="h-5 w-5" />,
                  title: "24/7 Priority Line",
                  contact: "+1 (555) 234-5678",
                },
              ].map((channel, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="rounded-full bg-primary/10 p-2">
                    {channel.icon}
                  </div>
                  <div>
                    <p className="font-medium">{channel.title}</p>
                    <a
                      href={
                        channel.icon.type === Phone
                          ? `tel:${channel.contact}`
                          : `mailto:${channel.contact}`
                      }
                      className="text-sm text-primary hover:underline"
                    >
                      {channel.contact}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Precision Contact Form */}
          <div className="lg:col-span-3">
            <Card className="border-primary/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl font-extrabold">
                  Precision Inquiry Form
                </CardTitle>
                <p className="text-muted-foreground">
                  For complex technical inquiries requiring detailed analysis
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label>Organization Email</Label>
                      <Input
                        type="email"
                        placeholder="tech@yourcompany.com"
                        className="focus-visible:ring-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Inquiry Priority</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select urgency level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">
                            Standard (72h)
                          </SelectItem>
                          <SelectItem value="high">
                            High Priority (24h)
                          </SelectItem>
                          <SelectItem value="critical">
                            Critical (8h Response)
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Technical Domain</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select expertise area" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ml-ops">ML Operations</SelectItem>
                        <SelectItem value="data-engineering">
                          Data Pipelines
                        </SelectItem>
                        <SelectItem value="model-architecture">
                          Neural Architectures
                        </SelectItem>
                        <SelectItem value="security">AI Security</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label>Technical Brief</Label>
                    <Textarea
                      placeholder="Describe your technical challenge with relevant details..."
                      rows={6}
                      className="focus-visible:ring-primary"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-2">
                      <Checkbox id="nda" />
                      <Label
                        htmlFor="nda"
                        className="text-sm font-light text-muted-foreground"
                      >
                        This inquiry contains confidential information -{" "}
                        <span className="font-medium text-foreground">
                          Enable NDA Protection
                        </span>
                      </Label>
                    </div>
                    <Button type="submit" className="w-full gap-2">
                      <BookOpen className="h-4 w-4" />
                      Submit Technical Inquiry
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
