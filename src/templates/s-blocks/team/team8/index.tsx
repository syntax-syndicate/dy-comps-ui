"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Github, Twitter, Instagram } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Andres Berlin",
    title: "Chief Executive Officer",
    description:
      "The CEO's role in raising a company, a corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Silene Tokyo",
    title: "Product Design Head",
    description:
      "The emphasis on innovation and technology in our companies has resulted in a few of them establishing global benchmarks in product design and development.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Johnson Stone",
    title: "Manager Development",
    description:
      "Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Dean Jones",
    title: "Principal Software Engineer",
    description:
      "An avid open source developer who loves to be creative and inventive. I have 20 years of experience in the field.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Rachel Adams",
    title: "Product Design Head",
    description:
      "Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Charles Keith",
    title: "UX Designer",
    description:
      "A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-muted/50 py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h3 className="text-sm uppercase tracking-wider text-primary">
              BUILDING TEAM
            </h3>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The Talented People{" "}
              <span className="text-primary">Behind the Scenes</span>
              <br />
              of the Organization
            </h2>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <Card key={member.name} className="border-0 bg-background">
              <CardContent className="flex flex-col items-center space-y-4 p-6">
                <div className="relative size-24">
                  <Image
                    alt={member.name}
                    className="rounded-full object-cover"
                    src={member.image}
                    width={96}
                    height={96}
                  />
                </div>
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {member.title}
                  </p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {member.description}
                  </p>
                </div>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Github className="size-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Twitter className="size-5" />
                    <span className="sr-only">Twitter</span>
                  </a>
                  <a
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Instagram className="size-5" />
                    <span className="sr-only">Instagram</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
