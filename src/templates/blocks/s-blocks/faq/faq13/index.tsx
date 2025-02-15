"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name manually.",
  },
  {
    question: 'What does "lifetime access" mean?',
    answer:
      "Once you have purchased the UI kit, you will have access to all of the future updates, free of charge. We'll let you know about releases.",
  },
  {
    question: "Is it a one-time payment?",
    answer:
      "Just a one-time payment! No recurring charges or surprises, we promise. We're just as sick of recurring charges are you are.",
  },
  {
    question: "How does billing work?",
    answer:
      "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
  },
  {
    question: "How does support work?",
    answer: (
      <>
        If you&apos;re having trouble with Untitled UI, we&apos;re here to try
        and help via{" "}
        <a
          href="mailto:hello@untitledui.com"
          className="text-primary hover:underline"
        >
          hello@untitledui.com
        </a>
        . We&apos;re a small team, but will get back to soon.
      </>
    ),
  },
  {
    question: "Do you provide tutorials?",
    answer: (
      <>
        Not yet, but we&apos;re working on it! In the meantime, we&apos;e done
        our best to make it intuitive and we&apos;re building our{" "}
        <a href="/docs" className="text-primary hover:underline">
          documentation page
        </a>
        .
      </>
    ),
  },
];

export default function FrequentlyAskedQuestions13() {
  const [searchQuery, setSearchQuery] = React.useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const questionMatches = faq.question
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const answerMatches =
      typeof faq.answer === "string"
        ? faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
        : false; // Skip JSX elements in search
    return questionMatches || answerMatches;
  });

  return (
    <div className="container mx-auto w-full py-16">
      <div className="relative mb-12">
        <Badge
          className="absolute -top-8 bg-primary/10 text-primary hover:bg-primary/20"
          variant="secondary"
        >
          FAQ
        </Badge>
        <h2 className="mb-8 text-4xl font-bold tracking-tight">
          What <span className="text-primary">can we help</span> you find?
        </h2>
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search"
            className="pl-10"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-8 gap-y-2 md:grid-cols-2">
        {filteredFaqs.map((faq, index) => (
          <Accordion key={index} type="single" collapsible className="w-full">
            <AccordionItem value={`item-${index}`} className="w-full border-b">
              <AccordionTrigger className="flex w-full items-center justify-between py-4 hover:no-underline">
                <span className="flex-grow pr-2 text-left font-normal">
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>
    </div>
  );
}
