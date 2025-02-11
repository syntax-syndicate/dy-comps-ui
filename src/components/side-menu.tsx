"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  ArrowLeft,
  Home,
  Settings,
  HelpCircle,
  LayoutTemplate,
  File,
  Menu,
} from "lucide-react";

import { cn, getGithubUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { SOCIALS } from "@/lib/data";
import { Link } from "@lexz451/next-nprogress";
import { routes } from "@/lib/routes";
import { useRouter } from "next/navigation";
import { Separator } from "./ui/separator";

type NavItem = React.ComponentProps<"a"> & {
  icon: React.ElementType;
  label: string;
  onClick?: () => void;
  href?: string;
};

const navItems: NavItem[] = [
  { icon: Home, label: "Home", href: routes.home },
  {
    icon: LayoutTemplate,
    label: "Templates",
    href: routes.templates,
  },
  {
    icon: File,
    label: "Pages",
    href: routes.pages,
  },
  {
    icon: File,
    label: "View on Github",
    href: getGithubUrl("home1", { type: "pages" }),
  },
];

export function SideMenu() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const router = useRouter();

  return (
    <TooltipProvider>
      <motion.div
        className="fixed left-0 top-1/2 z-50 -translate-y-1/2 items-center"
        initial={false}
        animate={isExpanded ? "expanded" : "collapsed"}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <motion.div
          className={cn(
            "flex overflow-hidden border-b border-r border-t bg-background shadow-lg",
            isExpanded ? "rounded-r-xl" : "rounded-r-full",
          )}
          variants={{
            expanded: { width: 250 },
            collapsed: { width: 30 },
          }}
          transition={{ duration: 0.2 }}
        >
          <div className="flex h-full items-center justify-center gap-1 p-2">
            {isExpanded ? (
              <>
                <div className="flex flex-col items-center justify-center">
                  <Button
                    asChild
                    size={"icon"}
                    variant={"ghost"}
                    className="size-8 p-2"
                    onClick={() => router.back()}
                    title="Back"
                  >
                    <ArrowLeft />
                  </Button>
                  {SOCIALS.map((s, idx) => (
                    <Button
                      asChild
                      size={"icon"}
                      variant={"ghost"}
                      className="size-8"
                      title={s.title}
                      key={idx}
                    >
                      <a target="_blank" href={s.url}>
                        <s.icon size={20} />
                      </a>
                    </Button>
                  ))}
                </div>
                <div className="min-h-full w-[1px] self-stretch justify-self-stretch rounded-full bg-border"></div>
                <div>
                  {navItems.map((item, index) => {
                    const Comp = item.href ? Link : "button";
                    return (
                      <Button
                        asChild
                        key={index}
                        variant="ghost"
                        size={"sm"}
                        className="w-full justify-start px-4"
                        onClick={item.onClick}
                      >
                        <Comp href={item.href!}>
                          <item.icon className="mr-2 h-4 w-4" />
                          {item.label}
                        </Comp>
                      </Button>
                    );
                  })}
                </div>
              </>
            ) : (
              <Tooltip>
                <TooltipTrigger asChild>
                  <ChevronRight className="my-2 h-4 w-4 text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent side="right" sideOffset={16}>
                  <p>Expand navigation</p>
                </TooltipContent>
              </Tooltip>
            )}
          </div>
          <div></div>
        </motion.div>
      </motion.div>
    </TooltipProvider>
  );
}
