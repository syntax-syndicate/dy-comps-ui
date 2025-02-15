import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function About28() {
  const teamMembers = [
    {
      name: "Brian Blaize",
      role: "HEAD OF GROWTH",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "Emery Calzoni",
      role: "GENERAL MANAGER",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "Makenna Dokidis",
      role: "HEAD OF GROWTH",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "Autumn Morgan",
      role: "DIRECTOR OF MARKETING",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "Andrew Lincoln",
      role: "DIRECTOR OF OPERATIONS",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "Ricardo Amorim",
      role: "LEAD DEVELOPER",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  return (
    <section className="container py-16">
      <div className="flex flex-col items-center space-y-4 text-center">
        <h2 className="max-w-3xl text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          The Talented People Behind the <br />
          <span className="text-primary">Scenes of the Organization</span>
        </h2>
      </div>
      <div className="mx-auto mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-4 rounded-lg bg-accent p-6 py-12"
          >
            <div className="relative aspect-square w-48 overflow-hidden rounded-full">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover grayscale transition-all duration-300 hover:grayscale-0"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm tracking-wide text-muted-foreground">
                {member.role}
              </p>
              <Button variant="link" className="mt-2 h-auto p-0 text-primary">
                Read more
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
