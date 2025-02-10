// import NextLink from "next/link";
import { Link as NextLink } from "@lexz451/next-nprogress";
import React from "react";
import nProgress from "nprogress";
import { routes } from "@/lib/routes";

export default function TemplateLink({
  prefetch,
  href,
  children,
  ...p
}: React.ComponentProps<typeof NextLink>) {
  return (
    <NextLink
      href={href}
      prefetch={prefetch ?? false}
      {...p}
      onClick={(e) => {
        if (
          href.startsWith(routes.templates) &&
          window.location.pathname.startsWith(routes.templates)
        ) {
          e.preventDefault();
          window.history.pushState(null, "", href);
          window.scrollTo({ left: 0, top: 0, behavior: "instant" });
          nProgress.done(true);
        }
      }}
    >
      {children}
    </NextLink>
  );
}
