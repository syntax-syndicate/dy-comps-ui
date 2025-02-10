import { cn } from "@/lib/utils";
import React from "react";

//======================================
export const MultilayerCard = ({
  children,
  className,
}: React.ComponentProps<"div">) => {
  return (
    <div className={cn("relative h-72 w-full rounded-3xl shadow-md scale-x-95", className)}>
      
      <div className="size-full bg-background border shadow-md rounded-[inherit] flex flex-col justify-center items-center overflow-hidden text-center">{children}</div>
      <div className="absolute inset-0 scale-x-105 bg-muted border z-[-1] my-6 rounded-[inherit]" />
    </div>
  );
};
