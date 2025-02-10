import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Twitter,
  Facebook,
  Instagram,
  Newspaper,
  Tv,
  Globe,
  Cpu,
  Wifi,
  Zap,
  ExternalLink,
} from "lucide-react";

interface LinkItem {
  href: string;
  label: string;
}

interface Category {
  name: string;
  description: string;
  icon: React.ReactNode;
  links: LinkItem[];
}

const categories: Category[] = [
  {
    name: "Social Media",
    description: "Connect with friends and the world",
    icon: <Globe className="size-6 text-primary" />,
    links: [
      { href: "https://twitter.com", label: "Twitter" },
      { href: "https://facebook.com", label: "Facebook" },
      { href: "https://instagram.com", label: "Instagram" },
    ],
  },
  {
    name: "News",
    description: "Stay informed with the latest headlines",
    icon: <Newspaper className="size-6 text-primary" />,
    links: [
      { href: "https://bbc.com", label: "BBC" },
      { href: "https://cnn.com", label: "CNN" },
      { href: "https://reuters.com", label: "Reuters" },
    ],
  },
  {
    name: "Technology",
    description: "Explore the cutting edge of tech",
    icon: <Cpu className="size-6 text-primary" />,
    links: [
      { href: "https://techcrunch.com", label: "TechCrunch" },
      { href: "https://wired.com", label: "Wired" },
      { href: "https://theverge.com", label: "The Verge" },
    ],
  },
];

export default function CardGridLinkHub() {
  return (
    <div className="bg-background py-16">
      <div className="container mx-auto">
        <h1 className="mb-2 text-center text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Card Grid Link Hub
        </h1>
        <p className="mb-8 text-center text-lg leading-8 text-muted-foreground">
          Explore curated links from various categories in an easy-to-navigate
          card format.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Card key={category.name} className="overflow-hidden">
              <CardHeader className="bg-muted pb-4">
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary" className="p-1.5">
                    {category.icon}
                  </Badge>
                  <CardTitle>{category.name}</CardTitle>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-2">
                  {category.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="group flex items-center justify-between rounded-md p-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="flex items-center space-x-2">
                          <LinkIcon label={link.label} />
                          <span>{link.label}</span>
                        </span>
                        <ExternalLink className="size-4 opacity-0 transition-opacity group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}

function LinkIcon({ label }: { label: string }) {
  switch (label.toLowerCase()) {
    case "twitter":
      return <Twitter className="size-4" />;
    case "facebook":
      return <Facebook className="size-4" />;
    case "instagram":
      return <Instagram className="size-4" />;
    case "bbc":
    case "cnn":
      return <Tv className="size-4" />;
    case "reuters":
      return <Newspaper className="size-4" />;
    case "techcrunch":
    case "wired":
    case "the verge":
      return <Zap className="size-4" />;
    default:
      return <Wifi className="size-4" />;
  }
}
