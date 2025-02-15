import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  CircleHelp,
  FileText,
  Mail,
  MessageCircle,
  PhoneCall,
  Rocket,
  Settings,
  Zap,
} from "lucide-react";

const faqItems = [
  {
    icon: <Settings className="size-6" />,
    question: "What do we do?",
    answer:
      "We provide a secure, cloud-based customer management platform with powerful analytics and integrations. Our intuitive interface makes it easy to customize and automate customer workflows and manage customers.",
  },
  {
    icon: <Rocket className="size-6" />,
    question: "Installing Untitled",
    answer:
      "We offer a simple one-click installation process. Once installed, you can access all of our features in minutes, allowing you to start managing customer relationships right away in the app.",
  },
  {
    icon: <Zap className="size-6" />,
    question: "Getting started with Untitled",
    answer:
      "We provide a range of tools to help you easily organize your customer data. From creating customer profiles to setting up automated workflows, you'll be able to quickly get your customer data organized.",
  },
  {
    icon: <MessageCircle className="size-6" />,
    question: "The messenger",
    answer:
      "The in-app messenger allows you to communicate with customers in real-time. You can easily send messages, create conversations, and track customer activity from within the customer management platform.",
  },
  {
    icon: <Mail className="size-6" />,
    question: "Our next-gen inbox",
    answer:
      "Our inbox automation feature allows you to quickly filter customer emails and prioritize customer requests. With smart automation, you can reduce customer response time and improve customer service.",
  },
  {
    icon: <FileText className="size-6" />,
    question: "How do tickets work?",
    answer:
      "Our ticketing system allows you to track customer requests and monitor customer activity. You can easily assign, prioritize, and manage customer tickets from within the customer management platform.",
  },
  {
    icon: <CircleHelp className="size-6" />,
    question: "How does support work?",
    answer:
      "Our support team is available to answer any questions you may have. They can be reached by email, phone, or our live chat system. Got any questions? Just chat to our friendly team.",
  },
  {
    icon: <PhoneCall className="size-6" />,
    question: "How does billing work?",
    answer:
      "We use a secure payment processor and offer various payment methods so you can choose the one that works best for you. All billing information is kept confidential and secure.",
  },
];

export default function FrequentlyAskedQuestions15() {
  return (
    <section className="bg-background py-24 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold tracking-tight xl:text-5xl">
            Support & <span className="text-primary">Documentation</span>
          </h2>
          <p className="text-muted-foreground">
            Quick answers to questions you may have. Can&apos;t find what
            you&apos;re looking for?{" "}
            <a href="#" className="text-primary hover:underline">
              Check out our full documentation
            </a>
            .
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {faqItems.map((item, index) => (
            <Accordion key={index} type="single" collapsible className="w-full">
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger
                  className={`flex items-center gap-4 rounded-lg p-4 hover:no-underline`}
                >
                  <div className="flex-shrink-0 text-primary">{item.icon}</div>
                  <div className="flex-grow text-left font-semibold">
                    {item.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-2 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </section>
  );
}
