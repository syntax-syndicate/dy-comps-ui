import Image from "next/image";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Feature {
  title: string;
  description: string;
  imageUrl: string;
  bulletPoints: string[];
}

const features: Feature[] = [
  {
    title: "Customizable Theming",
    description:
      "Our themed component block library offers a flexible and powerful theming system. Easily customize colors, typography, and spacing to match your brand identity and design requirements.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    bulletPoints: [
      "Global theme configuration",
      "Component-level overrides",
      "Dark mode support",
    ],
  },
  {
    title: "Rapid Prototyping",
    description:
      "Speed up your development process with our pre-built, fully functional components. Quickly assemble pages and interfaces using our extensive library of UI blocks, saving you valuable time and resources.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    bulletPoints: [
      "Drag-and-drop interface",
      "Copy-paste ready code",
      "Responsive by default",
    ],
  },
  {
    title: "Accessibility Built-in",
    description:
      "Ensure your applications are inclusive and reach a wider audience. Our component library is built with accessibility in mind, adhering to WCAG guidelines and best practices for creating inclusive user experiences.",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    bulletPoints: [
      "ARIA attributes",
      "Keyboard navigation",
      "Screen reader friendly",
    ],
  },
];

export default function FeatureShowcase() {
  return (
    <section className="bg-background py-32">
      <div className="container">
        <div className="flex flex-col space-y-16 md:space-y-24">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`lg:flex lg:gap-x-8 ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="lg:w-1/2">
                <div className="mb-6 rounded-lg bg-accent p-4 md:mb-8 lg:mb-0">
                  <Image
                    src={feature.imageUrl}
                    alt={`${feature.title} illustration`}
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full rounded-lg border object-cover shadow-md"
                  />
                </div>
              </div>
              <div
                className={`lg:flex lg:w-1/2 lg:items-center ${
                  index % 2 === 0 ? "lg:pl-16 2xl:pl-24" : "lg:pr-16 2xl:pr-24"
                }`}
              >
                <div>
                  <h3 className="mb-3 text-xl font-semibold text-foreground md:mb-4 md:text-3xl lg:mb-6">
                    {feature.title}
                  </h3>
                  <p className="mb-6 text-muted-foreground lg:text-lg">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.bulletPoints.map((point, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="mr-2 size-5 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <Button variant={"outline"} size={"lg"}>
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
