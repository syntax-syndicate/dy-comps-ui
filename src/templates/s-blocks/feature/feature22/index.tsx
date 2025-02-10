import { Check, Zap, Palette, Layers } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { ChevronRight } from "lucide-react";

export default function FeatureShowcase() {
  const features = [
    "Intuitive Drag-and-Drop Interface",
    "AI-Powered Design Suggestions",
    "Real-Time Collaboration Tools",
    "Advanced Animation Capabilities",
    "Responsive Grid System",
    "Built-in Version Control",
    "Customizable Component Library",
    "Automatic Code Optimization",
    "Integrated Performance Metrics",
    "One-Click Deployment Options",
  ];

  const cards = [
    {
      title: "Smart Block Assembly",
      description:
        "Leverage AI to intelligently combine and arrange blocks for optimal layouts.",
      icon: <Zap className="size-6" />,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      features: [
        "AI-driven block suggestions based on your content",
        "Intelligent layout optimization for various screen sizes",
        "Semantic structure recommendations for improved SEO",
      ],
    },
    {
      title: "Theme Wizard",
      description:
        "Create stunning, cohesive designs with our advanced theming system.",
      icon: <Palette className="size-6" />,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      features: [
        "Dynamic color palette generation from a single base color",
        "Automatic dark mode creation with intelligent contrast adjustments",
        "Typography scale generator for perfect readability across devices",
      ],
    },
    {
      title: "Component Ecosystem",
      description:
        "Access a vast library of pre-built, customizable components to accelerate development.",
      icon: <Layers className="size-6" />,
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      features: [
        "Extensive collection of shadcn/ui components with Tailwind integration",
        "Custom property controls for easy component customization",
        "Component usage analytics and optimization suggestions",
      ],
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="container">
        {/* Header Section */}
        <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12 xl:grid-cols-[1fr_1fr]">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Revolutionize Your Web Design with <br />
              <span className="text-primary">Themed Blocks</span>
            </h2>
            <p className="max-w-[600px] text-lg text-muted-foreground">
              Empower your creativity with our cutting-edge design tools and
              smart components.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid gap-4 rounded-lg border bg-accent/50 p-6 md:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="size-5 shrink-0 text-primary" />
                <span className="text-sm font-medium text-foreground">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Cards Section */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <Card
              key={index}
              className="group flex flex-col overflow-hidden transition-shadow hover:shadow-lg"
            >
              {/* Image Section */}
              <div className="relative">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={384}
                  height={256}
                  className="aspect-video w-full object-cover"
                />
                <Badge className="absolute left-3 top-3" variant="secondary">
                  New
                </Badge>
                <div className="absolute -bottom-6 left-4 rounded-full border-2 border-primary/20 bg-background p-2 text-primary shadow-sm">
                  {card.icon}
                </div>
              </div>

              {/* Content Section */}
              <CardContent className="flex-1 pt-10">
                <h3 className="text-xl font-semibold tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">
                  {card.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {card.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start text-sm text-muted-foreground"
                    >
                      <Check className="mr-2 size-4 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* Footer Section */}
              <CardFooter className="border-t p-4">
                <a
                  href="#"
                  className="flex w-full items-center justify-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Learn more
                  <ChevronRight className="size-4 transition-transform group-hover:translate-x-1" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
