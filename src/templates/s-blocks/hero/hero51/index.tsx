import { Button } from "@/components/ui/button";
import { Globe, Sparkles } from "lucide-react";

export default function ImprovedHero() {
  return (
    <section className="relative overflow-hidden py-32">
      <div className="container relative mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-7xl">
            Unlock the Power of Digital Assets
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-muted-foreground">
            Revolutionize your portfolio with our cutting-edge marketplace.
            Seamlessly trade, manage, and grow your digital assets in one secure
            platform.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group">
              <Sparkles className="mr-2 size-4 transition-transform group-hover:rotate-12" />
              Explore Marketplace
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
          <div className="mt-10 flex items-center justify-center gap-2 text-xl font-medium">
            <Globe className="size-6 text-primary" />
            Trusted by investors worldwide
          </div>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-lg border bg-muted md:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Assets Tokenized", value: "$1B+" },
            { title: "Global Users", value: "100K+" },
            { title: "Countries Supported", value: "150+" },
            { title: "Secure Transactions", value: "99.99%" },
          ].map((stat, index) => (
            <div key={index} className="bg-card p-6 text-center shadow-lg">
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">
                {stat.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
