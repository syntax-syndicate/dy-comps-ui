"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Mail, Briefcase, ChevronRight } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  email: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Silene Tokyo",
    role: "VP Operations",
    email: "silene-tokyo@organization.com",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Alex Rivera",
    role: "Lead Designer",
    email: "alex-rivera@organization.com",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Emma Chen",
    role: "Senior Developer",
    email: "emma-chen@organization.com",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Jamal Williams",
    role: "Product Manager",
    email: "jamal-williams@organization.com",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Sofia Patel",
    role: "Marketing Specialist",
    email: "sofia-patel@organization.com",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Lucas Schmidt",
    role: "Data Analyst",
    email: "lucas-schmidt@organization.com",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-gradient-to-b from-background to-primary/5 py-12">
      <div className="container">
        <div className="flex flex-col items-start gap-4">
          <div className="space-y-2">
            <Badge variant="outline" className="border-primary/50 text-primary">
              Building Team
            </Badge>
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Meet Our Talented Team
            </h2>
          </div>
          <div className="mt-6 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="group overflow-hidden transition-all hover:shadow-lg"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/10 opacity-0 transition-opacity group-hover:opacity-100" />
                    <Avatar className="h-48 w-full rounded-none">
                      <AvatarImage
                        src={member.image}
                        alt={member.name}
                        className="object-cover"
                      />
                      <AvatarFallback className="text-4xl">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="space-y-2 p-4">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Briefcase className="mr-1 size-4" />
                      {member.role}
                    </div>
                    <div className="flex items-center text-sm">
                      <Mail className="mr-1 size-4" />
                      {member.email}
                    </div>
                  </div>
                  <div className="flex justify-end bg-primary/5 p-4">
                    <ChevronRight className="size-5 text-primary transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
