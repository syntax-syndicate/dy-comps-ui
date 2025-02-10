import Link from "next/link";
import { Facebook, Github, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer17() {
  return (
    <footer className="w-full bg-background text-foreground">
      <div className="container mx-auto py-12">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="mb-6 flex items-center gap-2">
              <div className="size-6 rounded-full bg-primary" />
              <span className="text-xl font-semibold">DY Comps</span>
            </Link>
            <p className="mb-6 text-sm text-muted-foreground">
              DY Comps is a open-source library of over 850+ web components and
              interactive elements built with the utility classes from Tailwind
              CSS.
            </p>
            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
              >
                <Facebook className="size-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
              >
                <Instagram className="size-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
              >
                <Twitter className="size-4" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
              >
                <Github className="size-4" />
                <span className="sr-only">GitHub</span>
              </Button>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase text-muted-foreground">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-sm hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/brand-center"
                  className="text-sm hover:text-primary"
                >
                  Brand Center
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-primary">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Center Links */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase text-muted-foreground">
              Help Center
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/discord" className="text-sm hover:text-primary">
                  Discord Server
                </Link>
              </li>
              <li>
                <Link href="/twitter" className="text-sm hover:text-primary">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="/facebook" className="text-sm hover:text-primary">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase text-muted-foreground">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy" className="text-sm hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/licensing" className="text-sm hover:text-primary">
                  Licensing
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm hover:text-primary">
                  Terms
                </Link>
              </li>
            </ul>
          </div>

          {/* Download Links */}
          <div>
            <h3 className="mb-6 text-sm font-semibold uppercase text-muted-foreground">
              Download
            </h3>
            <ul className="space-y-4">
              <li>
                <Link href="/ios" className="text-sm hover:text-primary">
                  iOS
                </Link>
              </li>
              <li>
                <Link href="/android" className="text-sm hover:text-primary">
                  Android
                </Link>
              </li>
              <li>
                <Link href="/windows" className="text-sm hover:text-primary">
                  Windows
                </Link>
              </li>
              <li>
                <Link href="/macos" className="text-sm hover:text-primary">
                  MacOS
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Dy Comps. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
