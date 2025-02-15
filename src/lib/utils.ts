import { clsx, type ClassValue } from "clsx";
import { clsx as clsxLite } from "clsx/lite";
import { twMerge } from "tailwind-merge";
import { siteConfig } from "./site-config";
import { OUrl } from "./routes";
import type { ValueOf } from "type-fest";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isStr(value: unknown): value is string {
  return typeof value == "string";
}

export function tempUrl2Id(url: string) {
  url = url.replace(/^\/?templates\//, "");

  return url.replace(/^\/|\/$/g, "").replace(/\//g, "-");
}

export function isTemplateInfo(value: any): value is TemplateInfo {
  return !!value?.metadata && typeof value.path === "string";
}

export const templatesTypes = {
  templates: "templates", // blocks
  pages: "pgs",
} as const;

export const getGithubUrl = (
  path: string,
  options: { type: ValueOf<typeof templatesTypes> } = {
    type: templatesTypes.templates,
  },
) =>
  OUrl.joinPaths(
    siteConfig.github.repo,
    "blob/master/src",
    options.type,
    path,
    "index.tsx",
  );

export function getNestedValue<T>(
  obj: Record<string, any>,
  path: string | undefined | null,
  sep = "/",
): T | undefined {
  if (!path) {
    return obj as T;
  }
  const keys = path.split(sep);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return keys.reduce((acc, key) => acc?.[key], obj) as ReturnType<
    typeof getNestedValue<T>
  >;
}

export function isFalsy<T>(
  value: T,
): value is
  | (T & (null | undefined | false | 0 | "" | 0n))
  | (T extends object ? Record<string, never> & T : never) {
  return !value ||
    (typeof value === "object" &&
      value !== null &&
      Object.keys(value).length === 0)
    ? true
    : false;
}

export { clsxLite };
