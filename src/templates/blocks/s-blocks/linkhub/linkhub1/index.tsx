import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface LinkItem {
  href: string;
  label: string;
}

interface Category {
  name: string;
  links: LinkItem[];
}

const exampleCategories: Category[] = [
  {
    name: "Social Media",
    links: [
      { href: "https://twitter.com", label: "Twitter" },
      { href: "https://facebook.com", label: "Facebook" },
      { href: "https://instagram.com", label: "Instagram" },
    ],
  },
  {
    name: "News",
    links: [
      { href: "https://bbc.com", label: "BBC" },
      { href: "https://cnn.com", label: "CNN" },
      { href: "https://reuters.com", label: "Reuters" },
    ],
  },
  {
    name: "Technology",
    links: [
      { href: "https://techcrunch.com", label: "TechCrunch" },
      { href: "https://wired.com", label: "Wired" },
      { href: "https://theverge.com", label: "The Verge" },
    ],
  },
];

export default function LinkHub1() {
  return (
    <div className="container mx-auto py-16">
      <h1 className="mb-8 text-center text-3xl font-bold">
        Accordion Link Hub
      </h1>
      <Accordion type="single" collapsible className="mx-auto w-full max-w-2xl">
        {exampleCategories.map((category) => (
          <AccordionItem value={category.name} key={category.name}>
            <AccordionTrigger className="text-left font-semibold hover:no-underline">
              {category.name}
            </AccordionTrigger>
            <AccordionContent>
              <ul className="space-y-2">
                {category.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-primary hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
