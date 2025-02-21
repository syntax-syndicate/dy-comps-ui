import { SideMenu } from "@/components/side-menu";
import React from "react";

function CleanPage({ style }: { style?: string }) {
  return (
    <>
      <SideMenu />
      <style global>
        {`
          #dy-footer,
          #dy-navbar {
            display: none !important;
          }
        ` + (style ?? "")}
      </style>
    </>
  );
}

export default CleanPage;
