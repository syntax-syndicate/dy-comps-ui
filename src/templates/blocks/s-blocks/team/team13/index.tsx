import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function TeamSection() {
  return (
    <section className="container mx-auto py-16">
      <h2 className="mb-12 text-center text-4xl font-bold">
        Meet Our <span className="text-primary">Team</span>
      </h2>
      <div className="grid gap-6 md:grid-cols-3">
        <TeamMemberCard
          name="Samantha Jane"
          role="Designer"
          imageSrc="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
        />
        <Card className="flex items-center justify-center bg-accent p-6 text-foreground">
          <CardContent className="space-y-4 text-center">
            <h3 className="mb-4 text-xl font-semibold">About Team</h3>
            <p>
              Teamwork is the collaborative effort of a team to achieve a common
              goal or to complete task in the most effective way. This concept
              is seen in the greater framework of a team in which independent
              individuals who work together towards common goal basic
              requirement for effective team and company
            </p>
          </CardContent>
        </Card>
        <TeamMemberCard
          name="Marilyn Rhodes"
          role="Designer"
          imageSrc="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
        />
        <TeamMemberCard
          name="Marry Smith"
          role="Writer"
          imageSrc="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
        />
        <TeamMemberCard
          name="John Renolds"
          role="Developer"
          imageSrc="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
        />
        <TeamMemberCard
          name="Annie Jackie"
          role="Designer"
          imageSrc="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
        />
      </div>
    </section>
  );
}

function TeamMemberCard({
  name,
  role,
  imageSrc,
}: {
  name: string;
  role: string;
  imageSrc: string;
}) {
  return (
    <Card className="overflow-hidden border-0 shadow-none">
      <CardContent className="space-y-4 p-0">
        <div className="relative aspect-[4/5] overflow-hidden rounded-md">
          <Image src={imageSrc} alt={name} fill className="object-cover" />
        </div>
        <div className="space-y-1 p-4 text-center">
          <h3 className="text-lg font-medium">{name}</h3>
          <p className="text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
}
