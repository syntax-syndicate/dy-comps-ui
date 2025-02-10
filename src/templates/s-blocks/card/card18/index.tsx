"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";

interface ChatPreview {
  initials: string;
  name: string;
  message: string;
  time: string;
  unread?: number;
}

const chats: ChatPreview[] = [
  {
    initials: "TB",
    name: "Olivia Martin",
    message: "Hi, how can I help you today?",
    time: "Yesterday",
    unread: 1,
  },
  {
    initials: "TB",
    name: "Isabella Nguyen",
    message: "Wohoo!",
    time: "Yesterday",
  },
  {
    initials: "TB",
    name: "Emma Wilson",
    message: "What seems to be the problem?",
    time: "Yesterday",
    unread: 3,
  },
  {
    initials: "TB",
    name: "Jackson Lee",
    message: "Today?",
    time: "Yesterday",
  },
  {
    initials: "TB",
    name: "William Kim",
    message: "I can't log in.",
    time: "Yesterday",
  },
];

export default function ChatList() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle>Chats</CardTitle>
          <Button size="icon" variant="ghost" className="rounded-full">
            <Plus className="size-4" />
            <span className="sr-only">New chat</span>
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-3 size-4 text-muted-foreground" />
            <Input placeholder="Search chats..." className="pl-9" />
          </div>
          <div className="space-y-2">
            {chats.map((chat, index) => (
              <div
                key={index}
                className="flex cursor-pointer items-center space-x-4 rounded-lg p-2 transition-colors hover:bg-accent/50"
              >
                <Avatar>
                  <AvatarFallback className="bg-primary/10 font-semibold text-primary">
                    {chat.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium">{chat.name}</p>
                    <span className="text-xs text-muted-foreground">
                      {chat.time}
                    </span>
                  </div>
                  <p className="truncate text-sm text-muted-foreground">
                    {chat.message}
                  </p>
                </div>
                {chat.unread && (
                  <div className="flex size-5 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                    <span className="text-xs text-primary-foreground">
                      {chat.unread}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
