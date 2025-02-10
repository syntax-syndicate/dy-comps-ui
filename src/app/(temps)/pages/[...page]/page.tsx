"use client";
import { SideMenu } from "@/components/side-menu";
import { UseTemplate } from "@/hooks/useTemplate";
import React from "react";

function Page() {
  return (
    <>
      <SideMenu />
      <style global>
        {`
          #dy-footer,
          #dy-navbar {
            display: none !important;
          }
        `}
      </style>
      <UseTemplate path="s-blocks/nav/nav7" />
      <div className="grid px-6 md:px-10 lg:px-16">
        <UseTemplate path="s-blocks/hero/hero11" />
        <UseTemplate path="s-blocks/gallery/gallery14" />
      </div>
      <UseTemplate path="s-blocks/footer/footer12" />
    </>
  );
}

export default Page;
