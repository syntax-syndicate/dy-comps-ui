// "use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { clsxLite, cn, Files, getGithubUrl, getScafloUrl } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeEditorOpenButton } from "@/components/home/theme-editor";
import { RiGithubFill } from "react-icons/ri";
import { FileIcon, Heart } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { OUrl } from "@/lib/routes";
import { ScafloCommand } from "./scaflo-command-copy";

function PreCodeTabs({
  tempCompo,
  codeCompo, // use in feature serverside
  className,
  path,
  otherFiles,
}: {
  tempCompo: React.ReactNode;
  codeCompo: React.ReactNode; // use in feature serverside
  path: string;
  className?: string;
  otherFiles?: string[] | null;
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
        className="relative mt-4 grid min-h-[80vh] overflow-hidden rounded-xl border"
        value={"preview"}
      >
        {tempCompo}
      </TabsContent>
      <TabsContent
        data-code-tab
        className={clsxLite(
          "group relative h-[80vh] overflow-hidden rounded-xl border",
          "flex gap-3",
        )}
        value={"code"}
      >
        {otherFiles && (
          <div className="hidden min-w-[280px] border-r py-4 lg:block">
            <b className="mb-4 inline-flex px-4 text-muted-foreground">
              Explorer
            </b>
            <ol className="flex flex-col">
              {[Files.default, ...otherFiles].map((fileName, idx) => (
                <a
                  className="inline-flex items-center gap-2 px-4 py-2 hover:bg-accent hover:text-accent-foreground"
                  key={idx}
                  role="listitem"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={getGithubUrl(path, { file: fileName })}
                >
                  <FileIcon size={18} /> {fileName}
                </a>
              ))}
            </ol>
          </div>
        )}
        {/* {codeCompo} */}
        <div className="flex flex-col m-auto max-w-[80%] flex-1 items-center justify-center gap-2 p-8">
          <p className="mb-2 basis-full text-center text-muted-foreground">
            😢 Oops! The code isn&apos;t available here due to limited
            resources. But you can check it out on GitHub ⭐ and support my
            work! ❤️
          </p>

          <ScafloCommand className="w-3/5 my-6" path={path} />

          <div className="flex flex-wrap gap-2">
            <Button asChild variant={"destructive"}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={siteConfig.authors.support}
              >
                <Heart fill="currentColor" size={24} />
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
        </div>
      </TabsContent>
    </Tabs>
  );
}

export default PreCodeTabs;
