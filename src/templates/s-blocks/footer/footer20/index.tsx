"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Feature20() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription logic here
    console.log("Subscribed:", email);
    setEmail("");
  };

  return (
    <footer className="w-full bg-background text-foreground">
      <div className="container mx-auto py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About Us Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="size-8 rounded-full bg-primary" />
              <span className="text-2xl font-bold">DY Comps</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering developers and designers with beautiful, functional,
              and accessible UI components.
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
                <Twitter className="size-4" />
                <span className="sr-only">Twitter</span>
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
                <Github className="size-4" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary"
              >
                <Linkedin className="size-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-sm hover:text-primary">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/tutorials" className="text-sm hover:text-primary">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="text-sm hover:text-primary">
                  Showcase
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-sm hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/press" className="text-sm hover:text-primary">
                  Press Kit
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="mb-4 text-lg font-semibold">Stay Connected</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Subscribe to our newsletter for updates and offers.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                required
              />
              <Button
                type="submit"
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 DY Comps™. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookies"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Cookie Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
