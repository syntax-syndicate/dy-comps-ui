import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function TeamSection() {
  const team = [
    {
      name: "AndresBerlin",
      role: "Chief Executive Officer",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "SileneTokyo",
      role: "Product Design Head",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "AnnibalRio",
      role: "Chief Operation Officer",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-3 text-sm font-semibold tracking-wider text-primary">
          BUILDING TEAM
        </h2>
        <h3 className="mx-auto mb-12 max-w-2xl text-3xl font-bold tracking-tight">
          The Talented People Behind the Scenes of the Organization
        </h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden border-0">
              <div className="relative aspect-[4/3]">
                <Image
                  src={member.image}
                  alt={`${member.name}'s profile`}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="bg-accent p-6 text-foreground">
                <h4 className="mb-1 text-xl font-semibold">{member.name}</h4>
                <p className="text-muted-foreground">{member.role}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
