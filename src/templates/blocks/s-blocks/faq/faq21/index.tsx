import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const faqs = [
  {
    question: "Does my address qualify for free shipping?",
    answer:
      "Free shipping is available for most addresses within the continental United States. Enter your zip code at checkout to verify eligibility.",
  },
  {
    question: "How do I schedule my free shipping?",
    answer:
      "You can schedule your free shipping through the Shipping Appointment page, or contact our customer services at 916-123-4567.",
  },
  {
    question: "Who packs my shopping cart?",
    answer:
      "Our trained professional shoppers carefully select and pack your items following strict quality guidelines and your specific preferences.",
  },
  {
    question: "How can I cancel the shipment?",
    answer:
      "You can cancel your shipment up to 24 hours before the scheduled delivery time through your account dashboard or by contacting customer service.",
  },
  {
    question: "How to renew my membership?",
    answer:
      "Your membership can be renewed automatically through your account settings, or manually through the membership portal before the expiration date.",
  },
  {
    question: "How to cancel my membership?",
    answer:
      "You can cancel your membership at any time through your account settings. Any unused portion of your current billing period will remain active.",
  },
  {
    question: "Where to find my card information",
    answer:
      "Your card information can be viewed and managed in the Payment Methods section of your account settings. For security, only the last four digits are displayed.",
  },
];

export default function FrequentlyAskedQuestions() {
  return (
    <div className="relative overflow-hidden bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="relative aspect-square w-full overflow-hidden rounded-lg sm:aspect-[4/3] lg:aspect-[3/2] xl:aspect-[16/9]">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Illustration of people shopping"
              fill
              className="object-cover"
              sizes="(min-width: 1280px) 38rem, (min-width: 1024px) calc(50vw - 6rem), (min-width: 640px) 32rem, calc(100vw - 2rem)"
              priority
            />
          </div>

          <div className="lg:py-12">
            <h1 className="mb-8 text-5xl font-bold">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-primary/10"
                >
                  <AccordionTrigger className="py-4 text-left hover:no-underline">
                    <span className="text-base font-medium">
                      <span className="text-primary"> + </span> {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-sm text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>

      {/* Curved bottom decoration */}
      <div
        className="absolute bottom-0 left-0 right-0 h-20 bg-primary/10"
        style={{
          clipPath: "ellipse(75% 100% at 50% 100%)",
        }}
      />
    </div>
  );
}
