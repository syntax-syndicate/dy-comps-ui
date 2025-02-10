import Image from "next/image";
import Link from "next/link";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Feature {
  title: string;
  imageUrl: string;
  logoUrl: string;
  logoAlt: string;
  description: string;
  badge?: string;
}

const features: Feature[] = [
  {
    title: "Automate Your Workflow",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    logoUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    logoAlt: "Automation Logo",
    description:
      "Eliminate repetitive tasks and boost your efficiency with our intelligent automation tools. Spend less time on mundane activities and more on what truly matters.",
    badge: "New",
  },
  {
    title: "Collaborate Seamlessly",
    imageUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    logoUrl: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    logoAlt: "Collaboration Logo",
    description:
      "Connect and work together with ease using our collaborative platform. Share ideas, provide feedback, and accelerate your projects.",
  },
];

export default function Feature66() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start gap-4 md:gap-8">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Feature Group
          </h2>
          <p className="max-w-[85%] text-muted-foreground sm:text-xl">
            Discover our powerful features designed to enhance your productivity
            and streamline your workflow.
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {features.map((feature, index) => (
            <Link key={index} href="#" className="group no-underline">
              <Card className="h-full overflow-hidden transition-colors hover:bg-muted/50">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={feature.imageUrl}
                    alt={`${feature.title} illustration`}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                  {feature.badge && (
                    <Badge className="absolute right-2 top-2 z-10">
                      {feature.badge}
                    </Badge>
                  )}
                </div>
                <CardContent className="grid gap-2 p-4">
                  <Image
                    src={feature.logoUrl}
                    alt={feature.logoAlt}
                    width={32}
                    height={32}
                    className="h-8 w-8"
                  />
                  <h3 className="text-lg font-bold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
                <CardFooter className="p-4">
                  <span className="text-sm font-medium">Learn more →</span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
