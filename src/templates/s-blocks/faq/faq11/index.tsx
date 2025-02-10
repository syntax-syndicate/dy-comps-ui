import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CircleHelp,
  CreditCard,
  Mail,
  RefreshCw,
  Settings,
  Users,
  FileText,
  HelpCircle,
} from "lucide-react";

const faqs = [
  {
    icon: <CircleHelp className="size-5" />,
    question: "Is there a free trial available?",
    answer: (
      <>
        Yes, you can try us for free for 30 days. If you want, we&apos;ll
        provide you with a free 30-minute onboarding call to get you up and
        running.{" "}
        <a
          href="#"
          className="font-medium underline underline-offset-4 hover:text-primary"
        >
          Book a call here
        </a>
        .
      </>
    ),
  },
  {
    icon: <Settings className="size-5" />,
    question: "Can I change my plan later?",
    answer:
      "Yes! You can change your plan at any time. Upgrading or downgrading is simple and the changes will be reflected in your next billing cycle.",
  },
  {
    icon: <RefreshCw className="size-5" />,
    question: "What is your cancellation policy?",
    answer:
      "You can cancel your subscription at any time. Once canceled, you'll have access to your account until the end of your billing period.",
  },
  {
    icon: <Users className="size-5" />,
    question: "Can other info be added to an invoice?",
    answer:
      "Yes, you can add additional information to your invoices, such as your company details, VAT number, or specific billing requirements.",
  },
  {
    icon: <CreditCard className="size-5" />,
    question: "How does billing work?",
    answer:
      "We bill monthly or annually, depending on your preference. Payment is processed securely through our payment provider.",
  },
  {
    icon: <Mail className="size-5" />,
    question: "How do I change my account email?",
    answer:
      "You can change your account email through your account settings. We'll send a verification email to confirm the change.",
  },
  {
    icon: <HelpCircle className="size-5" />,
    question: "How does support work?",
    answer:
      "Our support team is available 24/7 to help you with any questions or issues you may have.",
  },
  {
    icon: <FileText className="size-5" />,
    question: "Do you provide tutorials?",
    answer:
      "Yes, we provide comprehensive tutorials and documentation to help you get the most out of our platform.",
  },
];

export default function FrequentlyAskedQuestions11() {
  return (
    <div className="container mx-auto w-full max-w-3xl px-4 py-32">
      <div className="relative pb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-muted-foreground">
          These are the most commonly asked questions about Untitled UI and
          billing.
          <br />
          Can&apos;t find what you&apos;re looking for?{" "}
          <a
            href="#"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Chat to our friendly team!
          </a>
        </p>
      </div>

      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border-b"
          >
            <AccordionTrigger className="py-4 transition-all hover:no-underline [&[data-state=open]>div>svg]:rotate-180">
              <div className="flex w-full items-center text-left">
                <div className="mr-6 flex size-10 shrink-0 items-center justify-center rounded-lg border text-primary">
                  {faq.icon}
                </div>
                <span className="flex-grow font-medium">{faq.question}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-16 pb-4 pt-0">
              <div className="text-muted-foreground">{faq.answer}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
