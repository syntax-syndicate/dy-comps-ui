import { BreadcrumbGen } from "@/components/breadcrumb";
import HandleTemplateData from "./_components/handleTemplateData";
import React from "react";
export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="grid gap-6">
        <React.Suspense>
          <BreadcrumbGen />
          <HandleTemplateData />
        </React.Suspense>
        {children}
      </main>
    </>
  );
}
