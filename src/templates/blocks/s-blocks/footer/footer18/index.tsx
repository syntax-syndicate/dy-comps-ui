import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Footer18() {
  return (
    <footer className="w-full bg-background text-foreground">
      <div className="container mx-auto py-12">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h2 className="mb-6 text-3xl font-bold">
            Feel connected anytime, anywhere.
          </h2>
          <div className="flex justify-center gap-4">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Recieve News
            </Button>
            <Button variant="outline">Contact us</Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="mb-12 grid grid-cols-2 gap-8 md:grid-cols-5">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">
              Company
            </h3>
            <ul className="space-y-2">
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

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">
              Help Center
            </h3>
            <ul className="space-y-2">
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

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">
              Legal
            </h3>
            <ul className="space-y-2">
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

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">
              Company
            </h3>
            <ul className="space-y-2">
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

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase text-muted-foreground">
              Download
            </h3>
            <ul className="space-y-2">
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

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between space-y-4 border-t pt-8 md:flex-row md:space-y-0">
          <div className="flex items-center gap-2">
            <div className="size-6 rounded-full bg-primary" />
            <span className="text-xl font-semibold">DY Comps</span>
            <span className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Dy Comps. All Rights Reserved.
            </span>
          </div>
          <Button variant="ghost" className="text-sm">
            🇺🇸 English (US)
          </Button>
        </div>
      </div>
    </footer>
  );
}
