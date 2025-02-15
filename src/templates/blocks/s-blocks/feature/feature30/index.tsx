import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Feature30() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-24 md:py-32">
      {/* Background grid pattern */}
      <div className="bg-grid-black/[0.02] absolute inset-0 bg-[size:60px_60px]" />

      <div className="container relative">
        <div className="grid h-full gap-8 md:grid-cols-3 md:gap-10">
          {/* Left Image Card */}
          <div className="group h-full">
            <div className="h-full overflow-hidden rounded-lg border border-muted/20 bg-gradient-to-br from-muted to-muted/50 p-5 transition-all duration-300 hover:border-muted/40 hover:from-muted/80 hover:to-muted/30 md:p-10">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Feature illustration"
                width={500}
                height={500}
                className="h-full w-full rounded-lg object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="col-span-2 h-full">
            <div className="flex h-full flex-col gap-8">
              {/* Right Image Card */}
              <div className="group h-[400px] overflow-hidden rounded-lg border border-muted/20 bg-gradient-to-br from-muted to-muted/50 p-5 transition-all duration-300 hover:border-muted/40 hover:from-muted/80 hover:to-muted/30 md:h-[500px] md:p-10">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Feature showcase"
                  width={1200}
                  height={600}
                  className="h-full w-full rounded-lg object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Text Content */}
              <div className="rounded-lg border border-muted/20 bg-background/80 p-6 backdrop-blur-sm transition-all duration-300 hover:border-muted/40 hover:bg-background/90 md:p-8">
                <Badge variant="outline" className="mb-4">
                  Featured
                </Badge>

                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    Uncompromising Excellence: Built to Last
                  </h3>

                  <p className="leading-relaxed text-muted-foreground">
                    Delve into a world where superior materials meet expert
                    engineering. Experience a symphony of design and durability,
                    meticulously crafted to exceed expectations.
                  </p>

                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Explore our unwavering commitment to quality
                    <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
