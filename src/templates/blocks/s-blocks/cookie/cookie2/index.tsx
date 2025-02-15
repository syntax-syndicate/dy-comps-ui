"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { X } from "lucide-react";

export default function CookieConsentPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // Show popup after 1 second

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <Card className="fixed bottom-4 right-4 z-50 max-w-sm shadow-lg">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold">Cookie Consent</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          We use cookies to enhance your browsing experience and collect
          information about how you use our site. This includes third-party
          cookies for analytics and personalized content. By clicking "Accept",
          you agree to our use of cookies.
        </p>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button variant="outline" onClick={() => setIsVisible(false)}>
          Decline
        </Button>
        <Button onClick={() => setIsVisible(false)}>Accept</Button>
      </CardFooter>
    </Card>
  );
}
