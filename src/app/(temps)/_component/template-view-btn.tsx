import React, { useState } from "react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
// import TemplatePage from "./template-page";


function TemplateViewBtn({from}:{from: string[]}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"secondary"}
          className="mt-auto gap-1 self-start text-secondary-foreground/80"
        >
          <MdOutlineRemoveRedEye size={20} /> View
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[90vw] max-w-none">
        {/* <TemplatePage from={from} /> */}
        </DialogContent>
    </Dialog>
  );
}

export default TemplateViewBtn;
