import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Layout, Zap, Smartphone, Shield } from "lucide-react";

interface ChangelogEntry {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ChangelogProps {
  entries: ChangelogEntry[];
}

function Changelog({ entries }: ChangelogProps) {
  return (
    <Card className="w-full max-w-3xl shadow-lg">
      <CardHeader className="space-y-1">
        <CardTitle className="text-3xl font-bold">Changelog</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Stay up to date with our latest improvements and updates
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          {entries.map((entry, index) => (
            <div key={index} className="relative">
              {index > 0 && <Separator className="my-4" />}
              <div className="space-y-2">
                <div className="flex items-center space-x-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                    {entry.icon}
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold">{entry.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {entry.date}
                    </Badge>
                  </div>
                </div>
                <p className="pl-14 text-sm text-muted-foreground">
                  {entry.description}
                </p>
              </div>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

const changelogEntries: ChangelogEntry[] = [
  {
    date: "2023-06-01",
    title: "New Dashboard Layout",
    description:
      "Redesigned the dashboard for better user experience and improved data visualization.",
    icon: <Layout className="size-6 text-primary" />,
  },
  {
    date: "2023-05-15",
    title: "Performance Optimization",
    description:
      "Improved application performance by optimizing database queries and implementing caching.",
    icon: <Zap className="size-6 text-primary" />,
  },
  {
    date: "2023-05-01",
    title: "User Authentication Update",
    description:
      "Enhanced security with two-factor authentication and improved password policies.",
    icon: <Shield className="size-6 text-primary" />,
  },
  {
    date: "2023-04-20",
    title: "Mobile Responsiveness",
    description:
      "Improved the application's layout and functionality on mobile devices.",
    icon: <Smartphone className="size-6 text-primary" />,
  },
];

export default function EnhancedChangelog() {
  return (
    <div className="container flex items-center justify-center bg-background py-16">
      <Changelog entries={changelogEntries} />
    </div>
  );
}
