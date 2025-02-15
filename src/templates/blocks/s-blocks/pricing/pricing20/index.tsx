"use client";

import { useState } from "react";
import {
  Check,
  ChevronRight,
  Zap,
  BarChart,
  Users,
  HardDrive,
  Headphones,
  Layers,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";

const pricingPlans = [
  {
    name: "Starter",
    description: "For individuals and small projects",
    monthlyPrice: 9,
    annualPrice: 90,
    features: [
      { icon: Users, text: "1 user" },
      { icon: Layers, text: "5 projects" },
      { icon: BarChart, text: "Basic analytics" },
      { icon: HardDrive, text: "5GB storage" },
      { icon: Code, text: "API access" },
    ],
    color: "bg-blue-500",
  },
  {
    name: "Pro",
    description: "Ideal for growing teams and businesses",
    monthlyPrice: 29,
    annualPrice: 290,
    features: [
      { icon: Users, text: "5 users" },
      { icon: Layers, text: "Unlimited projects" },
      { icon: BarChart, text: "Advanced analytics" },
      { icon: HardDrive, text: "50GB storage" },
      { icon: Headphones, text: "Priority support" },
      { icon: Code, text: "Custom integrations" },
    ],
    color: "bg-purple-500",
    recommended: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    monthlyPrice: 99,
    annualPrice: 990,
    features: [
      { icon: Users, text: "Unlimited users" },
      { icon: Layers, text: "Unlimited projects" },
      { icon: BarChart, text: "Custom analytics" },
      { icon: HardDrive, text: "Unlimited storage" },
      { icon: Headphones, text: "Dedicated support" },
      { icon: Code, text: "Custom development" },
    ],
    color: "bg-green-500",
  },
];

const featureComparison = [
  { feature: "Users", starter: "1", pro: "5", enterprise: "Unlimited" },
  {
    feature: "Projects",
    starter: "5",
    pro: "Unlimited",
    enterprise: "Unlimited",
  },
  { feature: "Storage", starter: "5GB", pro: "50GB", enterprise: "Unlimited" },
  {
    feature: "API Access",
    starter: "Basic",
    pro: "Advanced",
    enterprise: "Custom",
  },
  {
    feature: "Support",
    starter: "Email",
    pro: "Priority",
    enterprise: "Dedicated",
  },
  {
    feature: "Analytics",
    starter: "Basic",
    pro: "Advanced",
    enterprise: "Custom",
  },
  {
    feature: "Custom Integrations",
    starter: false,
    pro: true,
    enterprise: true,
  },
  {
    feature: "Custom Development",
    starter: false,
    pro: false,
    enterprise: true,
  },
];

export default function OriginalPricingDesign() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section className="bg-gradient-to-br from-background via-background to-secondary/20 py-24">
      <div className="container">
        <div className="mb-12 flex flex-col items-center space-y-4 text-center">
          <Badge
            variant="outline"
            className="rounded-full px-3 py-1 text-sm font-medium"
          >
            Pricing Options
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Select Your Ideal Plan
          </h2>
          <p className="max-w-[700px] text-lg/relaxed text-muted-foreground">
            Tailored solutions to match your ambitions. Choose a plan that
            aligns with your goals.
          </p>
        </div>

        <div className="mb-12 flex items-center justify-center space-x-4">
          <span
            className={`text-sm font-medium ${!isAnnual ? "text-primary" : "text-muted-foreground"}`}
          >
            Monthly
          </span>
          <Switch
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
            className="data-[state=checked]:bg-primary"
          />
          <span
            className={`text-sm font-medium ${isAnnual ? "text-primary" : "text-muted-foreground"}`}
          >
            Annual
          </span>
          <Badge variant="secondary" className="ml-2">
            20% off
          </Badge>
        </div>

        <div className="mb-16 grid gap-8 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden ${plan.recommended ? "border-primary shadow-lg" : ""}`}
            >
              <div className={`absolute inset-x-0 top-0 h-1 ${plan.color}`} />
              <CardHeader className="pb-0">
                <CardTitle className="flex items-center justify-between text-2xl font-bold">
                  {plan.name}
                  {plan.recommended && (
                    <Badge variant="default" className="ml-2">
                      <Zap className="mr-1 size-3" /> Popular
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="mb-4 flex items-baseline">
                  <span className="text-4xl font-bold">
                    $
                    {isAnnual
                      ? Math.floor(plan.annualPrice / 12)
                      : plan.monthlyPrice}
                  </span>
                  <span className="ml-1 text-muted-foreground">/mo</span>
                </div>
                <CardDescription className="mb-4">
                  {plan.description}
                </CardDescription>
                <Separator className="my-4" />
                <ul className="mb-6 space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <feature.icon
                        className={`size-5 ${plan.color} mr-2 flex-shrink-0 rounded-full p-1 text-primary-foreground`}
                      />
                      <span className="text-sm">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-0">
                <Button
                  className="w-full"
                  variant={plan.recommended ? "default" : "outline"}
                >
                  Choose {plan.name} <ChevronRight className="ml-2 size-4" />
                </Button>
              </CardFooter>
              {isAnnual && (
                <div className="absolute right-2 top-2">
                  <Badge variant="secondary" className="text-xs">
                    Save ${plan.annualPrice - plan.monthlyPrice * 12}/year
                  </Badge>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-24">
          <h3 className="mb-8 text-center text-2xl font-bold">
            Plan Comparison
          </h3>
          <ScrollArea className="h-[500px] w-full rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[200px]">Feature</TableHead>
                  <TableHead>Starter</TableHead>
                  <TableHead>Pro</TableHead>
                  <TableHead>Enterprise</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {featureComparison.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      {item.feature}
                    </TableCell>
                    <TableCell>{renderFeatureValue(item.starter)}</TableCell>
                    <TableCell>{renderFeatureValue(item.pro)}</TableCell>
                    <TableCell>{renderFeatureValue(item.enterprise)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </ScrollArea>
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Looking for a tailor-made solution?{" "}
            <Button variant="link" className="h-auto p-0">
              Get in touch with our experts
            </Button>
          </p>
        </div>
      </div>
    </section>
  );
}

function renderFeatureValue(value: string | boolean) {
  if (typeof value === "boolean") {
    return value ? (
      <Check className="size-5 text-green-500" />
    ) : (
      <span className="text-muted-foreground">-</span>
    );
  }
  return value;
}
