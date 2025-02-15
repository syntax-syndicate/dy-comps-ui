import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Feature60() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-24">
              <div className="p-6 lg:w-1/2 lg:p-12">
                <div className="relative mx-auto aspect-square w-full max-w-2xl">
                  <Image
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="Feature illustration"
                    width={600}
                    height={600}
                    className="rounded-lg object-cover shadow-lg transition-shadow hover:shadow-xl"
                  />
                </div>
              </div>
              <div className="p-6 lg:w-1/2 lg:p-12">
                <div className="max-w-xl">
                  <h2 className="mb-4 text-3xl font-semibold tracking-tight">
                    Introducing{" "}
                    <span className="text-primary">Feature Name</span>
                  </h2>
                  <p className="mb-6 text-lg text-muted-foreground">
                    Experience the power of our innovative solution. Our feature
                    seamlessly integrates with your workflow, enhancing
                    productivity and streamlining processes. Discover how it can
                    transform your business operations.
                  </p>
                  <ul className="mb-8 space-y-2">
                    {[
                      "Intuitive Interface",
                      "Real-time Collaboration",
                      "Advanced Analytics",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <ArrowRight className="mr-2 size-4 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="group">
                    Learn More
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
