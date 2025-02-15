import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Code, Palette, Monitor } from "lucide-react";
import Image from "next/image";

interface ProjectHighlight {
  organization: string;
  projectTitle: string;
  projectSummary: string;
  techStack: string[];
  imageUrl: string;
}

const projectHighlights: ProjectHighlight[] = [
  {
    organization: "Alphabet Inc.",
    projectTitle: "Corporate Website Redesign",
    projectSummary: "Revamped global web presence with modern design system",
    techStack: ["React", "TypeScript", "Tailwind", "Figma"],
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    organization: "Microsoft Corp.",
    projectTitle: "Operations Dashboard",
    projectSummary: "Enterprise resource planning interface overhaul",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    organization: "Adobe Inc.",
    projectTitle: "Brand Identity Refresh",
    projectSummary: "Complete visual identity system modernization",
    techStack: ["Illustrator", "After Effects", "Blender", "WebGL"],
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

const PortfolioSection = () => {
  return (
    <section className="bg-background antialiased">
      <div className="container mx-auto py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="outline" className="mb-4 gap-2 px-4 py-2">
            <Palette className="h-4 w-4 text-primary" />
            Featured Work
          </Badge>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Engineering Digital Excellence
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Transformative solutions powering industry leaders&apos; digital
            evolution
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {projectHighlights.map((project, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden transition-all hover:shadow-xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.projectTitle}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <CardHeader className="pb-2">
                <Badge variant="secondary" className="w-fit gap-2">
                  <Monitor className="h-4 w-4" />
                  {project.organization}
                </Badge>
              </CardHeader>

              <CardContent className="pb-4">
                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {project.projectTitle}
                </h3>
                <p className="text-muted-foreground">
                  {project.projectSummary}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="text-xs font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="pt-2">
                <Button className="w-full gap-2">
                  Case Study
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" className="gap-2">
            View All Projects
            <Code className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
