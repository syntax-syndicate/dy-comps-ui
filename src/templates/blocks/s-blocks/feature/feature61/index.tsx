import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

export default function Feature61() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto">
        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:gap-24">
              <div className="p-6 lg:w-1/2 lg:p-12">
                <div className="relative mx-auto aspect-square w-full max-w-2xl">
                  <Image
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="Feature illustration"
                    width={600}
                    height={600}
                    className="rounded-lg object-cover shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                  />
                </div>
              </div>
              <div className="p-6 lg:w-1/2 lg:p-12">
                <div className="max-w-xl">
                  <h2 className="mb-4 text-3xl font-semibold tracking-tight">
                    Elevate Your <span className="text-primary">Workflow</span>
                  </h2>
                  <p className="mb-6 text-lg text-muted-foreground">
                    Experience a new level of productivity with our innovative
                    feature. Designed to streamline your processes and boost
                    efficiency, our solution integrates seamlessly into your
                    existing workflow.
                  </p>
                  <ul className="mb-8 space-y-3">
                    {[
                      "Intuitive Interface",
                      "Real-time Collaboration",
                      "Advanced Analytics",
                    ].map((item, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="mr-2 size-5 text-primary" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="group relative overflow-hidden bg-primary text-primary-foreground hover:bg-primary/90">
                    <span className="relative z-10">Discover More</span>
                    <span className="absolute inset-0 bg-background opacity-0 transition-opacity duration-300 group-hover:opacity-10"></span>
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
