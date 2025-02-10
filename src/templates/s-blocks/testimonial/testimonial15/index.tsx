import React from "react";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Users, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";

// Define the type for company logos
interface CompanyLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

// Define the company logos data directly in the component
const companyLogos: CompanyLogo[] = [
  {
    src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    alt: "TechGiant logo",
    width: 120,
    height: 40,
  },
  {
    src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    alt: "InnovateCorp logo",
    width: 120,
    height: 40,
  },
  {
    src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    alt: "FutureSystems logo",
    width: 120,
    height: 40,
  },
  {
    src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    alt: "QuantumTech logo",
    width: 120,
    height: 40,
  },
  {
    src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    alt: "QuantumTech logo",
    width: 120,
    height: 40,
  },
  {
    src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    alt: "QuantumTech logo",
    width: 120,
    height: 40,
  },
];

// Define the type for highlights
interface Highlight {
  icon: keyof typeof iconMap; // Use the keys of the iconMap
  title: string;
  description: string;
}

// Define a mapping for the icons
const iconMap = {
  Sparkles: Sparkles,
  Users: Users,
  Calendar: Calendar,
};

// Define the highlights data directly in the component
const highlightsData: Highlight[] = [
  {
    icon: "Sparkles",
    title: "Innovative Solutions",
    description: "Discover groundbreaking solutions and technologies.",
  },
  {
    icon: "Users",
    title: "Community Collaboration",
    description: "Connect and collaborate with fellow innovators.",
  },
  {
    icon: "Calendar",
    title: "Exclusive Events",
    description: "Access to members-only events and workshops.",
  },
];

export default function InnovatorsCommunity() {
  return (
    <section className="bg-gradient-to-b from-background to-primary/5 py-24 sm:py-32">
      <div className="container">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-8">
            <h1 className="text-balance text-4xl font-extrabold tracking-tight lg:text-5xl">
              Ignite Your Innovation Journey
            </h1>
            <p className="text-lg text-muted-foreground">
              Join the Innovators Community and unlock a world of collaboration,
              learning, and growth. Connect with visionaries, access exclusive
              resources, and shape the future of technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Join the Community
              </Button>
              <Button size="lg" variant="outline" className="group">
                Explore Benefits{" "}
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="space-y-4">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Trusted by Industry Leaders
              </h2>
              <div className="flex flex-wrap items-center gap-8">
                {companyLogos.map((logo) => (
                  <Image
                    key={logo.alt}
                    src={logo.src}
                    alt={logo.alt}
                    width={logo.width}
                    height={logo.height}
                    className="opacity-70 transition-opacity hover:opacity-100"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <TestimonialCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialCarousel() {
  const testimonials = [
    {
      name: "Dr. Emily Chen",
      role: "AI Research Scientist",
      content:
        "The Innovators Community has been instrumental in accelerating my research. The collaborative atmosphere and cutting-edge discussions have led to breakthroughs I couldn't have achieved alone.",
      badgeText: "AI & Machine Learning",
      image: {
        src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        alt: "Dr. Emily Chen",
      },
    },
    {
      name: "Alex Rodriguez",
      role: "Startup Founder",
      content:
        "Joining this community was a game-changer for my startup. The mentorship and resources available have helped us navigate challenges and scale faster than we ever imagined.",
      badgeText: "Entrepreneurship",
      image: {
        src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        alt: "Alex Rodriguez",
      },
    },
    {
      name: "Sarah Patel",
      role: "Product Manager",
      content:
        "The insights I've gained from the Innovators Community have revolutionized our product development process. It's like having a think tank of brilliant minds at your fingertips.",
      badgeText: "Product Innovation",
      image: {
        src: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        alt: "Sarah Patel",
      },
    },
  ];

  return (
    <div className="space-y-6">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
}

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  badgeText: string;
  image: {
    src: string;
    alt: string;
  };
}

function TestimonialCard({
  name,
  role,
  content,
  badgeText,
  image,
}: TestimonialCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="flex items-start gap-4 bg-primary/5 p-6">
        <Avatar className="size-12 border-2 border-primary">
          <Image src={image.src} alt={image.alt} width={48} height={48} />
        </Avatar>
        <div className="space-y-1">
          <h3 className="font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
        <Badge variant="secondary" className="ml-auto">
          {badgeText}
        </Badge>
      </div>
      <div className="p-6">
        <p className="text-sm text-muted-foreground">&quot;{content}&quot;</p>
      </div>
    </Card>
  );
}
