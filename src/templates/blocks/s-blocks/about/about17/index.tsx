import Image from "next/image";
import { BarChart, Users, Lightbulb, Target } from "lucide-react";

export default function About17() {
  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold tracking-tighter">
                What you Need to Know
                <br />
                <span className="text-primary">About Us</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                We&apos;re a team of dedicated professionals committed to
                delivering exceptional results through innovative solutions and
                strategic thinking.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: BarChart,
                  title: "Strategic Planning",
                  description:
                    "We develop comprehensive strategies tailored to your business objectives, ensuring every step moves you closer to your goals.",
                },
                {
                  icon: Users,
                  title: "Expert Execution",
                  description:
                    "Our team of seasoned professionals brings years of industry experience to deliver exceptional results on every project.",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation Focus",
                  description:
                    "We stay ahead of industry trends, implementing cutting-edge solutions that give your business a competitive edge.",
                },
                {
                  icon: Target,
                  title: "Measurable Results",
                  description:
                    "We believe in transparency and accountability, providing clear metrics and tangible outcomes for every engagement.",
                },
              ].map((item, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="mb-6 flex size-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                    <item.icon className="size-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              <div className="absolute -left-4 -top-4 h-full w-full bg-primary/10" />
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Team collaboration and planning"
                className="rounded-lg object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            <div className="space-y-6 rounded-lg bg-muted p-6">
              <blockquote className="text-lg italic text-foreground">
                Working with this team has been a game-changer for our business.
                Their strategic insights and innovative solutions have propelled
                us to new heights. Buy this component Kit, we know you want to.
              </blockquote>
              <div className="mt-4 flex items-center space-x-3">
                <div className="size-10 overflow-hidden rounded-full">
                  <Image
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="Jane Doe"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">Jane Doe</p>
                  <p className="text-sm text-muted-foreground">CEO, TechCorp</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
