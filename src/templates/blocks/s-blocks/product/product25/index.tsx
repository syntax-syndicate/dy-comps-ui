"use client";

import React from "react";
import {
  Coffee,
  Leaf,
  Heart,
  Star,
  ChevronRight,
  Plus,
  Minus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function RainforestBrewMultiColumn() {
  const [quantity, setQuantity] = React.useState(1);

  return (
    <div className="container mx-auto py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Fixed Product Image Column */}
        <div className="md:col-span-1">
          <div className="sticky top-8">
            {/* Replace <img> with <Image> */}
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Rainforest Brew Coffee"
              className="h-auto w-full rounded-lg shadow-lg"
              width={500}
              height={500}
              priority
            />
          </div>
        </div>

        {/* Scrolling Details Column */}
        <div className="space-y-8 md:col-span-1">
          {/* Quick-jump Navigation */}
          <nav className="mb-8 flex space-x-4">
            <a
              href="#story"
              className="text-sm font-medium text-primary hover:underline"
            >
              Story
            </a>
            <a
              href="#process"
              className="text-sm font-medium text-primary hover:underline"
            >
              Process
            </a>
            <a
              href="#benefits"
              className="text-sm font-medium text-primary hover:underline"
            >
              Benefits
            </a>
            <a
              href="#testimonials"
              className="text-sm font-medium text-primary hover:underline"
            >
              Testimonials
            </a>
          </nav>

          {/* Expandable Sections */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="story" id="story">
              <AccordionTrigger>Our Story</AccordionTrigger>
              <AccordionContent>
                <p className="mb-4 text-muted-foreground">
                  Rainforest Brew was born from a passion for exceptional coffee
                  and a commitment to preserving the world&apos;s rainforests.
                  Our journey began when our founder, Maria, discovered a small
                  coffee farm on the edge of the Amazon rainforest.
                </p>
                <p className="mb-4 text-muted-foreground">
                  Inspired by the rich flavors and the farmers&apos; dedication
                  to sustainable practices, Maria set out to create a coffee
                  brand that would not only delight taste buds but also protect
                  the precious ecosystems where our beans are grown.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="process" id="process">
              <AccordionTrigger>Our Process</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <Coffee className="size-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Carefully Harvested</h4>
                      <p className="text-sm text-muted-foreground">
                        Our beans are hand-picked at peak ripeness.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Leaf className="size-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Sustainably Processed</h4>
                      <p className="text-sm text-muted-foreground">
                        We use eco-friendly processing methods.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Heart className="size-8 text-primary" />
                    <div>
                      <h4 className="font-semibold">Roasted with Love</h4>
                      <p className="text-sm text-muted-foreground">
                        Our master roasters bring out unique flavors.
                      </p>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="benefits" id="benefits">
              <AccordionTrigger>Benefits</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="mb-2 font-semibold">For Your Taste Buds</h4>
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      <li>Rich, complex flavors</li>
                      <li>Smooth, low-acidity profile</li>
                      <li>Variety of roasts available</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="mb-2 font-semibold">For the Planet</h4>
                    <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground">
                      <li>Supports rainforest conservation</li>
                      <li>Sustainable farming practices</li>
                      <li>100% recyclable packaging</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="testimonials" id="testimonials">
              <AccordionTrigger>Testimonials</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  {[
                    {
                      name: "Alex",
                      comment:
                        "I've never tasted coffee this good. Knowing it's helping save rainforests makes it even better!",
                    },
                    {
                      name: "Sam",
                      comment:
                        "Rainforest Brew has become my morning ritual. I love the smooth taste and the mission behind it.",
                    },
                  ].map((testimonial, index) => (
                    <Card key={index}>
                      <CardContent className="pt-6">
                        <div className="mb-2 flex items-center">
                          <Avatar className="mr-2 size-8">
                            <AvatarImage
                              src={`https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg`}
                            />
                            <AvatarFallback>
                              {testimonial.name.charAt(0)}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-semibold">
                              {testimonial.name}
                            </p>
                            <div className="flex">
                              {Array.from({ length: 5 }).map((_, i) => (
                                <Star
                                  key={i}
                                  className="size-3 fill-current text-yellow-500"
                                />
                              ))}
                            </div>
                          </div>
                        </div>
                        <p className="text-sm italic text-muted-foreground">
                          &quot;{testimonial.comment}&quot;
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Sticky Purchase Column */}
        <div className="md:col-span-1">
          <div className="sticky top-8 space-y-6">
            <h1 className="text-3xl font-bold">Rainforest Brew</h1>
            <p className="text-2xl font-semibold">$24.99</p>
            <div className="space-y-2">
              <Label htmlFor="roast">Select Roast</Label>
              <select id="roast" className="w-full rounded border p-2">
                <option>Light Roast</option>
                <option>Medium Roast</option>
                <option>Dark Roast</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="grind">Select Grind</Label>
              <select id="grind" className="w-full rounded border p-2">
                <option>Whole Bean</option>
                <option>Coarse</option>
                <option>Medium</option>
                <option>Fine</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="size-4" />
                </Button>
                <Input
                  id="quantity"
                  type="number"
                  value={quantity}
                  onChange={(e) =>
                    setQuantity(Math.max(1, parseInt(e.target.value) || 1))
                  }
                  className="w-20 text-center"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="size-4" />
                </Button>
              </div>
            </div>
            <Button className="w-full">
              Add to Cart
              <ChevronRight className="ml-2 size-4" />
            </Button>
            <p className="text-sm text-muted-foreground">
              Free shipping on orders over $50. 30-day money-back guarantee.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
