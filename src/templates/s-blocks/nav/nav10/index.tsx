"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

// Define interfaces for navigation items
interface NestedItem {
  name: string;
  href: string;
}

interface SubItem {
  name: string;
  href?: string; // Optional because it might have nested items
  items?: NestedItem[]; // Optional nested items
}

interface NavItem {
  name: string;
  href?: string; // Optional because it might have sub-items
  items?: SubItem[]; // Optional sub-items
}

// Navigation data with proper typing
const navigation: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "Marketplace", href: "/marketplace" },
  {
    name: "Company",
    items: [
      { name: "Audience", href: "/company/audience" },
      { name: "Marketing Automation", href: "/company/marketing" },
      {
        name: "Creative Tools",
        items: [
          { name: "Marketing CRM", href: "/tools/crm" },
          { name: "Sign up forms", href: "/tools/forms" },
          { name: "Segmentation", href: "/tools/segmentation" },
          { name: "Dynamic content", href: "/tools/dynamic-content" },
          { name: "A/B Testing", href: "/tools/ab-testing" },
          { name: "Behavioral targeting", href: "/tools/targeting" },
          { name: "Integrations", href: "/tools/integrations" },
        ],
      },
      { name: "Insights & Analytics", href: "/company/analytics" },
      { name: "Demographics", href: "/company/demographics" },
      { name: "Contact Profiles", href: "/company/contacts" },
    ],
  },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  return (
    <header className="border-b bg-background">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
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

            <nav>
              <ul className="flex items-center gap-6">
                {navigation.map((item) => (
                  <li key={item.name}>
                    {item.items ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            className="flex items-center gap-1 p-2"
                          >
                            {item.name}
                            <ChevronDown className="size-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          {item.items.map((subItem) => (
                            <React.Fragment key={subItem.name}>
                              {subItem.items ? (
                                <DropdownMenuSub>
                                  <DropdownMenuSubTrigger className="flex items-center justify-between">
                                    {subItem.name}
                                  </DropdownMenuSubTrigger>
                                  <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                      {subItem.items.map((nestedItem) => (
                                        <DropdownMenuItem
                                          key={nestedItem.name}
                                          asChild
                                        >
                                          <Link href={nestedItem.href}>
                                            {nestedItem.name}
                                          </Link>
                                        </DropdownMenuItem>
                                      ))}
                                    </DropdownMenuSubContent>
                                  </DropdownMenuPortal>
                                </DropdownMenuSub>
                              ) : (
                                <DropdownMenuItem asChild>
                                  <Link href={subItem.href!}>
                                    {subItem.name}
                                  </Link>
                                </DropdownMenuItem>
                              )}
                            </React.Fragment>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Link
                        href={item.href!}
                        className="p-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                      >
                        {item.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Sign up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
