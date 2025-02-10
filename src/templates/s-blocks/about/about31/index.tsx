import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Brain, Cpu } from "lucide-react";

export default function AIStartupAbout() {
  return (
    <section className="container relative mx-auto py-24">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="relative">
          <div className="absolute -left-4 top-4 flex h-12 items-center rounded-full bg-background px-4 shadow-lg">
            <span className="font-semibold text-primary">500+</span>
            <span className="ml-2 text-muted-foreground">Clients Served</span>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Team of AI engineers working on advanced algorithms"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col justify-between space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Empowering businesses with{" "}
              <span className="text-primary">intelligent</span>{" "}
              <span className="text-primary">AI</span>
            </h1>
          </div>

          <p className="text-muted-foreground">
            At NeuraTech, we&apos;re not just developing AI; we&apos;re
            reshaping the future of business. Our advanced algorithms and
            machine learning models are designed to tackle complex challenges.
          </p>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="border-2 border-primary/10">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <Brain className="size-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Advanced AI Models</h3>
                  <p className="text-sm text-muted-foreground">
                    Cutting-edge algorithms
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary/10">
              <CardContent className="flex items-center gap-4 p-4">
                <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <Cpu className="size-6 text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Seamless Integration</h3>
                  <p className="text-sm text-muted-foreground">
                    With your systems
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
