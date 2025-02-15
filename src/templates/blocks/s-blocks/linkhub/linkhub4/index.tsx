import * as React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Twitter,
  Facebook,
  Instagram,
  Tv,
  Zap,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";

interface LinkItem {
  href: string;
  label: string;
  icon: React.ReactNode;
  description: string;
  image: string;
  category: string;
}

const links: LinkItem[] = [
  {
    href: "https://twitter.com",
    label: "Twitter",
    icon: <Twitter className="size-6" />,
    description: "Real-time updates and conversations",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Social Media",
  },
  {
    href: "https://facebook.com",
    label: "Facebook",
    icon: <Facebook className="size-6" />,
    description: "Connect with friends and family",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Social Media",
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: <Instagram className="size-6" />,
    description: "Share your life in pictures",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Social Media",
  },
  {
    href: "https://bbc.com",
    label: "BBC",
    icon: <Tv className="size-6" />,
    description: "British Broadcasting Corporation",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "News",
  },
  {
    href: "https://cnn.com",
    label: "CNN",
    icon: <Tv className="size-6" />,
    description: "Cable News Network",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "News",
  },
  {
    href: "https://techcrunch.com",
    label: "TechCrunch",
    icon: <Zap className="size-6" />,
    description: "Latest tech news and startups",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Technology",
  },
  {
    href: "https://wired.com",
    label: "Wired",
    icon: <Zap className="size-6" />,
    description: "Tech trends and culture",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Technology",
  },
  {
    href: "https://theverge.com",
    label: "The Verge",
    icon: <Zap className="size-6" />,
    description: "Tech, science, and culture",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Technology",
  },
];

export default function LinkHub4() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Grid Layout Link Hub
      </h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {links.map((link) => (
          <Card
            key={link.href}
            className="overflow-hidden transition-shadow hover:shadow-lg"
          >
            <CardHeader className="p-0">
              <div className="relative">
                <Image
                  src={link.image}
                  alt={`${link.label} preview`}
                  className="h-40 w-full object-cover"
                  height={100}
                  width={200}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-2 left-2 flex items-center space-x-2">
                  <div className="rounded-full bg-background p-2 text-primary">
                    {link.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">
                    {link.label}
                  </h3>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <Badge variant="secondary" className="mb-2">
                {link.category}
              </Badge>
              <p className="text-sm text-muted-foreground">
                {link.description}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-sm font-medium text-primary hover:underline"
              >
                <span>Visit Site</span>
                <ExternalLink className="size-4" />
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
