import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function CallToAction7() {
  return (
    <section className="bg-gradient-to-br from-background to-accent/20 py-32">
      <div className="container">
        <div className="relative flex w-full flex-col gap-16 overflow-hidden rounded-lg bg-accent shadow-2xl lg:flex-row lg:items-center">
          <div className="z-10 flex-1 p-8 lg:p-16">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              <span className="text-primary">Experience the workflow</span> the
              best frontend teams love
            </h3>
            <p className="mb-8 max-w-2xl text-muted-foreground lg:text-lg">
              Let your team focus on shipping features instead of managing
              infrastructure with automated CI/CD.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button variant="outline" className="group">
                Learn More
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="group">
                Get Started
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
          <div className="relative h-full lg:w-1/3">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Placeholder image"
              width={400}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
