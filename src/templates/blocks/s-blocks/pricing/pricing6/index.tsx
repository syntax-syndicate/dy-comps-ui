import * as React from "react";
import { Check, Star, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

interface Feature {
  name: string;
  category: string;
}

const features: Feature[] = [
  { name: "Unlimited projects", category: "Core Features" },
  { name: "Advanced integrations", category: "Core Features" },
  { name: "24/7 premium support", category: "Core Features" },
  { name: "Real-time collaboration", category: "Productivity" },
  { name: "Version history", category: "Productivity" },
  { name: "AI-powered insights", category: "Productivity" },
  { name: "Custom branding", category: "Customization" },
  { name: "API access", category: "Customization" },
  { name: "Advanced security", category: "Customization" },
];

export default function PricingComponent() {
  const groupedFeatures = features.reduce<Record<string, string[]>>(
    (acc, feature) => {
      const category = feature.category || "Other";
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(feature.name);
      return acc;
    },
    {},
  );

  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="mb-12 flex flex-col items-center text-center">
          <Badge variant="outline" className="mb-2">
            Pricing
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Unlock Your Potential
          </h2>
          <p className="mt-4 max-w-[85%] text-muted-foreground sm:text-xl">
            One simple plan for all your needs. Start your 30-day free trial
            today.
          </p>
        </div>
        <Card className="mx-auto max-w-4xl">
          <div className="grid md:grid-cols-2">
            <div className="p-6 md:p-8">
              <CardHeader className="p-0">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl">Pro Plan</CardTitle>
                    <CardDescription>For teams and businesses</CardDescription>
                  </div>
                  <Star className="text-yellow-500" />
                </div>
              </CardHeader>
              <CardContent className="mt-6 p-0">
                <div className="flex items-baseline">
                  <span className="text-3xl font-bold">$</span>
                  <span className="text-5xl font-bold">39</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
                <Button className="mt-4 w-full">Start 30-day free trial</Button>
              </CardContent>
              <Separator className="my-6" />
              <CardFooter className="p-0">
                <Button className="w-full" variant="outline">
                  Contact sales
                  <ArrowRight className="ml-2 size-4" />
                </Button>
              </CardFooter>
            </div>
            <div className="rounded-r-none bg-muted p-6 sm:rounded-r-lg md:p-8">
              <h3 className="mb-4 font-semibold">All Features Included:</h3>
              <div className="grid gap-4">
                {Object.entries(groupedFeatures).map(
                  ([category, items], index, array) => (
                    <div key={category}>
                      <h4 className="mb-2 text-sm font-medium text-muted-foreground">
                        {category}
                      </h4>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li key={item} className="flex items-center">
                            <Check className="mr-2 size-4 text-primary" />
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                      {index < array.length - 1 && (
                        <Separator className="my-4" />
                      )}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}
