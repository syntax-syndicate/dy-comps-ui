import { Zap, Loader2, ArrowLeftCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Feature102() {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Deploy with Confidence
          </h2>
          <p className="mt-4 text-muted-foreground">
            Navigate the complexities of deployment with ease. Our intuitive
            tools provide clarity and control, ensuring a streamlined process.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-5xl">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {[
              {
                title: "Real-Time Deployment Tracking",
                description:
                  "Monitor your deployments as they unfold with live updates.",
                icon: Zap,
                image:
                  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              },
              {
                title: "Instant Anomaly Detection",
                description:
                  "Identify and resolve issues immediately with intelligent monitoring.",
                icon: Loader2,
                image:
                  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              },
              {
                title: "Effortless Rollbacks",
                description:
                  "Quickly revert to a stable state with a simple, guided process.",
                icon: ArrowLeftCircle,
                image:
                  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
              },
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-primary">
                  <step.icon className="size-6" />
                </div>
                <div className="space-y-4 text-center">
                  <h3 className="text-xl font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                <div className="w-full">
                  <Image
                    src={step.image}
                    alt={`Step ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full rounded-lg border object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Separator className="mt-8" />
      </div>
    </section>
  );
}
