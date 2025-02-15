import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Coffee, Users } from "lucide-react";

const EventSchedule: React.FC = () => {
  const scheduleData = [
    {
      day: "Day 1",
      date: "October 12",
      events: [
        {
          time: "9:00 AM - 10:00 AM",
          title: "Opening Keynote: The Future of Technology",
          speaker: {
            name: "Dr. Emily Chen",
            role: "Chief Innovation Officer, TechVision Inc.",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
          },
        },
        {
          time: "10:30 AM - 11:30 AM",
          title: "AI and Machine Learning: Transforming Industries",
          speaker: {
            name: "Alex Rodriguez",
            role: "AI Research Lead, DataMinds",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
          },
        },
        {
          time: "12:00 PM - 1:00 PM",
          title: "Networking Lunch",
          isBreak: true,
          sponsors: [
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=30&width=100",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=30&width=100",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=30&width=100",
          ],
        },
        {
          time: "1:30 PM - 2:30 PM",
          title: "Cybersecurity in the Digital Age",
          speaker: {
            name: "Sarah Johnson",
            role: "Head of Security, CyberShield Solutions",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
          },
        },
        {
          time: "3:00 PM - 4:00 PM",
          title: "The Rise of Quantum Computing",
          speakers: [
            {
              name: "Dr. Michael Lee",
              role: "Quantum Researcher, QuantumTech Labs",
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
            },
            {
              name: "Dr. Lisa Patel",
              role: "Professor of Physics, Quantum University",
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
            },
          ],
        },
        {
          time: "4:30 PM - 5:30 PM",
          title: "Panel: Ethics in Technology",
          speaker: {
            name: "Various Experts",
            role: "Industry Leaders and Academics",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
          },
        },
      ],
    },
    {
      day: "Day 2",
      date: "October 13",
      events: [
        {
          time: "9:00 AM - 10:00 AM",
          title: "Blockchain and Cryptocurrency: A New Financial Era",
          speaker: {
            name: "Mark Thompson",
            role: "Blockchain Strategist, CryptoFuture",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
          },
        },
        {
          time: "10:30 AM - 11:30 AM",
          title: "IoT and Smart Cities",
          speaker: {
            name: "Dr. Sophia Kim",
            role: "IoT Solutions Architect, SmartCity Innovations",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
          },
        },
        {
          time: "12:00 PM - 1:00 PM",
          title: "Lunch and Tech Demo Showcase",
          isBreak: true,
          sponsors: [
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=30&width=100",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=30&width=100",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=30&width=100",
          ],
        },
        {
          time: "1:30 PM - 2:30 PM",
          title: "5G and Beyond: The Future of Connectivity",
          speaker: {
            name: "David Wilson",
            role: "Chief Technology Officer, NextGen Networks",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
          },
        },
        {
          time: "3:00 PM - 4:00 PM",
          title: "Augmented and Virtual Reality in Enterprise",
          speakers: [
            {
              name: "Emma Davis",
              role: "AR/VR Product Manager, ImmersiveTech",
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
            },
            {
              name: "James Brown",
              role: "Enterprise Solutions Director, VirtualWorks",
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
            },
          ],
        },
        {
          time: "4:30 PM - 5:30 PM",
          title: "The Future of Work: AI and Automation",
          speaker: {
            name: "Dr. Rachel Green",
            role: "Futurist and Author, WorkEvolution Institute",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
          },
        },
      ],
    },
    {
      day: "Day 3",
      date: "October 14",
      events: [
        {
          time: "9:00 AM - 10:00 AM",
          title: "Green Tech: Innovating for Sustainability",
          speaker: {
            name: "Dr. Thomas Clark",
            role: "Environmental Scientist, GreenFuture Technologies",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
          },
        },
        {
          time: "10:30 AM - 11:30 AM",
          title: "Robotics and Automation in Manufacturing",
          speaker: {
            name: "Maria Gonzalez",
            role: "Robotics Engineer, AutomationX",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
          },
        },
        {
          time: "12:00 PM - 1:00 PM",
          title: "Networking Lunch and Career Fair",
          isBreak: true,
          sponsors: [
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=30&width=100",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=30&width=100",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=30&width=100",
          ],
        },
        {
          time: "1:30 PM - 2:30 PM",
          title: "Bioinformatics and Personalized Medicine",
          speaker: {
            name: "Dr. Jennifer Lee",
            role: "Lead Researcher, BioTech Innovations",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
          },
        },
        {
          time: "3:00 PM - 4:00 PM",
          title: "Panel: The Next Decade in Tech",
          speakers: [
            {
              name: "Various Experts",
              role: "Industry Leaders and Visionaries",
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
            },
          ],
        },
        {
          time: "4:30 PM - 5:30 PM",
          title: "Closing Keynote: Shaping Our Technological Future",
          speaker: {
            name: "Dr. Robert Chang",
            role: "CEO, FutureTech Global",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
          },
        },
      ],
    },
  ];

  return (
    <div className="bg-background text-foreground">
      <div className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold">Event Schedule</h2>
        <Tabs defaultValue="day1" className="w-full">
          <TabsList className="mb-8 flex justify-center">
            {scheduleData.map((day, index) => (
              <TabsTrigger
                key={index}
                value={`day${index + 1}`}
                className="px-4 py-2"
              >
                <span className="font-semibold">{day.day}</span>
                <span className="ml-2 text-muted-foreground">{day.date}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {scheduleData.map((day, dayIndex) => (
            <TabsContent key={dayIndex} value={`day${dayIndex + 1}`}>
              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="space-y-4">
                        <Badge
                          variant="outline"
                          className="text-xs font-medium"
                        >
                          <Clock className="mr-1 h-3 w-3" />
                          {event.time}
                        </Badge>
                        <h4 className="text-xl font-semibold">{event.title}</h4>
                        {event.isBreak ? (
                          <div className="space-y-4 rounded-lg bg-muted p-4">
                            <div className="flex items-center gap-2">
                              {event.title.toLowerCase().includes("lunch") ? (
                                <Coffee className="h-5 w-5" />
                              ) : (
                                <Users className="h-5 w-5" />
                              )}
                              <span className="font-medium">{event.title}</span>
                            </div>
                            <div>
                              <p className="mb-2 text-sm font-medium text-muted-foreground">
                                Sponsored by:
                              </p>
                              <div className="flex flex-wrap items-center gap-4">
                                {event.sponsors.map((sponsor, index) => (
                                  <img
                                    key={index}
                                    className="h-6 w-auto object-contain"
                                    src={
                                      sponsor ||
                                      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                                    }
                                    alt={`Sponsor ${index + 1}`}
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div className="space-y-3">
                            {event.speaker && (
                              <div className="flex items-center gap-3">
                                <Avatar>
                                  <AvatarImage
                                    src={event.speaker.avatar}
                                    alt={event.speaker.name}
                                  />
                                  <AvatarFallback>
                                    {event.speaker.name
                                      .split(" ")
                                      .map((n) => n[0])
                                      .join("")}
                                  </AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-medium">
                                    {event.speaker.name}
                                  </p>
                                  <p className="text-sm text-muted-foreground">
                                    {event.speaker.role}
                                  </p>
                                </div>
                              </div>
                            )}
                            {event.speakers &&
                              event.speakers.map((speaker, speakerIndex) => (
                                <div
                                  key={speakerIndex}
                                  className="flex items-center gap-3"
                                >
                                  <Avatar>
                                    <AvatarImage
                                      src={speaker.avatar}
                                      alt={speaker.name}
                                    />
                                    <AvatarFallback>
                                      {speaker.name
                                        .split(" ")
                                        .map((n) => n[0])
                                        .join("")}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="font-medium">
                                      {speaker.name}
                                    </p>
                                    <p className="text-sm text-muted-foreground">
                                      {speaker.role}
                                    </p>
                                  </div>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
        <div className="mt-8 text-center">
          <Button size={"lg"} asChild>
            <a href="#" className="inline-flex items-center">
              Register Now
              <svg
                className="ml-2 h-4 w-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
