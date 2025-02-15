import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Dribbble } from "lucide-react";

export default function TeamComponent() {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      bio: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      bio: "Elig doloremque mollitia fugiat omnis!",
    },
    {
      name: "Alice Johnson",
      role: "Designer",
      bio: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo.",
    },
    {
      name: "Bob Williams",
      role: "Developer",
      bio: "Elig doloremque mollitia fugiat omnis!",
    },
    // Add more team members as needed
  ];

  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="mb-16 text-center">
          <p className="mb-2 text-sm font-semibold text-primary">Our team</p>
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            The team you&apos;ll be working with
          </h2>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <Avatar className="mb-4 size-24">
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="mb-1 text-lg font-semibold">{member.name}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {member.role}
                  </p>
                  <p className="mb-6 text-center text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Github className="size-5" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Linkedin className="size-5" />
                    </a>
                    <a
                      href="#"
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <Dribbble className="size-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
