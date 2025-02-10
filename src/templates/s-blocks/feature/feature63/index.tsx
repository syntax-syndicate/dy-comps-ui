import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface Feature {
  title: string;
  description: string;
  image: string;
  link: string;
}

const features: Feature[] = [
  {
    title: "Customizable Themes",
    description: "Easily adapt the look and feel to match your brand identity.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    link: "/features/customizable-themes",
  },
  {
    title: "Responsive Design",
    description:
      "Ensure a seamless experience across all devices and screen sizes.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    link: "/features/responsive-design",
  },
  {
    title: "Accessibility",
    description: "Built-in support for keyboard navigation and screen readers.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    link: "/features/accessibility",
  },
  {
    title: "Performance Optimized",
    description:
      "Lightweight components for faster load times and smoother interactions.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    link: "/features/performance",
  },
  {
    title: "Easy Integration",
    description:
      "Seamlessly integrate with popular frameworks and build tools.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    link: "/features/integration",
  },
  {
    title: "Regular Updates",
    description:
      "Stay current with the latest web standards and best practices.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    link: "/features/updates",
  },
];

export default function FeatureShowcase() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-16">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl lg:max-w-3xl lg:text-5xl">
              Empower Your Development
            </h2>
            <p className="mx-auto max-w-3xl text-muted-foreground lg:text-lg">
              Our themed component block library provides a comprehensive set of
              tools and features to streamline your development process and
              create stunning, accessible web applications.
            </p>
          </div>

          <div className="grid w-full gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group transition-shadow hover:shadow-md"
              >
                <CardContent className="flex h-full flex-col p-6">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={225}
                    className="mb-6 aspect-video w-full object-cover md:mb-8"
                  />
                  <div className="flex flex-grow flex-col">
                    <h3 className="mb-2 text-sm font-semibold md:text-base">
                      {feature.title}
                    </h3>
                    <p className="flex-grow text-sm text-muted-foreground md:text-base">
                      {feature.description}
                    </p>
                    <Link
                      href={feature.link}
                      className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      Learn more
                      <ArrowRight className="ml-1 size-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
