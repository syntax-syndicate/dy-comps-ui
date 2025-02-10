import { Users, Zap, Target, Globe, Shield, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function UpdatedStat2() {
  return (
    <section className="bg-gradient-to-b from-background to-primary/10 py-24 md:py-32">
      <div className="container">
        <h1 className="mb-8 text-center text-3xl font-semibold sm:text-4xl md:text-5xl lg:text-6xl">
          Empowering Your Digital Journey
        </h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:mt-16">
          {[
            {
              icon: Users,
              value: "1M+",
              description: "Active users leveraging our platform daily",
            },
            {
              icon: Zap,
              value: "99.9%",
              description: "Uptime ensuring seamless user experiences",
            },
            {
              icon: Target,
              value: "50x",
              description: "Faster performance than traditional solutions",
            },
            {
              icon: Globe,
              value: "190+",
              description: "Countries served with our global infrastructure",
            },
            {
              icon: Shield,
              value: "100%",
              description: "Data encryption for ultimate security",
            },
            {
              icon: Clock,
              value: "24/7",
              description: "Round-the-clock expert support availability",
            },
          ].map((stat, index) => (
            <Card
              key={index}
              className="border-none bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="flex flex-col items-center justify-center p-6">
                <stat.icon className="mb-4 size-12 text-primary" />
                <p className="flex items-center text-2xl font-semibold md:text-3xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
