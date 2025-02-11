import { type Metadata } from "next";
import { TemplatesView } from "../../_component/templates-view";

// export async function generateStaticParams() {
//   const templates = await getAllTemplates()
//   return [generateSlugPaths(templates).map(paths=> ({temp: paths}))]
// }

// export const dynamicParams = false
// export const dynamic = 'force-static'
export async function generateMetadata({
  params,
}: {
  params: { temp: string[] };
}): Promise<Metadata | undefined> {
  const paramsTemp = (await params).temp;

  return {
    // title: { absolute: paramsTemp.join(" > ") },
    title: [...new Set([paramsTemp[0], paramsTemp[paramsTemp.length -1]])].join(" > "),
    openGraph: {
      type: "article",
      title: paramsTemp[paramsTemp.length - 1],
    },
  };
}

async function Template(props: TemplatePageProps) {
  return (
    <>
      <TemplatesView />
    </>
  );
}

export default Template;
