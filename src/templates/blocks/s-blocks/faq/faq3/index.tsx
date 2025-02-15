"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    question: "What is Shadcn UI?",
    answer:
      "Shadcn UI is a collection of re-usable components built with Radix UI and Tailwind CSS.",
  },
  {
    question: "Is it free to use?",
    answer: "Yes, Shadcn UI is completely free and open-source.",
  },
  {
    question: "Can I use it in commercial projects?",
    answer:
      "Shadcn UI is licensed under the MIT license, which allows for commercial use.",
  },
  {
    question: "How do I install Shadcn UI?",
    answer:
      "You can install Shadcn UI components individually using the CLI. Run 'npx shadcn@latest add' to add new components.",
  },
  {
    question: "Does it support dark mode?",
    answer:
      "Yes, Shadcn UI comes with built-in dark mode support using Tailwind CSS classes.",
  },
  {
    question: "Is it compatible with Next.js?",
    answer:
      "Yes, Shadcn UI works great with Next.js and other React-based frameworks.",
  },
];

export default function FrequentlyAskedQuestions3() {
  const [searchTerm, setSearchTerm] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");
  const { toast } = useToast();

  const filteredFAQs = faqData.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    console.log("Submitted:", { email, question });
    toast({
      title: "Question Submitted",
      description: "We'll get back to you as soon as possible.",
    });
    setEmail("");
    setQuestion("");
  };

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto max-w-3xl space-y-16 px-4">
        <div className="flex flex-col items-center text-center">
          <h2 className="mb-4 text-5xl font-bold tracking-tight">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="max-w-3xl text-muted-foreground">
            Find answers to common questions about Shadcn UI and its usage.
          </p>
        </div>

        <div className="mx-auto space-y-8">
          <Accordion type="single" collapsible className="w-full">
            {filteredFAQs.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredFAQs.length === 0 && (
            <p className="text-center text-muted-foreground">
              No matching FAQs found. Try a different search term.
            </p>
          )}
        </div>

        <div className="mx-auto rounded-lg bg-muted p-8">
          <h3 className="mb-4 text-2xl font-semibold tracking-tight">
            Still have questions?
          </h3>
          <p className="mb-6 text-muted-foreground">
            Can&apos;t find the answer you&apos;re looking for? Please fill out
            the form below and we&apos;ll get back to you as soon as possible.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              placeholder="Your question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
            <Button type="submit" className="w-full">
              <Send className="mr-2 size-4" /> Send Question
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
