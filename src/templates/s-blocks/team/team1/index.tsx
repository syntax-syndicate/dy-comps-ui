import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const people = [
  {
    id: "person-1",
    name: "John Doe",
    role: "CEO",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: "person-2",
    name: "Jane Smith",
    role: "CTO",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: "person-3",
    name: "Mike Johnson",
    role: "Designer",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    id: "person-4",
    name: "Sarah Williams",
    role: "Developer",
    avatar: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  // Add more team members as needed
];

export default function Team1() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="bg-grid-primary/[0.03] absolute inset-0 -z-10" />
      <div className="container relative flex flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          We&apos;re hiring
        </p>
        <h2 className="mb-6 mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Meet our team
        </h2>
        <p className="mb-8 max-w-3xl text-muted-foreground md:text-lg lg:text-xl">
          Our team of experts is dedicated to creating innovative solutions.
          We&apos;re always looking for talented individuals to join us on our
          mission.
        </p>
      </div>
      <div className="container mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {people.map((person) => (
          <Card key={person.id} className="overflow-hidden">
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-primary-foreground opacity-20 blur-lg" />
                  <Avatar className="size-24 border-2 border-primary/20">
                    <AvatarImage src={person.avatar} alt={person.name} />
                    <AvatarFallback>
                      {person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {person.name}
                </h3>
                <p className="text-sm text-muted-foreground">{person.role}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
