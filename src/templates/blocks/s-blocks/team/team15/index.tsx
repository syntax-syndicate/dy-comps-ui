import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export default function TeamSection() {
  const team = [
    {
      name: "Richard Bell",
      email: "Richard.bell@gmail.com",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      bgColor: "bg-primary/10",
    },
    {
      name: "Richard Bell",
      email: "Richard.bell@gmail.com",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      bgColor: "bg-secondary/10",
    },
    {
      name: "Richard Bell",
      email: "Richard.bell@gmail.com",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      bgColor: "bg-accent/10",
    },
    {
      name: "Richard Bell",
      email: "Richard.bell@gmail.com",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      bgColor: "bg-muted/50",
    },
  ];

  return (
    <section className="container mx-auto py-12">
      <div className="flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Our Talented Team
          <span className="mx-auto mt-2 block h-1 max-w-[60px] bg-primary" />
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, index) => (
            <div key={index} className="flex flex-col items-center space-y-4">
              <div className={`rounded-full p-1 ${member.bgColor}`}>
                <Avatar className="size-24">
                  <AvatarImage src={member.image} alt={member.name} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="text-center">
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.email}</p>
              </div>
            </div>
          ))}
        </div>
        <Button className="mt-12" size="lg">
          View All
        </Button>
      </div>
    </section>
  );
}
