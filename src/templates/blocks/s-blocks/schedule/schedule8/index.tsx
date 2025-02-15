import type React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Hourglass,
  Coffee,
  Zap,
  Rocket,
  Users,
  Brain,
  Dna,
} from "lucide-react";

const ExcelEventSchedule: React.FC = () => {
  const scheduleData = [
    {
      day: "Day 1: Foundations",
      events: [
        {
          time: "09:00 - 10:00",
          title:
            "Opening Keynote: The Future of Excel in Business Intelligence",
          speaker: {
            name: "John Smith",
            role: "Microsoft Excel Product Manager",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
          },
        },
        {
          time: "11:00 - 12:00",
          title: "Advanced Formulas and Functions for Data Analysis",
          speaker: {
            name: "Emily Johnson",
            role: "Excel MVP and Data Analyst",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
          },
        },
        {
          time: "14:00 - 15:00",
          title: "Excel for Financial Modeling: Best Practices",
          speakers: [
            {
              name: "Michael Brown",
              role: "Financial Analyst",
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
            },
            {
              name: "Sarah Lee",
              role: "Investment Banker",
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
            },
          ],
        },
      ],
    },
    {
      day: "Day 2: Advanced Techniques",
      events: [
        {
          time: "10:00 - 11:00",
          title: "Power Query: Transforming and Cleaning Data in Excel",
          speaker: {
            name: "David Wilson",
            role: "Data Transformation Specialist",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
          },
        },
        {
          time: "13:00 - 14:00",
          title: "Mastering Pivot Tables and Power Pivot",
          speaker: {
            name: "Lisa Chen",
            role: "Business Intelligence Consultant",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
          },
        },
        {
          time: "16:00 - 17:00",
          title: "Excel Automation with VBA and Macros",
          speakers: [
            {
              name: "Robert Taylor",
              role: "Excel Developer",
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
            },
            {
              name: "Amanda Garcia",
              role: "Automation Expert",
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
            },
          ],
        },
      ],
    },
    {
      day: "Day 3: Integration and Future",
      events: [
        {
          time: "09:00 - 10:00",
          title: "Excel and Power BI: Creating Powerful Dashboards",
          speaker: {
            name: "Chris Anderson",
            role: "Data Visualization Expert",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
          },
        },
        {
          time: "11:00 - 12:00",
          title: "Excel in the Cloud: Collaboration and Version Control",
          speaker: {
            name: "Michelle Wong",
            role: "Cloud Solutions Architect",
            avatar:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
          },
        },
        {
          time: "15:00 - 16:00",
          title: "The Future of Excel: AI and Machine Learning Integration",
          speakers: [
            {
              name: "Dr. Alex Patel",
              role: "AI Researcher",
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
            },
            {
              name: "Sophia Rodriguez",
              role: "Machine Learning Engineer",
              avatar:
                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=80&width=80",
            },
          ],
        },
      ],
    },
  ];

  const breakSessions = [
    {
      time: "12:00 - 13:00",
      title: "Networking Lunch",
      icon: Coffee,
      sponsors: [
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=30&width=100",
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=30&width=100",
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=30&width=100",
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=30&width=100",
      ],
    },
    {
      time: "17:00 - 19:00",
      title: "Evening Reception and Networking",
      icon: Users,
      sponsors: [
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=30&width=100",
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=30&width=100",
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=30&width=100",
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg?height=30&width=100",
      ],
    },
  ];

  return (
    <section className="relative overflow-hidden bg-background text-foreground antialiased">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-primary/20"></div>
      </div>
      <div className="container mx-auto px-4 py-8 sm:py-16 lg:py-24">
        <div className="mx-auto max-w-3xl space-y-4 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight">
            Excel Summit 2023: Empowering Data-Driven Decisions
          </h2>
          <p className="text-xl font-medium text-muted-foreground">
            September 15th - 17th, 2023
          </p>
          <Badge variant="secondary" className="text-xs font-medium">
            <Hourglass className="mr-1 h-3 w-3" />
            Quantum Time Zone (QTZ+∞)
          </Badge>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-3">
          {scheduleData.map((day, dayIndex) => (
            <Card key={dayIndex} className="border-none shadow-none">
              <CardHeader>
                <CardTitle className="text-left text-2xl font-bold">
                  {day.day}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {day.events.map((event, eventIndex) => (
                  <div key={eventIndex} className="space-y-4">
                    <Badge variant="outline" className="text-xs font-medium">
                      <Hourglass className="mr-1 h-3 w-3" />
                      {event.time}
                    </Badge>
                    <h4 className="text-xl font-bold">
                      <a href="#" className="hover:underline">
                        {event.title}
                      </a>
                    </h4>
                    {event.speaker && (
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage
                            src={event.speaker.avatar}
                            alt={event.speaker.name}
                          />
                          <AvatarFallback>
                            {event.speaker.name.charAt(0)}
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
                              {speaker.name.charAt(0)}
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
                ))}
                {breakSessions.map((breakSession, breakIndex) => (
                  <Card key={breakIndex} className="bg-muted">
                    <CardContent className="space-y-4 p-4">
                      <Badge variant="outline" className="text-xs font-medium">
                        <Hourglass className="mr-1 h-3 w-3" />
                        {breakSession.time}
                      </Badge>
                      <div className="flex items-center gap-2">
                        {breakSession.icon && (
                          <breakSession.icon className="h-5 w-5" />
                        )}
                        <span className="font-medium">
                          {breakSession.title}
                        </span>
                      </div>
                      <div>
                        <p className="mb-2 text-sm font-medium text-muted-foreground">
                          Reality Benders:
                        </p>
                        <div className="flex flex-wrap items-center gap-4">
                          {breakSession.sponsors.map((sponsor, index) => (
                            <img
                              key={index}
                              className="h-8 w-auto object-contain"
                              src={
                                sponsor ||
                                "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                              }
                              alt={`Reality Bender ${index + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExcelEventSchedule;
