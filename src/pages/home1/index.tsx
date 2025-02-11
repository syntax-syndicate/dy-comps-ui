import { UseTemplate } from "@/hooks/useTemplate";
import React from "react";

function Home1() {
  return (
    <>
      <UseTemplate path="s-blocks/nav/nav7" />
      <div className="grid px-6 md:px-10 lg:px-16">
        <UseTemplate path="s-blocks/hero/hero11" />
        <UseTemplate path="s-blocks/gallery/gallery14" />
      </div>
      <UseTemplate path="s-blocks/footer/footer12" />
    </>
  );
}

export default Home1;
