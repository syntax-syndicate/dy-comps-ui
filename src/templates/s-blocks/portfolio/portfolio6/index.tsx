"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

interface PortfolioItem {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "E-commerce Website",
    description:
      "A fully responsive e-commerce platform built with Next.js and Stripe integration.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    projectUrl: "https://example.com/project1",
  },
  {
    id: "2",
    title: "Task Management App",
    description:
      "A React-based task management application with drag-and-drop functionality.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    projectUrl: "https://example.com/project2",
  },
  {
    id: "3",
    title: "Weather Dashboard",
    description:
      "A weather dashboard that provides real-time weather information using a third-party API.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    projectUrl: "https://example.com/project3",
  },
  {
    id: "4",
    title: "Social Media Analytics Tool",
    description:
      "An analytics dashboard for social media managers to track engagement and growth.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    projectUrl: "https://example.com/project4",
  },
  {
    id: "5",
    title: "Fitness Tracking Mobile App",
    description:
      "A cross-platform mobile app for tracking workouts and nutrition, built with React Native.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    projectUrl: "https://example.com/project5",
  },
  {
    id: "6",
    title: "AI-powered Chatbot",
    description:
      "An intelligent chatbot built with natural language processing capabilities for customer support.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    projectUrl: "https://example.com/project6",
  },
];

export default function PortfolioShowcase() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto py-12">
        <h2 className="mb-8 text-3xl font-bold">My Portfolio</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {portfolioItems.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden bg-card transition-shadow duration-300 hover:shadow-lg"
            >
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={
                    item.imageUrl ||
                    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  }
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </AspectRatio>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
              <CardFooter>
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <a
                    href={item.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
