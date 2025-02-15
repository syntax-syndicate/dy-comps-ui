import React from "react";
import SimpleTooltip from "@/components/tooltip";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function Logos() {
  return (
    <div className="mt-20 flex flex-col items-center gap-4">
      <p className="text-center: text-muted-foreground lg:text-left">
        Built with open-source technologies
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {(
          [
            {
              title: "Typescript",
              src: "/logos/typescript-small.svg",
            },
            {
              title: "ReactJS",
              src: "/logos/react-icon.svg",
            },
            {
              title: "Shadcn",
              src: "/logos/shadcn-ui-small.svg",
              className: "dark:invert",
            },
            {
              title: "Tailwind CSS",
              src: "/logos/tailwind-small.svg",
            },
            {
              title: "Framer Motion",
              src: "https://framerusercontent.com/images/FEF0Xp0qllCZsG1uilpmdZAzD8.png",
            },
          ] as {
            title: string;
            src: string;
            className?: string;
          }[]
        ).map((item, idx) => (
          <SimpleTooltip
            className="bg-accent text-accent-foreground"
            key={idx}
            side="bottom"
            sideOffset={8}
            title={item.title}
            delay={0}
          >
            <Button
              variant={"ghost"}
              size={"default"}
              className="group size-16 rounded-2xl transition-none md:size-20"
            >
              <img
                className={cn(
                  "size-5/6 object-contain saturate-0 transition-all group-hover:saturate-100",
                  item.className,
                )}
                alt={item.title}
                // title={item.title}
                src={item.src}
              />
            </Button>
          </SimpleTooltip>
        ))}
      </div>
    </div>
  );
}

export default Logos;
