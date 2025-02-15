"use client";
import React, { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface DismissableBannerProps {
  message?: string;
}

export default function DismissableBanner({ message }: DismissableBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const defaultMessage =
    "Our website is undergoing maintenance today between 2AM to 4AM UTC.";

  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-50 w-full">
      <Alert className="rounded-none border-x-0 border-t-0">
        <AlertDescription className="flex items-center justify-between">
          <span>{message || defaultMessage}</span>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss banner"
          >
            <X />
          </Button>
        </AlertDescription>
      </Alert>
    </div>
  );
}
