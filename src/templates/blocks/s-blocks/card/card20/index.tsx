"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Send } from "lucide-react";

interface Message {
  id: number;
  sender: string;
  initial: string;
  content: string;
  timestamp: string;
  isUser?: boolean;
}

const messages: Message[] = [
  {
    id: 1,
    sender: "Toby Bethome",
    initial: "T",
    content: "Hey! How are you doing?",
    timestamp: "09:25 AM",
  },
  {
    id: 2,
    sender: "You",
    initial: "Y",
    content:
      "I'm doing great! Just finished working on that new feature we discussed.",
    timestamp: "09:27 AM",
    isUser: true,
  },
  {
    id: 3,
    sender: "Toby Bethome",
    initial: "T",
    content:
      "That's awesome! Can't wait to see it. When do you think it'll be ready for review?",
    timestamp: "09:28 AM",
  },
  {
    id: 4,
    sender: "You",
    initial: "Y",
    content:
      "I'm just running some final tests. Should be ready in about an hour!",
    timestamp: "09:30 AM",
    isUser: true,
  },
];

export default function ChatMessages() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-md">
        <CardHeader className="border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-primary/10 text-primary">
                  T
                </AvatarFallback>
              </Avatar>
              <span className="font-semibold">Jimmy Neutron</span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="size-8">
                  <MoreVertical className="size-4" />
                  <span className="sr-only">More options</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View profile</DropdownMenuItem>
                <DropdownMenuItem>Block user</DropdownMenuItem>
                <DropdownMenuItem>Clear chat</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex h-[400px] flex-col space-y-4 overflow-y-auto p-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-3 ${message.isUser ? "flex-row-reverse" : ""}`}
              >
                <Avatar className="size-8 flex-shrink-0">
                  <AvatarFallback
                    className={`${
                      message.isUser
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    {message.initial}
                  </AvatarFallback>
                </Avatar>
                <div
                  className={`flex flex-col gap-1 ${message.isUser ? "items-end" : ""}`}
                >
                  <div
                    className={`max-w-[75%] rounded-lg px-3 py-2 ${
                      message.isUser
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {message.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <div className="border-t border-border p-4">
            <form className="flex items-center gap-2">
              <Input placeholder="Type your message..." className="flex-1" />
              <Button size="icon" className="size-10">
                <Send className="size-4" />
                <span className="sr-only">Send message</span>
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
