import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  ExternalLink,
  Globe,
  Book,
  Code,
  Cpu,
  Database,
  Server,
  Camera,
  Lightbulb,
  Atom,
} from "lucide-react";

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

export default function Linkhub11() {
  return (
    <div className="container mx-auto py-16">
      <Card className="mx-auto max-w-3xl">
        <CardHeader>
          <CardTitle className="text-2xl">
            Timeline of Internet History
          </CardTitle>
          <CardDescription>
            Explore key milestones in the evolution of the Internet
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[70vh] pr-4">
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-muted-foreground/20" />
              {timelineItems.map((item, index) => (
                <div key={index} className="mb-8 flex items-start">
                  <div className="relative z-10 flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {item.icon}
                  </div>
                  <div className="ml-4 flex-grow">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <span className="text-sm text-muted-foreground">
                        {item.date}
                      </span>
                    </div>
                    <p className="mt-1 text-muted-foreground">
                      {item.description}
                    </p>
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
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
}
