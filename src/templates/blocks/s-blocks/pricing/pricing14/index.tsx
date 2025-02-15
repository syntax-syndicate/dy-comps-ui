import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Check } from "lucide-react";

const features = [
  "Unlimited projects",
  "Live chat support",
  "Live Collaboration",
  "Custom domain",
  "Unlimited users",
  "Unlimited storage",
];

export default function StandardPlanPricing() {
  return (
    <section className="py-16">
      <div className="container">
        <Card className="mx-auto max-w-screen-lg p-6 md:p-10">
          <div className="mb-12 flex items-center gap-3">
            <span className="text-2xl font-bold">Standard Plan</span>
            <Badge>20% off</Badge>
          </div>
          <div className="flex flex-col justify-between gap-6 md:flex-row">
            <h2 className="max-w-screen-sm text-3xl font-bold md:text-4xl">
              Launch your idea in minutes with this plan
            </h2>
            <div className="md:text-right">
              <span className="text-3xl font-bold md:text-5xl">$1999</span>
              <p className="text-muted-foreground">
                Starting price per project
              </p>
            </div>
          </div>
          <Separator className="my-8" />
          <CardContent className="p-0">
            <p className="mb-5 text-muted-foreground">
              Launch your project with the following features:
            </p>
            <div className="flex flex-col justify-between gap-10 md:flex-row md:gap-20">
              <ul className="grid gap-x-20 gap-y-4 font-medium md:grid-cols-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-4" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
                <Button size="lg" className="h-11 px-8">
                  Book a demo
                </Button>
                <Button variant="outline" size="lg" className="h-11 px-8">
                  Learn more
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
