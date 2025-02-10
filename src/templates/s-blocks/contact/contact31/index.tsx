"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Mail, Phone, MapPin } from "lucide-react";

export default function Contact31() {
  return (
    <div className="relative w-full overflow-hidden bg-background">
      {/* Radial overlay */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,hsl(var(--accent)),transparent)]"
        aria-hidden="true"
      />
      <div className="container relative mx-auto py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Contact Our Team
          </h1>
          <p className="mt-2 text-muted-foreground">
            Got any questions about the product or scaling on our platform?
            We&apos;re here to help.
            <br />
            Chat to our friendly team 24/7 and get onboard in less than 5
            minutes.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
          <Card className="bg-background/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="First name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Last name" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder="you@company.com"
                    type="email"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <div className="flex gap-2">
                    <Select defaultValue="US">
                      <SelectTrigger className="w-[100px]">
                        <SelectValue placeholder="Country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="US">US</SelectItem>
                        <SelectItem value="UK">UK</SelectItem>
                        <SelectItem value="CA">CA</SelectItem>
                        <SelectItem value="AU">AU</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      type="tel"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    className="min-h-[100px]"
                    id="message"
                    placeholder="Leave us a message..."
                  />
                </div>
                <div className="space-y-2">
                  <Label>Services</Label>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="website" />
                      <Label htmlFor="website">Website design</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="content" />
                      <Label htmlFor="content">Content creation</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="ux" />
                      <Label htmlFor="ux">UX design</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="strategy" />
                      <Label htmlFor="strategy">Strategy & consulting</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="research" />
                      <Label htmlFor="research">User research</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="other" />
                      <Label htmlFor="other">Other</Label>
                    </div>
                  </div>
                </div>
                <Button className="w-full" size="lg" type="submit">
                  Send message
                </Button>
              </form>
            </CardContent>
          </Card>
          <Card className="bg-background/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="space-y-8">
                <div>
                  <h2 className="mb-4 text-lg font-semibold">Chat with us</h2>
                  <p className="mb-4 text-muted-foreground">
                    Speak to our friendly team via live chat.
                  </p>
                  <div className="space-y-3">
                    <Button className="w-full justify-start" variant="outline">
                      <MessageSquare className="mr-2 size-4" />
                      Start a live chat
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Mail className="mr-2 size-4" />
                      Shoot us an email
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <MessageSquare className="mr-2 size-4" />
                      Message us on X
                    </Button>
                  </div>
                </div>
                <div>
                  <h2 className="mb-4 text-lg font-semibold">Call us</h2>
                  <p className="mb-4 text-muted-foreground">
                    Call our team Mon-Fri from 8am to 5pm.
                  </p>
                  <Button className="w-full justify-start" variant="outline">
                    <Phone className="mr-2 size-4" />
                    +1 (555) 000-0000
                  </Button>
                </div>
                <div>
                  <h2 className="mb-4 text-lg font-semibold">Visit us</h2>
                  <p className="mb-4 text-muted-foreground">
                    Chat to us in person at our Melbourne HQ.
                  </p>
                  <Button className="w-full justify-start" variant="outline">
                    <MapPin className="mr-2 size-4" />
                    100 Smith Street, Collingwood VIC 3066
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
