"use client";

import { useState } from "react";

import {
  BarChart,
  Users,
  HardDrive,
  Headphones,
  Layers,
  Code,
  Check,
  X,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";

interface Feature {
  icon: LucideIcon;
  text: string;
  value?: number;
}

interface PricingPlan {
  name: string;
  description: string;
  basePrice: number;
  recommended?: boolean;
  features: Feature[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    description: "For individuals and small projects",
    basePrice: 9,
    features: [
      { icon: Users, text: "Up to 5 users", value: 5 },
      { icon: Layers, text: "Up to 10 projects", value: 10 },
      { icon: BarChart, text: "Basic analytics" },
      { icon: HardDrive, text: "Up to 20GB storage", value: 20 },
      { icon: Code, text: "API access" },
    ],
  },
  {
    name: "Pro",
    description: "Ideal for growing teams and businesses",
    basePrice: 29,
    recommended: true,
    features: [
      { icon: Users, text: "Up to 20 users", value: 20 },
      { icon: Layers, text: "Unlimited projects" },
      { icon: BarChart, text: "Advanced analytics" },
      { icon: HardDrive, text: "Up to 100GB storage", value: 100 },
      { icon: Headphones, text: "Priority support" },
      { icon: Code, text: "Custom integrations" },
    ],
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large organizations",
    basePrice: 99,
    features: [
      { icon: Users, text: "Unlimited users" },
      { icon: Layers, text: "Unlimited projects" },
      { icon: BarChart, text: "Custom analytics" },
      { icon: HardDrive, text: "Unlimited storage" },
      { icon: Headphones, text: "Dedicated support" },
      { icon: Code, text: "Custom development" },
    ],
  },
];

const featureComparison = [
  { feature: "Users", starter: "5", pro: "20", enterprise: "Unlimited" },
  {
    feature: "Projects",
    starter: "10",
    pro: "Unlimited",
    enterprise: "Unlimited",
  },
  {
    feature: "Storage",
    starter: "20GB",
    pro: "100GB",
    enterprise: "Unlimited",
  },
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

export default function RefinedPricingDesign() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [customizations, setCustomizations] = useState<
    Record<string, Record<string, number>>
  >({
    Starter: { users: 1, projects: 1, storage: 5 },
    Pro: { users: 5, projects: 10, storage: 50 },
  });

  const calculatePrice = (plan: PricingPlan) => {
    const basePrice = plan.basePrice * (isAnnual ? 10 : 1);
    if (plan.name === "Enterprise") return "Custom";
    const userMultiplier = customizations[plan.name]?.users ?? 1;
    const projectMultiplier = customizations[plan.name]?.projects ?? 1;
    const storageMultiplier = customizations[plan.name]?.storage ?? 1;
    return Math.round(
      (basePrice * (userMultiplier + projectMultiplier + storageMultiplier)) /
        3,
    );
  };

  const renderFeatureValue = (value: string | boolean) => {
    if (typeof value === "boolean") {
      return value ? (
        <Check className="size-5 text-green-500" />
      ) : (
        <X className="size-5 text-red-500" />
      );
    }
    return value;
  };

  const handleCustomizationChange = (
    plan: string,
    feature: string,
    value: number,
  ) => {
    setCustomizations((prev) => ({
      ...prev,
      [plan]: {
        ...prev[plan],
        [feature]: value,
      },
    }));
  };

  return (
    <section className="bg-gradient-to-br from-background via-background to-secondary/20 py-24">
      <div className="container">
        <div className="mb-12 flex flex-col items-center space-y-4 text-center">
          <Badge
            variant="outline"
            className="rounded-full px-3 py-1 text-sm font-medium"
          >
            Flexible Pricing
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Tailor Your Perfect Plan
          </h2>
          <p className="max-w-[700px] text-lg/relaxed text-muted-foreground">
            Customize your plan to fit your exact needs. Adjust features and see
            pricing in real-time.
          </p>
          <div className="flex items-center space-x-2">
            <span>Monthly</span>
            <Switch
              checked={isAnnual}
              onCheckedChange={(checked) => setIsAnnual(checked)}
            />
            <span>Annual</span>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <Card key={plan.name} className={`border`}>
              <CardContent>
                <div className="flex justify-between py-6">
                  <h3 className="text-xl font-semibold">{plan.name}</h3>
                  {plan.recommended && (
                    <Badge className="text-sm">Recommended</Badge>
                  )}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
                <div className="mt-4">
                  <h4 className="text-2xl font-bold">
                    {calculatePrice(plan)} {isAnnual ? "/year" : "/month"}
                  </h4>
                </div>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature) => (
                    <li
                      key={feature.text}
                      className="flex items-center space-x-2"
                    >
                      <feature.icon className="size-5 text-muted-foreground" />
                      <span>{feature.text}</span>
                    </li>
                  ))}
                </ul>
                {plan.name !== "Enterprise" && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium">
                        Users: {customizations[plan.name]?.users}
                      </label>
                      <Slider
                        defaultValue={[customizations[plan.name]?.users ?? 1]}
                        min={1}
                        max={plan.name === "Starter" ? 5 : 20}
                        step={1}
                        onValueChange={(value) =>
                          handleCustomizationChange(
                            plan.name,
                            "users",
                            value[0] ?? 0,
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Projects: {customizations[plan.name]?.projects}
                      </label>
                      <Slider
                        defaultValue={[
                          customizations[plan.name]?.projects ?? 1,
                        ]}
                        min={1}
                        max={plan.name === "Starter" ? 10 : 100}
                        step={1}
                        onValueChange={(value) =>
                          handleCustomizationChange(
                            plan.name,
                            "projects",
                            value[0] ?? 0,
                          )
                        }
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium">
                        Storage: {customizations[plan.name]?.storage}GB
                      </label>
                      <Slider
                        defaultValue={[customizations[plan.name]?.storage ?? 5]}
                        min={5}
                        max={plan.name === "Starter" ? 20 : 100}
                        step={5}
                        onValueChange={(value) =>
                          handleCustomizationChange(
                            plan.name,
                            "storage",
                            value[0] ?? 0,
                          )
                        }
                      />
                    </div>
                  </div>
                )}
                <Button variant="outline" className="mt-6">
                  Select Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <Separator className="my-12" />
        <Tabs defaultValue="comparison">
          <TabsList>
            <TabsTrigger value="comparison">Feature Comparison</TabsTrigger>
          </TabsList>
          <TabsContent value="comparison">
            <ScrollArea>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead>Starter</TableHead>
                    <TableHead>Pro</TableHead>
                    <TableHead>Enterprise</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {featureComparison.map((row) => (
                    <TableRow key={row.feature}>
                      <TableCell>{row.feature}</TableCell>
                      <TableCell>{renderFeatureValue(row.starter)}</TableCell>
                      <TableCell>{renderFeatureValue(row.pro)}</TableCell>
                      <TableCell>
                        {renderFeatureValue(row.enterprise)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </ScrollArea>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
