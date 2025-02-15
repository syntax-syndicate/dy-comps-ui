"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

export default function DemoShareDocument() {
  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">
            Securely Share Your Document
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Effortlessly collaborate by sharing with a link.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-2">
            <Input
              value="share.document.link/unique-id"
              readOnly
              className="text-sm"
            />
            <Button className="shrink-0 text-sm">Copy Link</Button>
          </div>
          <Separator className="my-4" />
          <div className="space-y-4">
            <div className="text-sm font-medium">Access Control</div>
            <div className="grid gap-6">
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="border-2 border-primary">
                    <AvatarImage
                      src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                      alt="Ava Thompson"
                    />
                    <AvatarFallback>AT</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      Ava Thompson
                    </p>
                    <p className="text-sm text-muted-foreground">
                      ava.t@email.com
                    </p>
                  </div>
                </div>
                <Select defaultValue="edit">
                  <SelectTrigger className="ml-auto w-[110px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="edit">Can Edit</SelectItem>
                    <SelectItem value="view">Can View</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="border-2 border-primary">
                    <AvatarImage
                      src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                      alt="Noah Williams"
                    />
                    <AvatarFallback>NW</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      Noah Williams
                    </p>
                    <p className="text-sm text-muted-foreground">
                      noah.w@email.com
                    </p>
                  </div>
                </div>
                <Select defaultValue="view">
                  <SelectTrigger className="ml-auto w-[110px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="edit">Can Edit</SelectItem>
                    <SelectItem value="view">Can View</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between space-x-4">
                <div className="flex items-center space-x-4">
                  <Avatar className="border-2 border-primary">
                    <AvatarImage
                      src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                      alt="Mia Johnson"
                    />
                    <AvatarFallback>MJ</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-medium leading-none">
                      Mia Johnson
                    </p>
                    <p className="text-sm text-muted-foreground">
                      mia.j@email.com
                    </p>
                  </div>
                </div>
                <Select defaultValue="view">
                  <SelectTrigger className="ml-auto w-[110px]">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="edit">Can Edit</SelectItem>
                    <SelectItem value="view">Can View</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
