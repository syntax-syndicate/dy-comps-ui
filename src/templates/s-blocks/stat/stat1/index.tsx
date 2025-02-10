"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users, Calendar } from "lucide-react";

const stats = [
  {
    label: "Reduce your time to hire by",
    value: "4x",
    description: "quicker",
    icon: Clock,
  },
  {
    label: "Clients have seen a decrease of",
    value: "50%",
    description: "in time to hire",
    icon: Users,
  },
  {
    label: "Average number of hires per",
    value: "3",
    description: "months",
    icon: Calendar,
  },
];

export default function EnhancedStatSection() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter text-foreground sm:text-4xl md:mb-12 md:text-5xl lg:mb-16 lg:text-6xl">
          Revolutionize Your Hiring Process
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-lg text-muted-foreground md:mb-16 lg:mb-20">
          Our platform empowers you to streamline recruitment, saving time and
          resources while finding the best talent for your team.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                <stat.icon className="mb-4 h-12 w-12 text-primary" />
                <p className="mb-2 text-sm font-medium text-muted-foreground">
                  {stat.label}
                </p>
                <p className="mb-2 text-5xl font-bold text-foreground md:text-6xl">
                  {stat.value}
                </p>
                <p className="text-xl font-semibold text-primary">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
