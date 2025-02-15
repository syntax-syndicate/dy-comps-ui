import { ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";

import { Badge } from "@/components/ui/badge";

const faqItems = [
  {
    question: "What is a FAQ and why is it important?",
    answer:
      "A FAQ (Frequently Asked Questions) is a list of common questions and answers about a particular topic. It's important because it provides quick, accessible information to users, reducing the need for individual customer support interactions.",
  },
  {
    question: "Why should I use a FAQ on my website or app?",
    answer:
      "Using a FAQ can improve user experience, reduce support workload, and increase user engagement by providing immediate answers to common queries.",
  },
  {
    question: "How do I effectively create a FAQ section?",
    answer:
      "To create an effective FAQ, identify common questions from your users, provide clear and concise answers, organize questions logically, and update regularly based on new information or user feedback.",
  },
  {
    question: "What are the benefits of having a well-maintained FAQ section?",
    answer:
      "A well-maintained FAQ can improve customer satisfaction, reduce support costs, increase website engagement, and boost SEO by addressing common search queries.",
  },
  {
    question: "How should I organize my FAQ for optimal usability?",
    answer:
      "Organize your FAQ by grouping related questions, using clear headings, and considering a search function for larger FAQs. You can also use an accordion style like this one for easy navigation.",
  },
  {
    question: "How often should I update my FAQ, and why is it necessary?",
    answer:
      "Update your FAQ regularly, ideally whenever you receive new common questions or when information changes. This ensures your FAQ remains relevant and continues to meet user needs.",
  },
  {
    question: "Is it possible to customize my FAQ section to match my brand?",
    answer:
      "Yes, you can customize your FAQ section to match your brand's colors, typography, and overall design aesthetic while maintaining usability and clarity.",
  },
  {
    question: "How can I make sure users know about my FAQ section?",
    answer:
      "Promote your FAQ by linking to it prominently in your navigation, mentioning it in customer communications, and directing users to it when appropriate in support interactions.",
  },
];

export default function FrequentlyAskedQuestions4() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto">
        <div className="mb-12">
          <Badge>FAQ</Badge>

          <h1 className="mt-4 text-4xl font-semibold">
            Common <span className="text-primary">Questions & Answers</span>
          </h1>
          <p className="mt-4 text-muted-foreground">
            Find out all the essential details about our platform and how it can
            serve your needs.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger className="text-left text-xl hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="max-w-[95%] text-lg text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <Separator className="my-12" />

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="text-2xl font-semibold">Still have questions?</h2>
            <p className="mt-2 text-muted-foreground">
              We&apos;re here to provide clarity and assist with any queries you
              may have.
            </p>
          </div>
          <div className="flex md:justify-end">
            <a href="#" className="flex items-center gap-2 hover:underline">
              Contact Support
              <ChevronRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
