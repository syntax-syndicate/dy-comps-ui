"use client";

import * as React from "react";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running.",
  },
  {
    question: "How does billing work?",
    answer:
      "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
  },
  {
    question: "How does support work?",
    answer:
      "If you're having trouble with Untitled UI, we're here to try and help via hello@untitledui.com. We're a small team, but will get back to soon.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name manually.",
  },
  {
    question: "Do you provide tutorials?",
    answer:
      "Not yet, but we're working on it! In the meantime, we've done our best to make it intuitive and we're building our documentation page.",
  },
  {
    question: 'What does "lifetime access" mean?',
    answer:
      "Once you have purchased the UI kit, you will have access to all of the future updates, free of charge. We'll let you know about releases.",
  },
  {
    question: "Can I use it for commercial projects?",
    answer:
      "Of course! We'd love to see it. You can use this UI kit to build any type of commercial business, website, app, or project.",
  },
];

export default function FrequentlyAskedQuestions17() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <div className="relative w-full">
      <div className="container relative mx-auto py-20">
        <div className="mb-12 text-center">
          <h1 className="mb-8 text-4xl md:text-5xl">
            Frequently Asked <span className="italic">Questions</span>
          </h1>
          <div className="relative mx-auto max-w-md">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 transform" />
            <Input
              type="search"
              placeholder="Search"
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-1.5 bg-primary opacity-30 blur" />
          <div className="relative grid gap-6 rounded-lg border bg-background p-6 md:grid-cols-2">
            {filteredFaqs.map((faq, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`item-${index}`} className="border-b">
                  <AccordionTrigger className="text-left font-normal">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
