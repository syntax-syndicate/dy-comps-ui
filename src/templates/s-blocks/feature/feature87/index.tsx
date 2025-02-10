import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BrainCircuit, Users, MonitorPlay, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const features = [
  { Icon: BrainCircuit, text: "AI-Powered Insights" },
  { Icon: Users, text: "Collaborative Workspaces" },
  { Icon: MonitorPlay, text: "Interactive Tutorials" },
  { Icon: Sparkles, text: "Personalized Experience" },
];

const faqData = [
  {
    id: 1,
    question: "How does DY-Comps's AI enhance my search experience?",
    answer:
      "DY-Comps's AI algorithms analyze your search patterns and preferences to deliver highly relevant results, making your searches faster and more efficient.",
  },
  {
    id: 2,
    question: "Can I collaborate with others on DY-Comps?",
    answer:
      "Yes, DY-Comps offers collaborative workspaces where you can share findings, discuss insights, and work together on projects with team members or colleagues.",
  },
  {
    id: 3,
    question: "What kind of personalization does DY-Comps offer?",
    answer:
      "DY-Comps personalizes your search experience by tailoring results, suggesting relevant content, and adapting the interface to your preferences and usage history.",
  },
];

export default function Feature87() {
  return (
    <section className="relative overflow-hidden bg-background py-32 text-foreground">
      <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-primary/20 via-transparent to-transparent blur-3xl"></div>
      <div className="absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500/20 via-transparent to-transparent blur-3xl"></div>

      <div className="container relative z-10 p-6 md:p-16">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="flex flex-col justify-between gap-8">
            <div className="text-center lg:text-left">
              <Badge
                variant="outline"
                className="mx-auto inline-flex text-foreground lg:mx-0"
              >
                DY-Comps Features
              </Badge>
              <h2 className="mt-8 text-3xl font-medium md:text-5xl">
                Unleash the Power of{" "}
                <span className="text-primary">Intelligent Search</span>
              </h2>
              <p className="mt-8 text-muted-foreground">
                DY-Comps goes beyond traditional search, leveraging AI to provide
                personalized insights, collaborative workspaces, and a more
                intuitive search experience.
              </p>
            </div>
          </div>
          <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-muted lg:col-span-2">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="DY-Comps Intelligent Search"
              width={733}
              height={550}
              className="aspect-video w-full rounded-lg object-cover"
            />
          </div>
        </div>
        <Separator className="my-16" />

        <div className="grid gap-12 lg:grid-cols-2">
          {" "}
          {/* Features Section */}
          <div className="flex flex-col gap-6">
            {features.map(({ Icon, text }, index) => (
              <div
                key={index}
                className="flex flex-row items-center gap-4 text-left"
              >
                <div className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-primary">
                  <Icon className="size-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium">{text}</h3>
              </div>
            ))}
          </div>
          <div className="mt-6">
            {" "}
            {/* FAQ Section */}
            <h2 className="mb-6 text-2xl font-medium">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible>
              {faqData.map((item) => (
                <AccordionItem key={item.id} value={`item-${item.id}`}>
                  <AccordionTrigger className="text-left font-medium text-foreground">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
