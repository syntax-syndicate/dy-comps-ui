"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon, ClockIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AppointmentBooking() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [time, setTime] = React.useState<string | undefined>();
  const [purpose, setPurpose] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking appointment:", { date, time, purpose });
    // Here you would typically send the appointment data to your backend
  };

  return (
    <div className="container flex justify-center py-16">
      <Card className="w-full max-w-md">
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4 pt-6">
            <div className="space-y-2">
              <Label htmlFor="date" className="block text-sm font-medium">
                Appointment Date
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    id="date"
                    variant={"outline"}
                    className={cn(
                      "w-full justify-start text-left font-normal",
                      !date && "text-muted-foreground",
                    )}
                  >
                    <CalendarIcon className="mr-2 size-4" />
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="time" className="block text-sm font-medium">
                Appointment Time
              </Label>
              <Select onValueChange={setTime}>
                <SelectTrigger id="time" className="w-full">
                  <SelectValue placeholder="Select a time">
                    {time ? (
                      <>
                        <ClockIcon className="mr-2 inline size-4" />
                        {time}
                      </>
                    ) : (
                      "Select a time"
                    )}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  {["09:00", "10:00", "11:00", "13:00", "14:00", "15:00"].map(
                    (t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="purpose" className="block text-sm font-medium">
                Appointment Purpose
              </Label>
              <Input
                id="purpose"
                placeholder="Brief description of the appointment"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Book Appointment
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
