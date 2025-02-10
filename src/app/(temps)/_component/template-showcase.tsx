"use client";
import dynamic from "next/dynamic";
import React from "react";
import PreCodeTabs from "./preview-and-code-tabs";
import { useTemplate } from "@/hooks/useTemplate";

function TemplateShowcaseNew({ path }: { path: string }) {
  console.log("TemplateShowcaseNew Rendered");
  const template = useTemplate({ path });
  return (
    <PreCodeTabs tempCompo={template} codeCompo="this.iscode" path={path} />
  );
}

export default TemplateShowcaseNew;
