"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

import React, { useState } from "react";

function DialogView({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => (router.back(), setIsOpen(open))}
    >
      <DialogTrigger>Open</DialogTrigger>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

export default DialogView;
