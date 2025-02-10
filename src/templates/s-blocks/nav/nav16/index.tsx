"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";

const services = [
  { name: "Service 1", href: "/" },
  { name: "Service 2", href: "/" },
  { name: "Service 3", href: "/" },
];

const resources = [
  { name: "Case Studies", href: "/" },
  { name: "Events", href: "/events" },
  { name: "Training", href: "/training" },
];

export default function Nav16() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full bg-background py-4 shadow-sm">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={"/logo.svg"}
              alt="DY Comps Arrow Logo"
              className="size-10"
              height={100}
              width={100}
            />
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="text-xl font-semibold">DY Comps</span>
            </Link>
          </div>
          <nav className="hidden items-center space-x-8 lg:flex">
            <Link
              href="/"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Home
            </Link>
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[200px] p-4">
                      {services.map((service) => (
                        <li key={service.name} className="mb-2">
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              {service.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="w-[200px] p-4">
                      {resources.map((resource) => (
                        <li key={resource.name} className="mb-2">
                          <NavigationMenuLink asChild>
                            <Link
                              href={resource.href}
                              className="block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            >
                              {resource.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            <Link
              href="/blog"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>
          <div className="hidden lg:block">
            <Button asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="outline" size="icon">
                <Menu className="size-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col space-y-4">
                <Link
                  href="/"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Services</h3>
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block text-muted-foreground transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Resources</h3>
                  {resources.map((resource) => (
                    <Link
                      key={resource.name}
                      href={resource.href}
                      className="block text-muted-foreground transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {resource.name}
                    </Link>
                  ))}
                </div>
                <Link
                  href="/blog"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className="text-lg font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
                <Button asChild className="mt-4">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Get Started
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
