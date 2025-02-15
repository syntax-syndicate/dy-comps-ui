import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Pencil, Code, Database } from "lucide-react";
import Image from "next/image";

// Define the structure of a Project Showcase
interface ProjectShowcase {
  projectName: string;
  projectSynopsis: string; // Changed from Summary
  projectDiscipline: {
    // Changed from Type
    name: string;
    icon: React.ReactNode;
    accentColor: string; // Changed from Color
  };
  previewImage: string; // Changed from Source
  previewImageDark: string; // Changed from Source Dark
}

// Project Showcase Items
const projectShowcases: ProjectShowcase[] = [
  {
    projectName: "Brand Catalyst Website", // Changed from Marketing Agency Website
    projectSynopsis:
      "Engineered a dynamic digital storefront to connect users with a full suite of brand elevation services.", // Changed from projectSummary
    projectDiscipline: {
      // Changed from Type
      name: "UI/UX Innovation", // Changed from UI/UX Design
      icon: <Pencil className="mr-1 h-3 w-3" />,
      accentColor: "indigo", // Changed from Color
    },
    previewImage:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Changed from Source
    previewImageDark:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Changed from Source Dark
  },
  {
    projectName: "Insightful Analytics Hub", // Changed from Advanced Analytics Platform
    projectSynopsis:
      "Crafted a powerful analytics platform, enabling sophisticated data exploration and visualization for informed decision-making.", // Changed from projectSummary
    projectDiscipline: {
      // Changed from Type
      name: "Frontend Mastery", // Changed from Frontend Development
      icon: <Code className="mr-1 h-3 w-3" />,
      accentColor: "green", // Changed from Color
    },
    previewImage:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Changed from Source
    previewImageDark:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Changed from Source Dark
  },
  {
    projectName: "Collaborative Workflow Engine", // Changed from Efficient Task Management System
    projectSynopsis:
      "Developed a comprehensive workflow management solution to streamline tasks and foster seamless team collaboration.", // Changed from projectSummary
    projectDiscipline: {
      // Changed from Type
      name: "Backend Architectures", // Changed from Backend Engineering
      icon: <Database className="mr-1 h-3 w-3" />,
      accentColor: "primary", // Changed from Color
    },
    previewImage:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Changed from Source
    previewImageDark:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Changed from Source Dark
  },
  {
    projectName: "Intuitive Data Dashboard", // Changed from Dashboard User Interface
    projectSynopsis:
      "Designed an accessible and visually engaging dashboard to maximize user experience and data comprehension within enterprise landscapes.", // Changed from projectSummary
    projectDiscipline: {
      // Changed from Type
      name: "UI/UX Innovation", // Changed from UI/UX Design
      icon: <Pencil className="mr-1 h-3 w-3" />,
      accentColor: "indigo", // Changed from Color
    },
    previewImage:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Changed from Source
    previewImageDark:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Changed from Source Dark
  },
  {
    projectName: "Impactful Cause Platform", // Changed from Non-Profit Organization Website
    projectSynopsis:
      "Built a responsive digital platform for a non-profit, enhancing community outreach and galvanizing support for their mission.", // Changed from projectSummary
    projectDiscipline: {
      // Changed from Type
      name: "UI/UX Innovation", // Changed from UI/UX Design
      icon: <Pencil className="mr-1 h-3 w-3" />,
      accentColor: "indigo", // Changed from Color
    },
    previewImage:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Changed from Source
    previewImageDark:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Changed from Source Dark
  },
  {
    projectName: "Secure Communication Portal", // Changed from Secure Email Client
    projectSynopsis:
      "Engineered a secure and reliable email client, offering a fortified platform for professional communication.", // Changed from projectSummary
    projectDiscipline: {
      // Changed from Type
      name: "Frontend Mastery", // Changed from Frontend Development
      icon: <Code className="mr-1 h-3 w-3" />,
      accentColor: "green", // Changed from Color
    },
    previewImage:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Changed from Source
    previewImageDark:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Changed from Source Dark
  },
];

// Project Showcase Card Component
const ProjectShowcaseCard: React.FC<{ project: ProjectShowcase }> = ({
  project,
}) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="p-0">
        <div className="relative aspect-video">
          <Image
            className="aspect-[3/2] h-full w-full rounded-t-lg object-cover"
            src={
              project.previewImage ||
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            } // Changed from Source
            alt={project.projectName}
            height={400}
            width={400}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow space-y-3 p-6">
        <Badge
          variant="secondary"
          className={`bg-${project.projectDiscipline.accentColor}-500 `}
        >
          {project.projectDiscipline.icon}
          {project.projectDiscipline.name}
        </Badge>
        <h3 className="text-2xl font-bold leading-tight text-foreground">
          <a href="#" className="hover:underline">
            {project.projectName}
          </a>
        </h3>
        <p className="text-lg font-normal text-muted-foreground">
          {project.projectSynopsis} {/* Changed from projectSummary */}
        </p>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <div className="flex items-center gap-4">
          <Button>Explore Case Study</Button>
          <Button
            variant="outline"
            className="inline-flex items-center justify-center"
          >
            <ArrowUpRight className="mr-2 h-5 w-5" />
            View Live
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

// Custom Works Section Component
const CustomWorksSection = () => {
  return (
    <section className="bg-background py-8 antialiased sm:py-16 lg:py-24">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Our Creative Portfolio
          </h2>{" "}
          {/* Changed from Custom Creations */}
          <p className="mt-4 text-base font-normal text-muted-foreground sm:text-xl">
            A showcase of diverse projects, spotlighting our expertise and
            adaptable skill set. {/* Changed from A curated selection... */}
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-12 sm:mt-16 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-16">
          {projectShowcases.map((project, index) => (
            <ProjectShowcaseCard key={index} project={project} /> // Changed from ProjectOverviewCard
          ))}
        </div>
      </div>
    </section>
  );
};

export default CustomWorksSection;
