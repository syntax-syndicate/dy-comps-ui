"use client";

import Link from "next/link";
import { Star, Facebook, Instagram, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Check } from "lucide-react";

const product = {
  name: "Application UI Icon Pack",
  version: "1.0",
  updateDate: "June 5, 2024",
  price: "$220",
  rating: 4,
  description:
    "The Application UI Icon Pack comes with over 200 icons in 3 styles: outline, filled, and branded. This playful icon pack is tailored for complex application user interfaces with a friendly and legible look.",
  highlights: [
    "200+ SVG icons in 3 unique styles",
    "Compatible with Figma, Sketch, and Adobe XD",
    "Drawn on 24 × 24 pixel grid",
  ],
  license: {
    summary:
      "For personal and professional use. You cannot resell or redistribute these icons in their original or modified state.",
    details: [
      "You may use the icons for commercial and personal projects.",
      "You may modify the icons for your projects.",
      "You may not resell or redistribute the icons (even if modified).",
      "You may not use the icons in any template or app that is sold.",
      "Attribution is not required, but appreciated.",
    ],
  },
  faqs: [
    {
      question: "What file formats are included?",
      answer:
        "The icon pack includes SVG and AI files for all icons. We also provide a Figma file with all icons pre-organized.",
    },
    {
      question: "Can I use these icons in my commercial projects?",
      answer:
        "Yes, you can use these icons in both personal and commercial projects. However, you cannot resell or redistribute the icons themselves.",
    },
    {
      question: "Do you offer custom icon design services?",
      answer:
        "Yes, we offer custom icon design services. Please contact our support team for more information and pricing.",
    },
    {
      question: "How often do you update the icon pack?",
      answer:
        "We aim to update the icon pack with new icons and improvements every quarter. All updates are free for existing customers.",
    },
    {
      question: "Can I request new icons to be added?",
      answer:
        "We welcome icon requests from our customers. While we can guarantee all requests will be fulfilled, we consider each one for future updates.",
    },
  ],
  reviews: [
    {
      id: 1,
      author: "Emily Selman",
      date: "July 16, 2024",
      rating: 5,
      content:
        "This icon pack is just what I need for my latest project. There's an icon for just about anything I could ever need. Love the playful look!",
    },
    {
      id: 2,
      author: "Hector Gibbons",
      date: "July 12, 2024",
      rating: 5,
      content:
        "Blown away by how polished this icon pack is. Everything looks so consistent and each SVG is optimized out of the box so I can use it directly with confidence. It would take me several hours to create a single icon this good, so it's a steal at this price.",
    },
    {
      id: 3,
      author: "Mark Edwards",
      date: "July 6, 2024",
      rating: 4,
      content:
        "Really happy with look and options of these icons. I've found uses for them everywhere in my recent projects. I hope there will be 20px versions in the future!",
    },
  ],

  whatsIncluded: [
    "200+ unique icons in SVG format",
    "AI source files",
    "Figma file with organized icons",
    "24x24 pixel grid templates",
    "Icon usage guidelines PDF",
  ],
};

export default function Component() {
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Preview Area */}
          <div className="space-y-6">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 via-purple-600 to-indigo-800">
                <div className="absolute bottom-0 right-0 h-1/3 w-1/3 rounded-full bg-blue-400/30" />
                <div className="absolute -left-4 -top-4 h-1/2 w-1/2 rounded-full bg-purple-400/20" />
              </div>
              <div className="relative grid grid-cols-5 gap-4 p-8">
                {/* Sample Icons - Replace with actual icons */}
                {Array.from({ length: 30 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg bg-white/10 p-2"
                  >
                    <div className="h-full w-full rounded-md bg-white/20" />
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="reviews">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="reviews">Customer Reviews</TabsTrigger>
                <TabsTrigger value="faq">FAQ</TabsTrigger>
                <TabsTrigger value="license">License</TabsTrigger>
              </TabsList>
              <TabsContent value="reviews" className="space-y-4">
                {product.reviews.map((review) => (
                  <Card key={review.id}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <Avatar>
                            <AvatarFallback>{review.author[0]}</AvatarFallback>
                          </Avatar>
                          <div>
                            <CardTitle className="text-base">
                              {review.author}
                            </CardTitle>
                            <CardDescription>{review.date}</CardDescription>
                          </div>
                        </div>
                        <div className="flex">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={cn(
                                "size-4",
                                i < review.rating
                                  ? "fill-primary text-primary"
                                  : "fill-muted text-muted-foreground",
                              )}
                            />
                          ))}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>{review.content}</CardContent>
                  </Card>
                ))}
              </TabsContent>
              <TabsContent value="faq">
                <Card>
                  <CardHeader>
                    <CardTitle>Frequently Asked Questions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {product.faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                          <AccordionTrigger>{faq.question}</AccordionTrigger>
                          <AccordionContent>{faq.answer}</AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="license">
                <Card>
                  <CardHeader>
                    <CardTitle>License Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="font-medium">{product.license.summary}</p>
                      <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                        {product.license.details.map((detail, index) => (
                          <li key={index}>{detail}</li>
                        ))}
                      </ul>
                      <Link
                        href="#"
                        className="inline-block text-sm text-primary hover:text-primary/80"
                      >
                        Read full license
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Product Info */}
          <div className="flex flex-col space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn(
                        "size-5",
                        i < product.rating
                          ? "fill-primary text-primary"
                          : "fill-muted text-muted-foreground",
                      )}
                    />
                  ))}
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Version {product.version} (updated {product.updateDate})
              </p>
            </div>

            <p className="text-muted-foreground">{product.description}</p>

            <div className="flex gap-4">
              <Button size="lg" className="flex-1">
                Pay {product.price}
              </Button>
              <Button size="lg" variant="outline" className="flex-1">
                Preview
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Highlights</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc space-y-2 pl-4 text-sm text-muted-foreground">
                  {product.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What&apos;s Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {product.whatsIncluded.map((item, index) => (
                    <li key={index} className="flex items-center">
                      <Check className="mr-2 size-4 text-primary" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <div className="flex items-center space-x-4 border-t pt-6">
              <span className="text-sm font-medium">Share</span>
              <Button variant="ghost" size="icon">
                <Facebook className="size-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Instagram className="size-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Twitter className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
