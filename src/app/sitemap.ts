import { type MetadataRoute } from "next";
import templateData from "../../public/data/templatesStructure.json";
import { isTemplateInfo } from "@/lib/utils";
import { OUrl, routes } from "@/lib/routes";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routeMetaData: MetadataRoute.Sitemap = [];

  function generateSitemapMetadata(data: TemplateStructure, href: string) {
    Object.entries(data.tree).map(([key, value], idx) => {
      const url = new OUrl(href, key).toString();

      const md: MetadataRoute.Sitemap[number] = {
        url, // OUrl.joinPaths(routes.templates, value.path) //* for template info
        priority: 0.5,
        lastModified: new Date(),
      };
      if (!isTemplateInfo(value)) {
        md.priority = 1;
        routeMetaData.push(md); // use double with else
        generateSitemapMetadata(value, url);
      } else {
        routeMetaData.push(md);
      }
    });
  }

  generateSitemapMetadata(templateData, routes.templates);

  return routeMetaData;
}

// if (import.meta.url === new URL(import.meta.url).href) {
//   console.log("Script is running as the main module");
//   await sitemap();
// }
