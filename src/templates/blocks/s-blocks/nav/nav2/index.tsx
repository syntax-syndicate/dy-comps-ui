"use client";

import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Company",
    href: "/company",
    subItems: [
      { name: "About Us", href: "/company/about" },
      { name: "Careers", href: "/company/careers" },
      { name: "Press", href: "/company/press" },
    ],
  },
  { name: "Marketplace", href: "/marketplace" },
  {
    name: "Features",
    href: "/features",
    subItems: [
      { name: "Analytics", href: "/features/analytics" },
      { name: "Automation", href: "/features/automation" },
      { name: "Collaboration", href: "/features/collaboration" },
    ],
  },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Nav2() {
  return (
    <header className="border-b bg-background">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Image
            src={"/logo.svg"}
            alt="DY Comps Arrow Logo"
            className="size-8"
            height={100}
            width={100}
          />
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="text-xl font-semibold">DY Comps</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <NavigationMenu>
            <NavigationMenuList>
              {navigation.map((item) => (
                <NavigationMenuItem key={item.name}>
                  {item.subItems ? (
                    <>
                      <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-3 p-4 md:w-[100px] md:grid-cols-1 lg:w-[200px]">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.name}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {subItem.name}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={item.href} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
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
              <Accordion type="single" collapsible className="w-full">
                {navigation.map((item, index) => (
                  <AccordionItem value={`item-${index}`} key={item.name}>
                    {item.subItems ? (
                      <>
                        <AccordionTrigger>{item.name}</AccordionTrigger>
                        <AccordionContent>
                          <div className="flex flex-col gap-2">
                            {item.subItems.map((subItem) => (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="pl-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex py-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {item.name}
                      </Link>
                    )}
                  </AccordionItem>
                ))}
              </Accordion>
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
