"use client";

import * as React from "react";
import Link from "next/link";
import { Play, Moon, Bell, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Company", href: "/company" },
  { name: "Marketplace", href: "/marketplace" },
  { name: "Features", href: "/features" },
  { name: "Team", href: "/team" },
  { name: "Contact", href: "/contact" },
];

export default function Component() {
  const [darkMode, setDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

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

        <div className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" onClick={toggleDarkMode}>
            <Moon className="size-5" />
            <span className="sr-only">Toggle dark mode</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Bell className="size-5" />
            <span className="sr-only">View notifications</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative size-8 rounded-full">
                <Avatar className="size-8">
                  <AvatarImage
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="User avatar"
                  />
                  <AvatarFallback>NA</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Neil sims</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    example@gmail.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/profile" className="flex w-full items-center">
                  My profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/settings" className="flex w-full items-center">
                  Account settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/likes" className="flex w-full items-center">
                  My likes
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/collections" className="flex w-full items-center">
                  Collections
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href="/pro"
                  className="flex w-full items-center justify-between"
                >
                  Pro version
                  <ChevronRight className="ml-2 size-4" />
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/logout" className="flex w-full items-center">
                  Sign out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
