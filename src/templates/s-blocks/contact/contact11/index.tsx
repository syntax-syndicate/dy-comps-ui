"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MapPin, Phone, Mail, MessageSquare, Clock } from "lucide-react";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("contact");

  return (
    <div className="container mx-auto py-16">
      <h1 className="mb-8 text-center text-4xl font-bold">Get in Touch</h1>
      <Tabs
        value={activeTab}
        onValueChange={setActiveTab}
        className="mx-auto w-full max-w-4xl"
      >
        <TabsList className="mb-6 w-full">
          <TabsTrigger value="contact" className="w-1/2">
            Contact Us
          </TabsTrigger>
          <TabsTrigger value="info" className="w-1/2">
            Contact Info
          </TabsTrigger>
        </TabsList>
        <TabsContent value="contact">
          <Card>
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    className="min-h-[150px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="info">
          <Card>
            <CardContent className="p-6">
              <ScrollArea className="h-[500px] pr-4">
                <div className="space-y-6">
                  {[
                    {
                      icon: Phone,
                      title: "Call Us",
                      content: "+1 (555) 123-4567",
                    },
                    {
                      icon: Mail,
                      title: "Email Us",
                      content: "support@example.com",
                    },
                    {
                      icon: MessageSquare,
                      title: "Live Chat",
                      content: "Available 24/7",
                    },
                    {
                      icon: Clock,
                      title: "Business Hours",
                      content: "Mon-Fri: 9AM-5PM",
                    },
                    {
                      icon: MapPin,
                      title: "Visit Us",
                      content: "123 Business St, City, Country",
                    },
                  ].map((item, index) => (
                    <Card key={index} className="overflow-hidden">
                      <CardHeader className="bg-primary/10 py-3">
                        <CardTitle className="flex items-center gap-2 text-lg">
                          <item.icon className="size-5 text-primary" />
                          {item.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="p-4">
                        <p className="text-muted-foreground">{item.content}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
