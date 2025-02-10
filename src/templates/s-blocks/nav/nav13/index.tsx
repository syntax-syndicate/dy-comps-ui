"use client";

import * as React from "react";
import Link from "next/link";
import {
  Search,
  ChevronDown,
  Facebook,
  Instagram,
  Twitter,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const categories = [
  {
    title: "Online Stores",
    description: "Connect with third-party tools that you're already using.",
    href: "/stores",
  },
  {
    title: "Segmentation",
    description: "Connect with third-party tools that you're already using.",
    href: "/segmentation",
  },
  {
    title: "Marketing CRM",
    description: "Connect with third-party tools that you're already using.",
    href: "/crm",
  },
  {
    title: "Audience Management",
    description: "Connect with third-party tools that you're already using.",
    href: "/audience",
  },
  {
    title: "Creative Tools",
    description: "Connect with third-party tools that you're already using.",
    href: "/tools",
  },
  {
    title: "Marketing Automation",
    description: "Connect with third-party tools that you're already using.",
    href: "/automation",
  },
  {
    title: "Dynamic Content",
    description: "Connect with third-party tools that you're already using.",
    href: "/content",
  },
  {
    title: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "/integrations",
  },
  {
    title: "Careers",
    description: "Connect with third-party tools that you're already using.",
    href: "/careers",
  },
];

const languages = [
  { name: "English", code: "en", flag: "🇺🇸" },
  { name: "Spanish", code: "es", flag: "🇪🇸" },
  { name: "French", code: "fr", flag: "🇫🇷" },
];

export default function Component() {
  const [selectedLang, setSelectedLang] = React.useState(languages[0]);

  return (
    <header className="bg-background">
      {/* Top Bar */}
      <div className="border-b bg-muted/50">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
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
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <Globe className="size-4" />
                  {selectedLang?.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((language) => (
                  <DropdownMenuItem
                    key={language.code}
                    onClick={() => setSelectedLang(language)}
                  >
                    <span className="mr-2">{language.flag}</span>
                    {language.name}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>

            <div className="flex items-center gap-4 border-l pl-6">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Facebook className="size-4" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Instagram className="size-4" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <Twitter className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="border-b bg-background">
        <div className="container mx-auto flex h-14 items-center justify-between gap-6 px-4">
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="/"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Button variant="ghost" size="sm" className="gap-1">
                  Company
                  <ChevronDown className="size-4" />
                </Button>
              </li>
              <li>
                <Link
                  href="/marketplace"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Marketplace
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Resources
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-1">
                  All categories
                  <ChevronDown className="size-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Marketing</DropdownMenuItem>
                <DropdownMenuItem>Analytics</DropdownMenuItem>
                <DropdownMenuItem>Commerce</DropdownMenuItem>
                <DropdownMenuItem>Insights</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search anything..."
                className="w-[300px] pl-8"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mega Menu */}
      <div className="border-b bg-muted/50">
        <div className="container mx-auto py-8">
          <div className="grid grid-cols-4 gap-8">
            <div className="col-span-3 grid grid-cols-3 gap-8">
              {categories.map((category) => (
                <Link
                  key={category.title}
                  href={category.href}
                  className="group block space-y-2 rounded-lg p-4 transition-colors hover:bg-muted"
                >
                  <h3 className="font-semibold text-foreground group-hover:text-primary">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </Link>
              ))}
            </div>
            <div>
              <div className="space-y-4">
                <h3 className="font-semibold">Our brands</h3>
                <p className="text-sm text-muted-foreground">
                  At JBS Foods, we pride ourselves on a portfolio of brands that
                  cater to a variety of preferences.
                </p>
                <Button variant="link" className="p-0" asChild>
                  <Link href="/brands" className="gap-2">
                    Explore our brands
                    <ChevronDown className="size-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
