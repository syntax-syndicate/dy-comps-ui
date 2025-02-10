// "use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { clsxLite, cn, getGithubUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeEditorOpenButton } from "@/components/home/theme-editor";
import { RiGithubFill } from "react-icons/ri";
import { FaHeart } from "react-icons/fa6";

function PreCodeTabs({
  tempCompo,
  codeCompo, // use in feature serverside
  className,
  path,
}: {
  tempCompo: React.ReactNode;
  codeCompo: React.ReactNode; // use in feature serverside
  path: string;
  className?: string;
}) {
  const triggerCns =
    "relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none hover:border-b-muted-foreground data-[state=active]:border-b-primary data-[state=active]:shadow-none";
  return (
    <Tabs defaultValue="preview" className={cn("mt-5", className)}>
      <TabsList className="w-full justify-start border-b bg-transparent text-muted-foreground">
        <TabsTrigger className={triggerCns} value={"preview"}>
          Preview
        </TabsTrigger>
        <TabsTrigger className={triggerCns} value={"code"}>
          Code
        </TabsTrigger>
        <div className="ml-auto flex gap-1 text-foreground">
          <ThemeEditorOpenButton />
        </div>
      </TabsList>
      <TabsContent
        data-preview-tab
        className="relative mt-4 min-h-[80vh] overflow-hidden rounded-xl border"
        value={"preview"}
      >
        {tempCompo}
      </TabsContent>
      <TabsContent
        data-code-tab
        className={clsxLite(
          "group relative h-[80vh] overflow-hidden rounded-xl border",
          "flex flex-col items-center justify-center gap-3",
        )}
        value={"code"}
      >
        {/* {codeCompo} */}
        <div className="flex max-w-[80%] flex-wrap items-center justify-center gap-2">
          <p className="mb-2 basis-full text-center text-muted-foreground">
            😢 Oops! The code isn&apos;t available here due to limited
            resources. But you can check it out on GitHub ⭐ and support my
            work! ❤️
          </p>

          <Button asChild variant={"destructive"}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/programming-with-ia/programming-with-ia/blob/main/SUPPORT.md"
            >
              <FaHeart size={24} />
              Support my work
            </a>
          </Button>
          <Button asChild variant={"secondary"}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={getGithubUrl(path)}
            >
              <RiGithubFill size={24} />
              View on Github
            </a>
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default PreCodeTabs;
