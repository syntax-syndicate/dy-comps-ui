import Image from "next/image";
import { Check } from "lucide-react";

const features = [
  "Effortless Integration",
  "Seamless Collaboration",
  "Intuitive Interface",
  "Robust Security",
  "Scalable Performance",
  "Exceptional Support",
];

export default function Feature68() {
  return (
    <section className="bg-background py-32 text-foreground">
      <div className="container">
        <div className="md:flex">
          <div className="md:w-1/2">
            <div className="mb-6 md:mb-8 lg:mb-0">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Feature showcase"
                width={600}
                height={600}
                className="aspect-square w-full rounded-lg object-cover"
              />
            </div>
          </div>
          <div className="md:flex md:w-1/2 md:items-center md:pl-8 lg:pl-24 2xl:pl-32">
            <div>
              <div className="mb-4">
                <Image
                  src="/icons/abstract.png"
                  alt="Company Logo"
                  width={60}
                  height={60}
                  className="object-contain dark:invert"
                />
              </div>
              <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                Unleash the Power of Innovation
              </h2>
              <p className="text-muted-foreground lg:text-lg">
                Discover how our platform revolutionizes your workflow.
                Experience seamless integration, intuitive design, and
                unparalleled performance, empowering your team to achieve new
                heights of productivity and efficiency.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-center gap-y-4 rounded-lg border bg-accent px-5 py-4 md:gap-y-8 md:px-12 md:py-10 lg:mt-12 2xl:mt-16">
          <p className="mb-2 text-lg font-medium sm:text-center lg:text-xl">
            Unlock a world of possibilities with our cutting-edge feature set.
          </p>
          <ul className="grid w-full grid-cols-1 gap-x-6 gap-y-4 text-base sm:grid-cols-2 lg:max-w-5xl lg:grid-cols-3">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-2 lg:justify-center"
              >
                <div className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-primary">
                  <Check className="size-2.5 text-primary-foreground" />
                </div>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
