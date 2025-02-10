"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What is the meaning of life?",
    answer:
      "The answer to the ultimate question of life, the universe, and everything is 42. At least, that's what Douglas Adams would have us believe!",
  },
  {
    question: "How do I become a better programmer?",
    answer:
      "Practice regularly, read other people's code, contribute to open-source projects, and never stop learning. Also, remember that debugging is twice as hard as writing the code in the first place.",
  },
  {
    question: "Is AI going to take over the world?",
    answer:
      "While AI is becoming increasingly sophisticated, the idea of it 'taking over the world' is more science fiction than reality. AI is a tool that can greatly benefit humanity when used responsibly.",
  },
  {
    question: "What's the best way to learn a new language?",
    answer:
      "Immerse yourself in the language, practice speaking with native speakers, use language learning apps, watch movies or TV shows in the target language, and be consistent in your studies.",
  },
  {
    question: "How can I improve my productivity?",
    answer:
      "Set clear goals, prioritize tasks, use time management techniques like the Pomodoro Technique, minimize distractions, take regular breaks, and don't forget to get enough sleep and exercise.",
  },
];

export default function FrequentlyAskedQuestions9() {
  return (
    <div className="container mx-auto w-full space-y-8 py-32">
      <h2 className="mb-16 text-left text-4xl font-bold">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="overflow-hidden rounded-lg border shadow-sm transition-shadow duration-300 hover:shadow-md">
      <button
        className={cn(
          "flex w-full items-center justify-between p-5 text-left transition-colors",
          "hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
          isOpen && "bg-muted/50",
        )}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-semibold">{question}</span>
        <ChevronDown
          className={cn(
            "size-5 text-primary transition-transform duration-300",
            isOpen && "rotate-180 transform",
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96" : "max-h-0",
        )}
      >
        <div className="bg-secondary/30 p-5">
          <p className="text-muted-foreground">{answer}</p>
        </div>
      </div>
    </div>
  );
}
