import Image from "next/image";
import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function Feature120() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Top Section with Icon and Features */}
      <div className="container mx-auto space-y-16 px-4">
        {/* First Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <Badge variant="secondary">New</Badge>
            <h2 className="text-4xl font-bold">
              Work with tools you already use
            </h2>
            <p className="text-lg text-muted-foreground">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>

            <ul className="space-y-4">
              {[
                "Continuous integration and deployment",
                "Development workflow",
                "Knowledge management",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex size-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="size-4 text-primary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </p>
          </div>

          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Team working on laptops"
              fill
              className="rounded-lg bg-accent object-cover p-4"
            />
          </div>
        </div>

        {/* Separator */}
        <Separator className="my-8 bg-border" />

        {/* Second Section */}
        <div className="grid items-center gap-12 pb-8 lg:grid-cols-2">
          <div className="relative order-2 h-[400px] lg:order-1 lg:h-[600px]">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Person typing on laptop"
              fill
              className="rounded-lg bg-accent object-cover p-4"
            />
          </div>

          <div className="order-1 space-y-8 lg:order-2">
            <Badge variant="secondary">Pro</Badge>
            <h2 className="text-4xl font-bold">
              We invest in the world&apos;s potential
            </h2>
            <p className="text-lg text-muted-foreground">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions. Accelerate critical development work,
              eliminate toil, and deploy changes with ease.
            </p>

            <ul className="space-y-4">
              {[
                "Dynamic reports and dashboards",
                "Templates for everyone",
                "Development workflow",
                "Limitless business automation",
                "Knowledge management",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <div className="flex size-6 items-center justify-center rounded-full bg-primary/10">
                    <Check className="size-4 text-primary" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="text-muted-foreground">
              Deliver great service experiences fast - without the complexity of
              traditional ITSM solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
