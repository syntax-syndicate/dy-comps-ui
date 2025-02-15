"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
}

export default function CookieConsent() {
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: false,
    analytics: false,
  });

  const handleToggle = (key: keyof CookiePreferences) => {
    setPreferences((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    console.log("Saving preferences:", preferences);
    // Here you would typically save the preferences to your backend or local storage
  };

  return (
    <Card className="absolute bottom-6 right-6 w-full max-w-md bg-background text-foreground">
      <CardHeader>
        <CardTitle>Cookie Preferences</CardTitle>
        <CardDescription className="text-muted-foreground">
          Manage your cookie settings
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="necessary" className="flex flex-col space-y-1">
            <span className="font-medium">Necessary Cookies</span>
            <span className="text-sm text-muted-foreground">
              Required for the website to function properly
            </span>
          </Label>
          <Switch
            id="necessary"
            checked={preferences.necessary}
            onCheckedChange={() => handleToggle("necessary")}
            disabled
          />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="functional" className="flex flex-col space-y-1">
            <span className="font-medium">Functional Cookies</span>
            <span className="text-sm text-muted-foreground">
              Enhance website functionality and personalization
            </span>
          </Label>
          <Switch
            id="functional"
            checked={preferences.functional}
            onCheckedChange={() => handleToggle("functional")}
          />
        </div>
        <div className="flex items-center justify-between space-x-2">
          <Label htmlFor="analytics" className="flex flex-col space-y-1">
            <span className="font-medium">Analytics Cookies</span>
            <span className="text-sm text-muted-foreground">
              Help us improve our website by collecting usage information
            </span>
          </Label>
          <Switch
            id="analytics"
            checked={preferences.analytics}
            onCheckedChange={() => handleToggle("analytics")}
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleSave}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Save Preferences
        </Button>
      </CardFooter>
    </Card>
  );
}
