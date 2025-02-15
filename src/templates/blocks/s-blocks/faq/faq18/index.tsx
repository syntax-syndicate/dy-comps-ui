"use client";

import { CircleHelp } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-min call to get you running ASAP.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Yes, you can upgrade or downgrade your plan at any time through your account settings.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. You'll retain access until the end of your billing period.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add additional information such as PO numbers or tax IDs to your invoices.",
  },
  {
    question: "Can I get an invoice for my order?",
    answer:
      "Yes, invoices are automatically generated and sent to your billing email address.",
  },
  {
    question: "How does billing work?",
    answer:
      "We bill monthly or annually, depending on your preference. All plans are billed in advance.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can update your email address in your account settings. A verification email will be sent to confirm the change.",
  },
  {
    question: "Is your payment platform secure?",
    answer:
      "Yes, we use industry-standard encryption and secure payment processors to protect your information.",
  },
];

export default function FrequentlyAskedQuestions18() {
  return (
    <div className="relative w-full overflow-hidden bg-background text-foreground">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      <div className="container mx-auto py-20">
        <div className="grid items-start gap-12 lg:grid-cols-[1fr,2fr]">
          <div className="sticky top-20">
            <h1 className="mb-6 text-6xl font-medium">
              Frequently
              <br />
              <span className="relative">asked</span>
              <br />
              <span className="text-primary">questions</span>
              <span
                className="absolute -bottom-2 left-0 h-2 w-full bg-primary"
                aria-hidden="true"
              />
            </h1>
            <Link
              href="/tutorials"
              className="mt-6 inline-flex items-center text-lg font-medium text-primary transition-colors hover:text-primary/80"
            >
              <CircleHelp className="mr-2 size-5" />
              Check out the tutorial library
            </Link>
          </div>

          <div className="space-y-4">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b"
                >
                  <AccordionTrigger className="py-6 text-left text-xl font-semibold transition-colors hover:text-primary/80 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-lg">
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
