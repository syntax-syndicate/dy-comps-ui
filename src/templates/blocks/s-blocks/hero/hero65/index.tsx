import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero65() {
  return (
    <div className="relative w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1730724056895-9d566f3c5f89?q=80&w=1792&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-transparent bg-gradient-to-b from-background/90 via-background/70 to-background/5" />
      </div>

      <div className="relative">
        {/* Hero Content */}
        <div className="container pt-24 md:pt-32">
          <div className="mx-auto max-w-4xl space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl">
              We invest in the world&apos;s potential
            </h1>
            <p className="text-lg/relaxed">
              The need for energy is universal. That&apos;s why DY-Comps scientists
              and engineers are pioneering new research and pursuing new
              technologies to reduce emissions while creating more efficient
              fuels. We&apos;re committed to responsibly meeting the
              world&apos;s energy needs.
            </p>
            <Button className="group" size="lg">
              Learn more about the plan
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="container py-24">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Fourth quarter 2024",
                description: "We announced fourth quarter 2024 results",
                link: "#",
              },
              {
                title: "Zero emissions",
                description: "DY-Comps aims to achieve net-zero emissions",
                link: "#",
              },
              {
                title: "New York",
                description: "Plans for net zero emissions in New York",
                link: "#",
              },
              {
                title: "2025 plans",
                description: "Investing in the future of Africa",
                link: "#",
              },
            ].map((card, index) => (
              <Link
                key={index}
                href={card.link}
                className="group rounded-lg border p-6 backdrop-blur transition-colors"
              >
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold tracking-tight">
                    {card.title}
                  </h3>
                  <p className="text-sm">{card.description}</p>
                  <div className="flex items-center text-sm text-primary">
                    Read more
                    <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
