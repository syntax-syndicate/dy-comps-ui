import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FrequentlyAskedQuestions7() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all unused items in their original packaging.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 3-5 business days for domestic orders and 7-14 days for international orders.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary depending on the destination.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's site.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and Apple Pay.",
    },
  ];

  return (
    <section className="bg-background py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_2fr]">
          <div className="sticky top-24">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Find answers to common questions about our products and services.
            </p>
          </div>
          <div className="space-y-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
