import { UseTemplate } from "@/hooks/useTemplate";
import { templatesTypes } from "@/lib/utils";
import React from "react";

function Page() {
  return (
    <>
      {/* <UseTemplate path="home1" type="page" /> */}
      <UseTemplate path="twsection" type={templatesTypes.pages} />
    </>
  );
}

export default Page;
