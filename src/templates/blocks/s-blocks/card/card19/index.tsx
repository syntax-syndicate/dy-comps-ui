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

export default function ChatInterface() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-sm bg-card">
        <CardHeader className="border-b border-border p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarFallback className="bg-primary/10 text-primary">
                  TB
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">Toby Belthorne</div>
                <div className="text-sm text-muted-foreground">
                  c@shadcnui.kit.com
                </div>
              </div>
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
                <DropdownMenuItem>Mute notifications</DropdownMenuItem>
                <DropdownMenuItem>Block user</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="flex flex-col space-y-4 p-4">
            <div className="flex flex-col space-y-2">
              <div className="text-sm text-muted-foreground">
                Hi, how can I help you today?
              </div>
              <div className="flex justify-end">
                <div className="max-w-[75%] rounded-lg bg-primary/10 px-3 py-2 text-sm">
                  Hey, I'm having trouble with my account.
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                What seems to be the problem?
              </div>
              <div className="flex justify-end">
                <div className="max-w-[75%] rounded-lg bg-primary/10 px-3 py-2 text-sm">
                  I can't log in.
                </div>
              </div>
            </div>
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
