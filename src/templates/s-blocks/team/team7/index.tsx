"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Facebook, Github, Globe, Twitter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  social: {
    facebook?: string;
    twitter?: string;
    github?: string;
    website?: string;
  };
}

const team: TeamMember[] = [
  {
    name: "Zara Vortex",
    role: "Visionary Architect",
    description:
      "Spearheading the platform's evolution with cutting-edge solutions and strategic foresight.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    social: {
      facebook: "#",
      twitter: "#",
      github: "#",
      website: "#",
    },
  },
  {
    name: "Kael Stormforge",
    role: "Innovation Catalyst",
    description:
      "Orchestrating technological breakthroughs and system architecture revolutions.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    social: {
      facebook: "#",
      twitter: "#",
      github: "#",
      website: "#",
    },
  },
  {
    name: "Lyra Solstice",
    role: "UI/UX Alchemist",
    description:
      "Transforming digital interfaces into golden user experiences through design magic.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    social: {
      facebook: "#",
      twitter: "#",
      github: "#",
      website: "#",
    },
  },
  {
    name: "Jaxon Blaze",
    role: "Growth Hacker",
    description:
      "Igniting brand visibility through unconventional marketing alchemy and viral strategies.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    social: {
      facebook: "#",
      twitter: "#",
      github: "#",
      website: "#",
    },
  },
];

export default function Component() {
  return (
    <section className="w-full bg-background py-12 text-foreground">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Our <span className="text-primary">Team</span>
          </h2>
          <p className="max-w-[900px] text-muted-foreground">
            Meet the visionaries rewriting the rules of digital innovation
            through relentless creativity and technical mastery
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {team.map((member) => (
            <Card key={member.name}>
              <CardHeader className="flex flex-row items-center gap-4">
                <Image
                  alt={member.name}
                  className="size-24 rounded-lg object-cover"
                  height={96}
                  src={member.image}
                  width={96}
                />
                <div className="grid gap-1">
                  <CardTitle>{member.name}</CardTitle>
                  <CardDescription className="font-semibold text-muted-foreground">
                    {member.role}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4">
                <p className="text-sm text-muted-foreground">
                  {member.description}
                </p>
                <div className="flex gap-4">
                  {member.social.facebook && (
                    <Link
                      href={member.social.facebook}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Facebook className="size-4" />
                      <span className="sr-only">Facebook</span>
                    </Link>
                  )}
                  {member.social.twitter && (
                    <Link
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Twitter className="size-4" />
                      <span className="sr-only">Twitter</span>
                    </Link>
                  )}
                  {member.social.github && (
                    <Link
                      href={member.social.github}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Github className="size-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  )}
                  {member.social.website && (
                    <Link
                      href={member.social.website}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Globe className="size-4" />
                      <span className="sr-only">Website</span>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
