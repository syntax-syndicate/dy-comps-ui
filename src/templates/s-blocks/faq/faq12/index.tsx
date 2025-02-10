import * as React from "react";
import {
  CircleHelp,
  CreditCard,
  Mail,
  RefreshCw,
  Settings,
  Users,
  FileText,
  HelpCircle,
  Clock,
  CreditCard as Payment,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const faqs = [
  {
    icon: <CircleHelp className="size-5" />,
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free 30-minute onboarding call to get you up and running.",
  },
  {
    icon: <Settings className="size-5" />,
    question: "Can I change my plan later?",
    answer:
      "Of course you can! Our pricing scales with your company. Chat to our friendly team to find a solution that works for you as you grow.",
  },
  {
    icon: <RefreshCw className="size-5" />,
    question: "What is your cancellation policy?",
    answer:
      "We understand that things change. You can cancel your plan at any time and we'll refund you the difference already paid.",
  },
  {
    icon: <Users className="size-5" />,
    question: "Can other info be added to an invoice?",
    answer:
      "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name manually.",
  },
  {
    icon: <Clock className="size-5" />,
    question: 'What does "lifetime access" mean?',
    answer:
      "Once you have purchased the UI kit, you will have access to all of the future updates, free of charge. We'll let you know about releases.",
  },
  {
    icon: <Payment className="size-5" />,
    question: "Is it a one-time payment?",
    answer:
      "Just a one-time payment! No recurring charges or surprises, we promise. We'll just ask sick of recurring charges are you are.",
  },
  {
    icon: <CreditCard className="size-5" />,
    question: "How does billing work?",
    answer:
      "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
  },
  {
    icon: <Mail className="size-5" />,
    question: "How do I change my account email?",
    answer:
      "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
  },
  {
    icon: <HelpCircle className="size-5" />,
    question: "How does support work?",
    answer: (
      <>
        If you&apos;re having trouble with Untitled UI, we&apos;re here to try
        and help via{" "}
        <a
          href="mailto:hello@untitledui.com"
          className="text-primary hover:underline"
        >
          hello@untitledui.com
        </a>
        . We&apos;re a small team, but will get back to soon.
      </>
    ),
  },
  {
    icon: <FileText className="size-5" />,
    question: "Do you provide tutorials?",
    answer: (
      <>
        Not yet, but we&apos;re working on it! In the meantime, we&apos;ve done
        our best to make it intuitive and we&apos;re building our{" "}
        <a href="/docs" className="text-primary hover:underline">
          documentation page
        </a>
        .
      </>
    ),
  },
];

export default function FrequentlyAskedQuestions12() {
  return (
    <div className="container mx-auto w-full py-16">
      <div className="mb-12 max-w-2xl text-left">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">
          Frequently asked questions
        </h2>
        <p className="text-muted-foreground">
          Stuck on something? We&apos;re here to help with all your questions
          and answers in one place.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <Card key={index} className="border-0 bg-accent/40">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="mt-1 text-primary">{faq.icon}</div>
                <div>
                  <h3 className="mb-2 font-semibold">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
