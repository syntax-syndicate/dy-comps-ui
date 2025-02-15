import { ArrowUpRight, Zap, Shield, Cpu, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Feature132() {
  return (
    <section className="bg-gradient-to-br from-background to-secondary/10 py-16 md:py-24">
      <div className="container">
        <div className="flex flex-col items-center gap-12 md:flex-row-reverse">
          <div className="relative w-full md:w-1/2">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Innovative tech stack visualization"
              width={500}
              height={500}
              className="rounded-lg object-cover shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 rounded-md bg-primary p-4 text-primary-foreground shadow-lg">
              <Cpu className="size-8" />
            </div>
          </div>
          <div className="flex flex-col justify-center space-y-6 md:w-1/2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Empowered by <br />
              <span className="text-primary">Cutting-Edge Tech</span>
            </h2>
            <p className="max-w-[600px] text-muted-foreground">
              Our platform harnesses the power of next-generation technologies,
              delivering unparalleled performance and scalability. We&apos;ve
              meticulously crafted our stack to ensure a robust, efficient, and
              future-proof solution for developers and businesses alike.
            </p>
            <Button variant="default" className="group w-fit">
              Explore Our Stack
              <ArrowUpRight className="ml-2 size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Button>
            <ul className="grid gap-4 pt-4 md:grid-cols-2">
              {[
                { name: "Lightning Fast", icon: Zap },
                { name: "Highly Secure", icon: Shield },
                { name: "Scalable Architecture", icon: Layers },
                { name: "Developer-Centric", icon: Cpu },
              ].map((feature) => (
                <li key={feature.name} className="flex items-center space-x-3">
                  <div className="rounded-full bg-primary/10 p-2">
                    <feature.icon className="size-5 text-primary" />
                  </div>
                  <span className="font-medium">{feature.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
