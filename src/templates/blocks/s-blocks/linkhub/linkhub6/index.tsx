import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Newspaper,
  Twitter,
  Facebook,
  Instagram,
  Tv,
  Zap,
  ExternalLink,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

export default function CardBasedLinkHub() {
  const categories = [
    {
      title: "Social Media Essentials",
      description:
        "Stay connected with the world through these popular social media platforms.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Social Media Essentials preview",
      badge: "Social Media",
      links: [
        {
          href: "https://twitter.com",
          label: "Twitter",
          icon: <Twitter className="size-4" />,
        },
        {
          href: "https://facebook.com",
          label: "Facebook",
          icon: <Facebook className="size-4" />,
        },
        {
          href: "https://instagram.com",
          label: "Instagram",
          icon: <Instagram className="size-4" />,
        },
      ],
      viewAllText: "View All Social Media Links",
    },
    {
      title: "Global News Sources",
      description:
        "Stay informed with these reputable international news outlets.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Global News Sources preview",
      badge: "News",
      links: [
        {
          href: "https://bbc.com",
          label: "BBC",
          icon: <Tv className="size-4" />,
        },
        {
          href: "https://cnn.com",
          label: "CNN",
          icon: <Tv className="size-4" />,
        },
        {
          href: "https://reuters.com",
          label: "Reuters",
          icon: <Newspaper className="size-4" />,
        },
      ],
      viewAllText: "View All News Links",
    },
    {
      title: "Tech News and Trends",
      description:
        "Explore the latest in technology, gadgets, and digital culture.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Tech News and Trends preview",
      badge: "Technology",
      links: [
        {
          href: "https://techcrunch.com",
          label: "TechCrunch",
          icon: <Zap className="size-4" />,
        },
        {
          href: "https://wired.com",
          label: "Wired",
          icon: <Zap className="size-4" />,
        },
        {
          href: "https://theverge.com",
          label: "The Verge",
          icon: <Zap className="size-4" />,
        },
      ],
      viewAllText: "View All Technology Links",
    },
  ];

  return (
    <div className="container mx-auto py-16">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Card-Based Link Hub
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => (
          <Card key={index} className="overflow-hidden">
            <CardHeader className="p-0">
              <div className="relative">
                <Image
                  src={category.image}
                  alt={category.alt}
                  className="h-48 w-full object-cover"
                  height={200}
                  width={400}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2">
                  <Badge>{category.badge}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <CardTitle className="mb-2 text-xl">{category.title}</CardTitle>
              <CardDescription>{category.description}</CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col items-start space-y-2 p-4">
              <div className="flex flex-wrap gap-2">
                {category.links.map((link, linkIndex) => (
                  <Button
                    key={linkIndex}
                    variant="outline"
                    size="sm"
                    className="inline-flex items-center space-x-1"
                    asChild
                  >
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                      <span>{link.label}</span>
                      <ExternalLink className="ml-1 size-3" />
                    </a>
                  </Button>
                ))}
              </div>
              <Button variant="link" className="mt-2 p-0" asChild>
                <a href="#" className="inline-flex items-center space-x-1">
                  <span>{category.viewAllText}</span>
                  <ArrowRight className="size-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
