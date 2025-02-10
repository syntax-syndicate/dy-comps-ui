"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
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

export default function DemoReportAnIssue() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            🚨 Report an Issue
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            We&apos;re here to help! Let us know what&apos;s going on so we can
            fix it ASAP.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="area">What&apos;s the problem area?</Label>
              <Select defaultValue="billing">
                <SelectTrigger id="area">
                  <SelectValue placeholder="Select an area" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="team">👥 Team</SelectItem>
                  <SelectItem value="billing">💳 Billing</SelectItem>
                  <SelectItem value="account">👤 Account</SelectItem>
                  <SelectItem value="deployments">🚀 Deployments</SelectItem>
                  <SelectItem value="support">🛠️ Support</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="security-level">How urgent is it?</Label>
              <Select defaultValue="2">
                <SelectTrigger id="security-level" className="w-full">
                  <SelectValue placeholder="Select urgency level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">🔥 Severity 1 (Critical)</SelectItem>
                  <SelectItem value="2">⚠️ Severity 2 (High)</SelectItem>
                  <SelectItem value="3">🛑 Severity 3 (Medium)</SelectItem>
                  <SelectItem value="4">📥 Severity 4 (Low)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="subject">What&apos;s the issue about?</Label>
            <Input
              id="subject"
              placeholder="e.g., 'I can't access my account'"
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="description">Tell us more...</Label>
            <Textarea
              id="description"
              placeholder="Please describe the issue in detail. The more info, the better!"
              rows={4}
            />
          </div>
        </CardContent>
        <CardFooter className="justify-between space-x-2">
          <Button variant="outline">✖️ Cancel</Button>
          <Button className="hover:bg-primary-dark bg-primary">
            🚀 Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
