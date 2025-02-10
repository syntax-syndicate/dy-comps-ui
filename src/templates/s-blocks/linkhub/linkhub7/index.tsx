"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Globe,
  Newspaper,
  Twitter,
  Facebook,
  Instagram,
  Tv,
  Zap,
} from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface LinkItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

interface CarouselItem {
  title: string;
  description: string;
  image: string;
  category: string;
  links: LinkItem[];
}

const carouselItems: CarouselItem[] = [
  {
    title: "Social Media Essentials",
    description:
      "Stay connected with the world through these popular social media platforms.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Social Media",
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
  },
  {
    title: "Global News Sources",
    description:
      "Stay informed with these reputable international news outlets.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "News",
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
  },
  {
    title: "Tech News and Trends",
    description:
      "Explore the latest in technology, gadgets, and digital culture.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Technology",
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
  },
  {
    title: "Professional Networking",
    description:
      "Build your career and connect with professionals in your industry.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    category: "Career",
    links: [
      {
        href: "https://linkedin.com",
        label: "LinkedIn",
        icon: <Globe className="size-4" />,
      },
      {
        href: "https://glassdoor.com",
        label: "Glassdoor",
        icon: <Globe className="size-4" />,
      },
    ],
  },
];

export default function LinkHub7() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="container mx-auto py-16">
      <h1 className="mb-8 text-center text-3xl font-bold">Carousel Link Hub</h1>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {carouselItems.map((item, index) => (
              <div
                key={index}
                className="min-w-0 flex-[0_0_100%] pl-4 sm:flex-[0_0_50%] md:flex-[0_0_33.33%]"
              >
                <Card className="h-full overflow-hidden">
                  <CardHeader className="p-0">
                    <div className="relative">
                      <Image
                        src={item.image}
                        alt={`${item.title} preview`}
                        className="h-48 w-full object-cover"
                        height={400}
                        width={600}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-2 left-2">
                        <Badge>{item.category}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="mb-2 text-xl">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="flex flex-wrap gap-2 p-4">
                    {item.links.map((link) => (
                      <Button
                        key={link.href}
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
                  </CardFooter>
                </Card>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full"
          onClick={scrollPrev}
        >
          <ChevronLeft className="size-4" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full"
          onClick={scrollNext}
        >
          <ChevronRight className="size-4" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </div>
  );
}
