import { cn } from "@/lib/utils";
import React from "react";
import {
  Prism as PrismSyntaxHighlighter,
  type SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import CopyButton from "@/components/copy-button";

export function SyntaxHighlighter({
  code,
  className,
}: { code: string } & Omit<React.ComponentProps<"pre">, "children">) {
  return (
    <>
      <PrismSyntaxHighlighter
        showLineNumbers
        showInlineLineNumbers
        lineNumberStyle={{ color: "red" }}
        lineNumberContainerStyle={{ color: "white" }}
        language="tsx"
        className={cn(
          "customScrollBar dark !m-0 h-full max-h-[70vh] min-h-96 !bg-muted [&_*]:!text-base",
          className,
        )}
        style={{
          ...vscDarkPlus,
          'code[class*="language-tsx"]': { color: "#d4d4d4" },
        }}
      >
        {code}
      </PrismSyntaxHighlighter>
      <CopyButton value={code} />
    </>
  );
}
