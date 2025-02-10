"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarIcon, Search } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Hero80() {
  const [checkIn, setCheckIn] = useState<Date | undefined>();
  const [checkOut, setCheckOut] = useState<Date | undefined>();

  return (
    <div className="relative overflow-hidden">
      <div className="container relative py-32">
        <div className="container mx-auto">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  <span className="text-primary">Book The Best Hotel</span>
                  <br />
                  <span className="relative">
                    For Your Vacation
                    <div className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-primary/30" />
                  </span>
                </h1>
              </div>

              {/* Search Form */}
              <div className="space-y-4 rounded-lg bg-secondary p-4 backdrop-blur-sm">
                <div className="grid gap-4 sm:grid-cols-3">
                  <Input
                    placeholder="Location"
                    defaultValue="Barcelona, Spain"
                    className="border-input bg-background text-foreground placeholder:text-muted-foreground"
                  />

                  {/* Check-in Date */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="justify-start overflow-hidden whitespace-nowrap border-input bg-background text-left font-normal text-foreground"
                      >
                        <CalendarIcon className="mr-2 size-4" />
                        {checkIn ? (
                          format(checkIn, "MMM dd, yyyy")
                        ) : (
                          <span>Check-in</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>

                  {/* Check-out Date */}
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="justify-start overflow-hidden whitespace-nowrap border-input bg-background text-left font-normal text-foreground"
                      >
                        <CalendarIcon className="mr-2 size-4" />
                        {checkOut ? (
                          format(checkOut, "MMM dd, yyyy")
                        ) : (
                          <span>Check-out</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Search className="mr-2 size-4" />
                  Search Hotels
                </Button>
              </div>
            </div>

            {/* Image Collage */}
            <div className="relative aspect-square">
              <div className="absolute inset-0 overflow-hidden rounded-full">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Luxury hotel room"
                  width={600}
                  height={600}
                  className="object-cover"
                  priority
                />
              </div>
              {/* Additional circular images */}
              {[
                { top: "10%", right: "-10%", size: "30%" },
                { bottom: "10%", right: "-5%", size: "25%" },
                { bottom: "-5%", left: "30%", size: "20%" },
              ].map((position, index) => (
                <div
                  key={index}
                  className="absolute overflow-hidden rounded-full shadow-lg"
                  style={{
                    top: position.top ?? "auto",
                    right: position.right ?? "auto",
                    bottom: position.bottom ?? "auto",
                    left: position.left ?? "auto",
                    width: position.size,
                    height: position.size,
                  }}
                >
                  <Image
                    src={`https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg`}
                    alt={`Hotel feature ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
