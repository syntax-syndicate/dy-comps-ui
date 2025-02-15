"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
const hours = Array.from({ length: 9 }, (_, i) => i + 9); // 9 AM to 5 PM

interface Event {
  id: string;
  day: string;
  hour: number;
  title: string;
  description: string;
}

const Schedule: React.FC = () => {
  const [events, setEvents] = useState<Event[]>([
    {
      id: "1",
      day: "Monday",
      hour: 10,
      title: "Team Meeting",
      description: "Weekly team sync-up",
    },
    {
      id: "2",
      day: "Wednesday",
      hour: 14,
      title: "Client Call",
      description: "Project update call with client",
    },
    {
      id: "3",
      day: "Friday",
      hour: 11,
      title: "Training Session",
      description: "New tool introduction for the team",
    },
  ]);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleCellClick = (day: string, hour: number) => {
    const event = events.find((e) => e.day === day && e.hour === hour);
    if (event) {
      setSelectedEvent(event);
      setIsEditing(false);
    } else {
      setSelectedEvent({ id: "", day, hour, title: "", description: "" });
      setIsEditing(true);
    }
  };

  const handleSaveEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (selectedEvent) {
      if (selectedEvent.id) {
        // Editing existing event
        setEvents(
          events.map((event) =>
            event.id === selectedEvent.id ? selectedEvent : event,
          ),
        );
      } else {
        // Adding new event
        const newEvent = {
          ...selectedEvent,
          id: Date.now().toString(), // Simple way to generate a unique id
        };
        setEvents([...events, newEvent]);
      }
      setSelectedEvent(null);
      setIsEditing(false);
    }
  };

  const handleRemoveEvent = () => {
    if (selectedEvent) {
      setEvents(events.filter((event) => event.id !== selectedEvent.id));
      setSelectedEvent(null);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    if (selectedEvent) {
      setSelectedEvent({ ...selectedEvent, [e.target.name]: e.target.value });
    }
  };

  const handleSelectChange = (name: string, value: string) => {
    if (selectedEvent) {
      setSelectedEvent({
        ...selectedEvent,
        [name]: name === "hour" ? parseInt(value) : value,
      });
    }
  };

  return (
    <section className="container py-16">
      <Card className="mx-auto w-full max-w-4xl">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Weekly Schedule</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-[auto,1fr,1fr,1fr,1fr,1fr] gap-1">
            <div className="font-semibold text-muted-foreground"></div>
            {days.map((day) => (
              <div key={day} className="text-center font-semibold">
                {day}
              </div>
            ))}
            {hours.map((hour) => (
              <React.Fragment key={hour}>
                <div className="pr-2 text-sm text-muted-foreground">{`${hour}:00`}</div>
                {days.map((day) => {
                  const event = events.find(
                    (e) => e.day === day && e.hour === hour,
                  );
                  return (
                    <Button
                      key={`${day}-${hour}`}
                      variant="outline"
                      className={`h-12 p-1 ${event ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
                      onClick={() => handleCellClick(day, hour)}
                    >
                      {event && (
                        <span className="overflow-hidden overflow-ellipsis whitespace-nowrap text-xs">
                          {event.title}
                        </span>
                      )}
                    </Button>
                  );
                })}
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog
        open={!!selectedEvent}
        onOpenChange={() => {
          setSelectedEvent(null);
          setIsEditing(false);
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {isEditing
                ? selectedEvent?.id
                  ? "Edit Event"
                  : "Add Event"
                : selectedEvent?.title}
            </DialogTitle>
            <DialogDescription>
              {selectedEvent?.day} at {selectedEvent?.hour}:00
            </DialogDescription>
          </DialogHeader>
          {isEditing ? (
            <form onSubmit={handleSaveEvent}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="title" className="text-right">
                    Title
                  </Label>
                  <Input
                    id="title"
                    name="title"
                    value={selectedEvent?.title}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Description
                  </Label>
                  <Textarea
                    id="description"
                    name="description"
                    value={selectedEvent?.description}
                    onChange={handleInputChange}
                    className="col-span-3"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="day" className="text-right">
                    Day
                  </Label>
                  <Select
                    value={selectedEvent?.day}
                    onValueChange={(value) => handleSelectChange("day", value)}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select a day" />
                    </SelectTrigger>
                    <SelectContent>
                      {days.map((day) => (
                        <SelectItem key={day} value={day}>
                          {day}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="hour" className="text-right">
                    Time
                  </Label>
                  <Select
                    value={selectedEvent?.hour.toString()}
                    onValueChange={(value) => handleSelectChange("hour", value)}
                  >
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select a time" />
                    </SelectTrigger>
                    <SelectContent>
                      {hours.map((hour) => (
                        <SelectItem key={hour} value={hour.toString()}>
                          {`${hour}:00`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">
                  {selectedEvent?.id ? "Update Event" : "Add Event"}
                </Button>
              </DialogFooter>
            </form>
          ) : (
            <>
              <p>{selectedEvent?.description}</p>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsEditing(true)}>
                  Edit Event
                </Button>
                <Button variant="destructive" onClick={handleRemoveEvent}>
                  Remove Event
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Schedule;
