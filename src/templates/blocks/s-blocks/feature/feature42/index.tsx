import {
  Users,
  Lightbulb,
  Award,
  Shield,
  HeartHandshake,
  Puzzle,
} from "lucide-react";
import { Card } from "@/components/ui/card";

export default function Feature42() {
  const values = [
    {
      title: "Collaborative Spirit",
      description:
        "We believe in the power of teamwork. Together, we achieve more, supporting each other every step of the way.",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Pioneering Innovation",
      description:
        "We embrace change and challenge the status quo. We foster a culture of curiosity, experimentation, and creative problem-solving.",
      icon: Lightbulb,
      color: "bg-green-500",
    },
    {
      title: "Uncompromising Quality",
      description:
        "We are dedicated to excellence in all we do. We strive to deliver top-tier solutions that consistently exceed expectations.",
      icon: Award,
      color: "bg-yellow-500",
    },
    {
      title: "Ethical Integrity",
      description:
        "We operate with transparency and fairness. Our core values guide our actions, ensuring trust and accountability at every level.",
      icon: Shield,
      color: "bg-purple-500",
    },
    {
      title: "Client-Centered Approach",
      description:
        "We are committed to our clients' success. By partnering closely, we tailor solutions to meet their unique goals and create lasting value.",
      icon: HeartHandshake,
      color: "bg-red-500",
    },
    {
      title: "Resourceful Adaptability",
      description:
        "We tackle every problem with resourcefulness and flexibility, continuously adjusting to change and seeking innovative solutions.",
      icon: Puzzle,
      color: "bg-orange-500",
    },
  ];

  return (
    <section className="bg-background py-24 text-foreground">
      <div className="container mx-auto">
        <h2 className="mb-12 text-center text-3xl font-bold lg:text-5xl">
          Our Guiding Principles
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <Card
              key={index}
              className="relative flex flex-col items-start p-6 transition-shadow duration-300 hover:shadow-lg"
            >
              <div
                className={`absolute right-4 top-4 rounded-full p-1 ${value.color}`}
              >
                <value.icon className="size-5 text-white" />
              </div>
              <h3 className="mb-3 mt-4 text-xl font-semibold">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
