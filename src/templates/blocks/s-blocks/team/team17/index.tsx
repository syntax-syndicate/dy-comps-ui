import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

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
    name: "Silene Tokyo",
    role: "VP Operations",
    email: "silene-tokyo@organization.com",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Silene Tokyo",
    role: "VP Operations",
    email: "silene-tokyo@organization.com",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Silene Tokyo",
    role: "VP Operations",
    email: "silene-tokyo@organization.com",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Silene Tokyo",
    role: "VP Operations",
    email: "silene-tokyo@organization.com",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Silene Tokyo",
    role: "VP Operations",
    email: "silene-tokyo@organization.com",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-muted/40 py-16">
      <div className="container">
        <div className="flex flex-col items-start gap-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Building Team
            </h3>
            <h2 className="text-3xl font-bold tracking-tight">
              The Talented People{" "}
              <span className="text-primary">
                Behind the Scenes of the Organization
              </span>
            </h2>
          </div>
          <div className="mt-6 grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {teamMembers.map((member, index) => (
              <Card key={index} className="border-0 bg-background shadow-md">
                <CardContent className="flex flex-col items-center gap-4 p-6">
                  <Avatar className="size-24">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-1 text-center">
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                  <p className="text-sm">{member.email}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
