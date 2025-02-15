import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Rocket, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Feature109() {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <Badge variant="outline" className="w-fit text-lg font-medium">
              Cutting-Edge Approaches
            </Badge>
            <h3 className="text-4xl font-bold text-foreground lg:text-6xl">
              Transform Your Site into a Masterpiece.
            </h3>
            <p className="text-muted-foreground lg:text-xl">
              Unveil the latest web trends to build elegant, high-performance
              sites that attract visitors and convert them into loyal customers.
            </p>
            <Button className="w-fit gap-2 text-lg font-medium">
              Uncover Features
              <Rocket className="size-5" />
            </Button>
          </div>
          <div className="relative overflow-hidden rounded-xl">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="placeholder"
              width={1280}
              height={720}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-primary/80 via-primary/0 to-primary/0" />
            <div className="absolute inset-0 flex flex-col justify-between p-6">
              <span className="ml-auto flex w-fit items-center gap-2 rounded-full bg-background/50 px-3 py-1 text-sm font-medium text-foreground backdrop-blur-sm">
                <Sparkles className="size-4 text-yellow-400" />
                <Badge variant="outline" className="border-none px-0">
                  Designed for Innovators
                </Badge>
              </span>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-white lg:text-3xl">
                  Propel Your Platform Beyond the Ordinary.
                </h4>
                <a
                  href="#"
                  className="group flex w-fit items-center gap-1 text-lg font-medium text-foreground transition-colors hover:text-primary"
                >
                  Venture into Features
                  <ChevronRight className="size-5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
