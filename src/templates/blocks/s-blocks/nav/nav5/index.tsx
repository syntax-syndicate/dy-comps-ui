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
  ChevronRight,
  Users,
  Building,
  Phone,
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
import Image from "next/image";

const features = {
  name: "Features",
  description: "Explore our product features and services",
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
};

const categories = {
  name: "Browse categories",
  items: [
    { name: "Animation", href: "/categories/animation" },
    { name: "Branding", href: "/categories/branding" },
    { name: "Illustration", href: "/categories/illustration" },
    { name: "Mobile", href: "/categories/mobile" },
    { name: "Print", href: "/categories/print" },
    { name: "Product Design", href: "/categories/product-design" },
    { name: "Web Design", href: "/categories/web-design" },
  ],
};

const company = {
  name: "Company",
  description: "Learn more about our company and team",
  items: [
    {
      name: "About Us",
      description: "Our mission and values",
      href: "/company/about",
      icon: Building,
    },
    {
      name: "Team",
      description: "Meet the people behind DY Comps",
      href: "/company/team",
      icon: Users,
    },
    {
      name: "Careers",
      description: "Join our growing team",
      href: "/company/careers",
      icon: Briefcase,
    },
    {
      name: "Contact",
      description: "Get in touch with us",
      href: "/company/contact",
      icon: Phone,
    },
  ],
};

const companyLinks = {
  name: "Quick Links",
  items: [
    { name: "Press Kit", href: "/company/press-kit" },
    { name: "Partnerships", href: "/company/partnerships" },
    { name: "Privacy Policy", href: "/company/privacy-policy" },
    { name: "Terms of Service", href: "/company/terms-of-service" },
  ],
};

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
                        {item.megaMenu === "features" && (
                          <div className="grid w-[800px] grid-cols-5 gap-2 p-4">
                            <div className="col-span-3 grid gap-4">
                              {features.items.map((subItem) => (
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
                            <div className="col-span-2 grid gap-4 bg-muted p-4">
                              <div className="text-sm font-medium">
                                {categories.name}
                              </div>
                              <div className="grid gap-2">
                                {categories.items.map((subItem) => (
                                  <NavigationMenuLink
                                    asChild
                                    key={subItem.name}
                                  >
                                    <a
                                      href={subItem.href}
                                      className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                      <ChevronRight className="size-4" />
                                      {subItem.name}
                                    </a>
                                  </NavigationMenuLink>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                        {item.megaMenu === "company" && (
                          <div className="grid w-[600px] grid-cols-2 gap-2 p-4">
                            <div className="grid gap-4">
                              {company.items.map((subItem) => (
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
                            <div className="grid gap-4 bg-muted p-4">
                              <div className="text-sm font-medium">
                                {companyLinks.name}
                              </div>
                              <div className="grid gap-2">
                                {companyLinks.items.map((subItem) => (
                                  <NavigationMenuLink
                                    asChild
                                    key={subItem.name}
                                  >
                                    <a
                                      href={subItem.href}
                                      className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                                    >
                                      <ChevronRight className="size-4" />
                                      {subItem.name}
                                    </a>
                                  </NavigationMenuLink>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
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
                        <div className="grid gap-1 pl-4">
                          {item.megaMenu === "features" && (
                            <>
                              {features.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex items-center gap-2 rounded-md px-2 py-1 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                                >
                                  <subItem.icon className="size-4" />
                                  {subItem.name}
                                </Link>
                              ))}
                              <div className="mt-2 px-2 py-1 text-sm font-medium text-muted-foreground">
                                {categories.name}
                              </div>
                              {categories.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex items-center gap-2 rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                  <ChevronRight className="size-4" />
                                  {subItem.name}
                                </Link>
                              ))}
                            </>
                          )}
                          {item.megaMenu === "company" && (
                            <>
                              {company.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex items-center gap-2 rounded-md px-2 py-1 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                                >
                                  <subItem.icon className="size-4" />
                                  {subItem.name}
                                </Link>
                              ))}
                              <div className="mt-2 px-2 py-1 text-sm font-medium text-muted-foreground">
                                {companyLinks.name}
                              </div>
                              {companyLinks.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  href={subItem.href}
                                  className="flex items-center gap-2 rounded-md px-2 py-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                                >
                                  <ChevronRight className="size-4" />
                                  {subItem.name}
                                </Link>
                              ))}
                            </>
                          )}
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
