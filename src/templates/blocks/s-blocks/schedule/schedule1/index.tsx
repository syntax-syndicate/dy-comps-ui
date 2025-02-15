"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";

interface ScheduleItem {
  time: string;
  event: string;
  location: string;
  description: string;
}

const scheduleData: ScheduleItem[] = [
  {
    time: "09:00 AM",
    event: "Opening Keynote",
    location: "Main Hall",
    description: "Welcome address and conference overview",
  },
  {
    time: "10:30 AM",
    event: "Workshop: React Basics",
    location: "Room A",
    description: "Introduction to React for beginners",
  },
  {
    time: "12:00 PM",
    event: "Lunch Break",
    location: "Cafeteria",
    description: "Networking and refreshments",
  },
  {
    time: "01:30 PM",
    event: "Panel Discussion: Future of Web Dev",
    location: "Main Hall",
    description: "Industry experts discuss emerging trends",
  },
  {
    time: "03:00 PM",
    event: "Workshop: Advanced Next.js",
    location: "Room B",
    description: "Deep dive into Next.js features and optimizations",
  },
  {
    time: "04:30 PM",
    event: "Closing Remarks",
    location: "Main Hall",
    description: "Summary and farewell",
  },
];

export default function Schedule() {
  return (
    <div className="min-h-screen bg-background py-16 text-foreground">
      <div className="container mx-auto space-y-8">
        {/* Schedule Overview Section */}
        <div className="space-y-6">
          <h1 className="text-2xl font-semibold md:text-3xl">
            Conference Schedule
          </h1>
          <p className="text-sm text-muted-foreground md:text-base">
            Join us for a day filled with insightful talks, hands-on workshops,
            and networking opportunities. Our schedule is designed to provide
            value for developers of all skill levels.
          </p>
        </div>

        {/* Schedule Table Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-semibold md:text-2xl">Today's Agenda</h2>
          <Card>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px]">Time</TableHead>
                    <TableHead className="w-[200px]">Event</TableHead>
                    <TableHead className="w-[150px]">Location</TableHead>
                    <TableHead>Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {scheduleData.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell className="font-medium">{item.time}</TableCell>
                      <TableCell>{item.event}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {item.location}
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        {item.description}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>

        {/* Additional Information Section */}
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="bg-card">
            <CardContent className="space-y-2 p-6">
              <h3 className="text-lg font-medium">Wi-Fi Access</h3>
              <p className="text-sm text-muted-foreground">
                Network: ConferenceGuest Password: Welcome2023!
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardContent className="space-y-2 p-6">
              <h3 className="text-lg font-medium">Lunch Options</h3>
              <p className="text-sm text-muted-foreground">
                Vegetarian, vegan, and gluten-free options available. Please
                inform staff of any allergies.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-card">
            <CardContent className="space-y-2 p-6">
              <h3 className="text-lg font-medium">Q&A Sessions</h3>
              <p className="text-sm text-muted-foreground">
                15-minute Q&A after each talk. For extended discussions, visit
                the networking area.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
