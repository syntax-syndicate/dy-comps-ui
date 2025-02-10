"use client";
import React, { useState } from "react";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface InformationalBannerProps {
  title?: string;
  description?: string;
  linkText?: string;
  linkHref?: string;
}

export default function InformationalBanner({
  title,
  description,
  linkText,
  linkHref,
}: InformationalBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const defaultTitle = "Scheduled Maintenance";
  const defaultDescription =
    "Our website will be undergoing maintenance today between 2AM to 4AM UTC.";

  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-50 w-full">
      <Alert variant="default" className="rounded-none border-x-0 border-t-0">
        <div className="container mx-auto flex items-start justify-between">
          <div className="flex items-start">
            <div>
              <AlertTitle className="font-semibold">
                {title || defaultTitle}
              </AlertTitle>
              <AlertDescription>
                {description || defaultDescription}
                {linkText && linkHref && (
                  <>
                    {" "}
                    <a
                      href={linkHref}
                      className="font-medium text-primary underline underline-offset-4 hover:no-underline"
                    >
                      {linkText}
                    </a>
                  </>
                )}
              </AlertDescription>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="-mr-2 -mt-1 h-8 w-8 flex-shrink-0"
            onClick={() => setIsVisible(false)}
            aria-label="Dismiss banner"
          >
            <X />
          </Button>
        </div>
      </Alert>
    </div>
  );
}
