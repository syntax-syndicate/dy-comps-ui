"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import ShadcnThemeEditor, { setSavedTheme, Icons } from "shadcn-theme-editor";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { useIsMount } from "@/hooks/useIsMount";
import { useEmittor } from "emittor";
import { isThemeEditorOpenEmittor } from "@/lib/emittors";
import { clsxLite } from "@/lib/utils";

export function ApplyAvailableTheme() {
  const { resolvedTheme } = useTheme();
  const isMout = useIsMount();
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    isMout && setSavedTheme(resolvedTheme);
  }, [isMout]);

  return null;
}

export function ThemeEditorOpenButton() {
  return (
    <Button
      onClick={
        () => isThemeEditorOpenEmittor.setState(!isThemeEditorOpenEmittor.state) //! update emittor to new version
      }
      variant={"ghost"}
      size={"icon"}
    >
      <Icons.ColorPalette size={20} />
    </Button>
  );
}

function ThemeEditor() {
  const [isOpen, setIsOpen] = useEmittor(isThemeEditorOpenEmittor);
  return (
    <>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Button
            title={(isOpen ? "Close" : "Open") + " Editor"}
            aria-label={(isOpen ? "Close" : "Open") + " Editor"}
            variant={isOpen ? "secondary" : "default"}
            className={clsxLite(
              "group fixed bottom-2 right-2 z-20 h-auto gap-0 overflow-hidden rounded-full border px-3.5 py-3 shadow-md drop-shadow-sm transition-all duration-300",
              isOpen ? "opacity-0" : "",
            )}
          >
            <Icons.ColorPalette className="!size-5" size={24} />
            <span className="w-0 opacity-0 transition-all duration-300 group-hover:w-40 group-hover:opacity-100">
              Shadcn Theme Editor
            </span>
          </Button>
        </SheetTrigger>
        <SheetContent
          overlay={false}
          className="w-fit bg-background/70 p-0 backdrop-blur-md"
          side={"left"}
        >
          <ShadcnThemeEditor />
        </SheetContent>
      </Sheet>
      <ApplyAvailableTheme />
    </>
  );
}

export default ThemeEditor;
