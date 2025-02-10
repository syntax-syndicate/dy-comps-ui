"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Monitor } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMount } from "@/hooks/useIsMount";
import React from "react";

export default function ThemeToggle({
  className,
  size = "md",
  showSystem = true,
  ...p
}: Omit<React.ComponentProps<"div">, "children"> & {
  size?: "sm" | "md" | "lg";
  showSystem?: boolean;
}) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const isMount = useIsMount();

  if (!isMount) return null;
  const currentTheme = showSystem ? theme : resolvedTheme;
  return (
    <div
      className={cn(
        "flex w-fit items-center rounded-full border bg-background text-foreground",
        size == "sm" && "",
        size == "md" && "gap-1 p-0.5",
        size == "lg" && "gap-2 p-1",
        className,
      )}
      {...p}
    >
      {(
        [
          ["light", Sun],
          ["dark", Moon],
          showSystem ? ["system", Monitor] : [],
        ].filter(([t, i]) => t && i) as [string, typeof Sun][]
      ).map(([themeN, Icon]) => (
        <button
          className={cn(
            "rounded-full",
            size == "sm" && "p-1",
            size == "md" && "gap-1 p-1.5",
            size == "lg" && "gap-2 p-2",
            currentTheme == themeN
              ? "bg-primary text-primary-foreground"
              : "hover:bg-accent hover:text-accent-foreground",
          )}
          key={themeN}
          aria-selected={currentTheme == themeN || undefined}
          onClick={() => setTheme(themeN)}
          aria-label={`set ${themeN} theme`}
          title={`set ${themeN} theme`}
        >
          <Icon className="size-5" />
        </button>
      ))}
    </div>
  );
}
