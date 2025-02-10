"use client";

import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface LinkItem {
  href: string;
  label: string;
  category: string;
  description: string;
  image: string;
}

const links: LinkItem[] = [
  {
    href: "https://twitter.com",
    label: "Twitter",
    category: "Social",
    description: "Real-time updates and conversations",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    category: "Social",
    description: "Connect with friends and family",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    category: "Social",
    description: "Share your life in pictures",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    href: "https://bbc.com",
    label: "BBC",
    category: "News",
    description: "British Broadcasting Corporation",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    href: "https://cnn.com",
    label: "CNN",
    category: "News",
    description: "Cable News Network",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    href: "https://reuters.com",
    label: "Reuters",
    category: "News",
    description: "International news organization",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    href: "https://techcrunch.com",
    label: "TechCrunch",
    category: "Tech",
    description: "Latest tech news and startups",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    href: "https://wired.com",
    label: "Wired",
    category: "Tech",
    description: "Tech trends and culture",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    href: "https://theverge.com",
    label: "The Verge",
    category: "Tech",
    description: "Tech, science, and culture",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    href: "https://spotify.com",
    label: "Spotify",
    category: "Entertainment",
    description: "Music streaming platform",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    href: "https://netflix.com",
    label: "Netflix",
    category: "Entertainment",
    description: "Video streaming service",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    href: "https://youtube.com",
    label: "YouTube",
    category: "Entertainment",
    description: "Video sharing platform",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    href: "https://amazon.com",
    label: "Amazon",
    category: "Shopping",
    description: "Online shopping and e-commerce",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    href: "https://ebay.com",
    label: "eBay",
    category: "Shopping",
    description: "Online marketplace and auctions",
    image:
      "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?q=80&w=1596&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    href: "https://etsy.com",
    label: "Etsy",
    category: "Shopping",
    description: "Handmade and vintage items",
    image:
      "https://images.unsplash.com/photo-1581388646048-3c04adad37b3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const categoryColors: Record<string, string> = {
  Social: "bg-primary",
  News: "bg-green-600",
  Tech: "bg-purple-600",
  Entertainment: "bg-blue-600",
  Shopping: "bg-rose-600",
};

export default function LinkHub10() {
  return (
    <div className="container mx-auto py-16">
      <div className="mb-12 space-y-2 text-center">
        <h1 className="text-4xl font-bold tracking-tight [text-wrap:balance]">
          <span>Matrix Link Hub</span>
        </h1>
        <p className="text-muted-foreground">
          Quick access to essential resources
        </p>
      </div>

      <TooltipProvider>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {links.map((link) => (
            <Tooltip key={link.href}>
              <TooltipTrigger asChild>
                <Card className="group relative h-full overflow-hidden transition-all hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative aspect-square w-full">
                      <Image
                        src={link.image}
                        alt={link.label}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div
                        className={`absolute inset-0 ${categoryColors[link.category]} opacity-50 transition-opacity group-hover:opacity-70`}
                      />

                      {/* Category Badge */}
                      <div className="absolute left-2 top-2">
                        <span
                          className={`rounded-md px-2 py-1 text-xs font-medium text-primary-foreground ${categoryColors[link.category]}`}
                        >
                          {link.category}
                        </span>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/90 p-4 opacity-0 transition-opacity group-hover:opacity-100">
                        <h3 className="mb-2 text-center text-lg font-semibold text-foreground">
                          {link.label}
                        </h3>
                        <p className="mb-4 text-center text-sm text-muted-foreground">
                          {link.description}
                        </p>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                        >
                          Visit Site
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TooltipTrigger>
              <TooltipContent
                side="bottom"
                className="max-w-[200px] text-center"
              >
                <p className="font-medium">{link.label}</p>
                <p className="text-muted-foreground">{link.description}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>

      <div className="mt-8 text-center text-sm text-muted-foreground">
        Click any card to visit the external resource
      </div>
    </div>
  );
}
