"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  { question: "Can it do X?", answer: "Yes, it can do X. Here's how..." },
  { question: "Can it do Y?", answer: "Y is one of our core features." },
  {
    question: "Can it do Z?",
    answer: "Z functionality is currently in development.",
  },
  {
    question: "How does it handle A?",
    answer: "A is handled through our advanced algorithms.",
  },
  {
    question: "What about B integration?",
    answer: "B integration is seamless with our API.",
  },
  {
    question: "Is C supported?",
    answer: "C is fully supported in our latest version.",
  },
  {
    question: "Can you explain D?",
    answer: "D is a complex feature. Here's a detailed explanation...",
  },
];

export default function FrequentlyAskedQuestions() {
  return (
    <section className="py-12 md:py-20 lg:py-32">
      <div className="container mx-auto">
        <div className="mb-12 flex flex-col items-start text-left">
          <h2 className="mb-4 text-3xl font-semibold md:text-4xl lg:text-5xl">
            Frequently asked <span className="text-primary"> questions.</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqData.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium hover:underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
