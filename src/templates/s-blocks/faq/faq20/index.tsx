"use client";

import { MessageCircle, ChevronDown, Plus, Minus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How do I create a custom care schedule for a plant.",
    answer:
      "You can create a personalized care schedule in the app by selecting your plant and adjusting the watering, fertilizing, and maintenance frequencies based on your specific conditions.",
  },
  {
    question: "Should I also be watering when I use liquid fertilizer.",
    answer:
      "Yes, it's recommended to water your plants when applying liquid fertilizer to help distribute the nutrients evenly and prevent root burn.",
  },
  {
    question: "Does Planta work for in-ground plants too.",
    answer:
      "At this time, Planta does not support plants that are planted in the ground. While we do wish to add this feature to the app in the future, we don't have a timeline for when it will be available.",
  },
  {
    question: "Does Planta have support for Propagation.",
    answer:
      "Yes, Planta includes detailed propagation guides and tracking for many plant species. You can access these features in the plant care section.",
  },
];

export default function FrequentlyAskedQuestions20() {
  return (
    <div className="relative bg-background text-foreground">
      <div className="absolute left-1/2 top-8 flex -translate-x-1/2 flex-col items-center gap-2 text-sm">
        <span>Scroll to explore</span>
        <ChevronDown className="size-4 animate-bounce" />
      </div>

      <div className="container mx-auto pb-20 pt-32">
        <h1 className="mb-24 max-w-4xl text-4xl md:text-6xl lg:text-7xl">
          <span>YOU HAVE QUESTIONS.</span>
          <br />
          <span className="text-primary">
            WE HAVE <MessageCircle className="mx-2 -mt-2 inline-block size-8" />{" "}
            ANSWERS.
          </span>
        </h1>

        <div className="grid gap-12 lg:grid-cols-[300px,1fr] lg:gap-24">
          <div className="text-xl text-primary">
            Whatever plant
            <br />
            we got you covered.
          </div>

          <div className="space-y-px">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-t last:border-b"
                >
                  <AccordionTrigger className="group py-6 hover:no-underline">
                    <div className="flex w-full items-center justify-between pr-4 text-left text-lg">
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
