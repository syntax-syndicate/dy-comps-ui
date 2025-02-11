import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import React from "react";

function Page() {
  return (
    <>
      <div>Building ...</div>
      in this page you can build page
      <Sheet>
        <SheetTrigger className="absolute top-1/2 right-0">&lt;</SheetTrigger>
        <SheetContent overlay={false} side={"right"}>Name</SheetContent>
      </Sheet>
    </>
  );
}

export default Page;
