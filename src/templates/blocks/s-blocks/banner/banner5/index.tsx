"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Alert } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Calendar, X } from "lucide-react";

export default function Banner() {
  // State to manage whether the banner is open or closed
  const [isOpen, setIsOpen] = useState(true);

  // Function to close the banner
  const handleClose = () => {
    setIsOpen(false);
  };

  // If the banner is closed, return null (render nothing)
  if (!isOpen) {
    return null;
  }

  return (
    <Alert
      variant="default"
      className="flex justify-between rounded-none bg-background text-primary-foreground"
    >
      <div className="container flex justify-between">
        <div className="mb-3 pr-6 sm:col-span-2 sm:mb-0 sm:pr-0">
          <p className="mb-1 font-bold text-foreground">
            Explore the future of AI computing.
          </p>
          <p className="text-sm text-muted-foreground">
            Let our AI experts help you unlock the full potential of your data.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="AI Computing"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div className="flex justify-start sm:justify-end">
            <div className="flex items-center sm:space-x-4">
              <Button className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule a demo
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-1 top-1 lg:static"
                onClick={handleClose} // Use the handleClose function to close the banner
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close banner</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Alert>
  );
}
