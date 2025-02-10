"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronRight, Home, Settings, HelpCircle, Menu } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface NavItem {
  icon: React.ElementType;
  label: string;
  onClick: () => void;
}

const navItems: NavItem[] = [
  { icon: Home, label: "Home", onClick: () => console.log("Home clicked") },
  {
    icon: Settings,
    label: "Settings",
    onClick: () => console.log("Settings clicked"),
  },
  {
    icon: HelpCircle,
    label: "Help",
    onClick: () => console.log("Help clicked"),
  },
  { icon: Menu, label: "More", onClick: () => console.log("More clicked") },
];

export function SideMenu() {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <TooltipProvider>
      <motion.div
        className="fixed left-0 top-1/2 flex -translate-y-1/2 items-center"
        initial={false}
        animate={isExpanded ? "expanded" : "collapsed"}
      >
        <motion.div
          className={cn(
            "overflow-hidden rounded-r-lg border-b border-r border-t bg-background shadow-lg",
            isExpanded ? "w-48" : "w-6",
          )}
          variants={{
            expanded: { width: 192, transition: { duration: 0.2 } },
            collapsed: { width: 24, transition: { duration: 0.2 } },
          }}
        >
          <div
            className="flex h-full flex-col items-center justify-center space-y-4 py-4"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            {isExpanded &&
              navItems.map((item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full justify-start px-4"
                  onClick={item.onClick}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            <Tooltip>
              <TooltipTrigger asChild>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent side="right" sideOffset={16}>
                <p>Expand navigation</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </motion.div>
      </motion.div>
    </TooltipProvider>
  );
}
