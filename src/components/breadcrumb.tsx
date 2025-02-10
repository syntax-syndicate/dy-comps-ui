"use client";
import { cn } from "@/lib/utils";
// import { Link } from "@lexz451/next-nprogress";
import React from "react";
import { ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import TemplateLink from "@/components/template-link";

function Breadcrumb({
  className,
  children,
  ...p
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex flex-wrap items-center text-sm", className)}
      role="list"
      {...p}
    >
      {children}
    </div>
  );
}

function Item({
  className,
  children,
  href,
  ...p
}: React.ComponentProps<typeof TemplateLink>) {
  return (
    <TemplateLink
      href={href}
      role="listitem"
      className={cn(
        "inline-flex rounded-md px-2 py-0.5 capitalize hover:accent",
        className,
      )}
      {...p}
    >
      {children}
    </TemplateLink>
  );
}

export function BreadcrumbGen() {
  const pathname = usePathname();
  if (pathname == "/") return null;
  const items = pathname.split("/").filter(Boolean);
  console.log("pathname", pathname);
  return (
    <Breadcrumb className="mb-3 self-start px-6 md:px-10 lg:px-16">
      <Item href={"/"}>Home</Item>
      {/* <ChevronRight className="text-muted-foreground" size={20} /> */}
      {/* <Item href={"/templates"}>Templates</Item> */}
      {items?.map((item, idx) => {
        const href = "/" + items.slice(0, idx + 1).join("/");
        return (
          <React.Fragment key={idx}>
            {/* idx != 0 && */}
            <ChevronRight className="text-muted-foreground" size={20} />
            <Item href={href}>{item}</Item>
          </React.Fragment>
        );
      })}
    </Breadcrumb>
  );
}

export default Breadcrumb;
