"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus, Minus } from "lucide-react";

const useCases = [
  {
    title: "Search",
    content:
      "Implement fast and accurate search functionality across your data.",
  },
  {
    title: "Generative AI (RAG)",
    content:
      "Leverage retrieval-augmented generation for enhanced AI capabilities.",
  },
  {
    title: "Recommendation and personalization",
    content:
      "Deliver personalized experiences based on user behavior and preferences.",
  },
  {
    title: "Semi-structured navigation",
    content: "Enable intuitive navigation through complex data structures.",
  },
  {
    title: "Personal/private search",
    content: "Secure and private search functionality for sensitive data.",
  },
];

export default function Feature112() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-primary/5 py-24">
      <div className="container max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold tracking-tight lg:text-4xl">
              Vespa lets you query, organize, and make inferences in vectors,
              tensors, text and structured data.
            </h2>
            <p className="text-xl text-muted-foreground">
              Scale to billions of constantly changing data items, thousands of
              queries per second with latencies below 100 milliseconds.
            </p>
            <Button className="w-96" size="lg">
              Use cases
            </Button>
          </div>

          <div className="space-y-4">
            {useCases.map((useCase, index) => (
              <div key={index} className="border-b">
                <button
                  onClick={() =>
                    setExpandedIndex(expandedIndex === index ? null : index)
                  }
                  className="flex w-full items-center justify-between py-4 text-left text-lg font-medium transition-colors hover:text-primary"
                >
                  {useCase.title}
                  <span className="ml-2">
                    {expandedIndex === index ? (
                      <Minus className="size-5" />
                    ) : (
                      <Plus className="size-5" />
                    )}
                  </span>
                </button>
                {expandedIndex === index && (
                  <div className="pb-4 text-muted-foreground">
                    {useCase.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
