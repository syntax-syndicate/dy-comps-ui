"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function NotificationSettings() {
  const [settings, setSettings] = useState({
    posts: true,
    comments: true,
    messages: false,
    friendRequests: true,
  });

  const handleToggle = (setting: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [setting]: !prev[setting] }));
  };

  const handleSave = () => {
    console.log("Saving settings:", settings);
    // Here you would typically send these settings to your backend
  };

  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Notification Settings</CardTitle>
          <CardDescription>
            Manage your notification preferences here.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="posts" className="flex flex-col space-y-1">
              <span>New Posts</span>
              <span className="font-normal leading-snug text-muted-foreground">
                Receive notifications when people you follow create new posts.
              </span>
            </Label>
            <Switch
              id="posts"
              checked={settings.posts}
              onCheckedChange={() => handleToggle("posts")}
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="comments" className="flex flex-col space-y-1">
              <span>Comments</span>
              <span className="font-normal leading-snug text-muted-foreground">
                Get notified when someone comments on your posts.
              </span>
            </Label>
            <Switch
              id="comments"
              checked={settings.comments}
              onCheckedChange={() => handleToggle("comments")}
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="messages" className="flex flex-col space-y-1">
              <span>Direct Messages</span>
              <span className="font-normal leading-snug text-muted-foreground">
                Receive notifications for new direct messages.
              </span>
            </Label>
            <Switch
              id="messages"
              checked={settings.messages}
              onCheckedChange={() => handleToggle("messages")}
            />
          </div>
          <div className="flex items-center justify-between space-x-2">
            <Label htmlFor="friendRequests" className="flex flex-col space-y-1">
              <span>Friend Requests</span>
              <span className="font-normal leading-snug text-muted-foreground">
                Get notified when you receive new friend requests.
              </span>
            </Label>
            <Switch
              id="friendRequests"
              checked={settings.friendRequests}
              onCheckedChange={() => handleToggle("friendRequests")}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={handleSave} className="w-full">
            Save preferences
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
