import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const SCHEDULE_DATA = {
  morning: [
    {
      time: "07:00 - 08:00",
      title: "Kickoff and Welcome",
      description:
        "Join us as we open the event with an inspiring keynote, setting the stage for a day of innovation and collaboration.",
      speakers: [
        {
          name: "Elena Martinez",
          role: "CEO & Co-Founder of NovaTech",
          avatar:
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        },
      ],
    },
    {
      time: "08:00 - 09:00",
      title: "NovaTech: Revolutionizing Data Flow Management",
      description:
        "Discover how NovaTech is transforming data flow management with cutting-edge solutions for modern enterprises.",
      speakers: [
        {
          name: "Carlos Rivera",
          role: "Lead Data Architect",
          avatar:
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        },
      ],
    },
    {
      time: "10:00 - 11:00",
      title: "OpenFrame: Building Scalable UI Systems",
      description:
        "Learn how OpenFrame’s modular UI framework is empowering developers to create scalable and maintainable applications.",
      speakers: [
        {
          name: "Sophia Kim",
          role: "CTO at OpenFrame",
          avatar:
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        },
        {
          name: "Daniel Park",
          role: "Frontend Lead at OpenFrame",
          avatar:
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        },
      ],
    },
    {
      time: "11:00 - 11:30",
      title: "Coffee & Networking",
      description:
        "Take a break, grab a coffee, and connect with fellow attendees.",
      isBreak: true,
      sponsors: ["Google", "Adobe", "Atlassian", "Stripe"],
    },
    {
      time: "11:30 - 12:00",
      title: "From Startup to Scale-Up: Lessons Learned",
      description:
        "Hear firsthand experiences from industry leaders on scaling businesses from humble beginnings to global success.",
      speakers: [
        {
          name: "Amelia Carter",
          role: "COO at Stripe",
          avatar:
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        },
        {
          name: "Liam O'Connor",
          role: "CTO at Stripe",
          avatar:
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        },
        {
          name: "Isabella Nguyen",
          role: "Full-Stack Developer",
          avatar:
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        },
      ],
    },
    {
      time: "12:00 - 13:00",
      title: "Open Source Innovations: A Year in Review",
      description:
        "Explore the latest advancements and trends in the open-source community over the past year.",
      speakers: [
        {
          name: "Ethan Brooks",
          role: "Open Source Advocate",
          avatar:
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        },
      ],
    },
  ],
  afternoon: [
    {
      time: "13:00 - 14:00",
      title: "Empowering Women in Tech",
      description:
        "A panel discussion on breaking barriers and creating opportunities for women in the tech industry.",
      speakers: [
        {
          name: "Priya Sharma",
          role: "CEO & Co-Founder of TechForHer",
          avatar:
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        },
      ],
    },
    {
      time: "14:00 - 15:00",
      title: "Customer Growth vs. Retention: Striking the Balance",
      description:
        "Learn strategies to balance customer acquisition with retention for sustainable business growth.",
      speakers: [
        {
          name: "Olivia Bennett",
          role: "VP of Growth at Shopify",
          avatar:
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        },
        {
          name: "Nathaniel Reed",
          role: "Product Lead at Shopify",
          avatar:
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        },
      ],
    },
    {
      time: "15:00 - 15:30",
      title: "Afternoon Break",
      description: "Recharge with refreshments and network with peers.",
      isBreak: true,
      sponsors: ["Google", "Adobe", "Atlassian", "Stripe"],
    },
    {
      time: "15:30 - 16:00",
      title: "OpenFrame: Building Scalable UI Systems",
      description:
        "A deeper dive into OpenFrame’s architecture and how it’s shaping the future of UI development.",
      speakers: [
        {
          name: "Sophia Kim",
          role: "CTO at OpenFrame",
          avatar:
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        },
        {
          name: "Daniel Park",
          role: "Frontend Lead at OpenFrame",
          avatar:
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        },
      ],
    },
    {
      time: "16:00 - 17:00",
      title: "From Startup to Scale-Up: Lessons Learned",
      description:
        "A follow-up session with actionable insights on scaling your business effectively.",
      speakers: [
        {
          name: "Amelia Carter",
          role: "COO at Stripe",
          avatar:
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        },
        {
          name: "Liam O'Connor",
          role: "CTO at Stripe",
          avatar:
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        },
        {
          name: "Isabella Nguyen",
          role: "Full-Stack Developer",
          avatar:
            "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
        },
      ],
    },
    {
      time: "17:00 - 18:00",
      title: "Closing Reception",
      description: "Wrap up the day with drinks, snacks, and networking.",
      isBreak: true,
      sponsors: ["Google", "Adobe", "Atlassian", "Stripe"],
    },
  ],
};

export default function ConferenceSchedule() {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold">Thursday</h1>
        <p className="text-muted-foreground">November 9, 2023</p>
        <div className="mt-2 flex items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">
            Pacific Standard Time (GMT-8)
          </span>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {/* Morning Sessions */}
        <div>
          <h2 className="mb-4 text-xl font-semibold">Morning</h2>
          <div className="space-y-4">
            {SCHEDULE_DATA.morning.map((session, index) =>
              session.isBreak ? (
                <BreakCard
                  key={index}
                  time={session.time}
                  title={session.title}
                  description={session.description}
                  sponsors={session.sponsors}
                />
              ) : (
                <SessionCard
                  key={index}
                  time={session.time}
                  title={session.title}
                  description={session.description}
                  speakers={session.speakers}
                />
              ),
            )}
          </div>
        </div>

        {/* Afternoon Sessions */}
        <div>
          <h2 className="mb-4 text-xl font-semibold">Afternoon</h2>
          <div className="space-y-4">
            {SCHEDULE_DATA.afternoon.map((session, index) =>
              session.isBreak ? (
                <BreakCard
                  key={index}
                  time={session.time}
                  title={session.title}
                  description={session.description}
                  sponsors={session.sponsors}
                />
              ) : (
                <SessionCard
                  key={index}
                  time={session.time}
                  title={session.title}
                  description={session.description}
                  speakers={session.speakers}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface Speaker {
  name: string;
  role: string;
  avatar: string;
}

interface SessionCardProps {
  time: string;
  title: string;
  description: string;
  speakers?: Speaker[];
}

function SessionCard({ time, title, description, speakers }: SessionCardProps) {
  return (
    <Card className="border">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-base font-medium">{title}</CardTitle>
          <span className="text-sm text-muted-foreground">{time}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <div className="space-y-3">
          {speakers?.map((speaker, index) => (
            <div key={index} className="flex items-center gap-3">
              <Avatar className="h-8 w-8 border">
                <AvatarImage src={speaker.avatar} alt={speaker.name} />
                <AvatarFallback className="bg-muted text-muted-foreground">
                  {speaker.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium">{speaker.name}</p>
                <p className="text-xs text-muted-foreground">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

interface BreakCardProps {
  time: string;
  title: string;
  description: string;
  sponsors: string[];
}

function BreakCard({ time, title, description, sponsors }: BreakCardProps) {
  return (
    <Card className="border bg-muted/50">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <CardTitle className="text-base font-medium">{title}</CardTitle>
          <span className="text-sm text-muted-foreground">{time}</span>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <div className="space-y-2">
          <p className="text-sm text-muted-foreground">Sponsors:</p>
          <div className="flex gap-2">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="flex h-8 w-8 items-center justify-center rounded-full border bg-background text-xs text-muted-foreground"
              >
                {sponsor[0]}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
