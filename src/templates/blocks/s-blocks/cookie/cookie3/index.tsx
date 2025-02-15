"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
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

export default function CookieConsentModal() {
  const [open, setOpen] = useState(false);

  return (
    <section className="container flex items-center justify-center p-6 py-16">
      {/* Button to open the modal */}
      <Button onClick={() => setOpen(true)}>Cookie Settings</Button>

      {/* Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Cookie Settings</DialogTitle>
            <DialogDescription>
              We use cookies to enhance your browsing experience and provide
              personalized content.
            </DialogDescription>
          </DialogHeader>
          <Tabs defaultValue="privacy" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
              <TabsTrigger value="cookies">Cookie Policy</TabsTrigger>
            </TabsList>
            <TabsContent value="privacy">
              <ScrollArea className="h-[200px] w-full rounded-md border">
                <div className="p-6">
                  <h4 className="mb-4 text-sm font-medium leading-none">
                    Privacy Policy
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    Our privacy policy outlines how we collect, use, and protect
                    your personal information. We are committed to safeguarding
                    your privacy and ensuring that your personal data is
                    protected. We collect information such as your name, email
                    address, and browsing behavior to improve our services and
                    provide a personalized experience. Your data is securely
                    stored and never shared with third parties without your
                    explicit consent.
                  </p>
                </div>
              </ScrollArea>
            </TabsContent>
            <TabsContent value="cookies">
              <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                <h4 className="mb-4 text-sm font-medium leading-none">
                  Cookie Policy
                </h4>
                <p className="text-sm text-muted-foreground">
                  Our website uses cookies to enhance your browsing experience
                  and provide personalized content. Cookies are small text files
                  stored on your device that help us analyze website traffic and
                  customize our site&apos;s content. We use both session
                  cookies, which expire when you close your browser, and
                  persistent cookies, which stay on your device for a set
                  period. You can control and delete cookies through your
                  browser settings at any time.
                </p>
              </ScrollArea>
            </TabsContent>
          </Tabs>
          <DialogFooter className="sm:justify-start">
            <Button
              type="button"
              variant="secondary"
              onClick={() => setOpen(false)}
            >
              Decline All
            </Button>
            <Button type="button" onClick={() => setOpen(false)}>
              Accept All
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </section>
  );
}
