import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
export default function TeamSection() {
  const teamMembers = [
    {
      name: "Alex Rivera",
      role: "Visionary Architect",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      quote: "Designing tomorrow's solutions today.",
    },
    {
      name: "Sam Patel",
      role: "Innovation Catalyst",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      quote: "Turning ideas into groundbreaking realities.",
    },
    {
      name: "Jordan Lee",
      role: "Tech Maestro",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      quote: "Orchestrating digital symphonies.",
    },
    {
      name: "Taylor Morgan",
      role: "User Experience Guru",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      quote: "Crafting interfaces that speak to the soul.",
    },
  ];

  return (
    <section className="w-full bg-background py-16">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold tracking-tight">
            Innovators <span className="text-primary">Behind the Vision</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Meet the brilliant minds shaping our future. Each member brings a
            unique perspective, driving us towards unprecedented innovation and
            excellence.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all hover:shadow-lg"
            >
              <CardContent className="p-0">
                <AspectRatio ratio={3 / 4} className="bg-muted">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                    height={400}
                    width={400}
                  />
                </AspectRatio>
                <div className="p-6">
                  <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    {member.role}
                  </p>
                  <blockquote className="text-sm italic text-secondary-foreground">
                    &quot;{member.quote}&quot;
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
