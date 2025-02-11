import { OUrl, routes } from "@/lib/routes";
import { Link } from "@lexz451/next-nprogress";
import React from "react";

function Page() {
  return (
    <main className="grid gap-6">
      <Link href={OUrl.joinPaths(routes.pages, "home1")}>Page View</Link>
    </main>
  );
}

export default Page;
