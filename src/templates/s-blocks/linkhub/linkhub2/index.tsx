"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ExternalLink } from "lucide-react";

const linkCategories = [
  {
    name: "Main",
    links: [
      { href: "/home", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/products", label: "Products" },
      { href: "/services", label: "Services" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    name: "Resources",
    links: [
      { href: "/blog", label: "Blog" },
      { href: "/faq", label: "FAQ" },
      { href: "/support", label: "Support" },
      { href: "/resources", label: "Resources" },
      { href: "/downloads", label: "Downloads" },
    ],
  },
  {
    name: "Company",
    links: [
      { href: "/careers", label: "Careers" },
      { href: "/partners", label: "Partners" },
      { href: "/team", label: "Our Team" },
      { href: "/history", label: "Company History" },
      { href: "/press", label: "Press Releases" },
    ],
  },
  {
    name: "Legal",
    links: [
      { href: "/terms", label: "Terms of Service" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/accessibility", label: "Accessibility" },
      { href: "/sitemap", label: "Sitemap" },
      { href: "/cookie-policy", label: "Cookie Policy" },
    ],
  },
];

export default function LinkHub() {
  return (
    <div className="bg-background py-16">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-12 text-center text-4xl font-bold text-foreground">
          Link Hub
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {linkCategories.map((category) => (
            <Card key={category.name} className="overflow-hidden">
              <CardHeader className="bg-muted pb-3">
                <CardTitle className="text-lg font-semibold">
                  {category.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-1">
                  {category.links.map((link, index) => (
                    <li key={link.href}>
                      {index > 0 && <Separator className="my-1" />}
                      <a
                        href={link.href}
                        className="group flex items-center justify-between rounded-md p-2 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:bg-muted focus:text-foreground focus:outline-none"
                      >
                        {link.label}
                        <ExternalLink className="size-4 opacity-0 transition-opacity group-hover:opacity-100 group-focus:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
