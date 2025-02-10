import { Badge } from "@/components/ui/badge";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function FeatureShowcase() {
  const features = [
    {
      title: "Effortless Component Integration",
      description:
        "Seamlessly incorporate pre-built components into your projects, saving time and ensuring consistency across your designs.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      title: "Fully Customizable Designs",
      description:
        "Tailor every aspect of your components to match your brand's unique style and requirements with our flexible customization options.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      title: "Round-the-Clock Expert Support",
      description:
        "Access our dedicated support team 24/7 for quick resolutions to any questions or issues, ensuring smooth development at any hour.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="mx-auto flex max-w-[800px] flex-col items-center gap-4 text-center">
          <Badge variant="outline" className="text-sm">
            Features
          </Badge>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Powerful Integrations to Accelerate{" "}
            <span className="text-primary">Your Business Growth</span>
          </h2>
          <p className="max-w-5xl text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Unlock the full potential of your projects with our versatile
            toolkit, designed to streamline your workflow and enhance
            productivity.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-lg border bg-card text-card-foreground shadow-sm"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between gap-4 p-6">
                <div className="space-y-2">
                  <h3 className="font-bold tracking-tight">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
                >
                  Learn more
                  <ChevronRight className="size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
