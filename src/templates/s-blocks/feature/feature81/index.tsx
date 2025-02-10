import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface Feature {
  image: string;
  logo: string;
  alt: string;
  title: string;
  description: string;
  link: string;
}

const features: Feature[] = [
  {
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    alt: "ShadcnUI feature",
    title: "ShadcnUI",
    description: "Discover how ShadcnUI can enhance your development workflow.",
    link: "/shadcnui",
  },
  {
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    alt: "Vercel feature",
    title: "Vercel",
    description: "Discover how Vercel can enhance your development workflow.",
    link: "/vercel",
  },
];

export default function ResponsiveFeatureSection() {
  return (
    <section className="bg-background py-12 text-foreground sm:py-16 md:py-20 lg:py-24">
      <div className="container mx-auto sm:px-6 lg:px-8">
        <div className="mb-12 text-center md:mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
            Tag Line
          </p>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:mb-6 md:text-5xl">
            Feature Group
          </h2>
          <p className="mx-auto max-w-2xl text-sm text-muted-foreground sm:text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig
            doloremque mollitia fugiat omnis! Porro facilis quo animi
            consequatur. Explicabo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-lg bg-primary/5 transition-all duration-300 hover:bg-primary/10"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative w-full sm:w-1/2 lg:w-2/3">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    width={1080}
                    height={720}
                    className="h-48 w-full object-cover sm:h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="flex flex-col justify-between p-6 sm:w-1/2 sm:p-8 lg:w-1/3">
                  <div>
                    <Image
                      src={feature.logo}
                      alt={`${feature.alt} logo`}
                      width={120}
                      height={40}
                      className="mb-4 h-8 w-auto"
                    />
                    <h3 className="mb-2 text-xl font-semibold sm:text-2xl">
                      {feature.title}
                    </h3>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                  <Link href={feature.link}>
                    <div className="flex items-center text-sm font-medium text-primary hover:underline">
                      Read more
                      <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
