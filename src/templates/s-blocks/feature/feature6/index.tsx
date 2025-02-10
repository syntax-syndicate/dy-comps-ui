import { Separator } from "@/components/ui/separator";
import { CircleCheckBig, Lightbulb } from "lucide-react";
import Image from "next/image";

export default function InnovativeFeatures() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col lg:items-start lg:text-left">
            <span className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
              <Lightbulb className="size-6 text-primary" />
            </span>
            <h1 className="my-6 text-pretty text-3xl font-bold lg:text-4xl">
              Revolutionize Your Workflow
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-lg">
              Discover a new era of productivity with our cutting-edge platform.
              We&apos;ve reimagined how you work, collaborate, and achieve your
              goals.
            </p>
            <ul className="space-y-4 rounded-lg text-left">
              {[
                "Streamline your tasks with AI-powered assistance",
                "Collaborate seamlessly across teams and time zones",
                "Visualize your progress with intuitive analytics",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CircleCheckBig className="size-6 text-primary" />
                  <p className="lg:text-lg">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-tl-lg bg-accent pl-6 pt-6">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Innovative workspace visualization"
              className="max-h-96 w-full rounded-tl-lg object-cover"
              width={384}
              height={384}
            />
          </div>
        </div>
        <Separator />
      </div>
    </section>
  );
}
