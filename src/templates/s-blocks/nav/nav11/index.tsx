"use client";

import * as React from "react";
import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const mainNavigation = [
  { name: "Home", href: "/" },
  { name: "Company", href: "/company" },
  { name: "Team", href: "/team" },
  { name: "Features", href: "/features" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Resources", href: "/resources" },
  { name: "Forum", href: "/forum" },
  { name: "Support", href: "/support" },
];

export default function Component() {
  return (
    <header className="bg-background">
      {/* Top Navbar */}
      <div className="border-b bg-muted">
        <div className="container mx-auto flex h-12 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image
              src={"/logo.svg"}
              alt="DY Comps Arrow Logo"
              className="size-8"
              width={100}
              height={100}
            />
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="text-xl font-semibold">DY Comps</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="size-4" />
              <span>(555) 412-1234</span>
            </div>
            <Link
              href="/contact"
              className="text-sm text-primary transition-colors hover:text-primary/90"
            >
              Contact us
            </Link>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="border-b">
        <div className="container mx-auto">
          <nav>
            <ul className="flex h-12 items-center gap-6">
              {mainNavigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
