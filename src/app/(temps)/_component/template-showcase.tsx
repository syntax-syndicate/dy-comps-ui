"use client";
import dynamic from "next/dynamic";
import React from "react";
import PreCodeTabs from "./preview-and-code-tabs";
import { useTemplate } from "@/hooks/useTemplate";

function TemplateShowcaseNew({
  path,
  otherFiles,
}: {
  path: string;
  otherFiles?: string[] | null;
}) {
  console.log("TemplateShowcaseNew Rendered");
  const template = useTemplate({ path });
  return (
    <PreCodeTabs
      tempCompo={template}
      otherFiles={otherFiles}
      codeCompo="this.iscode"
      path={path}
    />
  );
}

export default TemplateShowcaseNew;
