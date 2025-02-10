"use client";
import { useEffect } from "react";
import { currentTemplateDataEmittor } from "./emittors";
import { useFetch } from "@/hooks/useFetch";
import { usePathname } from "next/navigation";
import { getNestedValue } from "@/lib/utils";
import { OUrl, routes } from "@/lib/routes";
import { siteConfig } from "@/lib/site-config";

function HandleTemplateData() {
  const pathname = usePathname();
  console.log(
    "data url",
    OUrl.joinPaths(siteConfig.url, "/data/templatesStructure.json"),
    siteConfig.url,
  );
  const {
    data: tempData,
    error,
    isLoading,
  } = useFetch<TemplateStructure>(
    process.env.NEXT_PUBLIC_TEMPLATES_STRUCTURE_DATA_URL ?? //! add vercel url using OUrl
      siteConfig.url + "/data/templatesStructure.json",
    {
      // storage: process.env.NODE_ENV == "development" ? "local" : undefined,
      // dataParser: (data) => console.log(data),
      // dataParser: (data) => getNestedValue(data as TemplateStructure, path),
    },
  );

  useEffect(() => {
    if (!tempData || !window.location.pathname.startsWith(routes.templates))
      return console.log("Data not found", tempData, error, isLoading);
    console.log("Data found", tempData, error, isLoading);

    const path = pathname
      .replace(new RegExp("^" + routes.templates), "")
      .replace(/^\/|\/$/g, "");

    let b: TemplateStructure["tree"]; // show error incase of change any change
    currentTemplateDataEmittor.setState({
      data: getNestedValue(
        tempData,
        path ? "tree." + path.split("/").join(".tree.") : path,
        ".",
      ),
      path,
      isLoading: false,
    });

    console.log(
      "emittor",
      // currentTemplateDataEmittor.state,
      currentTemplateDataEmittor.state.data,
      currentTemplateDataEmittor.state.path,
      path,
    );
  }, [tempData, isLoading, pathname, error]);

  if (error)
    console.error("Something want wrong while fetching templates data", error);
  return null;
}

export default HandleTemplateData;
