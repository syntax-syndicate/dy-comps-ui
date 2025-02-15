"use client";

import * as React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Search, Bell, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Projects", href: "/projects" },
  { name: "Team", href: "/team" },
  { name: "Calendar", href: "/calendar" },
  { name: "Documents", href: "/documents" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [activeNavItem, setActiveNavItem] = React.useState("Dashboard");
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8]);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={cn(
        "sticky left-0 right-0 top-0 z-50 bg-background transition-all duration-300",
        isScrolled ? "shadow-md" : "",
      )}
      style={{ opacity: headerOpacity }}
    >
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
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
            <div className="relative hidden md:block">
              <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px] pl-8 md:w-[300px]"
              />
            </div>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Button
                    variant="ghost"
                    className={cn(
                      "relative",
                      activeNavItem === item.name && "text-primary",
                    )}
                    onClick={() => setActiveNavItem(item.name)}
                  >
                    {item.name}
                    {activeNavItem === item.name && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        layoutId="activeNavItem"
                      />
                    )}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="size-5" />
                  <Badge className="absolute -right-1 -top-1 size-5 justify-center rounded-full p-0">
                    3
                  </Badge>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-[300px]">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>New message from Alice</DropdownMenuItem>
                <DropdownMenuItem>
                  Project &quot;X&quot; completed
                </DropdownMenuItem>
                <DropdownMenuItem>3 new team members joined</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Avatar>
                    <AvatarImage src="/placeholder-avatar.jpg" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
