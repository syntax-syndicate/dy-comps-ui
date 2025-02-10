"use client";

import * as React from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Company", href: "/company" },
  { name: "Features", href: "/features" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

const languages = [
  { name: "English", code: "en", flag: "🇺🇸" },
  { name: "Spanish", code: "es", flag: "🇪🇸" },
  { name: "French", code: "fr", flag: "🇫🇷" },
  { name: "German", code: "de", flag: "🇩🇪" },
];

export default function Component() {
  const [selectedLang, setSelectedLang] = React.useState(languages[0]);

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between gap-6">
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

          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
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

          <div className="flex flex-1 items-center justify-end gap-4">
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
              <Input type="search" placeholder="Search" className="pl-8" />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-2">
                  {selectedLang?.flag} {selectedLang?.name}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {languages.map((language) => (
                  <DropdownMenuCheckboxItem
                    key={language.code}
                    checked={language.code === selectedLang?.code}
                    onCheckedChange={() => setSelectedLang(language)}
                  >
                    <span className="mr-2">{language.flag}</span>
                    {language.name}
                  </DropdownMenuCheckboxItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
