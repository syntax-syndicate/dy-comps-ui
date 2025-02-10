"use client";

import { useState, useEffect } from "react";
import { ChevronRight, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScheduleItem {
  time: string;
  event: string;
  featured?: boolean;
}

export default function Schedule() {
  const [filter, setFilter] = useState<
    "all" | "morning" | "afternoon" | "evening"
  >("all");
  const [nextEventCountdown, setNextEventCountdown] = useState<string>("");

  const scheduleItems: ScheduleItem[] = [
    {
      time: "08:00 - 09:00",
      event: "Kickoff: Igniting the Day's Innovations",
      featured: true,
    },
    {
      time: "09:00 - 10:00",
      event: "Bergside LLC: Mastering the Art of Video Traffic Orchestration",
    },
    {
      time: "10:00 - 11:00",
      event: "SERPUI Unveiled: Pioneering Open-Source Forensic Watermarking",
    },
    { time: "11:00 - 12:00", event: "Recharge & Connect: Networking Break" },
    {
      time: "12:00 - 13:00",
      event:
        "From Zero to Hero: Catapulting Your Brand to Multi-Million Success",
    },
    {
      time: "13:00 - 14:00",
      event: "Open Source Multimedia Revolution: Community Insights",
    },
    {
      time: "14:00 - 15:00",
      event: "Customer Alchemy: Balancing Acquisition and Retention",
      featured: true,
    },
    {
      time: "15:00 - 16:00",
      event: "SERPUI Deep Dive: Crafting the Future of Digital Watermarking",
    },
    {
      time: "16:00 - 17:00",
      event: "Scaling Summits: Strategies for Exponential Brand Growth",
    },
    {
      time: "17:00 - 18:00",
      event: "Twilight Networking: Conversations & Connections",
    },
  ];

  const filterSchedule = (
    timeOfDay: "all" | "morning" | "afternoon" | "evening",
  ) => {
    setFilter(timeOfDay);
  };

  const getFilteredSchedule = () => {
    if (filter === "all") return scheduleItems;
    const filterRanges = {
      morning: [8, 12],
      afternoon: [12, 17],
      evening: [17, 24],
    };
    return scheduleItems.filter((item) => {
      const [startHour] = item.time.split(":").map(Number);
      const [min, max] = filterRanges[filter];
      return startHour >= min && startHour < max;
    });
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const nextEvent = scheduleItems.find((item) => {
        const [startHour, startMinute] = item.time
          .split(" - ")[0]
          .split(":")
          .map(Number);
        const eventTime = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          startHour,
          startMinute,
        );
        return eventTime > now;
      });

      if (nextEvent) {
        const [startHour, startMinute] = nextEvent.time
          .split(" - ")[0]
          .split(":")
          .map(Number);
        const eventTime = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          startHour,
          startMinute,
        );
        const diff = eventTime.getTime() - now.getTime();
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setNextEventCountdown(`${hours}h ${minutes}m`);
      } else {
        setNextEventCountdown("All events completed");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-background text-foreground antialiased">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight">
            Today's Agenda: Shaping Tomorrow's Tech
          </h2>

          <div className="mt-4 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex items-center text-lg font-medium text-primary hover:underline"
            >
              Dive deeper into our visionary lineup
              <ChevronRight className="ml-2 h-5 w-5" />
            </a>
            <div className="flex items-center text-lg font-medium text-muted-foreground">
              <Clock className="mr-2 h-5 w-5" />
              Next event in: {nextEventCountdown}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-3xl sm:mt-12 lg:mt-16">
          <div className="mb-6 flex justify-center gap-2">
            <Button
              onClick={() => filterSchedule("all")}
              variant={filter === "all" ? "default" : "outline"}
            >
              All
            </Button>
            <Button
              onClick={() => filterSchedule("morning")}
              variant={filter === "morning" ? "default" : "outline"}
            >
              Morning
            </Button>
            <Button
              onClick={() => filterSchedule("afternoon")}
              variant={filter === "afternoon" ? "default" : "outline"}
            >
              Afternoon
            </Button>
            <Button
              onClick={() => filterSchedule("evening")}
              variant={filter === "evening" ? "default" : "outline"}
            >
              Evening
            </Button>
          </div>

          <div className="divide-y divide-border">
            {getFilteredSchedule().map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-2 py-4 sm:flex-row sm:items-center sm:gap-6"
              >
                <p className="w-32 shrink-0 text-lg font-normal text-muted-foreground sm:text-right">
                  {item.time}
                </p>
                <h3 className="flex items-center text-lg font-semibold">
                  <a
                    href="#"
                    className="hover:underline"
                    aria-label={`Learn more about ${item.event}`}
                  >
                    {item.event}
                  </a>
                  {item.featured && (
                    <span className="ml-2 inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                      <Star className="mr-1 h-3 w-3" /> Featured
                    </span>
                  )}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
