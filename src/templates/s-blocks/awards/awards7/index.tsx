import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Badge {
  icon: string;
  title: string;
}

export default function AchievementBadges() {
  const badges: Badge[] = [
    {
      icon: "/icons/police-badge.png",
      title: "Badge Achievement",
    },
    {
      icon: "/icons/verified-badge.png",
      title: "Trusted Thing",
    },
    {
      icon: "/icons/medal2.png",
      title: "Gold Medal",
    },
    {
      icon: "/icons/trophy.png",
      title: "Champion Trophy",
    },
    {
      icon: "/icons/diamond.png",
      title: "Diamond Rank",
    },
    {
      icon: "/icons/crown.png",
      title: "Royal Crown",
    },
    {
      icon: "/icons/medal.png",
      title: "First Place",
    },
    {
      icon: "/icons/star.png",
      title: "Star Performer",
    },
    { icon: "/icons/prize.png", title: "Top Prize" },
    {
      icon: "/icons/medal-second-place.png",
      title: "Second Place",
    },
    {
      icon: "/icons/olympic-medal-bronze.png",
      title: "Third Place",
    },
    {
      icon: "/icons/laurel-wreath.png",
      title: "Laurel Wreath",
    },
    {
      icon: "/icons/trophy--v1.png",
      title: "Victory Cup",
    },
    {
      icon: "/icons/guarantee.png",
      title: "Quality Guarantee",
    },
    { icon: "/icons/diploma.png", title: "Diploma" },
  ];

  return (
    <div className="container bg-background py-16">
      <Card className="border-none shadow-lg">
        <CardHeader className="rounded-lg bg-accent">
          <CardTitle className="text-center text-2xl font-bold">
            Achievement Badges
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {badges.map((badge, index) => (
              <div
                key={index}
                className="flex flex-col items-center rounded-lg bg-secondary/10 p-4 transition-all hover:bg-secondary/20 hover:shadow-md"
              >
                <div className="relative mb-3 size-20">
                  <Image
                    src={badge.icon}
                    alt={badge.title}
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <span className="text-center text-sm font-medium text-foreground">
                  {badge.title}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
