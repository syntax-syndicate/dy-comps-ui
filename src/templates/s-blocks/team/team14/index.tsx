import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  email?: string;
  image: string;
}

const team: TeamMember[] = [
  {
    name: "Oliver Queen",
    role: "Founder, CEO",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Thea Queen",
    role: "Senior Architect",
    email: "example@mail.com",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "John Diggle",
    role: "Founder, CEO",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Dinah Lance",
    role: "Founder, CEO",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Sarah Lance",
    role: "Founder, CEO",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Helena Rosa",
    role: "Founder, CEO",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function TeamGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-2 lg:grid-cols-3">
      {team.map((member) => (
        <Card key={member.name} className="overflow-hidden bg-background">
          <div className="aspect-[4/3] overflow-hidden">
            <Image
              src={member.image}
              alt={member.name}
              className="h-full w-full object-cover"
              width={400}
              height={400}
            />
          </div>
          <CardContent className="p-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <div className="flex items-center space-x-2">
                <div className="h-4 w-0.5 bg-primary/20" />
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                  {member.email && (
                    <p className="text-sm text-muted-foreground">
                      {member.email}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
