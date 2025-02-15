"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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
import { Search } from "lucide-react";

export default function Contact17() {
  return (
    <div className="container mx-auto py-12">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tight">
            How can we help you?
          </h1>
          <div className="relative">
            <Search className="absolute left-3 top-3 size-5 text-muted-foreground" />
            <Input
              className="pl-10"
              placeholder="Type keywords to find answers"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold">Billing & Plans</h2>
            <nav className="space-y-2">
              <a href="#" className="block text-primary hover:underline">
                DY-Comps plans & prices
              </a>
              <a href="#" className="block text-primary hover:underline">
                Switch plans and add-ons
              </a>
              <a href="#" className="block text-primary hover:underline">
                I can&apos;t log in to DY-Comps
              </a>
              <a href="#" className="block text-primary hover:underline">
                The Disney Bundle
              </a>
              <a href="#" className="block text-primary hover:underline">
                Student Discount on DY-Comps
              </a>
            </nav>
          </Card>

          <Card className="bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold">Using DY-Comps</h2>
            <nav className="space-y-2">
              <a href="#" className="block text-primary hover:underline">
                Parental Controls
              </a>
              <a href="#" className="block text-primary hover:underline">
                Devices to watch DY-Comps
              </a>
              <a href="#" className="block text-primary hover:underline">
                Home location for Live TV
              </a>
              <a href="#" className="block text-primary hover:underline">
                Live TV Guide
              </a>
              <a href="#" className="block text-primary hover:underline">
                Fix buffering issues
              </a>
            </nav>
          </Card>

          <Card className="bg-card p-6">
            <h2 className="mb-4 text-lg font-semibold">What&apos;s on DY-Comps</h2>
            <nav className="space-y-2">
              <a href="#" className="block text-primary hover:underline">
                NEW this month!
              </a>
              <a href="#" className="block text-primary hover:underline">
                Sports Add-on for Live TV
              </a>
              <a href="#" className="block text-primary hover:underline">
                Watch live sports
              </a>
              <a href="#" className="block text-primary hover:underline">
                FX shows & movies
              </a>
              <a href="#" className="block text-primary hover:underline">
                Super Bowl 2025
              </a>
            </nav>
          </Card>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <h2 className="mb-2 text-xl font-semibold">
              Not what you were looking for?
            </h2>
            <p className="text-muted-foreground">
              Browse through all of our Help Center articles
            </p>
          </div>
          <Button>Get started</Button>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h2 className="mb-6 text-xl font-semibold">Points of contact</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 font-semibold">U.S. DY-Comps</h3>
                  <p className="text-muted-foreground">
                    11350 McCormick Rd, EP III, Suite 200,
                    <br />
                    Hunt Valley, MD 21031
                  </p>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold">Information & Sales</h3>
                  <a
                    href="mailto:example@gmail.com"
                    className="text-primary hover:underline"
                  >
                    example@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold">Support</h3>
                  <a
                    href="mailto:example@gmail.com"
                    className="text-primary hover:underline"
                  >
                    example@gmail.com
                  </a>
                </div>

                <div>
                  <h3 className="mb-2 font-semibold">
                    Verification of Employment
                  </h3>
                  <a
                    href="mailto:example@gmail.com"
                    className="text-primary hover:underline"
                  >
                    example@gmail.com
                  </a>
                </div>

                <div>
                  <h2 className="mb-4 text-lg font-semibold">
                    Our offices around the world
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <h3 className="mb-1 font-semibold">Canada</h3>
                      <p className="text-muted-foreground">
                        5333 Avenue Casgrain #1201
                        <br />
                        Montreal, QC H2T 1X3
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-1 font-semibold">Germany</h3>
                      <p className="text-muted-foreground">
                        Neue Schönhauser Str. 3-5,
                        <br />
                        10178 Berlin
                      </p>
                    </div>

                    <div>
                      <h3 className="mb-1 font-semibold">France</h3>
                      <p className="text-muted-foreground">
                        266 Place Ernest Granier,
                        <br />
                        34000 Montpellier
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="p-6">
              <h2 className="mb-6 text-xl font-semibold">Still need help?</h2>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Your email address</Label>
                  <Input
                    id="email"
                    placeholder="example@gmail.com"
                    type="email"
                  />
                  <p className="text-sm text-muted-foreground">
                    (So we can reply to you)
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="topic">Topic</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="billing">Billing</SelectItem>
                      <SelectItem value="technical">
                        Technical Support
                      </SelectItem>
                      <SelectItem value="account">Account</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Let us know how we can help you"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Your message</Label>
                  <Textarea
                    className="min-h-[150px]"
                    id="message"
                    placeholder="Leave a comment..."
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox id="terms" />
                  <Label htmlFor="terms" className="text-sm">
                    By submitting this form, you confirm that you have read and
                    agree to our{" "}
                    <a href="#" className="text-primary hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-primary hover:underline">
                      Privacy Statement
                    </a>
                  </Label>
                </div>

                <Button className="w-full">Send message</Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
