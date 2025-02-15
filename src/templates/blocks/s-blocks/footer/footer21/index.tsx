import Link from "next/link";
import { ArrowRight, Github, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-background text-foreground">
      {/* CTA Section */}
      <div className="container mx-auto py-16">
        <h2 className="mb-16 text-center text-4xl font-normal">
          Taste the Digital Delight
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-lg border p-8">
            <p className="mb-8 text-lg">
              Experience our AI-powered ice cream simulator. It&apos;s a treat
              for your digital taste buds!
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-sm text-primary hover:text-primary/80"
            >
              Try a Virtual Scoop <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
          <div className="rounded-lg border p-8 md:border-l">
            <p className="mb-8 text-lg">
              Our team of flavor engineers can help you create, optimize, and
              maximize your digital dessert experience.
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-sm text-primary hover:text-primary/80"
            >
              Get Flavor Support <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
          <div className="rounded-lg border p-8 md:border-l">
            <p className="mb-8 text-lg">
              Dive into our platform and start creating your own digital ice
              cream flavors now.
            </p>
            <Link
              href="#"
              className="inline-flex items-center text-sm text-primary hover:text-primary/80"
            >
              Start Scooping <ArrowRight className="ml-2 size-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto border border-t py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Logo and Social Section */}
          <div className="space-y-8">
            <Link href="/" className="text-2xl font-bold">
              ScoopSim AI
            </Link>
            <p className="text-sm text-muted-foreground">
              © ScoopSim AI, Inc 2024 - Privacy Policy
            </p>
            <div className="space-y-4">
              <p className="text-sm font-semibold">Follow ScoopSim AI</p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Linkedin className="size-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter className="size-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="size-5" />
                </Link>
              </div>
              <p className="pt-4 text-sm font-semibold">Follow Ray</p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Twitter className="size-5" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  <Github className="size-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-6 font-semibold">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Our Vision
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn Links */}
          <div>
            <h3 className="mb-6 font-semibold">Learn</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Flavor Science
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  ScoopSim Summit 2024
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Webinars
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  API Docs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  User Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Links */}
          <div>
            <h3 className="mb-6 font-semibold">Products</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  ScoopSim Platform
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Flavor Creator
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Texture Simulator
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-primary"
                >
                  Partner Integrations
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
