import React from "react";
import Logo from "../logo";
import { Link } from "@lexz451/next-nprogress";
import { siteConfig } from "@/lib/site-config";
import { Button } from "../ui/button";
import { SOCIALS } from "@/lib/data";

function Navbar() {
  return (
    <nav id="dy-navbar" className="blur-mask-bottom absolute inset-x-0 top-0 isolate z-10 border-b bg-background/70 px-6 py-3 drop-shadow-md backdrop-blur-sm md:px-10 lg:px-16 lg:py-5 lg:pb-5">
      <div className="mx-auto flex max-w-[96rem] justify-between">
        <Link
          href={"/"}
          title={siteConfig.nameTitle}
          className="flex items-center gap-1.5 text-lg font-semibold"
        >
          <Logo className="size-8" />
          {siteConfig.name}
        </Link>
        <div className="opacity-0 md:min-w-72"></div>
        <div className="flex">
          {SOCIALS.map((social, idx) => (
            <React.Fragment key={idx}>
              <Button asChild variant={"ghost"} size={"icon"}>
                <a target="_blank" href={social.url}>
                  <social.icon className="size-5" />
                </a>
              </Button>
            </React.Fragment>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
