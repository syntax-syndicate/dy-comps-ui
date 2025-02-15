"use client";
import { isFalsy, templatesTypes } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { ValueOf } from "type-fest";

export function useTemplate({
  path,
  type = templatesTypes.blocks,
}: {
  path: string;
  type?: ValueOf<typeof templatesTypes>;
}): React.ReactNode {
  const [Component, setComponent] = useState<
    | React.ComponentType<any> // i don't know
    | React.ReactNode
    | null
  >(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    console.log("Component Loading", path);
    if (!path) return setIsLoading(false);

    setIsLoading(true);
    setComponent(
      dynamic(() => import(`@/templates/${type}/${path}`).catch(setError), {
        ssr: false, // true mean await, mean's isLoading is true
        loading: () => <div>Loading...</div>, // when ssr: false,
      }),
    );
    setIsLoading(false);
  }, [path]);

  if (isLoading) return "Loading...⏳";
  if (error) {
    console.error(error);
    return "Something went wrong: " + error.message;
  }
  if (isFalsy(Component)) return <div>Component not Found</div>;

  // it's work fine, it is actually React.ReactNode
  return Component as React.ReactNode;
}

export const UseTemplate = useTemplate;
