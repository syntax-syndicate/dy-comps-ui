import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowUpRight, ArrowRight } from "lucide-react";

// Define the structure of a Project Showcase
interface ProjectShowcase {
  projectName: string;
  projectOverview: string;
  projectUrl: string;
  imageSrc: string;
  imageDarkSrc: string;
  technologiesUsed: Technology[];
}

// Define the structure of a Technology used in the project
interface Technology {
  techName: string;
  techLogo: string;
}

// Our Featured Project Showcases
const projectShowcases: ProjectShowcase[] = [
  {
    projectName: "Enterprise Dashboard Solution",
    projectOverview:
      "Developed a comprehensive dashboard to streamline data visualization and enhance operational efficiency for enterprise clients.",
    projectUrl: "https://example-dashboard.com", // Replace with a realistic URL
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    imageDarkSrc:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    technologiesUsed: [
      {
        techName: "HTML5",
        techLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        techName: "CSS3",
        techLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        techName: "JavaScript",
        techLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        techName: "Tailwind CSS",
        techLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        techName: "TypeScript",
        techLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
  {
    projectName: "E-commerce Platform Revamp",
    projectOverview:
      "Revitalized an existing e-commerce platform, enhancing user experience and implementing features to boost online sales.",
    projectUrl: "https://example-ecommerce.com", // Replace with a realistic URL
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    imageDarkSrc:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    technologiesUsed: [
      {
        techName: "WordPress",
        techLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        techName: "HTML5",
        techLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        techName: "CSS3",
        techLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        techName: "WooCommerce",
        techLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
  {
    projectName: "Secure Email Management System",
    projectOverview:
      "Engineered a robust email management system with enhanced security protocols and an intuitive user interface for enterprise communication.",
    projectUrl: "https://example-email.com", // Replace with a realistic URL
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    imageDarkSrc:
      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    technologiesUsed: [
      {
        techName: "TypeScript",
        techLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        techName: "Java",
        techLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        techName: "Tailwind CSS",
        techLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        techName: "React",
        techLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        techName: "HTML5",
        techLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        techName: "Amazon Web Services",
        techLogo:
          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
];

// Project Showcase Card Component
const ProjectShowcaseCard: React.FC<{
  project: ProjectShowcase;
  index: number;
}> = ({ project, index }) => {
  const isEvenItem = index % 2 === 1;
  return (
    <div
      className={`flex flex-col gap-y-8 sm:gap-y-12 lg:items-center lg:gap-x-16 xl:gap-x-24 ${
        isEvenItem ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      <div className="lg:w-1/2">
        <img
          className="w-full rounded-lg object-cover shadow-lg dark:hidden"
          src={
            project.imageSrc ||
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
          }
          alt={project.projectName}
        />
        <img
          className="hidden w-full rounded-lg object-cover shadow-lg dark:block"
          src={
            project.imageDarkSrc ||
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
          }
          alt={project.projectName}
        />
      </div>
      <div className="w-full shrink-0 space-y-6 lg:w-1/2">
        <div className="space-y-3">
          <h3 className="text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            {project.projectName}
          </h3>
          <a
            href={project.projectUrl}
            className="inline-flex items-center text-lg font-medium text-primary hover:underline"
          >
            {project.projectUrl}
            <ArrowUpRight className="ml-2.5 h-5 w-5" />
          </a>
          <p className="text-base font-normal text-muted-foreground sm:text-lg">
            {project.projectOverview}
          </p>
        </div>
        <div className="flex items-center gap-2.5">
          <TooltipProvider>
            {project.technologiesUsed.map((tech, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="rounded-lg p-1 hover:bg-accent">
                    <img
                      className="h-8 w-auto object-contain"
                      src={
                        tech.techLogo ||
                        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                      }
                      alt={tech.techName}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.techName}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
        <Button>
          Explore Project
          <ArrowRight className="-mr-1 ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

// Portfolio Section Component
const PortfolioSection = () => {
  return (
    <section className="bg-background py-8 antialiased sm:py-16 lg:py-24">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-base font-normal text-muted-foreground sm:text-xl">
            A selection of projects that exemplify our commitment to innovation
            and excellence.
          </p>
        </div>
        <div className="mt-12 space-y-16 sm:mt-16">
          {projectShowcases.map((project, index) => (
            <ProjectShowcaseCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
