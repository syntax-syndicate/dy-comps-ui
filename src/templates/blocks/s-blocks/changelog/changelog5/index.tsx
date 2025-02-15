import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Wrench, Bug } from "lucide-react";

type ChangelogItem = {
  date: string;
  title: string;
  description: string;
  type: "feature" | "improvement" | "bugfix";
};

const changelogData: ChangelogItem[] = [
  {
    date: "2023-12-01",
    title: "New Dashboard Layout",
    description:
      "Completely revamped the dashboard for better user experience and data visualization.",
    type: "feature",
  },
  {
    date: "2023-11-15",
    title: "Performance Optimization",
    description:
      "Improved overall app performance by optimizing database queries and caching mechanisms.",
    type: "improvement",
  },
  {
    date: "2023-11-10",
    title: "Bug Fix: User Authentication",
    description:
      "Fixed an issue where some users were experiencing login problems on certain devices.",
    type: "bugfix",
  },
  {
    date: "2023-11-01",
    title: "Dark Mode Support",
    description:
      "Added a new dark mode option for better viewing in low-light environments.",
    type: "feature",
  },
];

const getTypeColor = (type: ChangelogItem["type"]) => {
  switch (type) {
    case "feature":
      return "bg-primary text-primary-foreground";
    case "improvement":
      return "bg-secondary text-secondary-foreground";
    case "bugfix":
      return "bg-destructive text-destructive-foreground";
  }
};

const getTypeIcon = (type: ChangelogItem["type"]) => {
  switch (type) {
    case "feature":
      return <Zap className="size-4" />;
    case "improvement":
      return <Wrench className="size-4" />;
    case "bugfix":
      return <Bug className="size-4" />;
  }
};

export default function Changelog5() {
  return (
    <section className="py-16">
      <Card className="mx-auto w-full max-w-3xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Changelog
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-5 top-0 h-full w-0.5 bg-border"></div>

            {changelogData.map((item, index) => (
              <div key={index} className="group mb-8 flex items-start">
                {/* Timeline dot and date */}
                <div className="z-10 mr-4 flex flex-col items-center">
                  <div className="flex size-8 items-center justify-center rounded-full border-2 border-primary bg-background transition-all group-hover:border-primary/80 group-hover:bg-primary/10">
                    <span className="text-xs font-semibold">
                      {item.date.split("-")[2]}
                    </span>
                  </div>
                  <div className="mt-1 rounded bg-background px-2 py-1 text-xs text-muted-foreground">
                    {`${item.date.split("-")[1]}/${item.date.split("-")[0]?.slice(2)}`}
                  </div>
                </div>

                {/* Changelog card */}
                <Card className="flex-grow transition-all hover:shadow-lg">
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <CardTitle className="text-lg font-semibold">
                        {item.title}
                      </CardTitle>
                      <Badge
                        className={`${getTypeColor(item.type)} ml-2 flex items-center gap-1`}
                      >
                        {getTypeIcon(item.type)}
                        <span>{item.type}</span>
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
