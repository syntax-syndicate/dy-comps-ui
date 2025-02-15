"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  X,
  ChevronRight,
  Globe,
  Newspaper,
  Cpu,
  Twitter,
  Facebook,
  Instagram,
  Tv,
  Zap,
  Music,
  Camera,
  ShoppingCart,
} from "lucide-react";

interface LinkItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface Category {
  name: string;
  icon: React.ReactNode;
  links: LinkItem[];
}

const categories: Category[] = [
  {
    name: "Social Media",
    icon: <Globe className="size-6" />,
    links: [
      {
        href: "https://twitter.com",
        label: "Twitter",
        icon: <Twitter className="size-6" />,
      },
      {
        href: "https://facebook.com",
        label: "Facebook",
        icon: <Facebook className="size-6" />,
      },
      {
        href: "https://instagram.com",
        label: "Instagram",
        icon: <Instagram className="size-6" />,
      },
    ],
  },
  {
    name: "News",
    icon: <Newspaper className="size-6" />,
    links: [
      {
        href: "https://bbc.com",
        label: "BBC",
        icon: <Tv className="size-6" />,
      },
      {
        href: "https://cnn.com",
        label: "CNN",
        icon: <Tv className="size-6" />,
      },
      {
        href: "https://reuters.com",
        label: "Reuters",
        icon: <Newspaper className="size-6" />,
      },
    ],
  },
  {
    name: "Technology",
    icon: <Cpu className="size-6" />,
    links: [
      {
        href: "https://techcrunch.com",
        label: "TechCrunch",
        icon: <Zap className="size-6" />,
      },
      {
        href: "https://wired.com",
        label: "Wired",
        icon: <Zap className="size-6" />,
      },
      {
        href: "https://theverge.com",
        label: "The Verge",
        icon: <Zap className="size-6" />,
      },
    ],
  },
  {
    name: "Entertainment",
    icon: <Music className="size-6" />,
    links: [
      {
        href: "https://spotify.com",
        label: "Spotify",
        icon: <Music className="size-6" />,
      },
      {
        href: "https://netflix.com",
        label: "Netflix",
        icon: <Tv className="size-6" />,
      },
      {
        href: "https://youtube.com",
        label: "YouTube",
        icon: <Camera className="size-6" />,
      },
    ],
  },
  {
    name: "Shopping",
    icon: <ShoppingCart className="size-6" />,
    links: [
      {
        href: "https://amazon.com",
        label: "Amazon",
        icon: <ShoppingCart className="size-6" />,
      },
      {
        href: "https://ebay.com",
        label: "eBay",
        icon: <ShoppingCart className="size-6" />,
      },
      {
        href: "https://etsy.com",
        label: "Etsy",
        icon: <ShoppingCart className="size-6" />,
      },
    ],
  },
];

export default function SlidingPaneLinkHub() {
  const [activeCategory, setActiveCategory] = React.useState<Category | null>(
    null,
  );

  return (
    <div className="container mx-auto py-16">
      <h1 className="mb-6 text-2xl font-bold">Sliding Pane Link Hub</h1>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {categories.map((category) => (
          <Button
            size={"lg"}
            key={category.name}
            variant="outline"
            className="h-24 flex-col items-center justify-center space-y-2"
            onClick={() => setActiveCategory(category)}
          >
            <div className="text-primary">{category.icon}</div>
            <span>{category.name}</span>
          </Button>
        ))}
      </div>

      {activeCategory && (
        <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 w-full max-w-sm border-l bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out sm:max-w-md">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{activeCategory.name}</h2>
              <Button size="icon" onClick={() => setActiveCategory(null)}>
                <X className="size-6" />
                <span className="sr-only">Close</span>
              </Button>
            </div>
            <ScrollArea className="mt-6 h-[calc(100vh-8rem)]">
              <div className="grid gap-4">
                {activeCategory.links.map((link) => (
                  <Card key={link.href}>
                    <CardContent className="p-4">
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 text-foreground no-underline hover:underline"
                      >
                        <div className="flex size-12 items-center justify-center rounded-full text-primary">
                          {link.icon}
                        </div>
                        <span className="flex-grow font-medium">
                          {link.label}
                        </span>
                        <ChevronRight className="size-6 text-muted-foreground" />
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
        </div>
      )}
    </div>
  );
}
