import Image from "next/image";
import {
  ArrowUpRight,
  Users,
  Briefcase,
  Zap,
  Trophy,
  Layers,
  Target,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About2() {
  return (
    <section className="py-32">
      <div className="flex flex-col gap-28">
        <div className="container flex flex-col gap-10 text-center md:gap-24">
          <div className="mx-auto flex max-w-3xl flex-col gap-6">
            <h1 className="text-4xl font-bold md:text-6xl">
              Learn More About Our{" "}
              <span className="text-primary">Background</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Discover how our solution simplifies complex processes, making it
              easier to manage key operations and deliver exceptional
              experiences.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-12">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Team collaboration"
              width={288}
              height={384}
              className="size-full max-h-96 rounded-lg object-cover md:col-span-3"
            />
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Office space"
              width={384}
              height={384}
              className="size-full max-h-96 rounded-lg object-cover md:col-span-4"
            />
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Product showcase"
              width={576}
              height={384}
              className="size-full max-h-96 rounded-lg object-cover md:col-span-5"
            />
          </div>
        </div>

        <div className="bg-muted/50 py-20">
          <div className="container flex flex-col items-center gap-10">
            <h2 className="text-center text-3xl font-bold md:text-4xl">
              Empowering Businesses Globally
            </h2>
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
              {[
                {
                  logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
                  name: "TechCorp",
                },
                {
                  logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
                  name: "InnovateCo",
                },
                {
                  logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
                  name: "FutureTech",
                },
                {
                  logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
                  name: "NextGen",
                },
                {
                  logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
                  name: "SmartSys",
                },
                {
                  logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
                  name: "DataFlow",
                },
                {
                  logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
                  name: "CloudPeak",
                },
                {
                  logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
                  name: "AIVision",
                },
              ].map((company, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={56}
                    height={56}
                    className="h-10 w-auto md:h-14"
                  />
                  <p className="text-lg font-semibold md:text-2xl">
                    {company.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="container flex flex-col gap-16">
          <h2 className="max-w-3xl text-3xl font-bold md:text-4xl">
            Beyond expertise,{" "}
            <span className="text-primary">
              we deliver unparalleled value and innovation.
            </span>
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {[
              {
                icon: Users,
                number: "5M+",
                text: "Active Users Worldwide",
              },
              {
                icon: Briefcase,
                number: "15+",
                text: "Years of Industry Leadership",
              },
              {
                icon: Zap,
                number: "987",
                text: "Successful Implementations",
              },
              {
                icon: Trophy,
                number: "250k+",
                text: "Daily Engaged Users",
              },
              {
                icon: Layers,
                number: "1.2M",
                text: "Data Points Processed Daily",
              },
              {
                icon: Target,
                number: "99.9%",
                text: "System Uptime",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border-t pt-6"
              >
                <div className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <stat.icon className="size-6 text-primary" />
                </div>
                <div className="flex flex-col">
                  <p className="text-2xl font-bold sm:text-3xl md:text-4xl">
                    {stat.number}
                  </p>
                  <p className="text-sm text-muted-foreground sm:text-base">
                    {stat.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl lg:text-5xl">
            One Solution at a Time:{" "}
            <span className="text-primary">Transforming Businesses</span>
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="order-2 flex flex-col gap-6 md:order-1">
              <div className="flex h-full flex-col justify-center rounded-lg bg-muted p-6">
                <p className="mb-3 text-4xl font-bold">30%</p>
                <p className="mb-4 text-xl font-semibold">Cost Reduction</p>
                <p className="text-muted-foreground">
                  Through process optimization, our platform helps businesses
                  slash operational costs by an average of 30%.
                </p>
              </div>
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Cost savings graph"
                width={576}
                height={384}
                className="h-64 w-full rounded-lg object-cover"
              />
            </div>
            <div className="relative order-1 overflow-hidden rounded-lg md:order-2 md:col-span-2 lg:col-span-1">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Team meeting"
                width={576}
                height={768}
                className="h-full object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-lg bg-background/80 p-4 backdrop-blur-sm">
                <div className="mb-3 flex items-center gap-3">
                  <span className="text-lg font-semibold">TechCorp</span>
                  <Image
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="TechCorp logo"
                    width={32}
                    height={32}
                    className="h-8 w-auto rounded-full"
                  />
                </div>
                <p className="mb-4 text-sm">
                  &quot;Our workflow has been revolutionized by this solution,
                  reducing project timelines by 40%.&quot;
                </p>
                <div className="flex items-baseline gap-2 text-sm">
                  <span className="font-medium">Sarah Johnson,</span>
                  <span className="text-muted-foreground">CTO at TechCorp</span>
                </div>
              </div>
            </div>
            <div className="order-3 flex flex-col gap-6 md:col-span-2 lg:col-span-1">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Data visualization"
                width={576}
                height={384}
                className="h-64 w-full rounded-lg object-cover"
              />
              <div className="flex h-full flex-col justify-center rounded-lg bg-muted p-6">
                <p className="mb-3 text-4xl font-bold">500%</p>
                <p className="mb-4 text-xl font-semibold">ROI Boost</p>
                <p className="text-muted-foreground">
                  Within the first year of implementation, our clients report an
                  astounding average of 500% return on investment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="flex flex-col items-center gap-6 rounded-lg bg-accent p-8 md:flex-row md:justify-between">
            <div className="text-center md:text-left">
              <h3 className="mb-2 text-2xl font-bold">
                Ready to Transform Your Business?
              </h3>
              <p>
                Discover how our solutions can{" "}
                <span className="font-bold text-primary">
                  drive your success.
                </span>
              </p>
            </div>
            <Button size={"lg"}>
              Get Started
              <ArrowUpRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
