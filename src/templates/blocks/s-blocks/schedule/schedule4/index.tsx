"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface Event {
  id: number;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  category: "workshop" | "talk" | "networking" | "break";
}

const events: Event[] = [
  {
    id: 1,
    title: "Registration and Welcome Coffee",
    description: "Pick up your badge and enjoy a morning coffee",
    startTime: "08:00",
    endTime: "09:00",
    location: "Main Lobby",
    category: "networking",
  },
  {
    id: 2,
    title: "Opening Keynote: The Future of Web Development",
    description: "An inspiring talk on upcoming trends and technologies",
    startTime: "09:00",
    endTime: "10:00",
    location: "Grand Ballroom",
    category: "talk",
  },
  {
    id: 3,
    title: "Workshop: Mastering React Hooks",
    description: "Hands-on session to deepen your understanding of React Hooks",
    startTime: "10:15",
    endTime: "11:45",
    location: "Workshop Room A",
    category: "workshop",
  },
  {
    id: 4,
    title: "Networking Lunch",
    description: "Enjoy lunch while networking with fellow attendees",
    startTime: "12:00",
    endTime: "13:30",
    location: "Garden Terrace",
    category: "break",
  },
  {
    id: 5,
    title: "Panel Discussion: Accessibility in Modern Web Apps",
    description: "Industry experts discuss the importance of web accessibility",
    startTime: "13:45",
    endTime: "14:45",
    location: "Grand Ballroom",
    category: "talk",
  },
  {
    id: 6,
    title: "Workshop: Building Serverless Applications",
    description: "Learn to leverage serverless architecture in your projects",
    startTime: "15:00",
    endTime: "16:30",
    location: "Workshop Room B",
    category: "workshop",
  },
  {
    id: 7,
    title: "Closing Remarks and Networking Mixer",
    description: "Wrap up the day with final thoughts and casual networking",
    startTime: "16:45",
    endTime: "18:00",
    location: "Skyline Lounge",
    category: "networking",
  },
];

export default function UniqueSchedule() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const formatTime = (time: string) => {
    return format(new Date(`2000-01-01T${time}`), "h:mm a");
  };

  const getCategoryColor = (category: Event["category"]) => {
    switch (category) {
      case "workshop":
        return "bg-blue-500";
      case "talk":
        return "bg-green-500";
      case "networking":
        return "bg-yellow-500";
      case "break":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 text-foreground md:p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <h1 className="text-3xl font-bold">Conference Schedule</h1>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-[280px] justify-start text-left font-normal",
                  !date && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Today's Events</CardTitle>
              <CardDescription>
                Click on an event to see more details
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[600px] pr-4">
                {events.map((event, index) => (
                  <div key={event.id}>
                    <button
                      className="w-full text-left"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <div className="flex items-center space-x-4 rounded-lg p-2 transition-colors hover:bg-muted">
                        <div
                          className={cn(
                            "h-14 w-1 rounded-full",
                            getCategoryColor(event.category),
                          )}
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold">{event.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {formatTime(event.startTime)} -{" "}
                            {formatTime(event.endTime)}
                          </p>
                        </div>
                      </div>
                    </button>
                    {index < events.length - 1 && (
                      <Separator className="my-2" />
                    )}
                  </div>
                ))}
              </ScrollArea>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Event Details</CardTitle>
              <CardDescription>
                {selectedEvent
                  ? "Information about the selected event"
                  : "Select an event to view details"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {selectedEvent ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">{selectedEvent.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {formatTime(selectedEvent.startTime)} -{" "}
                      {formatTime(selectedEvent.endTime)}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Description</h4>
                    <p className="text-sm">{selectedEvent.description}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Location</h4>
                    <p className="text-sm">{selectedEvent.location}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Category</h4>
                    <div className="flex items-center space-x-2">
                      <div
                        className={cn(
                          "h-3 w-3 rounded-full",
                          getCategoryColor(selectedEvent.category),
                        )}
                      />
                      <p className="text-sm capitalize">
                        {selectedEvent.category}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-center text-muted-foreground">
                  No event selected
                </p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
