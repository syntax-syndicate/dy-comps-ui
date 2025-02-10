import React from "react";
import { Button } from "./ui/button";
import { clsxLite, cn } from "@/lib/utils";

function IconButton<T extends React.ElementType = typeof Button>({
  icon,
  label,
  className,
  As,
  labelCns,
  ...p
}: {
  icon: React.ReactNode;
  label: React.ReactNode;
  As?: T;
  labelCns?: string;
} & Omit<React.ComponentPropsWithoutRef<T>, "children" | "asChild">) {
  const Comp = As ?? React.Fragment; // Ensure a valid default component
  return (
    <Button
      className={clsxLite("group/btn gap-0 overflow-hidden", className)}
      asChild={As ? true : false}
      {...p}
    >
      <Comp>
        {icon}
        <span
          className={cn(
            "w-0 pl-0 opacity-0 transition-all duration-200 group-hover/btn:w-[var(--fit-size,2.5rem)] group-hover/btn:pl-2 group-hover/btn:opacity-100",
            labelCns,
          )}
        >
          {label}
        </span>
      </Comp>
    </Button>
  );
}

export default IconButton;
