import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Github, Linkedin, Dribbble } from "lucide-react";

export default function EnhancedTeamSection() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Visionary leader with a passion for innovation and team growth.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "Sam Lee",
      role: "CTO",
      bio: "Tech enthusiast driving our technological advancements.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "Emily Chen",
      role: "Lead Designer",
      bio: "Creative mind behind our stunning visual experiences.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "Michael Ross",
      role: "Senior Developer",
      bio: "Coding wizard turning ideas into reality.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "Olivia Taylor",
      role: "Marketing Director",
      bio: "Strategist crafting our brand's unique voice and reach.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "David Kim",
      role: "Product Manager",
      bio: "Bridging user needs with our innovative solutions.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "Sophie Martin",
      role: "UX Researcher",
      bio: "Ensuring our products resonate with user expectations.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "Ryan Patel",
      role: "DevOps Engineer",
      bio: "Optimizing our infrastructure for peak performance.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="bg-grid-primary/[0.03] absolute inset-0 -z-10" />
      <div className="container relative flex flex-col items-center text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-primary">
          Join Our Innovative Team
        </p>
        <h2 className="mb-6 mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Meet the Visionaries
        </h2>
        <p className="mb-8 max-w-3xl text-muted-foreground md:text-lg">
          Our diverse team of experts is dedicated to pushing boundaries and
          creating groundbreaking solutions. We&apos;re always on the lookout
          for passionate individuals to join us on our mission to shape the
          future.
        </p>
        <div className="flex w-full flex-col justify-center gap-4 sm:flex-row">
          <Button variant="outline">View Open Positions</Button>
          <Button>Apply Now</Button>
        </div>
      </div>
      <div className="container mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <Card
            key={index}
            className="overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <CardHeader className="p-0">
              <div className="relative overflow-hidden pb-[100%]">
                <Avatar className="absolute inset-0 h-full w-full rounded-none">
                  <AvatarImage
                    src={member.image}
                    alt={member.name}
                    className="object-cover"
                  />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-60" />
              </div>
            </CardHeader>
            <CardContent className="p-6 text-center">
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="mb-3 text-sm font-medium text-muted-foreground">
                {member.role}
              </p>
              <p className="mb-4 text-sm text-muted-foreground">{member.bio}</p>
              <div className="flex justify-center gap-4">
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github className="size-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Linkedin className="size-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <Dribbble className="size-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
