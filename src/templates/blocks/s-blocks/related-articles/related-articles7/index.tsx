"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight, Clock, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

const articles = [
  {
    title: "Unlocking the Power of  Apps",
    topic: "Web Development",
    description:
      "Discover how PWAs are bridging the gap between web and native apps, offering enhanced  experiences.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "2023-11-15",
    readTime: "7 min read",
    href: "#",
  },
  {
    title: "The Rise of AI in Content Creation",
    topic: "Artificial Intelligence",
    description:
      "Explore how AI-powered tools are transforming content creation, from generating text.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "2023-11-08",
    readTime: "9 min read",
    href: "#",
  },
  {
    title: "Building Scalable Microservices",
    topic: "Backend Development",
    description:
      "Learn best practices for designing and deploying microservices architectures using Node.js.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "2023-11-01",
    readTime: "10 min read",
    href: "#",
  },
  {
    title: "Data Privacy in the Age of Big Data",
    topic: "Data Science",
    description:
      "Understand the challenges and strategies for protecting user data in a data-driven world.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    date: "2023-10-25",
    readTime: "6 min read",
    href: "#",
  },
];

export default function ImprovedArticlesCarousel() {
  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Recommended Reading
        </h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="mx-auto w-[90%]"
        >
          <CarouselContent>
            {articles.map((article, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 md:basis-1/3">
                <div className="p-1">
                  <Card className="flex h-full flex-col overflow-hidden">
                    <Image
                      src={
                        article.image ||
                        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                      }
                      alt={article.title}
                      className="h-48 w-full object-cover"
                      width={300}
                      height={300}
                    />
                    <CardHeader className="flex-1">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="mb-2">
                          {article.topic}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="mr-1 h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">
                        <Link href={article.href} className="hover:underline">
                          {article.title}
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <CalendarCheck className="mr-1 h-4 w-4" />
                        <span>{article.date}</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={article.href}>
                          Read Article <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="z-10" />
          <CarouselNext className="z-10" />
        </Carousel>
      </div>
    </section>
  );
}
