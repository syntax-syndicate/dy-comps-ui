import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Github, Twitter, Facebook, Linkedin, Instagram } from "lucide-react";

const sections = [
  {
    title: "Product",
    links: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  },
  {
    title: "Company",
    links: ["About", "Team", "Blog", "Careers", "Contact", "Privacy"],
  },
  {
    title: "Resources",
    links: ["Help", "Sales", "Advertise"],
  },
];

const socialIcons = [
  { Icon: Github, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Facebook, href: "#" },
  { Icon: Linkedin, href: "#" },
  { Icon: Instagram, href: "#" },
];

export default function Footer3() {
  return (
    <footer className="bg-background py-32">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-4">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="mb-4 font-bold">{section.title}</h3>
              <ul className="space-y-4 text-muted-foreground">
                {section.links.map((link, linkIndex) => (
                  <li
                    key={linkIndex}
                    className="font-medium hover:text-primary"
                  >
                    <Link href="#">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-2 xl:col-span-1">
            <ul className="mb-10 flex items-center gap-2 text-muted-foreground">
              {socialIcons.map(({ Icon, href }, index) => (
                <li key={index} className="font-medium">
                  <Link href={href}>
                    <span className="flex size-12 items-center justify-center rounded-full bg-muted transition-colors hover:text-primary">
                      <Icon className="size-6" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="grid w-full max-w-sm items-center gap-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Subscribe to our newsletter
              </label>
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="email" id="email" placeholder="Email" />
                <Button type="submit">Subscribe</Button>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                By submitting, you agree to our
                <Link href="#" className="ml-1 text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24 flex flex-col flex-wrap justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
          <p>
            © {new Date().getFullYear()} Your Company Name. All rights
            reserved.
          </p>
          <ul className="flex gap-4">
            <li className="whitespace-nowrap underline hover:text-primary">
              <Link href="#">Terms and Conditions</Link>
            </li>
            <li className="whitespace-nowrap underline hover:text-primary">
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
