import { Button } from "@/components/ui/button";
import {
  Activity,
  Zap,
  TrendingUp,
  Smartphone,
  Search,
  UserPlus,
} from "lucide-react";

const highlights = [
  {
    icon: Activity,
    title: "Wellness Snapshot",
    description:
      "Get a quick, insightful overview of your well-being, tailored to your daily life.",
  },
  {
    icon: Zap,
    title: "Actionable Insights",
    description:
      "Receive personalized recommendations based on your unique health data to guide your decisions.",
  },
  {
    icon: TrendingUp,
    title: "In-Depth Analysis",
    description:
      "Explore detailed analytics of your health trends, empowering you with knowledge for proactive management.",
  },
  {
    icon: Smartphone,
    title: "Always-On Tracking",
    description:
      "Keep track of your health metrics continuously with our seamless, real-time monitoring.",
  },
];

export default function Feature97() {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 text-center">
          <h2 className="text-4xl font-bold text-foreground">
            Your Health, Reimagined
          </h2>
          <p className="text-lg text-muted-foreground">
            Harnessing the power of advanced analytics, we illuminate the vital
            link between your lifestyle and well-being. Experience a holistic
            health journey, tailored just for you.
          </p>
          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <Button variant="outline">
              <Search className="mr-2 size-4" />
              Explore Features
            </Button>
            <Button>
              <UserPlus className="mr-2 size-4" />
              Book a Demo
            </Button>
          </div>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl items-center gap-16 md:grid-cols-2">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-primary">
                <highlight.icon className="size-6" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
