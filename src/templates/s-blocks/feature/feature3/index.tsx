import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Rocket,
  Telescope,
  Globe,
  Satellite,
  Orbit,
  Moon,
  Sun,
  Star,
} from "lucide-react";
import Image from "next/image";

export default function Feature3() {
  const features = [
    {
      icon: Rocket,
      title: "Space Travel",
      description:
        "Embark on virtual journeys to distant galaxies and explore the cosmos from your screen.",
      imageUrl:
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Add image URL here
    },
    {
      icon: Globe,
      title: "Exoplanet Discovery",
      description:
        "Uncover new worlds and learn about the diversity of planets in our universe.",
      imageUrl:
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Add image URL here
    },
    {
      icon: Telescope,
      title: "Stargazing Guide",
      description:
        "Navigate the night sky with our interactive celestial map and observation tips.",
      imageUrl:
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Add image URL here
    },
    {
      icon: Satellite,
      title: "Space Technology",
      description:
        "Dive into the cutting-edge innovations powering our exploration.",
      imageUrl:
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Add image URL here
    },
    {
      icon: Orbit,
      title: "Orbital Mechanics",
      description:
        "Understand the dance of celestial bodies and the physics behind space flight.",
      imageUrl:
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Add image URL here
    },
    {
      icon: Moon,
      title: "Lunar Exploration",
      description:
        "Revisit historic moon landings and discover plans for future lunar missions.",
      imageUrl:
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Add image URL here
    },
    {
      icon: Sun,
      title: "Solar System Tour",
      description:
        "Take a guided tour through our cosmic neighborhood, from Mercury to the Belt.",
      imageUrl:
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Add image URL here
    },
    {
      icon: Star,
      title: "Stellar Evolution",
      description:
        "Witness the lifecycle of stars, from cosmic nurseries to spectacular supernovae.",
      imageUrl:
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg", // Add image URL here
    },
  ];

  return (
    <section className="relative py-32">
      <div className="container">
        <div className="mx-auto flex flex-col items-center gap-6 text-center">
          <h1 className="text-pretty text-4xl font-semibold lg:text-5xl">
            Explore the Wonders of the Cosmos
          </h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Embark on an interstellar journey through our digital universe. Each
            feature is a portal to a different aspect of space exploration and
            astronomical discovery.
          </p>
          <div className="mt-10 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="w-full max-w-sm overflow-hidden">
                <CardHeader className="pb-1">
                  <feature.icon
                    className="size-6 text-primary"
                    strokeWidth={1.5}
                  />
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">
                    {feature.title}
                  </h2>
                  <p className="leading-snug text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
                <CardFooter className="justify-end bg-accent p-4 pb-0 pr-0">
                  <Image
                    className="h-40 w-full rounded-tl-md object-cover object-center transition-all hover:scale-105"
                    src={feature.imageUrl} // Use the imageUrl from the feature object
                    alt={`Illustration for ${feature.title}`}
                    width={200}
                    height={200}
                  />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-primary/10"
        style={{
          clipPath: "ellipse(75% 100% at 50% 100%)",
        }}
      />
    </section>
  );
}
