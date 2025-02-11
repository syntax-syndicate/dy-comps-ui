export class OUrl extends URL {
  constructor(
    baseUrl: string,
    paths: string | string[] = "",
    searchParams: Record<string, string> = {},
  ) {
    baseUrl = OUrl.ensureProtocol(baseUrl);
    super(OUrl.joinPaths(baseUrl, paths));
    this.setSearchParams(searchParams);
  }

  static hasProtocol(url: string): boolean {
    return url.startsWith("http://") || url.startsWith("https://");
  }

  static ensureProtocol(url: string): string {
    return OUrl.hasProtocol(url) ? url : `https://${url}`;
  }

  static joinPaths(...paths: (string | string[])[]): string {
    if (paths.length < 1) return "";
    if (!Array.isArray(paths)) paths = [paths];

    const flattenedPaths = paths.flat(Infinity).filter(Boolean) as string[];
    const hasProtocol = OUrl.hasProtocol(flattenedPaths[0]!);

    const joinedPath = flattenedPaths.join("/");

    return hasProtocol
      ? joinedPath.replace(/([^:]\/)\/+/g, "$1") // Avoids replacing `://`
      : joinedPath.replace(/\/+/g, "/");
  }

  toString(
    options: { withoutProtocol?: boolean; withoutSearchParams?: boolean } = {},
  ): string {
    let urlStr = this.href;
    if (options.withoutProtocol) {
      urlStr = urlStr.replace(/^https?:\/\//, "");
    }
    if (options.withoutSearchParams) {
      urlStr = urlStr.split("?")[0]!;
    }
    return urlStr;
  }

  setSearchParam(key: string, value: string): void {
    this.searchParams.set(key, value);
  }

  getSearchParam(key: string): string | null {
    return this.searchParams.get(key);
  }

  setSearchParams(params: Record<string, string>): void {
    Object.entries(params).forEach(([key, value]) =>
      this.searchParams.set(key, value),
    );
  }

  addPaths(paths: string | string[]): void {
    const newPath = OUrl.joinPaths(this.pathname, paths);
    this.pathname = newPath;
  }

  getPaths(): string[] {
    return this.pathname.split("/").filter(Boolean);
  }
}

export const routes = {
  home: "/",
  templates: "/templates",
  showcase: "/showcase",
  pages: "/pages"
};
