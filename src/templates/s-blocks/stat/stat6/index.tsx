import { Button } from "@/components/ui/button";
import { ArrowRight, Rocket, Users, Globe, Zap } from "lucide-react";
import Image from "next/image";

const metrics = [
  { value: "1M+", label: "Users", icon: Users },
  { value: "50+", label: "Countries", icon: Globe },
  { value: "99.9%", label: "Uptime", icon: Zap },
  { value: "24/7", label: "Support", icon: Rocket },
];

export default function EnhancedStatSection() {
  return (
    <section className="bg-background py-16 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-between gap-12 lg:flex-row lg:gap-16">
        <div className="flex w-full flex-col items-start text-left lg:w-1/2">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Empowering Your Digital Journey with Stellar Performance
          </h2>
          <p className="mb-8 max-w-[30rem] text-lg text-muted-foreground">
            Experience the power of our platform with these impressive metrics
            that showcase our global reach and commitment to excellence.
          </p>
          <div className="mb-12 flex flex-col justify-start gap-4 sm:flex-row">
            <Button className="w-full sm:w-auto">
              <ArrowRight className="mr-2 h-4 w-4" />
              Get Started
            </Button>
            <Button variant="outline" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
          <div className="grid w-full grid-cols-4 gap-8 sm:gap-12">
            {metrics.map((metric, index) => (
              <div key={index} className="w-full">
                <metric.icon className="mb-4 h-8 w-8 text-primary" />
                <div className="mb-2 text-3xl font-semibold text-foreground sm:text-4xl">
                  {metric.value}
                </div>
                <div className="text-base leading-6 text-muted-foreground">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-center lg:w-1/2 lg:justify-end">
          <div className="relative aspect-square w-full max-w-[500px]">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Digital Performance Visualization"
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
