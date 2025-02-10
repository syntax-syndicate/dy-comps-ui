import { BreadcrumbGen } from "@/components/breadcrumb";
import HandleTemplateData from "./_components/handleTemplateData";

export default function TemplatesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="grid gap-6">
        <BreadcrumbGen />
        {children}
        <HandleTemplateData />
      </main>
    </>
  );
}
