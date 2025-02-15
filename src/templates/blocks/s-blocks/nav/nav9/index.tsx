"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="bg-background">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="size-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                <nav className="flex flex-col gap-4">
                  {navigation.map((item) => (
                    <SheetClose asChild key={item.name}>
                      <Link
                        href={item.href}
                        className="block px-2 py-1 text-lg"
                      >
                        {item.name}
                      </Link>
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
          <nav className="hidden md:flex md:flex-1">
            <ul className="flex gap-4">
              {navigation.map((item) => (
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
          <div className="flex flex-1 justify-center">
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
          </div>
          <div className="flex flex-1 justify-end">
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
