"use client";

import * as React from "react";
import Link from "next/link";
import {
  Menu,
  Info,
  Briefcase,
  Newspaper,
  BarChart,
  Zap,
  Users,
} from "lucide-react";
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
      { name: "About Us", href: "/company/about", icon: Info },
      { name: "Careers", href: "/company/careers", icon: Briefcase },
      { name: "Press", href: "/company/press", icon: Newspaper },
    ],
  },
  { name: "Marketplace", href: "/marketplace" },
  {
    name: "Features",
    href: "/features",
    subItems: [
      { name: "Analytics", href: "/features/analytics", icon: BarChart },
      { name: "Automation", href: "/features/automation", icon: Zap },
      { name: "Collaboration", href: "/features/collaboration", icon: Users },
    ],
  },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Component() {
  return (
    <header className="border-b bg-background">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
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
                        <ul className="grid w-[200px] gap-3 p-4 md:grid-cols-1">
                          {item.subItems.map((subItem) => (
                            <li key={subItem.name}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                    {subItem.icon && (
                                      <subItem.icon className="size-4" />
                                    )}
                                    {subItem.name}
                                  </div>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <a
                        href={item.href}
                        className={navigationMenuTriggerStyle()}
                      >
                        {item.name}
                      </a>
                    </NavigationMenuLink>
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
                                className="flex items-center gap-2 pl-4 text-sm text-muted-foreground transition-colors hover:text-foreground"
                              >
                                {subItem.icon && (
                                  <subItem.icon className="size-4" />
                                )}
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </AccordionContent>
                      </>
                    ) : (
                      <AccordionTrigger className="hover:no-underline">
                        <Link href={item.href} className="flex py-4">
                          {item.name}
                        </Link>
                      </AccordionTrigger>
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
