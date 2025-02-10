import React from "react";
import { ChevronRight } from "lucide-react";
import { Link } from "@lexz451/next-nprogress";
import { Grid } from "../grid-svg";
import Logo from "../logo";
import { cn } from "@/lib/utils";
import { SOCIALS } from "@/lib/data";
import { Button } from "../ui/button";
import { siteConfig } from "@/lib/site-config";

function FooterLink({
  className,
  label,
  ...p
}: { label: string } & Omit<React.ComponentProps<typeof Link>, "children">) {
  return (
    <Link
      role="listitem"
      className={cn(
        "group flex items-center text-sm text-muted-foreground underline-offset-1 hover:text-foreground hover:underline",
        className,
      )}
      {...p}
    >
      {label}
      <ChevronRight
        size={15}
        className="ml-2 hidden h-4 w-4 opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 md:block"
      />
    </Link>
  );
}

function Footer() {
  return (
    <footer id="dy-footer" className="relative m-2 mt-8 flex flex-col gap-8 overflow-hidden rounded-3xl border-t bg-accent p-6 !pb-0 text-accent-foreground md:m-4 md:p-10 lg:m-8 lg:p-16">
      <Grid className="-left-1/3 -scale-x-100" size={50} />
      <div className="mx-auto flex w-full max-w-[96rem] flex-col items-center gap-10 md:flex-row md:items-center lg:gap-20">
        <div className="flex flex-col items-center gap-4 md:items-start lg:w-1/3">
          <Link
            title={siteConfig.nameTitle}
            href={"/"}
            className="flex flex-col items-center gap-2 md:flex-row md:items-start"
          >
            <Logo className="size-8" />
            <h2 className="text-xl font-bold">{siteConfig.name}</h2>
          </Link>
          <p className="text text-center text-sm text-muted-foreground md:text-left">
            {siteConfig.short_desc}
          </p>
          <div className="flex">
            {SOCIALS.map((social, idx) => (
              <React.Fragment key={idx}>
                <Button className="hover:bg-background hover:text-foreground" asChild variant={"ghost"} size={"icon"}>
                  <a target="_blank" href={social.url}>
                    <social.icon className="size-5" />
                  </a>
                </Button>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="flex flex-col flex-wrap justify-end gap-6 md:flex-row">
          <div
            role="list"
            className="flex flex-col items-center gap-2 md:items-start"
          >
            <h3 className="mb-1 text-sm font-medium">Home</h3>
            <FooterLink label="Home" href={"/"} />
            <FooterLink label="Templates" href={"/templates"} />
          </div>
        </div>
      </div>
      <div className="mx-auto flex h-full w-full max-w-[96rem] flex-col items-center justify-start gap-1 border-t py-4 text-sm tracking-tight text-foreground md:flex-row">
        Copyright © {new Date().getFullYear()}
        <Link className="cursor-pointer" href="/">
          {"DY Comps"}
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
