"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Calendar, MoreVertical } from "lucide-react";

export default function TaskCard() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-md bg-card transition-colors hover:bg-accent/50">
        <CardContent className="p-4">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-1 items-start gap-3">
              <Checkbox className="mt-1" />
              <div className="space-y-1">
                <h3 className="font-medium text-card-foreground">
                  Implement new feature
                </h3>
                <p className="text-sm text-muted-foreground">
                  Add user authentication functionality to the application
                </p>
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="size-3" />
                    <span>10 May 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Avatar className="size-5">
                      <AvatarImage
                        src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                        alt="AJ"
                      />
                      <AvatarFallback className="text-[10px]">
                        AJ
                      </AvatarFallback>
                    </Avatar>
                    <span>Alice Johnson</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <Badge
                variant="secondary"
                className="bg-amber-500/10 text-amber-500 hover:bg-amber-500/20"
              >
                Medium
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger className="flex size-8 items-center justify-center rounded-md hover:bg-accent">
                  <MoreVertical className="size-4 text-muted-foreground" />
                  <span className="sr-only">Open menu</span>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Move</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
