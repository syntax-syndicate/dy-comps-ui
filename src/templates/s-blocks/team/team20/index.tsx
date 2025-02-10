"use client";

import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Andres Berlin",
    role: "Chief Executive Officer",
    description:
      "The CEO's role in raising a company, a corporate IQ is to establish an atmosphere that promotes knowledge sharing and collaboration.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Silene Tokyo",
    role: "VP Operations",
    description:
      "The Vice President, Operations is responsible for planning, directing, and overseeing finance and operations activities in the organization.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Johnson Stone",
    role: "Manager Development",
    description:
      "Our services encompass the assessment and repair of property damage caused by water, fire, smoke, or mold. We can also be a part of the restoration.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Dean Jones",
    role: "Principal Software Engineer",
    description:
      "An avid open source developer who loves to be creative and inventive. I have 20 years of experience in the field.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Rachel Adams",
    role: "Product Design Head",
    description:
      "Product designer with interests in immersive computing and XR, political ventures, and emerging technologies. Able to take ideas and give them a life.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Charles Keith",
    role: "UX Designer",
    description:
      "A UX designer is the voice of the customer. Our job is to look beyond the business goals. We don't just experience user interface but also questions it.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function TeamGrid() {
  return (
    <div className="container mx-auto py-12">
      <div className="space-y-2 text-center">
        <h2 className="text-sm font-semibold uppercase tracking-wide text-primary">
          BUILDING TEAM
        </h2>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          The Talented People Behind the Scenes of the Organization
        </h1>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-background">
            <div className="relative aspect-video">
              <Image
                src={member.image}
                alt={member.name}
                className="h-full w-full rounded-lg object-cover"
                height={200}
                width={200}
              />
            </div>
            <div className="">
              <div className="my-4 space-y-1">
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
              <div className="space-y-4 rounded-lg border border-t p-6 pt-4">
                <p className="text-sm text-muted-foreground">
                  {member.description}
                </p>
                <div className="flex gap-4">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Facebook className="size-5" />
                    <span className="sr-only">Facebook</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Twitter className="size-5" />
                    <span className="sr-only">Twitter</span>
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <Instagram className="size-5" />
                    <span className="sr-only">Instagram</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
