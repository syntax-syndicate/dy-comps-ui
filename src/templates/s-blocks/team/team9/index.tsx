import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Gustavo Workman",
    role: "Head, Product Design",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Gustavo Workman",
    role: "Head, Product Design",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Gustavo Workman",
    role: "Head, Product Design",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Gustavo Workman",
    role: "Head, Product Design",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Gustavo Workman",
    role: "Head, Product Design",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function TeamSection() {
  return (
    <section className="px-4 py-24">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-primary">
            Your Team
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center space-y-4 text-center"
            >
              <Avatar className="size-24">
                <AvatarImage src={member.image} alt={member.name} />
                <AvatarFallback>GW</AvatarFallback>
              </Avatar>
              <div className="space-y-2">
                <h3 className="font-medium">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
