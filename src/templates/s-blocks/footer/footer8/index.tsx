import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";

const productLinks = [
  "Overview",
  "Pricing",
  "Marketplace",
  "Features",
  "Integrations",
  "Marketing",
];
const companyLinks = ["About", "Team", "Blog", "Careers", "Contact"];

export default function Footer8() {
  return (
    <section className="py-32">
      <div className="container">
        <footer>
          <div className="grid grid-cols-4 justify-between gap-10 lg:grid-cols-6 lg:text-left">
            <div className="col-span-4 flex w-full flex-col justify-between gap-6 lg:col-span-2">
              <div>
                <span className="flex items-center gap-4">
                  <Image
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="logo"
                    width={44}
                    height={44}
                    className="h-11"
                  />
                  <p className="text-3xl font-semibold">DY Comps</p>
                </span>
                <p className="mt-6 text-muted-foreground">
                  A collection of 800+ responsive React templates for your
                  startup business or side project.
                </p>
              </div>
              <ul className="flex items-center space-x-6">
                <li className="font-medium duration-200 hover:scale-110 hover:text-muted-foreground">
                  <Link href="#">
                    <Instagram className="size-6" />
                  </Link>
                </li>
                <li className="font-medium duration-200 hover:scale-110 hover:text-muted-foreground">
                  <Link href="#">
                    <Facebook className="size-6" />
                  </Link>
                </li>
                <li className="font-medium duration-200 hover:scale-110 hover:text-muted-foreground">
                  <Link href="#">
                    <Twitter className="size-6" />
                  </Link>
                </li>
                <li className="font-medium duration-200 hover:scale-110 hover:text-muted-foreground">
                  <Link href="#">
                    <Linkedin className="size-6" />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="mb-5 font-medium">Product</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                {productLinks.map((link) => (
                  <li key={link} className="font-medium hover:text-primary">
                    <Link href="#">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 md:col-span-1">
              <h3 className="mb-5 font-medium">Company</h3>
              <ul className="space-y-4 text-sm text-muted-foreground">
                {companyLinks.map((link) => (
                  <li key={link} className="font-medium hover:text-primary">
                    <Link href="#">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-4 md:col-span-2">
              <h3 className="mb-5 font-medium">Newsletter</h3>
              <div className="grid gap-1.5">
                <Label htmlFor="email">Subscribe to our newsletter</Label>
                <div className="flex w-full items-center space-x-2">
                  <Input type="email" id="email" placeholder="Email" />
                  <Button type="submit">Subscribe</Button>
                </div>
              </div>
              <p className="mt-1 text-xs font-medium text-muted-foreground">
                By submitting, you agree to our
                <Link href="#" className="ml-1 text-primary hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
          <div className="mt-20 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground lg:flex-row lg:items-center lg:text-left">
            <p>
              <span className="mr-1 font-bold text-primary">
                DY Comps
              </span>
              © All rights reserved.
            </p>
            <p>Made with ❤️ DY Comps</p>
          </div>
        </footer>
      </div>
    </section>
  );
}
