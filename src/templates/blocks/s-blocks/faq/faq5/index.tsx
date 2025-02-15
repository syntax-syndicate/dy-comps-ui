"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is a FAQ and why is it important?",
    answer:
      "FAQ stands for Frequently Asked Questions. It is a list that provides answers to common questions people may have about a specific product, service, or topic. FAQs are important because they provide quick, accessible information to users, reducing the need for individual customer support interactions and improving overall user experience.",
  },
  {
    question: "Why should I use a FAQ on my website or app?",
    answer:
      "Utilizing a FAQ section on your website or app is a practical way to offer instant assistance to your users or customers. Instead of waiting for customer support responses, they can find quick answers to commonly asked questions. This can lead to increased user satisfaction, reduced support workload, and improved efficiency in addressing user concerns.",
  },
  {
    question: "How do I effectively create a FAQ section?",
    answer:
      "Creating an effective FAQ section involves several steps: 1) Identify common questions from your users or customer support interactions. 2) Write clear, concise answers to these questions. 3) Organize the questions logically, perhaps by topic or frequency. 4) Use plain language and avoid jargon. 5) Keep your FAQ updated as new common questions arise. 6) Consider making your FAQ searchable for easier navigation.",
  },
  {
    question: "What are the benefits of having a well-maintained FAQ section?",
    answer:
      "A well-maintained FAQ section offers numerous benefits: 1) Improved user experience by providing instant answers. 2) Reduced workload for customer support teams. 3) Increased website engagement and time-on-site. 4) Better SEO through relevant, keyword-rich content. 5) Demonstration of expertise and thoroughness to potential customers. 6) Opportunity to address common objections or concerns proactively.",
  },
  {
    question: "How often should I update my FAQ?",
    answer:
      "You should update your FAQ regularly, ideally every 3-6 months or whenever there are significant changes to your product, service, or common customer inquiries. Regular updates ensure that your FAQ remains relevant and continues to address the most current concerns of your users or customers.",
  },
  {
    question: "Can FAQs improve my website's SEO?",
    answer:
      "Yes, FAQs can significantly improve your website's SEO. They provide an opportunity to include relevant keywords naturally, address long-tail search queries, and create content that directly answers user questions. This can help your website appear in featured snippets and improve your overall search engine rankings.",
  },
];

export default function FrequentlyAskedQuestions5() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredFAQs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const toggleItem = (value: string) => {
    setOpenItems((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  return (
    <section className="bg-background py-24">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            FAQ
          </Badge>
          <h1 className="mb-4 text-4xl font-bold">
            Common Questions & Answers
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
            Find out all the essential details about our platform and how it can
            serve your needs.
          </p>
          <div className="relative mx-auto">
            <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search FAQs..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        <div className="mx-auto mt-14">
          <Accordion
            type="multiple"
            value={openItems}
            onValueChange={setOpenItems}
          >
            {filteredFAQs.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="hover:no-underline">
                  <span className="flex items-center text-left text-lg">
                    <span className="mr-4 flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-lg text-primary-foreground">
                      {index + 1}
                    </span>
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="pl-10 text-lg text-muted-foreground">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          {filteredFAQs.length === 0 && (
            <p className="mt-8 text-center text-muted-foreground">
              No matching FAQs found. Please try a different search term.
            </p>
          )}
        </div>
        <div className="mt-16 text-center">
          <h2 className="mb-4 text-2xl font-semibold">Still have questions?</h2>
          <p className="mb-6 text-muted-foreground">
            If you cannot find answer to your question in our FAQ, you can
            always contact us. We will answer to you shortly!
          </p>
          <Button>Contact Us</Button>
        </div>
      </div>
    </section>
  );
}
