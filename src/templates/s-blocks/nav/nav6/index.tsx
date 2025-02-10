"use client";

import * as React from "react";
import Link from "next/link";
import {
  Menu,
  Briefcase,
  Flame,
  Trophy,
  Rss,
  Pencil,
  Users,
  Building,
  Phone,
} from "lucide-react";

import { Newspaper } from "lucide-react";
import { LifeBuoy } from "lucide-react";
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
import Image from "next/image";

const features = [
  {
    name: "Design",
    items: [
      {
        name: "Explore Design Work",
        description: "Trending designs to inspire you",
        href: "/features/explore",
        icon: Briefcase,
      },
      {
        name: "New & Noteworthy",
        description: "Up-and-coming designers",
        href: "/features/new",
        icon: Flame,
      },
      {
        name: "Playoffs",
        description: "Work designers are riffing on",
        href: "/features/playoffs",
        icon: Trophy,
      },
    ],
  },
  {
    name: "Learn Design",
    items: [
      {
        name: "Blog",
        description: "Interviews, tutorials, and more",
        href: "/features/blog",
        icon: Rss,
      },
      {
        name: "Weekly Warm-up",
        description: "Prompt to flex your skills",
        href: "/features/weekly",
        icon: Pencil,
      },
    ],
  },
  {
    name: "Hire Designers",
    items: [
      {
        name: "Job Board",
        description: "Find your next designer",
        href: "/features/jobs",
        icon: Briefcase,
      },
      {
        name: "Freelance Projects",
        description: "An exclusive list for contract work",
        href: "/features/freelance",
        icon: Users,
      },
    ],
  },
];

const company = [
  {
    name: "About",
    items: [
      {
        name: "About Us",
        description: "Our mission and values",
        href: "/company/about",
        icon: Building,
      },
      {
        name: "Careers",
        description: "Join our growing team",
        href: "/company/careers",
        icon: Briefcase,
      },
      {
        name: "Press",
        description: "News and press releases",
        href: "/company/press",
        icon: Newspaper,
      },
    ],
  },
  {
    name: "Support",
    items: [
      {
        name: "Help Center",
        description: "FAQs and support articles",
        href: "/company/help",
        icon: LifeBuoy,
      },
      {
        name: "Contact Us",
        description: "Get in touch with our team",
        href: "/company/contact",
        icon: Phone,
      },
    ],
  },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features", megaMenu: "features" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Company", href: "/company", megaMenu: "company" },
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
                  {item.megaMenu ? (
                    <>
                      <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="grid w-[600px] gap-3 p-4 md:w-[700px] md:grid-cols-3 lg:w-[800px]">
                          {(item.megaMenu === "features"
                            ? features
                            : company
                          ).map((section, index) => (
                            <div key={section.name}>
                              <h3 className="mb-2 text-sm font-medium leading-none">
                                {section.name}
                              </h3>
                              <hr className="mb-2" />
                              {section.items.map((subItem) => (
                                <NavigationMenuLink asChild key={subItem.name}>
                                  <a
                                    href={subItem.href}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="flex items-center gap-2 text-sm font-medium leading-none">
                                      <subItem.icon className="size-4" />
                                      {subItem.name}
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {subItem.description}
                                    </p>
                                  </a>
                                </NavigationMenuLink>
                              ))}
                            </div>
                          ))}
                        </div>
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
            <Link href="/get-started">Sign up</Link>
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
              <div className="flex flex-col gap-2">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.megaMenu ? (
                      <>
                        <div className="px-2 py-1 text-sm font-medium text-muted-foreground">
                          {item.name}
                        </div>
                        <div className="grid gap-2 pl-4">
                          {(item.megaMenu === "features"
                            ? features
                            : company
                          ).map((section) => (
                            <div key={section.name}>
                              <div className="mb-1 px-2 text-xs font-semibold uppercase text-muted-foreground">
                                {section.name}
                              </div>
                              {section.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex items-center gap-2 rounded-md px-2 py-1 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                                >
                                  <subItem.icon className="size-4" />
                                  {subItem.name}
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="flex items-center gap-2 rounded-md px-2 py-1 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
              <hr className="my-4" />
              <Button variant="ghost" asChild className="justify-start">
                <Link href="/login">Log in</Link>
              </Button>
              <Button asChild>
                <Link href="/get-started">Sign up</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
}
