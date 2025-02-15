import * as React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Globe,
  Newspaper,
  Cpu,
  Twitter,
  Facebook,
  Instagram,
  Tv,
  Zap,
  ExternalLink,
} from "lucide-react";

interface LinkItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  description: string;
}

interface Category {
  name: string;
  icon: React.ReactNode;
  links: LinkItem[];
}

const categories: Category[] = [
  {
    name: "Social Media",
    icon: <Globe className="size-5" />,
    links: [
      {
        href: "https://twitter.com",
        label: "Twitter",
        icon: <Twitter className="size-4" />,
        description: "Real-time updates and conversations",
      },
      {
        href: "https://facebook.com",
        label: "Facebook",
        icon: <Facebook className="size-4" />,
        description: "Connect with friends and family",
      },
      {
        href: "https://instagram.com",
        label: "Instagram",
        icon: <Instagram className="size-4" />,
        description: "Share your life in pictures",
      },
    ],
  },
  {
    name: "News",
    icon: <Newspaper className="size-5" />,
    links: [
      {
        href: "https://bbc.com",
        label: "BBC",
        icon: <Tv className="size-4" />,
        description: "British Broadcasting Corporation",
      },
      {
        href: "https://cnn.com",
        label: "CNN",
        icon: <Tv className="size-4" />,
        description: "Cable News Network",
      },
      {
        href: "https://reuters.com",
        label: "Reuters",
        icon: <Newspaper className="size-4" />,
        description: "International news organization",
      },
    ],
  },
  {
    name: "Technology",
    icon: <Cpu className="size-5" />,
    links: [
      {
        href: "https://techcrunch.com",
        label: "TechCrunch",
        icon: <Zap className="size-4" />,
        description: "Latest tech news and startups",
      },
      {
        href: "https://wired.com",
        label: "Wired",
        icon: <Zap className="size-4" />,
        description: "Tech trends and culture",
      },
      {
        href: "https://theverge.com",
        label: "The Verge",
        icon: <Zap className="size-4" />,
        description: "Tech, science, and culture",
      },
    ],
  },
];

export default function LinkHub5() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="mb-8 text-center text-3xl font-bold">Tabbed Link Hub</h1>
      <Tabs defaultValue={categories[0]?.name} className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          {categories.map((category) => (
            <TabsTrigger
              key={category.name}
              value={category.name}
              className="flex items-center space-x-2"
            >
              <span className="text-primary">{category.icon}</span>

              <span>{category.name}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        {categories.map((category) => (
          <TabsContent key={category.name} value={category.name}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span className="text-primary">{category.icon}</span>

                  <span>{category.name} Links</span>
                </CardTitle>
                <CardDescription>
                  Explore curated links for {category.name.toLowerCase()}.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {category.links.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-start space-x-2 rounded-md border p-3 transition-colors hover:bg-muted"
                      >
                        <div className="mt-1 shrink-0">{link.icon}</div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{link.label}</span>
                            <ExternalLink className="size-3" />
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {link.description}
                          </p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
