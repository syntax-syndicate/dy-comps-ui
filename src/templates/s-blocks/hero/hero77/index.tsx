import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Hero77() {
  const trendingTopics = [
    "Heart attacks",
    "Blood Pressure",
    "Brain Tumor",
    "Headache",
    "Diabetes",
  ];

  const specialists = [
    {
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      name: "Dr. Smith",
    },
    {
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      name: "Dr. Johnson",
    },
    {
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      name: "Dr. Williams",
    },
    {
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      name: "Dr. Brown",
    },
  ];

  return (
    <div className="container flex items-center py-32">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-primary">The Future</span>
              <br /> of Health
            </h1>
          </div>

          <div className="space-y-4">
            <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
              Trending Topics:
            </p>
            <div className="flex flex-wrap gap-2">
              {trendingTopics.map((topic) => (
                <Badge
                  key={topic}
                  variant="secondary"
                  className="cursor-pointer rounded-full px-4 py-2 text-sm font-medium hover:bg-secondary/80"
                >
                  {topic}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex -space-x-3">
              {specialists.map((specialist, i) => (
                <Avatar
                  key={i}
                  className="size-10 border-2 border-background transition-transform hover:translate-y-[-2px]"
                >
                  <AvatarImage src={specialist.image} alt={specialist.name} />
                </Avatar>
              ))}
            </div>
            <span className="text-sm font-medium">
              <span className="text-foreground">80+</span>{" "}
              <span className="text-muted-foreground">Specialists</span>
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1.5 rounded-2xl bg-primary opacity-30 blur" />
          <div className="relative aspect-square">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Modern medical equipment illustration"
              width={600}
              height={600}
              className="rounded-lg object-contain"
              priority
            />
          </div>
          {/* Background gradient effect */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
        </div>
      </div>
    </div>
  );
}
