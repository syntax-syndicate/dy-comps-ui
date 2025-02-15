import {
  Puzzle,
  AppWindow,
  Code,
  PlugIcon as Plugin,
  Chrome,
  Layout,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

const utilities = [
  {
    title: "Integrations",
    description:
      "Seamlessly connect your favorite tools and platforms, creating a unified workflow ecosystem.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    icon: Puzzle,
  },
  {
    title: "Apps",
    description:
      "Boost productivity with our suite of purpose-built apps, each designed to solve specific challenges.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    icon: AppWindow,
  },
  {
    title: "APIs",
    description:
      "Leverage our robust APIs to build custom solutions and extend functionality to meet your unique needs.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    icon: Code,
  },
  {
    title: "Plugins",
    description:
      "Tailor your experience with our diverse plugin ecosystem, adding new features and capabilities on demand.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    icon: Plugin,
  },
  {
    title: "Extensions",
    description:
      "Enhance your browser's capabilities with our powerful extensions, bringing our tools to your fingertips.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    icon: Chrome,
  },
  {
    title: "Widgets",
    description:
      "Embed dynamic, interactive content anywhere with our flexible and customizable widget system.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    icon: Layout,
  },
];

export default function Feature20() {
  return (
    <section className="bg-background py-24 md:py-32">
      <div className="container max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <h2 className="text-3xl font-medium text-foreground md:w-1/2">
            Unlock the full potential of our{" "}
            <span className="text-primary">versatile utilities</span>
          </h2>
          <p className="text-muted-foreground md:w-1/2">
            Dive into our comprehensive suite of tools designed to supercharge
            your productivity. From seamless integrations to powerful APIs, our
            utilities offer the flexibility and power you need to transform your
            workflow and achieve more.
          </p>
        </div>
        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {utilities.map((utility, index) => (
            <Card key={index} className="relative">
              <div className="absolute right-4 top-4 rounded-full bg-accent p-2">
                <utility.icon className="size-5 text-primary" />
              </div>
              <Image
                src={utility.image}
                alt={utility.title}
                width={320}
                height={180}
                className="aspect-video w-full rounded-t-lg object-cover"
              />
              <CardContent className="p-6">
                <h3 className="mb-2 font-medium text-foreground">
                  {utility.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {utility.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
