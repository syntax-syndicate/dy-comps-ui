import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Play } from "lucide-react";

export default function PortfolioHero() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <div className="mx-auto max-w-6xl p-6 pb-32 pt-20">
        <div className="space-y-8">
          <h1 className="space-x-4 text-4xl font-bold md:text-6xl">
            <span role="img" aria-label="wave">
              👋
            </span>
            <span>Hey, I'm Jamel</span>
          </h1>
          <h2 className="text-3xl font-bold text-muted-foreground md:text-5xl">
            Full-Stack Developer.
          </h2>
          <p className="max-w-xl text-lg text-muted-foreground">
            Full Stack Frontend Developer and Content Writing Based in LA. I
            specialize in Bug Fixing, Responsive Web Design, and Visual
            Development.
          </p>
          <div className="flex items-center gap-6">
            <Button className="bg-primary px-6 py-6 text-lg font-semibold text-primary-foreground hover:bg-primary/90">
              HIRE ME
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="text-muted-foreground hover:text-foreground"
            >
              <Play className="mr-2 h-5 w-5" />
              Play Intro
            </Button>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="mx-auto max-w-6xl rounded-lg bg-secondary p-6">
        <h3 className="mb-8 text-2xl font-bold md:text-3xl">
          I work with over 279+ happy clients all over the world.
        </h3>
        <p className="mb-12 max-w-2xl text-muted-foreground">
          Suspendisse eget ultricies felis, in lacinia lectus. Morbi accumsan
          dapibus tortor, in fermentum odio malesuada in aliquam sed ipsum
          tristique.
        </p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {[
            "Amazon",
            "Google",
            "Spotify",
            "Dribbble",
            "Microsoft",
            "LinkedIn",
          ].map((client) => (
            <Card
              key={client}
              className="flex items-center justify-center border bg-card p-6 transition-all hover:bg-accent hover:shadow-lg"
            >
              <span className="font-semibold text-card-foreground">
                {client}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
