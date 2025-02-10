"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Bot, Loader2 } from "lucide-react";

export default function Hero73() {
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    setIsLoading(true);
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    setShowSuccessMessage(true);
    setMessage("");
  };

  useEffect(() => {
    if (showSuccessMessage) {
      const timer = setTimeout(() => setShowSuccessMessage(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showSuccessMessage]);

  return (
    <section className="w-full bg-background py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Welcome to Our AI Chatbot
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Get instant answers to your questions. Our AI is here to help you
              24/7.
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form onSubmit={handleSubmit} className="mt-6 flex space-x-2">
              <Input
                className="flex-1"
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                aria-label="Chat message"
              />
              <Button type="submit" disabled={isLoading || !message.trim()}>
                {isLoading ? (
                  <Loader2 className="mr-2 size-4 animate-spin" />
                ) : (
                  <ArrowRight className="mr-2 size-4" />
                )}
                {isLoading ? "Starting..." : "Start Chat"}
              </Button>
            </form>

            {showSuccessMessage && (
              <div className="text-sm text-primary">
                Chat started successfully! An agent will be with you shortly.
              </div>
            )}
          </div>
          <div className="flex items-center justify-center space-x-2 pt-4">
            <Bot className="size-6 text-primary" />
            <p className="text-sm text-muted-foreground">
              Powered by advanced AI technology
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
