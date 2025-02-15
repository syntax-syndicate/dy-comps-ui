"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ArrowRight,
  ChevronDown,
  ChevronUp,
  Star,
  Zap,
  Bug,
} from "lucide-react";

type ChangelogEntry = {
  version: string;
  date: string;
  title: string;
  description: string;
  changes: { type: "feature" | "improvement" | "bugfix"; text: string }[];
};

const changelogData: ChangelogEntry[] = [
  {
    version: "1.2.1",
    date: "23 September 2024",
    title: "New features and improvements",
    description: "Exciting updates to enhance your experience.",
    changes: [
      { type: "feature", text: "Added new feature to export data" },
      { type: "improvement", text: "Improved performance and speed" },
      { type: "bugfix", text: "Fixed minor bugs and issues" },
      { type: "feature", text: "Added new feature to import data" },
    ],
  },
  {
    version: "1.1.0",
    date: "15 August 2024",
    title: "Major performance boost",
    description: "Significant improvements to speed and efficiency.",
    changes: [
      { type: "improvement", text: "Optimized database queries" },
      { type: "feature", text: "Introduced new dashboard widgets" },
      { type: "bugfix", text: "Resolved user reported issues" },
    ],
  },
  {
    version: "1.0.0",
    date: "21 July 2024",
    title: "First version of our platform",
    description:
      "Introducing our new platform to help you manage projects and tasks.",
    changes: [
      { type: "feature", text: "Core functionality implemented" },
      { type: "feature", text: "User authentication and profiles" },
      { type: "feature", text: "Basic reporting and analytics" },
    ],
  },
];

export default function Changelog3() {
  const [expandedVersion, setExpandedVersion] = useState<string | null>(
    "1.2.1",
  );

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold">Changelog</h1>
        <p className="mb-8 text-muted-foreground">
          Stay updated with our latest improvements and features.
        </p>
        <div className="mx-auto flex max-w-sm gap-2">
          <Input
            type="email"
            placeholder="name@example.com"
            className="bg-background"
          />
          <Button>
            Subscribe
            <ArrowRight className="ml-2 size-4" />
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {changelogData.map((entry) => (
          <div
            key={entry.version}
            className="overflow-hidden rounded-lg bg-card shadow-md"
          >
            <div
              className="flex cursor-pointer items-center justify-between p-4 transition-colors hover:bg-accent/50"
              onClick={() =>
                setExpandedVersion(
                  expandedVersion === entry.version ? null : entry.version,
                )
              }
            >
              <div className="flex items-center gap-4">
                <Badge
                  variant={entry.version === "1.2.1" ? "default" : "secondary"}
                  className="text-sm"
                >
                  v{entry.version}
                </Badge>
                <h2 className="text-lg font-semibold">{entry.title}</h2>
              </div>
              <div className="flex items-center gap-4">
                <span className="hidden text-sm text-muted-foreground sm:inline">
                  {entry.date}
                </span>
                {expandedVersion === entry.version ? (
                  <ChevronUp className="size-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="size-5 text-muted-foreground" />
                )}
              </div>
            </div>
            {expandedVersion === entry.version && (
              <div className="bg-accent/20 p-4">
                <p className="mb-4 text-muted-foreground">
                  {entry.description}
                </p>
                <ScrollArea className="h-[200px] rounded-md border p-4">
                  <ul className="space-y-3">
                    {entry.changes.map((change, index) => (
                      <li key={index} className="flex items-start gap-2">
                        {change.type === "feature" && (
                          <Star className="mt-0.5 size-5 text-primary" />
                        )}
                        {change.type === "improvement" && (
                          <Zap className="mt-0.5 size-5 text-primary" />
                        )}
                        {change.type === "bugfix" && (
                          <Bug className="mt-0.5 size-5 text-primary" />
                        )}
                        <span>{change.text}</span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
