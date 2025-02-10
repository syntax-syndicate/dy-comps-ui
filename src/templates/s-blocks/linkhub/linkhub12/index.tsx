import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  ExternalLink,
  Globe,
  Book,
  Code,
  Cpu,
  Camera,
  Database,
  Server,
  Lightbulb,
  Atom,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TimelineItem {
  date: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const timelineItems: TimelineItem[] = [
  {
    date: "1969",
    title: "ARPANET",
    description: "The precursor to the Internet is created.",
    icon: <Globe className="size-6" />,
    link: "https://en.wikipedia.org/wiki/ARPANET",
  },
  {
    date: "1971",
    title: "Email",
    description: "The first email is sent using the @ symbol.",
    icon: <Server className="size-6" />,
    link: "https://en.wikipedia.org/wiki/Email",
  },
  {
    date: "1983",
    title: "TCP/IP",
    description:
      "The Internet protocol suite becomes the standard for computer network communications.",
    icon: <Cpu className="size-6" />,
    link: "https://en.wikipedia.org/wiki/Internet_protocol_suite",
  },
  {
    date: "1989",
    title: "World Wide Web",
    description: "Tim Berners-Lee proposes the World Wide Web.",
    icon: <Globe className="size-6" />,
    link: "https://en.wikipedia.org/wiki/World_Wide_Web",
  },
  {
    date: "1993",
    title: "Mosaic Web Browser",
    description: "The first popular web browser is released.",
    icon: <Book className="size-6" />,
    link: "https://en.wikipedia.org/wiki/Mosaic_(web_browser)",
  },
  {
    date: "1998",
    title: "Google",
    description: "Google is founded, revolutionizing web search.",
    icon: <Lightbulb className="size-6" />,
    link: "https://en.wikipedia.org/wiki/Google",
  },
  {
    date: "2004",
    title: "Facebook",
    description: "Facebook is launched, marking the rise of social media.",
    icon: <Database className="size-6" />,
    link: "https://en.wikipedia.org/wiki/Facebook",
  },
  {
    date: "2007",
    title: "iPhone",
    description:
      "The first iPhone is released, ushering in the smartphone era.",
    icon: <Atom className="size-6" />,
    link: "https://en.wikipedia.org/wiki/IPhone_(1st_generation)",
  },
  {
    date: "2010",
    title: "Instagram",
    description: "Instagram is launched, changing how we share photos.",
    icon: <Camera className="size-6" />,
    link: "https://en.wikipedia.org/wiki/Instagram",
  },
  {
    date: "2023",
    title: "AI Revolution",
    description: "Large language models like GPT-4 become widely accessible.",
    icon: <Code className="size-6" />,
    link: "https://en.wikipedia.org/wiki/GPT-4",
  },
];

export default function HorizontalTimelineLinkHub() {
  return (
    <div className="container mx-auto py-16">
      <Card className="mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl">
            Timeline of Internet History
          </CardTitle>
          <CardDescription>
            Explore key milestones in the evolution of the Internet
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="w-full whitespace-nowrap rounded-md border">
            <div className="flex p-4">
              {timelineItems.map((item, index) => (
                <div key={index} className="mr-8 w-64 flex-shrink-0 last:mr-0">
                  <div className="relative pb-8">
                    {index < timelineItems.length - 1 && (
                      <div className="absolute left-4 top-4 -ml-px h-0.5 bg-muted-foreground/20" />
                    )}
                    <div className="group relative flex items-center">
                      <span className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-primary ring-background">
                        {item.icon}
                      </span>
                      <span className="ml-4 flex flex-col">
                        <span className="text-sm font-medium text-muted-foreground">
                          {item.date}
                        </span>
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <span className="max-w-[180px] truncate text-lg font-semibold">
                                {item.title}
                              </span>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{item.title}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </span>
                    </div>
                    <div className="ml-12">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{item.description}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center text-sm text-primary hover:underline"
                      >
                        Learn more <ExternalLink className="ml-1 size-3" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
