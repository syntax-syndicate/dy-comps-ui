"use client";

import * as React from "react";
import Link from "next/link";
import {
  Menu,
  Flame,
  Trophy,
  ChevronRight,
  Laptop,
  Smartphone,
  Palette,
  Camera,
  Video,
  Code,
  Headphones,
} from "lucide-react";
import { Sparkles } from "lucide-react";

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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Image from "next/image";

const features = [
  {
    name: "Web Design",
    description: "Create stunning websites",
    href: "/features/web-design",
    icon: Laptop,
  },
  {
    name: "Mobile Apps",
    description: "Build powerful applications",
    href: "/features/mobile-apps",
    icon: Smartphone,
  },
  {
    name: "Graphic Design",
    description: "Craft visual masterpieces",
    href: "/features/graphic-design",
    icon: Palette,
  },
  {
    name: "Photography",
    description: "Capture breathtaking moments",
    href: "/features/photography",
    icon: Camera,
  },
  {
    name: "Video Production",
    description: "Produce engaging content",
    href: "/features/video-production",
    icon: Video,
  },
  {
    name: "Web Development",
    description: "Code the future of the web",
    href: "/features/web-development",
    icon: Code,
  },
  {
    name: "Audio Production",
    description: "Create immersive soundscapes",
    href: "/features/audio-production",
    icon: Headphones,
  },
  {
    name: "3D Modeling",
    description: "Bring ideas to life in 3D",
    href: "/features/3d-modeling",
    icon: Code,
  },
];

const categories = [
  { name: "Trending", icon: Flame },
  { name: "Popular", icon: Trophy },
  { name: "New Releases", icon: Sparkles },
];

const navigation = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features", megaMenu: true },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
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
                  {item.megaMenu ? (
                    <>
                      <NavigationMenuTrigger>{item.name}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <div className="w-[850px] p-6">
                          <Tabs defaultValue="all" className="w-full">
                            <div className="flex justify-between">
                              <TabsList>
                                <TabsTrigger value="all">
                                  All Features
                                </TabsTrigger>
                                {categories.map((category) => (
                                  <TabsTrigger
                                    key={category.name}
                                    value={category.name.toLowerCase()}
                                  >
                                    <category.icon className="mr-2 size-4" />
                                    {category.name}
                                  </TabsTrigger>
                                ))}
                              </TabsList>
                              <Button variant="ghost" size="sm" asChild>
                                <Link href="/features">
                                  View All Features
                                  <ChevronRight className="ml-2 size-4" />
                                </Link>
                              </Button>
                            </div>
                            <TabsContent value="all" className="mt-6">
                              <div className="grid grid-cols-4 gap-4">
                                {features.map((feature) => (
                                  <Link
                                    key={feature.name}
                                    href={feature.href}
                                    className="group relative overflow-hidden rounded-lg border p-4 transition-all hover:border-primary hover:shadow-md"
                                  >
                                    <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                                      <feature.icon className="size-6" />
                                    </div>
                                    <h3 className="mb-1 text-lg font-semibold">
                                      {feature.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                      {feature.description}
                                    </p>
                                  </Link>
                                ))}
                              </div>
                            </TabsContent>
                            {categories.map((category) => (
                              <TabsContent
                                key={category.name}
                                value={category.name.toLowerCase()}
                                className="mt-6"
                              >
                                <div className="grid grid-cols-4 gap-4">
                                  {features.slice(0, 4).map((feature) => (
                                    <Link
                                      key={feature.name}
                                      href={feature.href}
                                      className="group relative overflow-hidden rounded-lg border p-4 transition-all hover:border-primary hover:shadow-md"
                                    >
                                      <div className="mb-2 flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground">
                                        <feature.icon className="size-6" />
                                      </div>
                                      <h3 className="mb-1 text-lg font-semibold">
                                        {feature.name}
                                      </h3>
                                      <p className="text-sm text-muted-foreground">
                                        {feature.description}
                                      </p>
                                      <div className="absolute inset-0 flex items-center justify-center bg-primary/90 opacity-0 transition-opacity group-hover:opacity-100">
                                        <span className="text-lg font-medium text-primary-foreground">
                                          Learn More
                                        </span>
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </TabsContent>
                            ))}
                          </Tabs>
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
                          {features.map((feature) => (
                            <Link
                              key={feature.name}
                              href={feature.href}
                              className="flex items-center gap-2 rounded-md px-2 py-1 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                            >
                              <feature.icon className="size-4" />
                              {feature.name}
                            </Link>
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
