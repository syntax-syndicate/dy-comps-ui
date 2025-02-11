"use client";
import { isFalsy } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

export function useTemplate({
  path,
  type = "block",
}: {
  path: string;
  type?: "page" | "block";
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
      dynamic(
        () =>
          (type == "page"
            ? import(`@/pages/${path}`)
            : import(`@/templates/${path}`)
          ).catch(setError),
        {
          ssr: false, // true mean await, mean's isLoading is true
          loading: () => <div>Loading...</div>, // when ssr: false,
        },
      ),
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
