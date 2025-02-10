import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "ALEX BRYAN",
      email: "sand.j@gmail.com",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "ALEX BRYAN",
      email: "sand.j@gmail.com",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "ALEX BRYAN",
      email: "sand.j@gmail.com",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  return (
    <section className="w-full bg-muted/40 py-12">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Our Talented Team
          </h2>
          <p className="max-w-[900px] text-muted-foreground">
            Dive into our projects from small businesses to Enterprise
            solutions. Record of delivering
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="border-none bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/50"
            >
              <CardContent className="flex flex-col items-center p-4 pt-6">
                <div className="mb-4 aspect-[4/4] overflow-hidden rounded-md">
                  <Image
                    src={member.image}
                    alt={`Team member ${member.name}`}
                    className="h-full w-full object-cover"
                    width={400}
                    height={400}
                  />
                </div>
                <h3 className="mb-2 text-xl font-bold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.email}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Button size="lg">VIEW ALL</Button>
        </div>
      </div>
    </section>
  );
}
