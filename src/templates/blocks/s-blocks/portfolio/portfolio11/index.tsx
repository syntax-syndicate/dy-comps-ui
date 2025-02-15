"use client";

import { useState } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Code2, Palette, Pencil } from "lucide-react";
import Image from "next/image";

export default function PortfolioModern() {
  const projects = [
    {
      title: "Design System",
      description: "A comprehensive design system for enterprise applications",
      category: "Design",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      tags: ["Figma", "Design Systems", "UI/UX"],
      icon: Palette,
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory",
      category: "Development",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      tags: ["Next.js", "TypeScript", "Tailwind"],
      icon: Code2,
    },
    {
      title: "Brand Identity",
      description:
        "Complete brand identity design for a tech startups and large businesses",
      category: "Branding",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      tags: ["Branding", "Logo Design", "Guidelines"],
      icon: Pencil,
    },
  ];

  return (
    <div className="relative bg-accent px-4 py-20">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/10 to-background"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,hsl(var(--primary)/20%),transparent_80%)]"></div>

      <div className="relative mx-auto max-w-6xl">
        {/* Header Section */}
        <div className="mb-20 grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold tracking-tight lg:text-7xl">
              Creating Digital Experiences
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              Crafting innovative digital solutions through design, development,
              and strategic thinking. Let&apos;s build something amazing
              together.
            </p>
          </div>
          <div className="flex items-center justify-end">
            <div className="grid grid-cols-2 gap-4 rounded-lg">
              {[
                { label: "Projects", value: "47+" },
                { label: "Clients", value: "30+" },
                { label: "Experience", value: "5 Years" },
                { label: "Awards", value: "12" },
              ].map((stat) => (
                <Card key={stat.label} className="border bg-card p-6">
                  <CardContent className="space-y-2 p-0">
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div key={project.title}>
                <Card className="group relative overflow-hidden border bg-card transition-all hover:shadow-lg">
                  <CardContent className="p-0">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={
                          project.image ||
                          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                        }
                        alt={project.title}
                        className="aspect-video object-cover transition-transform duration-500 group-hover:scale-110"
                        height={400}
                        width={400}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 space-y-4">
                        <div className="flex items-center gap-2">
                          <project.icon className="h-5 w-5 text-primary" />
                          <span className="y text-sm font-medium uppercase">
                            {project.category}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground">
                          {project.title}
                        </h3>
                        <p className="line-clamp-2 text-sm text-muted-foreground">
                          {project.description}
                        </p>
                      </div>
                    </div>
                    <div className="space-y-4 p-4">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        variant="ghost"
                        className="w-full justify-between hover:bg-accent"
                      >
                        View Project
                        <ArrowUpRight className="h-5 w-5" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
