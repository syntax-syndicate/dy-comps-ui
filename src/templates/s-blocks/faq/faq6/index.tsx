import { Coffee, Code, Globe, Mail } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const faqs = [
  {
    question: "How do I brew the perfect cup of coffee?",
    answer:
      "Start with freshly roasted beans, grind them just before brewing, use filtered water at 200°F, and aim for a 1:16 coffee-to-water ratio. Experiment to find your perfect brew!",
    icon: Coffee,
    category: "Lifestyle",
  },
  {
    question: "What's the best way to learn coding?",
    answer:
      "Start with the basics of a language like Python or JavaScript, practice regularly, work on small projects, and gradually increase complexity. Online resources and coding bootcamps can be great tools.",
    icon: Code,
    category: "Technology",
  },
  {
    question: "How can I reduce my carbon footprint?",
    answer:
      "Reduce energy consumption, use public transportation or bike when possible, eat less meat, recycle and compost, and support eco-friendly businesses and policies.",
    icon: Globe,
    category: "Environment",
  },
  {
    question: "What's the secret to effective email communication?",
    answer:
      "Keep messages concise, use clear subject lines, proofread before sending, be mindful of tone, and use bullet points for clarity when appropriate.",
    icon: Mail,
    category: "Communication",
  },
];

export default function FrequentlyAskedQuestions() {
  return (
    <div className="container mx-auto py-16">
      <h2 className="mb-8 text-center text-3xl font-bold">
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
          >
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="flex items-center gap-2">
                    {<faq.icon className="mr-2 text-primary" size={50} />}
                    {faq.question}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{faq.answer}</p>
                <span className="mt-2 inline-block rounded bg-accent px-2 py-1 text-sm font-medium">
                  {faq.category}
                </span>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
