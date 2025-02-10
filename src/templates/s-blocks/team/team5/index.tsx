import { Button } from "@/components/ui/button";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Alice Johnson",
    role: "CEO",
    bio: "Visionary leader with 15 years of experience in tech innovation.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Bob Smith",
    role: "CTO",
    bio: "Passionate about creating scalable solutions and mentoring developers.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Carol Williams",
    role: "Head of Design",
    bio: "Bringing creative ideas to life with user-centric design approaches.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "David Brown",
    role: "Lead Developer",
    bio: "Full-stack expert with a knack for solving complex problems.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Eva Martinez",
    role: "Product Manager",
    bio: "Bridging the gap between user needs and technical possibilities.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Frank Lee",
    role: "Data Scientist",
    bio: "Turning data into actionable insights to drive business growth.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Grace Taylor",
    role: "UX Researcher",
    bio: "Dedicated to understanding user behaviors and improving experiences.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Henry Wilson",
    role: "Marketing Director",
    bio: "Crafting compelling narratives to connect with our audience.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function TeamComponent() {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="flex flex-col items-center space-y-4 text-center">
          <p className="text-sm font-semibold text-primary">
            We&apos;re hiring
          </p>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Meet our team
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our diverse team of experts is dedicated to innovation and
            excellence in every project we undertake.
          </p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row">
            <Button variant="outline">View Openings</Button>
            <Button>Join Our Team</Button>
          </div>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center rounded-lg bg-card p-4"
            >
              <Image
                src={member.imageUrl}
                alt={member.name}
                width={400}
                height={400}
                className="mb-4 aspect-square w-full rounded-md object-cover"
              />
              <h3 className="font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
