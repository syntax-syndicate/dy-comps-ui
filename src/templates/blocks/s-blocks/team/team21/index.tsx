import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
export default function TeamSection() {
  const team = [
    {
      name: "Team Member 1",
      role: "Chief Executive Officer",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "Team Member 2",
      role: "Chief Operations Officer",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "Team Member 3",
      role: "Chief Technology Officer",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  return (
    <section className="w-full bg-background py-12">
      <div className="container">
        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row">
          <h2 className="text-3xl font-bold tracking-tighter md:max-w-[50%]">
            Meet Our <span className="text-primary">Skilled Team</span>
          </h2>
          <p className="text-sm text-muted-foreground md:max-w-[40%]">
            Whether article spirits new her covered hastily sitting her. Money
            witty books nor son add. Chicken age had evening believe but proceed
            pretend mrs. At missed advice my it no sister.
          </p>
        </div>
        <div className="grid auto-rows-fr grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <Card key={index} className="border-none p-4 shadow-none">
              <CardContent className="p-0">
                <AspectRatio
                  ratio={1 / 1}
                  className="overflow-hidden rounded-md"
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    width={400}
                    height={400}
                  />
                </AspectRatio>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
