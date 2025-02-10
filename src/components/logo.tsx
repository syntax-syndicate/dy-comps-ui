import { cn } from "@/lib/utils";
import React from "react";

function Logo({ className }: React.ComponentProps<"img">) {
  return (
    <img
      src="/bg-logo.png"
      alt="logo"
      className={cn("invert-[0.1]", className)}
      style={{
        mask: "url('/logo.svg') no-repeat left / contain",
        WebkitMask: "url('/logo.svg') no-repeat left / contain",
      }}
    />
  );
}

export default Logo;
