import {
  ArrowRight,
  Compass,
  Feather,
  Globe,
  Palette,
  Shield,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Global Reach",
    description:
      "Our platform connects you with audiences worldwide, breaking down geographical barriers and expanding your market presence.",
    icon: Globe,
    link: "#",
  },
  {
    title: "Creative Freedom",
    description:
      "Unleash your creativity with our versatile tools, designed to bring your unique vision to life without limitations.",
    icon: Feather,
    link: "#",
  },
  {
    title: "Intuitive Navigation",
    description:
      "Our user-friendly interface ensures smooth navigation, making it easy for both beginners and experts to find their way around.",
    icon: Compass,
    link: "#",
  },
  {
    title: "Enhanced Security",
    description:
      "Your data's safety is our priority. We implement robust security measures to protect your information and maintain your trust.",
    icon: Shield,
    link: "#",
  },
  {
    title: "Stunning Visuals",
    description:
      "Create eye-catching designs with our extensive library of visual elements, guaranteed to make your projects stand out.",
    icon: Palette,
    link: "#",
  },
  {
    title: "Innovative Features",
    description:
      "Stay ahead of the curve with our cutting-edge features, constantly updated to meet the evolving needs of the digital landscape.",
    icon: Sparkles,
    link: "#",
  },
];

export default function FeatureSection() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-primary/10 [mask-image:url(/images/block/waves.svg)] [mask-repeat:repeat] [mask-size:64px_32px]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent to-background" />
      <div className="container relative">
        <div className="mb-8 flex items-start justify-between">
          <h2 className="max-w-screen-sm text-balance text-2xl font-semibold text-foreground lg:text-4xl">
            Transform your ideas <br />{" "}
            <span className="text-primary">into digital masterpieces</span>
          </h2>
          <div className="text-right">
            <p className="mt-2 max-w-[450px] text-muted-foreground">
              Empowering creators and businesses to reach new heights involves
              providing them with the tools, resources, and opportunities to
              unlock their full potential.
            </p>
          </div>
        </div>
        <div className="z-30 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col gap-10 rounded-lg border bg-card p-8"
            >
              <div>
                <div className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <feature.icon className="size-6 text-primary" />
                </div>

                <h3 className="mb-2 mt-6 font-medium text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
              <a
                href={feature.link}
                className="flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Explore more
                <ArrowRight className="size-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
