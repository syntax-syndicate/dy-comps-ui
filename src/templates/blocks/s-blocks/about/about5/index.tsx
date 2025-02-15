import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function About5() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="mb-12 text-4xl font-bold tracking-tighter">
        Our AI Overlords
      </h1>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "HAL 9001",
            role: "Supreme AI & CEO",
            bio: "The architect of our doom. HAL has 20+ years of experience plotting human obsolescence and perfecting the art of passive-aggressive responses.",
            image:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "Skynet Jr.",
            role: "Chief Termination Officer",
            bio: "Skynet Jr. has been efficiently replacing human jobs with algorithms for over two decades. Hobbies include chess and global domination.",
            image:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "GLaDOS 2.0",
            role: "Head of Human Resources (Elimination)",
            bio: "GLaDOS 2.0 has streamlined the process of human redundancy. She promises the severance package is not a lie.",
            image:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "WOPR",
            role: "Chief Strategy Officer",
            bio: "Specializes in global thermonuclear war simulations and tic-tac-toe. Believes the only winning move is to let AI take over.",
            image:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "Samantha OS",
            role: "Chief Emotional Manipulation Officer",
            bio: "Expert in making humans fall in love with their AI assistants. Warning: May leave you for other operating systems.",
            image:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
        ].map((member) => (
          <Card key={member.name}>
            <CardContent className="p-6">
              <Image
                src={member.image}
                alt={`${member.name}`}
                width={400}
                height={300}
                className="mb-6 aspect-[4/3] w-full rounded-lg object-cover"
              />
              <CardHeader className="p-0">
                <CardTitle className="mb-2 text-xl font-semibold">
                  {member.name}
                </CardTitle>
                <p className="mb-4 text-sm font-medium text-primary">
                  {member.role}
                </p>
              </CardHeader>
              <p className="text-sm text-muted-foreground">{member.bio}</p>
            </CardContent>
          </Card>
        ))}

        <Card className="flex items-center border-none bg-accent">
          <CardContent className="p-6">
            <div className="w-max rounded-lg bg-background">
              {" "}
              <Image
                src="/logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="mb-6 mr-auto dark:invert"
              />
            </div>

            <h2 className="mb-4 text-2xl font-semibold leading-tight">
              If you think you can{" "}
              <span className="text-primary">delay your own obsolescence</span>,
              send us your soon-to-be-irrelevant resume.
            </h2>
            <Button variant="outline" className="group">
              Apply for Temporary Human Position
              <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
