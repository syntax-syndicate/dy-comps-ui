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
      date: "Wednesday, Oct 12th",
      events: [
        {
          time: "9:00 - 10:00",
          title: "Welcome to PyCon 2023: Opening Keynote",
          speaker: {
            name: "Guido van Rossum",
            role: "Creator of Python",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
        },
        {
          time: "10:00 - 11:00",
          title: "Python in Data Science: Trends and Tools",
          speaker: {
            name: "Dr. Wes McKinney",
            role: "Creator of Pandas",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
        },
        {
          time: "11:00 - 12:00",
          title: "Async Python: Writing Scalable Applications",
          speaker: {
            name: "Łukasz Langa",
            role: "Python Core Developer",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
        },
        {
          time: "12:00 - 13:00",
          title: "Lunch Break: Fueling Up for More Python",
          isBreak: true,
          sponsors: [
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          ],
        },
        {
          time: "13:00 - 14:00",
          title: "Machine Learning with Python: From Basics to Advanced",
          speaker: {
            name: "Andreas Mueller",
            role: "Core Contributor, scikit-learn",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
        },
        {
          time: "14:00 - 15:00",
          title: "Web Development with Django: Best Practices",
          speakers: [
            {
              name: "Adrian Holovaty",
              role: "Co-creator of Django",
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            },
            {
              name: "Simon Willison",
              role: "Co-creator of Django",
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            },
          ],
        },
        {
          time: "15:00 - 16:00",
          title: "Python for DevOps: Automating the Future",
          speaker: {
            name: "Kenneth Reitz",
            role: "Creator of Requests",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
        },
        {
          time: "16:00 - 17:00",
          title: "Lightning Talks: Quick Insights from the Community",
          isBreak: true,
        },
        {
          time: "17:00 - 18:00",
          title: "Networking & Coffee: Meet the Pythonistas",
          isBreak: true,
          sponsors: [
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          ],
        },
      ],
    },
    {
      day: "Day 2",
      date: "Thursday, Oct 13th",
      events: [
        {
          time: "9:00 - 10:00",
          title: "Python in AI: Building Intelligent Systems",
          speaker: {
            name: "Francois Chollet",
            role: "Creator of Keras",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
        },
        {
          time: "10:00 - 11:00",
          title: "Testing in Python: Writing Robust Code",
          speaker: {
            name: "Hynek Schlawack",
            role: "Python Testing Expert",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
        },
        {
          time: "11:00 - 12:00",
          title: "Python for Game Development: Pygame and Beyond",
          speaker: {
            name: "Pete Shinners",
            role: "Creator of Pygame",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
        },
        {
          time: "12:00 - 13:00",
          title: "Lunch Break: Recharge and Connect",
          isBreak: true,
          sponsors: [
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          ],
        },
        {
          time: "13:00 - 14:00",
          title: "Python in Education: Teaching the Next Generation",
          speaker: {
            name: "Carrie Anne Philbin",
            role: "Education Advocate",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
        },
        {
          time: "14:00 - 15:00",
          title: "Open Source Python: Contributing to the Ecosystem",
          speakers: [
            {
              name: "Carol Willing",
              role: "Python Core Developer",
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            },
            {
              name: "Brett Cannon",
              role: "Python Core Developer",
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            },
          ],
        },
        {
          time: "15:00 - 16:00",
          title: "Python in Finance: Automating Trading Strategies",
          speaker: {
            name: "Yves Hilpisch",
            role: "Founder, The Python Quants",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
        },
        {
          time: "16:00 - 17:00",
          title: "Closing Keynote: The Future of Python",
          speaker: {
            name: "Van Lindberg",
            role: "Python Software Foundation",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
        },
        {
          time: "17:00 - 19:00",
          title: "PyCon Farewell Party: Celebrate Python!",
          isBreak: true,
          sponsors: [
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          ],
        },
      ],
    },
  ];

  return (
    <section className="bg-background antialiased dark:bg-background">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground dark:text-foreground">
            PyCon 2023: Unleashing the Power of Python
          </h2>
        </div>

        <div className="mt-8 lg:mt-12">
          <Tabs defaultValue="day1" className="w-full">
            <TabsList className="mb-6 flex justify-center">
              {scheduleData.map((day, index) => (
                <TabsTrigger
                  key={index}
                  value={`day${index + 1}`}
                  className="rounded-full px-4 py-3 text-base font-normal"
                >
                  <span className="font-semibold">{day.day}:</span> {day.date}
                </TabsTrigger>
              ))}
            </TabsList>
            {scheduleData.map((day, dayIndex) => (
              <TabsContent key={dayIndex} value={`day${dayIndex + 1}`}>
                <Card>
                  <CardContent className="p-6">
                    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2">
                      {day.events.map((event, eventIndex) => (
                        <div key={eventIndex} className="space-y-4">
                          <Badge
                            variant="outline"
                            className="text-xs font-medium"
                          >
                            <Clock className="mr-1 h-3 w-3" />
                            {event.time}
                          </Badge>
                          <h4 className="text-xl font-bold text-foreground dark:text-foreground">
                            <a href="#" className="hover:underline">
                              {event.title}
                            </a>
                          </h4>
                          {event.isBreak ? (
                            <div className="space-y-4 rounded-lg bg-muted p-4 dark:bg-muted">
                              <div className="flex items-center gap-2">
                                {event.title.toLowerCase().includes("lunch") ? (
                                  <Coffee className="h-5 w-5" />
                                ) : (
                                  <Users className="h-5 w-5" />
                                )}
                                <span className="font-medium">
                                  {event.title}
                                </span>
                              </div>
                              {event.isBreak && event.sponsors ? (
                                <div>
                                  <p className="mb-2 text-sm font-medium text-muted-foreground dark:text-muted-foreground">
                                    Sponsors:
                                  </p>
                                  <div className="flex flex-wrap items-center gap-4">
                                    {event.sponsors.map((sponsor, index) => (
                                      <img
                                        key={index}
                                        className="h-7 w-auto object-contain"
                                        src={
                                          sponsor ||
                                          "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                                        }
                                        alt={`Sponsor ${index + 1}`}
                                      />
                                    ))}
                                  </div>
                                </div>
                              ) : null}
                            </div>
                          ) : (
                            <div className="space-y-3">
                              {event.speaker && (
                                <div className="flex items-center gap-3">
                                  <Avatar className="border-2 border-primary/50">
                                    <AvatarImage
                                      src={event.speaker.avatar}
                                      alt={event.speaker.name}
                                    />
                                    <AvatarFallback>
                                      {event.speaker.name.charAt(0)}
                                    </AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <p className="text-lg font-medium leading-tight text-foreground dark:text-foreground">
                                      {event.speaker.name}
                                    </p>
                                    <p className="text-sm font-normal text-muted-foreground dark:text-muted-foreground">
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
                                        {speaker.name.charAt(0)}
                                      </AvatarFallback>
                                    </Avatar>
                                    <div>
                                      <p className="text-lg font-medium leading-tight text-foreground dark:text-foreground">
                                        {speaker.name}
                                      </p>
                                      <p className="text-sm font-normal text-muted-foreground dark:text-muted-foreground">
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
        </div>

        <div className="mt-8 text-center">
          <Button size="lg" variant="default" asChild>
            <a href="#">Reserve Your Spot</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
