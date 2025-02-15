import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FrequentlyAskedQuestions8() {
  const faqs = [
    {
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for all unused items in their original packaging. If you're not satisfied with your purchase, you can return it for a full refund or exchange.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Shipping typically takes 3-5 business days for domestic orders and 7-14 days for international orders. Expedited shipping options are available at checkout for faster delivery.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we ship to most countries worldwide. Shipping costs and delivery times may vary depending on the destination. Please check our shipping page for more detailed information on international shipping rates and restrictions.",
    },
    {
      question: "How can I track my order?",
      answer:
        "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's site. Simply enter the tracking number in the designated field to get real-time updates on your package's location and estimated delivery date.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, and Apple Pay. We ensure secure transactions through encrypted payment gateways to protect your financial information.",
    },
  ];

  return (
    <section className="bg-background py-12 md:py-24 lg:py-32">
      <div className="container">
        <div className="grid items-start gap-12 md:grid-cols-[2fr_1fr]">
          <div className="space-y-8">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="space-y-4 md:top-24">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground">
              Find answers to common questions about our products and services.
              Can&apos;t find what you&apos;re looking for? Feel free to contact
              our support team.
            </p>
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
