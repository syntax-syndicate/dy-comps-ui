import Image from "next/image";
import { Cpu, BarChart, Users, Code, Briefcase, Newspaper } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function TechAbout() {
  const stats = [
    {
      icon: Cpu,
      title: "Founded",
      description:
        "Established in 2010, we&apos;ve been at the forefront of technological innovation for over a decade, consistently pushing the boundaries of what&apos;s possible in software development and AI.",
    },
    {
      icon: BarChart,
      title: "1B+ API Requests Monthly",
      description:
        "Our robust infrastructure handles over a billion API requests each month, powering applications and services for businesses worldwide with unparalleled reliability and speed.",
    },
    {
      icon: Users,
      title: "10M+ Active Users",
      description:
        "Our suite of products and services are trusted by over 10 million active users globally, from individual developers to Fortune 500 companies, all leveraging our cutting-edge technology.",
    },
  ];

  const teamSections = [
    {
      icon: Code,
      title: "Engineering Team",
      description:
        "Our world-class engineering team comprises experts in AI, machine learning, cloud computing, and cybersecurity, working tirelessly to develop groundbreaking solutions.",
    },
    {
      icon: Briefcase,
      title: "Leadership",
      description:
        "Led by industry veterans with decades of experience in tech giants and successful startups, our leadership team drives our vision of revolutionizing the digital landscape.",
    },
    {
      icon: Newspaper,
      title: "Press & Media",
      description:
        "Featured in leading tech publications and mainstream media, our innovations and thought leadership continue to shape discussions around the future of technology.",
    },
  ];

  return (
    <div className="container py-16">
      <div className="mb-16">
        <div className="mt-8 grid gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">
              Empowering innovation through <br />
              <span className="text-primary">cutting-edge technology</span>
            </h1>
            <p className="text-muted-foreground">
              At TechInnovate, we&apos;re not just developing software;
              we&apos;re shaping the future. Our mission is to democratize
              advanced technology, making AI, machine learning, and cloud
              computing accessible to businesses of all sizes. We believe that
              by putting powerful tools in the hands of innovators, we can drive
              unprecedented growth and solve some of the world&apos;s most
              pressing challenges.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="TechInnovate team working on advanced AI models"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>

      <Separator />

      <div className="grid gap-12 py-16 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-4">
            <div className="inline-flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
              <stat.icon className="size-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{stat.title}</h3>
            <p className="text-muted-foreground">{stat.description}</p>
          </div>
        ))}
      </div>

      <Separator />

      <div className="mt-24 grid gap-16 lg:grid-cols-2">
        <div className="space-y-8 rounded-lg bg-accent p-4">
          <Image
            src="/icons/abstract.png"
            height={400}
            width={400}
            className="w-28 dark:invert"
            alt="logo"
          />
          <h2 className="text-3xl font-bold tracking-tighter">Our Vision</h2>
          <div className="space-y-4 rounded-lg bg-background p-4 text-muted-foreground">
            <p>
              We envision a world where advanced technology is seamlessly
              integrated into every aspect of business and daily life. Our goal
              is to be at the forefront of this transformation, developing
              AI-driven solutions that enhance productivity, drive innovation,
              and create new possibilities across industries. By combining
              cutting-edge research with practical applications, we&apos;re
              working to build a future where technology empowers human
              potential and drives sustainable progress.
            </p>
          </div>
        </div>
        <div className="my-auto space-y-8">
          {teamSections.map((section, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                <section.icon className="size-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{section.title}</h3>
                <p className="text-muted-foreground">{section.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
