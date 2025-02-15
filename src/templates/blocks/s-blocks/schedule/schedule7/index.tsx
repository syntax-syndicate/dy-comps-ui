import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Clock, Coffee, Zap, Music, Brain, Rocket, Users } from "lucide-react";

const ExcelConferenceSchedule: React.FC = () => {
  const scheduleData = [
    {
      time: "Morning Sessions: Mastering Excel Fundamentals",
      events: [
        {
          timeSlot: "08:30 - 09:30",
          title: "Welcome & Keynote: The Future of Data Analysis with Excel",
          description:
            "Kick off the conference with insights into the latest advancements in Excel and its role in modern data analysis.",
          speaker: {
            name: "Dr. Emily Carter",
            role: "Data Analytics Expert",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=400&width=400",
          },
        },
        {
          timeSlot: "09:45 - 10:45",
          title: "Advanced Formulas and Functions: Unlocking Excel's Potential",
          description:
            "Learn how to leverage advanced formulas like INDEX-MATCH, XLOOKUP, and dynamic arrays to streamline your workflows.",
          speaker: {
            name: "John Matthews",
            role: "Excel MVP and Consultant",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=400&width=400",
          },
        },
        {
          timeSlot: "11:00 - 12:00",
          title: "Data Visualization: Creating Impactful Dashboards",
          description:
            "Discover best practices for designing interactive dashboards using Excel's powerful visualization tools.",
          speaker: {
            name: "Sarah Lin",
            role: "Business Intelligence Specialist",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=400&width=400",
          },
        },
        {
          timeSlot: "12:15 - 13:15",
          title: "Lunch & Networking: Connecting with Industry Peers",
          description:
            "Enjoy a catered lunch while networking with fellow Excel enthusiasts and industry professionals.",
          isBreak: true,
          icon: Coffee,
          sponsors: [
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=100&width=200",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=100&width=200",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=100&width=200",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=100&width=200",
          ],
        },
      ],
    },
    {
      time: "Afternoon Sessions: Excel for Advanced Users",
      events: [
        {
          timeSlot: "13:30 - 14:30",
          title: "Power Query: Transforming Data Like a Pro",
          description:
            "Explore how to use Power Query to clean, transform, and automate data preparation tasks efficiently.",
          speaker: {
            name: "Michael Roberts",
            role: "Data Automation Specialist",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=400&width=400",
          },
        },
        {
          timeSlot: "14:45 - 15:45",
          title: "Macros and VBA: Automating Repetitive Tasks",
          description:
            "Gain hands-on experience with Excel macros and VBA to automate repetitive tasks and enhance productivity.",
          speaker: {
            name: "Laura Bennett",
            role: "Excel Automation Expert",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=400&width=400",
          },
        },
        {
          timeSlot: "16:00 - 16:30",
          title: "Afternoon Break: Refreshments and Networking",
          description:
            "Recharge with coffee and snacks while discussing key takeaways from the day's sessions.",
          isBreak: true,
          icon: Coffee,
          sponsors: [
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=100&width=200",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=100&width=200",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=100&width=200",
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=100&width=200",
          ],
        },
        {
          timeSlot: "16:45 - 17:45",
          title: "Excel for Financial Modeling: Best Practices",
          description:
            "Learn how to build robust financial models using Excel, with a focus on accuracy and scalability.",
          speaker: {
            name: "David Thompson",
            role: "Financial Modeling Consultant",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=400&width=400",
          },
        },
        {
          timeSlot: "18:00 - 19:00",
          title: "Closing Panel: The Future of Excel in a Data-Driven World",
          description:
            "Join industry leaders as they discuss the evolving role of Excel in data analysis and business decision-making.",
          speakers: [
            {
              name: "Dr. Emily Carter",
              role: "Data Analytics Expert",
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=400&width=400",
            },
            {
              name: "John Matthews",
              role: "Excel MVP and Consultant",
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=400&width=400",
            },
            {
              name: "Sarah Lin",
              role: "Business Intelligence Specialist",
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=400&width=400",
            },
          ],
        },
      ],
    },
  ];

  return (
    <section className="bg-background text-foreground antialiased">
      <div className="container mx-auto px-4 py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Excel Excellence Conference 2023
          </h2>
          <p className="text-xl font-medium text-muted-foreground">
            November 15-16, 2023 | Virtual Event
          </p>
          <Badge variant="secondary" className="text-xs font-medium">
            <Clock className="mr-1 h-3 w-3" />
            Eastern Time Zone (ET)
          </Badge>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-16 gap-y-12 lg:mt-16 lg:grid-cols-2">
          {scheduleData.map((session, index) => (
            <Card key={index} className="border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-bold">
                  {session.time}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {session.events.map((event, eventIndex) => (
                  <div
                    key={eventIndex}
                    className="flex flex-col gap-4 sm:flex-row sm:items-start"
                  >
                    <p className="shrink-0 text-sm font-medium text-muted-foreground sm:w-32 sm:text-right">
                      {event.timeSlot}
                    </p>
                    <div className="hidden w-px bg-border sm:block" />
                    <div className="flex-1 space-y-4">
                      <h4 className="text-xl font-bold">
                        <a href="#" className="hover:underline">
                          {event.title}
                        </a>
                      </h4>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                      {event.isBreak ? (
                        <div className="space-y-4 rounded-lg bg-muted p-4">
                          <div className="flex items-center gap-2">
                            {event.icon && <event.icon className="h-5 w-5" />}
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
                                  className="h-8 w-auto object-contain"
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
                                <p className="text-lg font-medium leading-tight">
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
                                  <p className="text-lg font-medium leading-tight">
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
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExcelConferenceSchedule;
