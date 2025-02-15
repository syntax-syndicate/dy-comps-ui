import Image from "next/image";
import { Zap, TrendingUp, ShieldCheck } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

export default function Feature89() {
  return (
    <section className="overflow-hidden bg-background py-32 text-foreground">
      <div className="container relative">
        <div className="pointer-events-none absolute inset-0 -top-20 -z-10 mx-auto hidden size-[500px] bg-[radial-gradient(hsl(var(--muted-foreground))_1px,transparent_1px)] opacity-25 [background-size:6px_6px] [mask-image:radial-gradient(circle_at_center,white_250px,transparent_250px)] lg:block"></div>
        <div className="relative mb-16 flex flex-col justify-between gap-16 lg:flex-row">
          <div className="w-full max-w-96 shrink-0 justify-between">
            <h2 className="mb-3 text-3xl font-medium lg:text-5xl">
              Leave the Complexity to{" "}
              <span className="text-primary">streamline</span>
            </h2>
            <p className="text-sm text-muted-foreground">
              Streamline refines your entire process, end-to-end. It collects
              data, produces detailed reports, automates tasks, and delivers
              outcomes—all within a unified platform.
            </p>
            <div className="mt-8 flex">
              <Accordion type="single" collapsible className="mt-auto w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    Is it suitable for new users?
                  </AccordionTrigger>
                  <AccordionContent>
                    Absolutely! Streamline&apos;s intuitive design ensures that
                    anyone can easily start using it, no matter their level of
                    technical skill.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    How will it boost my productivity?
                  </AccordionTrigger>
                  <AccordionContent>
                    By automating routine tasks, generating insightful reports,
                    and optimizing your workflow, Streamline allows you to
                    concentrate on high-priority initiatives.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Does it support integration?
                  </AccordionTrigger>
                  <AccordionContent>
                    Certainly. Streamline is built to integrate effortlessly
                    with a vast array of popular tools and platforms, enabling
                    you to build a seamless and effective workflow environment.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Streamline workflow illustration"
            width={800}
            height={450}
            className="max-h-[450px] w-full min-w-[450px] max-w-3xl rounded-lg border object-cover"
          />
        </div>

        <Separator />

        <div className="relative mt-8 grid gap-6 md:grid-cols-3">
          <div className="flex flex-col gap-y-6 rounded-lg border bg-accent p-6 py-10">
            <Zap className="size-6 text-primary" />
            <div>
              <h3 className="text-lg font-medium">
                Supercharge Your Productivity
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Bypass tedious manual labor and convoluted configurations.
                Streamline enables you to laser-focus on crucial goals while it
                orchestrates the background operations.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 rounded-lg border bg-accent p-6 py-10">
            <TrendingUp className="size-6 text-primary" />
            <div>
              <h3 className="text-lg font-medium">Amplify Your Impact</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Refrain from squandering resources on redundant tools or
                personnel. Uphold a streamlined and dynamic operation by
                automating your workflows via Streamline.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 rounded-lg border bg-accent p-6 py-10">
            <ShieldCheck className="size-6 text-primary" />
            <div>
              <h3 className="text-lg font-medium">Safeguard Your Operations</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Eliminate the chaos of disparate systems. Streamline masterfully
                manages the intricacies, guaranteeing reliable outcomes with
                minimal intervention.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
