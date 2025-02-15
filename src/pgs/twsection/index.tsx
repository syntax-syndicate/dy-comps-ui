import { UseTemplate } from "@/hooks/useTemplate";
import React from "react";

function Home1() {
  return (
    <>
      <UseTemplate path="twblocks/header/header1" />
      <div className="grid px-6 md:px-10 lg:px-16">
        <UseTemplate path="twblocks/hero/hero5" />
        <UseTemplate path="twblocks/blog/blog1" />
        <UseTemplate path="twblocks/feature/feature9" />
        <UseTemplate path="twblocks/stats/stats2" />
        <UseTemplate path="twblocks/contact/contact1" />
      </div>
      <UseTemplate path="twblocks/footer/footer1" />
      {/* <UseTemplate path="s-blocks/footer/footer12" /> */}
    </>
  );
}

export default Home1;
