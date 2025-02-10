"use client";

import { useState } from "react";
import { Mail, X } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function NewsletterModal() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Form submitted");
    setOpen(false);
  };

  return (
    <section className="container flex items-center justify-center">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" className="m-6">
            Open Newsletter
          </Button>
        </DialogTrigger>
        <DialogContent className="overflow-hidden p-0 sm:max-w-[425px] md:max-w-2xl">
          <div className="relative flex">
            <div className="hidden md:block">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="People at office"
                width={320}
                height={256}
                className="h-full object-cover"
              />
            </div>
            <div className="flex-1 p-6">
              <DialogHeader className="pb-4">
                <DialogTitle className="text-xl font-semibold">
                  Join our Newsletter
                </DialogTitle>
              </DialogHeader>
              <p className="mb-4 text-sm text-muted-foreground">
                Get started with our monthly newsletter for helpful tips on how
                to run your business smoothly.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div className="relative">
                    <Label htmlFor="email" className="sr-only">
                      Email address
                    </Label>
                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="email"
                      placeholder="Your email"
                      type="email"
                      required
                      className="pl-10"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Subscribe
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}
