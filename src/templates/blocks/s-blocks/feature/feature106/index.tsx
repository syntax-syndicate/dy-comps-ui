"use client";

import * as React from "react";
import {
  Target,
  PanelsTopLeft,
  Blocks,
  PieChart,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function Feature106() {
  const [activeFeature, setActiveFeature] = React.useState(0);

  const features = [
    {
      icon: Target,
      title: "Task Coordination",
      description:
        "Easily manage and organize tasks to improve your workflow efficiency.",
      content: "Master Task Coordination",
      contentDescription:
        "Learn to easily manage and organize tasks to improve workflow efficiency. Explore how this simplifies task coordination for better results.",
      bulletPoints: [
        "Centralized task management system",
        "Real-time updates and notifications",
        "Customizable workflow templates",
        "Automated task assignment based on team member skills",
        "Progress tracking and reporting features",
      ],
    },
    {
      icon: PanelsTopLeft,
      title: "Team Collaboration",
      description:
        "Boost teamwork with intuitive communication and collaboration tools.",
      content: "Enhance Team Collaboration",
      contentDescription:
        "Discover how our intuitive communication and collaboration tools can boost teamwork and productivity across your organization.",
      bulletPoints: [
        "Integrated chat and video conferencing",
        "Shared document editing and version control",
        "Team calendars and scheduling tools",
        "Project-specific discussion boards",
        "Cross-functional team spaces for seamless collaboration",
      ],
    },
    {
      icon: Blocks,
      title: "Resource Management",
      description:
        "Maximize resource use for greater efficiency and project success.",
      content: "Optimize Resource Management",
      contentDescription:
        "Learn how to maximize resource utilization, leading to greater efficiency and increased project success rates.",
      bulletPoints: [
        "Dynamic resource allocation algorithms",
        "Capacity planning and forecasting tools",
        "Skill matrix and resource matching",
        "Time tracking and utilization reports",
        "Budget management and cost optimization features",
      ],
    },
    {
      icon: PieChart,
      title: "System Integration",
      description:
        "Integrate your tools seamlessly for a smoother, more efficient workflow.",
      content: "Seamless System Integration",
      contentDescription:
        "Explore how our platform integrates seamlessly with your existing tools, creating a smoother and more efficient workflow.",
      bulletPoints: [
        "API-first architecture for easy integrations",
        "Pre-built connectors for popular tools and services",
        "Custom workflow automation across systems",
        "Data synchronization and consistency management",
        "Unified dashboard for cross-system analytics",
      ],
    },
  ];

  return (
    <div className="container flex flex-col py-16">
      <div className="grid h-1/2 grid-cols-3 gap-px overflow-hidden rounded-lg border bg-border">
        <div className="col-span-1 flex flex-col">
          {features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveFeature(index)}
              className={cn(
                "group relative flex items-center justify-between p-6 text-left transition-colors duration-300",
                activeFeature === index
                  ? "bg-background"
                  : "bg-muted hover:bg-muted/80",
              )}
            >
              <span
                className={cn(
                  "absolute inset-y-0 left-0 w-[3px] bg-primary transition-opacity duration-300",
                  activeFeature === index ? "opacity-100" : "opacity-0",
                )}
              />
              <div className="flex items-center gap-3">
                <feature.icon className="size-5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
              <ChevronRight className="size-5 text-muted-foreground" />
            </button>
          ))}
        </div>
        <div className="col-span-2 flex flex-col justify-between overflow-y-auto bg-background p-10">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-foreground">
              {features[activeFeature]?.content}
            </h2>
            <p className="text-lg text-muted-foreground">
              {features[activeFeature]?.contentDescription}
            </p>
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-foreground">
                Key Features:
              </h3>
              <ul className="list-disc space-y-2 pl-6">
                {features[activeFeature]?.bulletPoints.map((point, index) => (
                  <li key={index} className="text-muted-foreground">
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pt-6">
              <h3 className="mb-4 text-xl font-medium text-foreground">
                How It Works:
              </h3>
              <p className="text-muted-foreground">
                Our {features[activeFeature]?.title.toLowerCase()} feature is
                designed to streamline your workflow and boost productivity. By
                leveraging cutting-edge technology and user-centric design,
                we&apos;ve created a solution that adapts to your unique needs.
                Whether you&apos;re a small team or a large enterprise, our
                platform scales effortlessly to meet your requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
