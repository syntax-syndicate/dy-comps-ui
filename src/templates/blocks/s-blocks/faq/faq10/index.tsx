"use client";

import React, { useState } from "react";
import {
  CircleHelp,
  CreditCard,
  Mail,
  RefreshCw,
  Settings,
  SmilePlus,
  FileText,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    icon: SmilePlus,
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running.",
  },
  {
    icon: RefreshCw,
    question: "What is your cancellation policy?",
    answer:
      "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
  },
  {
    icon: CreditCard,
    question: "How does billing work?",
    answer:
      "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
  },
  {
    icon: CircleHelp,
    question: "How does support work?",
    answer:
      "If you're having trouble with Untitled UI, we're here to try and help via hello@untitledui.com. We're a small team, but will get back to soon.",
  },
  {
    icon: Settings,
    question: "Can I change my plan later?",
    answer:
      "Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow.",
  },
  {
    icon: FileText,
    question: "Can other info be added to an invoice?",
    answer:
      "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name manually.",
  },
  {
    icon: Mail,
    question: "How do I change my account email?",
    answer:
      "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
  },
  {
    icon: CircleHelp,
    question: "Do you provide tutorials?",
    answer:
      "Not yet, but we're working on it! In the meantime, we've done our best to make it intuitive and we're building our documentation page.",
  },
];

export default function FrequentlyAskedQuestions10() {
  const [displayCount, setDisplayCount] = useState(6);

  const loadMore = () => {
    setDisplayCount((prevCount) => Math.min(prevCount + 2, faqs.length));
  };

  return (
    <div className="container mx-auto py-32">
      <div className="mb-8 flex items-start justify-between">
        <div className="max-w-2xl">
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground">
            Quick answers to questions you may have. Can&apos;t find what
            you&apos;re looking for? Check out our{" "}
            <a href="/docs" className="text-primary hover:underline">
              full documentation
            </a>
            .
          </p>
        </div>
        <Button variant="outline" className="hidden gap-2 sm:flex">
          Documentation
          <ExternalLink className="size-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {faqs.slice(0, displayCount).map((faq, index) => {
          const Icon = faq.icon;
          return (
            <Card key={index} className="border-none bg-background shadow-none">
              <CardContent className="p-0">
                <div className="flex gap-4">
                  <div className="rounded-md p-1">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">{faq.question}</h3>
                    <p className="text-sm text-muted-foreground">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {displayCount < faqs.length && (
        <div className="mt-16 text-center">
          <Button variant="outline" onClick={loadMore}>
            Load more
          </Button>
        </div>
      )}
    </div>
  );
}
