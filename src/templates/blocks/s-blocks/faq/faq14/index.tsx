"use client";

import * as React from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const faqs = [
  {
    question: "What do we do?",
    answer:
      "Millions of businesses of all sizes – from startups to large enterprises – use Untitled's software and APIs to accept payments, send payouts, and manage their businesses online.",
  },
  {
    question: "Getting started with Untitled",
    answer:
      "Learn how to get started with Untitled's platform and tools. We'll guide you through the basics and help you set up your first project.",
  },
  {
    question: "Installing Untitled",
    answer:
      "Follow our step-by-step guide to install Untitled in your application. We support multiple frameworks and platforms.",
  },
  {
    question: "The messenger",
    answer:
      "Learn about our messaging system and how to effectively communicate with your team and customers.",
  },
  {
    question: "Our next-gen inbox",
    answer:
      "Discover our advanced inbox features that help you manage communications more efficiently.",
  },
  {
    question: "How do tickets work?",
    answer:
      "Understand our ticketing system and how it helps you track and resolve customer issues effectively.",
  },
  {
    question: "How does support work?",
    answer:
      "Get to know our support system and how we help you succeed with our platform.",
  },
  {
    question: "How does billing work?",
    answer:
      "Learn about our billing system, pricing plans, and how to manage your subscriptions.",
  },
];

export default function FrequentlyAskedQuestions14() {
  return (
    <div className="container mx-auto w-full py-16">
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="lg:w-1/2">
          <div className="sticky top-8">
            <div className="mb-8 flex items-start gap-4">
              <div className="relative">
                <div className="size-16 rounded-full bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400" />
                <Avatar className="absolute inset-0 size-16 opacity-90 transition-opacity hover:opacity-100">
                  <AvatarImage
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="AI Assistant"
                  />
                  <AvatarFallback className="bg-transparent">AI</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h2 className="mb-1 text-2xl font-bold tracking-tight">
                  How <span className="text-primary">can I help you?</span>
                </h2>
                <p className="text-sm text-muted-foreground">
                  Still need help?{" "}
                  <a href="#" className="text-primary hover:underline">
                    Chat to us
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b"
              >
                <AccordionTrigger className="flex w-full items-center justify-between py-4 hover:no-underline">
                  <span className="pr-2 text-left">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
