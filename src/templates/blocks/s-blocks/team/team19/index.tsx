import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
export default function TeamSection() {
  const team = [
    {
      name: "Andres Berlin",
      role: "Chief Executive Officer",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "Silene Tokyo",
      role: "Chief Marketing Officer",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "Richard Johnson",
      role: "Head of Talent Management",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  return (
    <section className="w-full bg-gradient-to-b from-background to-muted py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="mb-6 space-y-2">
            <h3 className="text-sm uppercase tracking-wider text-primary">
              BUILDING TEAM
            </h3>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              The Talented People Behind the Scenes
              <br className="hidden sm:inline" />
              of the Organization
            </h2>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <Card
                key={member.name}
                className="overflow-hidden border-none bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
              >
                <CardContent className="p-0">
                  <div className="relative aspect-[4/3]">
                    <Image
                      alt={member.name}
                      className="h-full w-full object-cover"
                      src={member.image}
                      height={400}
                      width={400}
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {member.role}
                    </p>
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
