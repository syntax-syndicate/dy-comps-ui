import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const productLinks = [
  "Overview",
  "Pricing",
  "Marketplace",
  "Features",
  "Integrations",
];
const companyLinks = ["About", "Team", "Blog", "Careers", "Contact", "Privacy"];
const resourceLinks = ["Help", "Sales", "Advertise"];

export default function Footer4() {
  return (
    <section className="py-32">
      <div className="container">
        <footer>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
          </div>
          <Separator className="my-14 lg:my-20" />
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="mb-2 text-3xl font-semibold lg:text-4xl">
                Join our newsletter
              </p>
              <p className="text-muted-foreground">
                Get exclusive news, features, and updates.
              </p>
            </div>
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input type="email" placeholder="Email" />
              <Button type="submit">Subscribe</Button>
            </div>
          </div>
          <Separator className="my-14 lg:my-20" />
          <div className="flex flex-col justify-between gap-4 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <ul className="flex gap-4">
              <li className="underline hover:text-primary">
                <Link href="#"> Terms and Conditions</Link>
              </li>
              <li className="underline hover:text-primary">
                <Link href="#"> Privacy Policy</Link>
              </li>
            </ul>
            <p>
              © {new Date().getFullYear()} Your Company Name. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
