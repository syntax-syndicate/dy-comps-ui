import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Smartphone,
  Apple,
} from "lucide-react";

const productLinks = [
  "Overview",
  "Pricing",
  "Marketplace",
  "Features",
  "Integrations",
];
const companyLinks = ["About", "Team", "Blog", "Careers", "Contact", "Privacy"];
const resourceLinks = ["Help", "Sales", "Advertise"];
const socialLinks = ["Twitter", "Instagram", "LinkedIn"];

const socialIcons = [
  { Icon: Facebook, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Instagram, href: "#" },
  { Icon: Linkedin, href: "#" },
];

const mobileAppIcons = [
  { Icon: Smartphone, href: "#" },
  { Icon: Apple, href: "#" },
];

export default function Footer5() {
  return (
    <section className="py-32">
      <div className="container">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <div>
              <h3 className="mb-4 font-bold">Product</h3>
              <ul className="space-y-4 text-muted-foreground">
                {productLinks.map((link) => (
                  <li key={link} className="font-medium hover:text-primary">
                    <Link href="#">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Company</h3>
              <ul className="space-y-4 text-muted-foreground">
                {companyLinks.map((link) => (
                  <li key={link} className="font-medium hover:text-primary">
                    <Link href="#">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Resources</h3>
              <ul className="space-y-4 text-muted-foreground">
                {resourceLinks.map((link) => (
                  <li key={link} className="font-medium hover:text-primary">
                    <Link href="#">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4 font-bold">Social</h3>
              <ul className="space-y-4 text-muted-foreground">
                {socialLinks.map((link) => (
                  <li key={link} className="font-medium hover:text-primary">
                    <Link href="#">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-10 gap-10">
            <div className="grid gap-8 lg:grid-cols-4 lg:flex-row">
              <div className="col-span-3">
                <p className="mb-3 font-bold">Follow us</p>
                <ul className="flex items-center gap-2 text-muted-foreground">
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
              </div>
              <div>
                <p className="mb-3 font-bold">Mobile App</p>
                <ul className="flex items-center gap-2 text-muted-foreground">
                  {mobileAppIcons.map(({ Icon, href }, index) => (
                    <li key={index} className="font-medium">
                      <Link href={href}>
                        <span className="flex size-12 items-center justify-center rounded-full bg-muted transition-colors hover:text-primary">
                          <Icon className="size-6" />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-24 border-t pt-8">
            <p className="text-center text-sm font-medium text-muted-foreground">
              © {new Date().getFullYear()} Your Company Name. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
