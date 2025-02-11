import React from "react";
import { TemplatesView } from "../_component/templates-view";
import { type Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Templates",
  description: siteConfig.description,
};

export default async function TemplatesPage() {
  return (
    <>
      <TemplatesView />
    </>
  );
}
