import {
  ArrowRight,
  Award,
  Brush,
  Home,
  Lightbulb,
  TreePine,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface Award {
  name: string;
  year: string;
  icon: React.ReactNode;
}

export default function Award6() {
  const awards: Award[] = [
    {
      name: "Business Award",
      year: "2014",
      icon: <Award className="size-4" />,
    },
    { name: "Design Award", year: "2016", icon: <Brush className="size-4" /> },
    {
      name: "Best Renovation",
      year: "2017",
      icon: <Home className="size-4" />,
    },
    {
      name: "Innovation Award",
      year: "2018",
      icon: <Lightbulb className="size-4" />,
    },
    {
      name: "Landscape Design",
      year: "2019",
      icon: <TreePine className="size-4" />,
    },
  ];

  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-[1fr,2fr] md:gap-24">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl xl:text-7xl">
              Our
              <br />
              Awards
            </h1>
            <Button
              variant="link"
              className="group -ml-4 h-auto p-4 text-lg font-medium text-primary"
            >
              Read Our Story
              <ArrowRight className="ml-2 size-5 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
            </Button>
          </div>
          <div className="space-y-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="group relative flex items-center justify-between border-b border-muted pb-8 transition-all duration-300 ease-in-out last:border-b-0 hover:border-primary"
              >
                <div className="flex items-center space-x-4">
                  <div className="flex size-10 items-center justify-center rounded-full bg-accent transition-colors duration-300 ease-in-out group-hover:bg-primary/20">
                    <div className="text-primary transition-colors duration-300 ease-in-out group-hover:text-primary">
                      {award.icon}
                    </div>
                  </div>
                  <h2 className="text-xl font-medium transition-colors duration-300 ease-in-out group-hover:text-primary md:text-2xl">
                    {award.name}
                  </h2>
                </div>
                <span className="text-muted-foreground transition-colors duration-300 ease-in-out group-hover:text-primary">
                  {award.year}
                </span>
                <div className="absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 ease-in-out group-hover:scale-x-100" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
