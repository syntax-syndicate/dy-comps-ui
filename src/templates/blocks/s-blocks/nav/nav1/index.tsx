"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Company", href: "/company" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Features", href: "/features" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Nav1() {
  return (
    <header className="border-b bg-background">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          {/* Replace <img> with <Image> */}
          <Image
            src="/logo.svg"
            alt="DY Comps Arrow Logo"
            width={32}
            height={32}
            className="size-8"
          />
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-semibold">DY Comps</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link href="/get-started">Get started</Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="size-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="mt-8 flex flex-col gap-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {item.name}
                </Link>
              ))}
              <hr className="my-4" />
              <Button variant="ghost" asChild className="justify-start">
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild>
                <Link href="/get-started">Get started</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
