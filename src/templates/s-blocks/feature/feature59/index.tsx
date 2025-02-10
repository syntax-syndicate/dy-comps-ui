import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const features = [
  {
    title: "Scalable Infrastructure",
    description:
      "Build and deploy with confidence using our robust, scalable infrastructure designed for growth.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    badge: "Cloud",
  },
  {
    title: "Advanced Analytics",
    description:
      "Gain deep insights with our powerful analytics tools, helping you make data-driven decisions.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    badge: "Data",
  },
  {
    title: "Secure by Design",
    description:
      "Rest easy knowing your data is protected by industry-leading security measures and protocols.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    badge: "Protection",
  },
];

export default function Feature59() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/10 py-24">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Powerful Features for{" "}
            <span className="text-primary">Your Success</span>
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
            Discover how our cutting-edge solutions can transform your business
            and drive growth.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                width={300}
                height={200}
                className="h-48 w-full object-cover"
              />
              <CardHeader>
                <div className="mb-2 flex items-center justify-between">
                  <Badge>{feature.badge}</Badge>
                  <ArrowRight className="size-4 text-primary" />
                </div>
                <CardTitle className="mb-2 text-xl">{feature.title}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <Card className="mt-16 overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2">
              <div className="flex flex-col justify-center p-6">
                <h3 className="mb-4 text-2xl font-bold">
                  Revolutionize Your{" "}
                  <span className="text-primary">Workflow</span>
                </h3>
                <p className="mb-6 text-muted-foreground">
                  Our comprehensive platform integrates seamlessly with your
                  existing tools, streamlining processes and boosting
                  productivity across your organization.
                </p>
                <ul className="space-y-2">
                  {[
                    "Intuitive Interface",
                    "Real-time Collaboration",
                    "Automated Reporting",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <ArrowRight className="mr-2 size-4 text-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/20 p-8">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Workflow Illustration"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
