"use client";
import { CheckIcon, Copy } from "lucide-react";
import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const copyToClipboard = (text: string) => {
  navigator.clipboard
    .writeText(text)
    .catch((e) => console.error("Failed to copy text: ", e, "text: ", text));
};

type CopyButtonProps = {
  value: string;
  className?: string;
};

export default function CopyButton({ value, className }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  }, [hasCopied]);

  return (
    <button
      aria-label="copy"
      title={hasCopied ? "Copied!" : "Copy"}
      className={cn(
        "dark text-foreground absolute right-0 top-0 m-2 p-2 hover:bg-background/50 rounded-md min-w-fit self-start transition-all duration-200 group-hover:opacity-100",
        hasCopied ? "!text-success-foreground" : "opacity-70 -md:opacity-0",
        className,
      )}
      onClick={() => {
        copyToClipboard(value);
        setHasCopied(true);
      }}
    >
      {hasCopied ? (
        <CheckIcon size={15} />
      ) : (
        <Copy className="scale-y-[-1]" size={15} />
      )}
    </button>
  );
}
