import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronRight } from "lucide-react";

const faqItems = [
  {
    question: "What do we do?",
    answer:
      "We provide a secure, cloud-based customer management platform with powerful analytics and integrations. Our intuitive interface makes it easy to customize and automate customer workflows and manage customers.",
  },
  {
    question: "Getting started with Untitled",
    answer:
      "To get started with Untitled, sign up for an account on our website and follow the onboarding process. Our intuitive interface will guide you through setting up your first project.",
  },
  {
    question: "Installing Untitled",
    answer:
      "Untitled is a cloud-based platform, so there's no installation required. Simply access it through your web browser at app.untitled.com.",
  },
  {
    question: "The messenger",
    answer:
      "Our messenger feature allows real-time communication with your team and customers. Access it from the main dashboard after logging in.",
  },
  {
    question: "Our next-gen inbox",
    answer:
      "The next-gen inbox uses AI to prioritize and categorize your messages, helping you focus on what's most important. Find it in the 'Messages' section of your dashboard.",
  },
  {
    question: "How do tickets work?",
    answer:
      "Tickets help you track and resolve customer issues. Create a new ticket from the 'support' tab, assign it to team members, and track its progress until resolution.",
  },
  {
    question: "How does support work?",
    answer:
      "Our support team is available 24/7. Reach out through the in-app chat, email at support@untitled.com, or phone at 1-800-UNTITLED for assistance.",
  },
];

export default function FrequentlyAskedQuestions16() {
  return (
    <section className="bg-background py-24 md:px-6">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-gray-500 dark:text-gray-400">
            Quick answers to questions you may have about Untitled UI and
            billing. Can&apos;t find what you&apos;re looking for? Check out our
            full documentation.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Button variant="outline">Documentation</Button>
          <Button>
            Get in touch
            <ChevronRight className="ml-2 size-4" />
          </Button>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
