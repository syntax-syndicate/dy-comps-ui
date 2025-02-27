"use client";
import React, { useState } from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn, getScafloUrl } from "@/lib/utils";

export function ScafloCommand({
  className,
  path,
  type,
  ...p
}: React.ComponentProps<"div"> & Parameters<typeof getScafloUrl>[0]) {
  const scafloCommand = "scaflo@latest " + getScafloUrl({ path, type }) + ' -e %components%';

  const commands = {
    pnpm: `pnpm dlx ${scafloCommand}`,
    npm: `npx ${scafloCommand}`,
    bun: `bunx ${scafloCommand}`,
    yarn: `yarn dlx ${scafloCommand}`,
  } as const;

  const [selectedCommand, setSelectedCommand] = useState<string>(
    Object.values(commands)[0] ?? "",
  );
  return (
    <div
      className={cn(
        "flex w-fit gap-2 rounded-md border border-foreground/10 px-3 py-1 text-base shadow-sm transition-colors secondary",
        className,
      )}
    >
      {/* Readonly Input */}
      <input
        type="text"
        value={selectedCommand}
        // readOnly
        className="flex-1 cursor-pointer bg-transparent outline-none"
        placeholder="Selected command will appear here"
        onClick={() => navigator.clipboard.writeText(selectedCommand)}
      />
      {/* Select Component */}
      <Select
        defaultValue={Object.keys(commands)[0]}
        onValueChange={(value) => {
          const command = commands[value as never];
          setSelectedCommand(command);
          // eslint-disable-next-line @typescript-eslint/no-floating-promises
          navigator.clipboard.writeText(command);
        }}
      >
        <SelectTrigger className="w-auto bg-background text-foreground">
          <SelectValue placeholder="Select a package manager" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {Object.keys(commands).map((pmName, idx) => (
              <SelectItem key={idx} value={pmName}>
                {pmName}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {/* Copy Button */}
      {/* <Button onClick={handleCopy} variant="outline">
        Copy Command
      </Button> */}
    </div>
  );
}
