import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
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
import { ArrowRight, Eye, ArrowUpRight } from "lucide-react";

interface Technology {
  name: string;
  logo: string;
}

interface CaseStudy {
  title: string;
  description: string;
  liveUrl: string;
  image: string;
  technologies: Technology[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "Real-Time Poker Odds Alchemist",
    description:
      "Pioneering a sophisticated AI engine capable of calculating real-time poker odds. This complex undertaking includes advanced probability algorithms, machine learning, and an intuitive user interface. It delivers precise odds and strategic insights, analyzing thousands of scenarios per second, ensuring compliance with gaming regulations, and upholding peak performance.",
    liveUrl: "#",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    technologies: [
      {
        name: "Python",
        logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "TensorFlow",
        logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "React.js",
        logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Node.js",
        logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "MongoDB",
        logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
  {
    title: "Predictive Sports Analytics Platform",
    description:
      "Developed a groundbreaking sports betting platform, leveraging AI to forecast game outcomes. This includes meticulous analysis of historical data, player metrics, and real-time feeds. Enhanced with blockchain-based security, it guarantees transparency and reliability, boasting live betting, personalized tips, and advanced risk management features.",
    liveUrl: "#",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    technologies: [
      {
        name: "Python",
        logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Scikit-learn",
        logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Ethereum",
        logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Vue.js",
        logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "PostgreSQL",
        logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
  {
    title: "AI-Driven Casino Gaming Suite",
    description:
      "Transformed classic casino games with the power of AI. This suite offers an adaptive blackjack dealer, pattern-detecting roulette, and personalized slot machines. It assures fairness and delivers an engaging and dynamic gaming experience, fortified by robust security protocols for user protection and fraud prevention.",
    liveUrl: "#",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    technologies: [
      {
        name: "C++",
        logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "CUDA",
        logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Unity",
        logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "AWS",
        logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
      {
        name: "Blockchain",
        logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      },
    ],
  },
];

const CaseStudyCard: React.FC<{ caseStudy: CaseStudy }> = ({ caseStudy }) => {
  return (
    <Card className="border-none shadow-none">
      <CardHeader className="px-0">
        <div className="relative aspect-video w-full">
          <Image
            src={
              caseStudy.image ||
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            }
            alt={caseStudy.title}
            fill
            className="rounded-lg object-cover shadow-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority // Load the image first
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-4 px-0">
        <CardTitle className="text-3xl font-bold leading-tight sm:text-4xl">
          {caseStudy.title}
        </CardTitle>
        <a
          href={caseStudy.liveUrl}
          className="inline-flex items-center text-lg font-medium text-primary hover:underline"
        >
          Experience the game
          <ArrowUpRight className="ml-2.5 h-5 w-5" />
        </a>
        <p className="text-muted-foreground">{caseStudy.description}</p>
        <div className="flex flex-wrap items-center gap-2.5">
          <TooltipProvider>
            {caseStudy.technologies.map((tech, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <div className="rounded-lg p-1 hover:bg-accent">
                    <Image
                      src={
                        tech.logo ||
                        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                      }
                      alt={tech.name}
                      width={32}
                      height={32}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{tech.name}</p>
                </TooltipContent>
              </Tooltip>
            ))}
          </TooltipProvider>
        </div>
      </CardContent>
      <CardFooter className="px-0">
        <Button>
          Delve into the case study
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default function OurWorkSection() {
  return (
    <section className="bg-background py-8 antialiased sm:py-16 lg:py-24">
      <div className="mx-auto max-w-screen-xl px-4 lg:px-6">
        <div className="mx-auto max-w-2xl space-y-4 text-center">
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl">
            Our Gaming AI Marvels
          </h2>{" "}
          <p className="text-xl text-muted-foreground">
            Explore our groundbreaking work reshaping the gaming sector through
            advanced AI and responsible design.
          </p>
          <div className="mt-4 flex items-center justify-center gap-6">
            <Button variant="link" className="text-primary">
              <Eye className="mr-2 h-5 w-5" />
              View all creations
            </Button>
            <Button variant="link" className="text-primary">
              Collaborate on future projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-5xl space-y-16 sm:mt-12 lg:mt-16">
          {caseStudies.map((caseStudy, index) => (
            <CaseStudyCard key={index} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}
