"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Bell,
  Star,
  Zap,
  Bug,
  Download,
  ChevronRight,
  ChevronLeft,
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
export default function Changelog() {
  const [activeVersion, setActiveVersion] = useState<string>("1.2.1");
  const [activeTab, setActiveTab] = useState<
    "all" | "feature" | "improvement" | "bugfix"
  >("all");

  // Reverse the changelogData array to display oldest first
  const reversedChangelogData = [...changelogData].reverse();

  const activeEntry = reversedChangelogData.find(
    (entry) => entry.version === activeVersion,
  );

  const filterChanges = (changes: ChangelogEntry["changes"]) => {
    if (activeTab === "all") return changes;
    return changes.filter((change) => change.type === activeTab);
  };

  const handlePrevVersion = () => {
    const currentIndex = reversedChangelogData.findIndex(
      (entry) => entry.version === activeVersion,
    );
    if (currentIndex > 0) {
      setActiveVersion(reversedChangelogData[currentIndex - 1]?.version ?? "");
    }
  };

  const handleNextVersion = () => {
    const currentIndex = reversedChangelogData.findIndex(
      (entry) => entry.version === activeVersion,
    );
    if (currentIndex < reversedChangelogData.length - 1) {
      setActiveVersion(reversedChangelogData[currentIndex + 1]?.version ?? "");
    }
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-3 text-4xl font-bold">Changelog Timeline</h1>
        <p className="mb-8 text-muted-foreground">
          Explore our journey of improvements and features.
        </p>
        <div className="mx-auto flex max-w-sm flex-col gap-4 sm:flex-row">
          <Input
            type="email"
            placeholder="name@example.com"
            className="bg-background"
          />
          <Button className="w-full sm:w-auto">
            Get Updates
            <Bell className="ml-2 size-4" />
          </Button>
        </div>
      </div>

      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-between">
          {reversedChangelogData.map((entry, index) => (
            <TooltipProvider key={entry.version}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={
                      activeVersion === entry.version ? "default" : "outline"
                    }
                    size="icon"
                    className="relative z-10"
                    onClick={() => setActiveVersion(entry.version)}
                  >
                    {index + 1}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Version {entry.version}</p>
                  <p>{entry.date}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </div>

      {activeEntry && (
        <div className="mb-8 rounded-lg bg-card p-6 shadow-lg">
          <div className="mb-4 flex items-center justify-between">
            <Badge variant="default" className="text-lg">
              v{activeEntry.version}
            </Badge>
            <span className="text-sm text-muted-foreground">
              {activeEntry.date}
            </span>
          </div>
          <h2 className="mb-2 text-2xl font-semibold">{activeEntry.title}</h2>
          <p className="mb-4 text-muted-foreground">
            {activeEntry.description}
          </p>

          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as typeof activeTab)}
            className="mb-4"
          >
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="feature">Features</TabsTrigger>
              <TabsTrigger value="improvement">Improvements</TabsTrigger>
              <TabsTrigger value="bugfix">Bugfixes</TabsTrigger>
            </TabsList>
          </Tabs>

          <ScrollArea className="h-[200px] rounded-md border p-4">
            <ul className="space-y-3">
              {filterChanges(activeEntry.changes).map((change, index) => (
                <li key={index} className="flex items-start gap-2">
                  {change.type === "feature" && (
                    <Star className="mt-0.5 size-5 text-yellow-500" />
                  )}
                  {change.type === "improvement" && (
                    <Zap className="mt-0.5 size-5 text-blue-500" />
                  )}
                  {change.type === "bugfix" && (
                    <Bug className="mt-0.5 size-5 text-green-500" />
                  )}
                  <span>{change.text}</span>
                </li>
              ))}
            </ul>
          </ScrollArea>
        </div>
      )}

      <div className="flex justify-between">
        <Button
          variant="outline"
          onClick={handlePrevVersion}
          disabled={activeVersion === reversedChangelogData[0]?.version}
        >
          <ChevronLeft className="mr-2 size-4" />
          Previous Version
        </Button>
        <Button
          variant="outline"
          onClick={handleNextVersion}
          disabled={
            activeVersion ===
            reversedChangelogData[reversedChangelogData.length - 1]?.version
          }
        >
          Next Version
          <ChevronRight className="ml-2 size-4" />
        </Button>
      </div>

      <div className="mt-8 flex justify-center">
        <Button variant="outline">
          <Download className="mr-2 size-4" />
          Download full changelog
        </Button>
      </div>
    </div>
  );
}
