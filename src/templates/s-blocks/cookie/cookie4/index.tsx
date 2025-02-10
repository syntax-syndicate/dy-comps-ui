"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
}

const cookieCategories: CookieCategory[] = [
  {
    id: "necessary",
    name: "Necessary",
    description:
      "These cookies are essential for the website to function properly.",
    required: true,
  },
  {
    id: "functional",
    name: "Functional",
    description:
      "These cookies enable personalized features and remember your preferences.",
    required: false,
  },
  {
    id: "analytics",
    name: "Analytics",
    description:
      "These cookies help us understand how visitors interact with the website.",
    required: false,
  },
  {
    id: "advertising",
    name: "Advertising",
    description:
      "These cookies are used to deliver relevant ads and track ad campaign performance.",
    required: false,
  },
];

export default function GDPRConsentModal() {
  const [open, setOpen] = useState(false);
  const [consents, setConsents] = useState<string[]>(["necessary"]);

  const handleConsentChange = (categoryId: string, checked: boolean) => {
    if (checked) {
      setConsents([...consents, categoryId]);
    } else {
      setConsents(consents.filter((id) => id !== categoryId));
    }
  };

  const handleSavePreferences = () => {
    // Here you would typically save the user's preferences
    console.log("Saved preferences:", consents);
    setOpen(false);
  };

  return (
    <section className="container flex items-center justify-center py-16">
      {/* Button to open the modal */}
      <Button onClick={() => setOpen(true)}>Privacy Preferences</Button>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Privacy Preferences</DialogTitle>
            <DialogDescription>
              Manage your cookie and privacy preferences. You can enable or
              disable different types of cookies below.
            </DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="cookies" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="cookies">Cookie Settings</TabsTrigger>
              <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
            </TabsList>
            <TabsContent value="cookies">
              <ScrollArea className="h-[300px] w-full rounded-md border">
                <div className="p-4">
                  {cookieCategories.map((category) => (
                    <div
                      key={category.id}
                      className="mb-4 flex items-start space-x-2"
                    >
                      <Checkbox
                        id={category.id}
                        checked={consents.includes(category.id)}
                        onCheckedChange={(checked) =>
                          handleConsentChange(category.id, checked as boolean)
                        }
                        disabled={category.required}
                      />
                      <div className="grid gap-1.5 leading-none">
                        <label
                          htmlFor={category.id}
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {category.name}
                        </label>
                        <p className="text-sm text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="privacy">
              <ScrollArea className="h-[300px] w-full rounded-md border">
                <div className="p-4">
                  <h4 className="mb-2 text-sm font-medium">Privacy Policy</h4>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Our privacy policy explains how we collect, use, and protect
                    your personal information. We are committed to ensuring that
                    your privacy is protected and that any information you
                    provide to us is used only in accordance with this privacy
                    statement.
                  </p>
                  <h5 className="mb-2 text-sm font-medium">
                    Information Collection
                  </h5>
                  <p className="mb-4 text-sm text-muted-foreground">
                    We collect information from you when you register on our
                    site, place an order, subscribe to our newsletter, respond
                    to a survey, or fill out a form. The information we collect
                    may include your name, e-mail address, mailing address,
                    phone number, or other details to help you with your
                    experience.
                  </p>
                  <h5 className="mb-2 text-sm font-medium">
                    Use of Information
                  </h5>
                  <p className="text-sm text-muted-foreground">
                    We use the information we collect from you to personalize
                    your experience, improve our website, improve customer
                    service, process transactions, send periodic emails, and
                    administer contests, promotions, surveys or other site
                    features.
                  </p>
                </div>
              </ScrollArea>
            </TabsContent>
          </Tabs>
          <DialogFooter className="sm:justify-start">
            <Button variant="outline" onClick={() => setOpen(false)}>
              Decline All
            </Button>
            <Button
              onClick={() => {
                setConsents(cookieCategories.map((category) => category.id));
                handleSavePreferences();
              }}
            >
              Accept All
            </Button>
            <Button onClick={handleSavePreferences}>Save Preferences</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
