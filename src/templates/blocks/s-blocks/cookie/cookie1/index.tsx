"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Section, X } from "lucide-react";

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <Card className="fixed bottom-0 left-0 right-0 z-50 m-4">
      <CardContent className="p-4 sm:p-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">
              We use cookies to enhance your browsing experience, serve
              personalized ads or content, and analyze our traffic. By clicking
              "Accept All", you consent to our use of cookies.
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
            <Button variant="outline" onClick={() => setIsVisible(false)}>
              Reject All
            </Button>
            <Button onClick={() => setIsVisible(false)}>Accept All</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
