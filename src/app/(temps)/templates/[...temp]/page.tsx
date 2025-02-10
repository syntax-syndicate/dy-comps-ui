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
  // const templates = await getAllTemplates(path.join(...params.temp.slice(0, -1)))
  // console.log("generateMetadata", templates)
  const { temp: paramsTemp } = await params;

  return {
    title: paramsTemp.join(" > "),
    // description,
    // openGraph: {
    //   title,
    //   description,
    //   type: "article",
    //   publishedTime: date,
    //   url: joinPaths(siteConfig.url, "posts", url, true),
    // },
    // twitter: {
    //   title,
    //   description,
    // },
    // alternates: {
    //   canonical: joinPaths(siteConfig.url, "posts", url, true),
    // },
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
