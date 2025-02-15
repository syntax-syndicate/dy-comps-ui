import Image from "next/image";
import {
  Search,
  BarChart,
  LifeBuoy,
  Sparkles,
  Layers3,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

const features = [
  {
    Icon: Search,
    title: "Intelligent Search",
    description:
      "DY-Comps's advanced algorithms deliver precise results, quickly connecting you with the information you need.",
  },
  {
    Icon: BarChart,
    title: "Data-Driven Insights",
    description:
      "Gain actionable insights with DY-Comps's analytics, helping you understand trends and make informed decisions.",
  },
  {
    Icon: LifeBuoy,
    title: "Dedicated Support",
    description:
      "Our expert support team is always ready to assist you, ensuring a seamless and productive experience.",
  },
  {
    Icon: Sparkles,
    title: "Personalized Experience",
    description:
      "DY-Comps adapts to your preferences, providing a tailored search experience that evolves with your needs.",
  },
  {
    Icon: Layers3,
    title: "Collaborative Workspaces",
    description:
      "Share findings, collaborate on projects, and streamline workflows with DY-Comps's integrated workspaces.",
  },
  {
    Icon: Zap,
    title: "Lightning-Fast Performance",
    description:
      "Experience unparalleled speed and efficiency with DY-Comps's optimized platform, designed for rapid results.",
  },
];

export default function Feature85() {
  return (
    <section className="bg-background text-foreground">
      <div className="container py-16 md:py-32">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12">
          <div className="text-center">
            <Badge variant="outline" className="mb-4">
              Why Choose DY-Comps?
            </Badge>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl lg:text-6xl">
              Search Smarter, <span className="text-primary">Achieve More</span>
            </h2>
            <p className="text-muted-foreground md:text-lg">
              DY-Comps combines cutting-edge AI with intuitive design to
              revolutionize your search experience.
            </p>
          </div>

          <div className="relative w-full rounded-lg border">
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-muted/50 to-accent/50 opacity-75"></div>
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="DY-Comps Search Interface"
              width={1280}
              height={720}
              className="aspect-video w-full rounded-lg object-cover"
            />
          </div>

          <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map(({ Icon, title, description }, index) => (
              <div
                key={index}
                className="flex flex-col items-start gap-4 rounded-lg border p-6 shadow-md"
              >
                <div className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-primary">
                  <Icon className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
