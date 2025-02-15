import { Rocket, Lightbulb, Users } from "lucide-react";
import Image from "next/image";

export default function About1() {
  return (
    <section className="container mx-auto bg-background py-24">
      <div className="flex flex-col gap-20">
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl font-bold lg:text-6xl">
            Revolutionizing the{" "}
            <span className="text-primary">Future of work</span>
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            We&apos;re on a mission to empower teams with cutting-edge AI tools,
            transforming how businesses operate and innovate. Experience the
            future of productivity, today.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col justify-between gap-8 rounded-lg bg-muted p-8">
            <Image
              src="/logo.svg"
              alt="Team collaboration"
              width={500}
              height={300}
              className="h-full w-full object-cover dark:invert"
            />
            <p className="text-sm font-semibold text-primary">OUR VISION</p>
            <p className="text-xl font-medium">
              We envision a world where AI-powered tools are accessible to
              everyone, enabling unprecedented levels of creativity, efficiency,
              and problem-solving across all industries.
            </p>
          </div>
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Team collaboration"
            width={500}
            height={300}
            className="h-full w-full rounded-lg object-cover"
          />
        </div>
        <div className="flex flex-col gap-12 md:gap-16">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Transforming ideas into reality
            </h2>
            <p className="text-muted-foreground">
              Our goal is to empower 10 million professionals with AI-enhanced
              capabilities by 2030. Here&apos;s how we&apos;re making it happen:
            </p>
          </div>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                icon: Rocket,
                title: "Pushing boundaries",
                description:
                  "We constantly challenge the status quo, exploring new frontiers in AI and machine learning to deliver groundbreaking solutions.",
              },
              {
                icon: Lightbulb,
                title: "Fostering innovation",
                description:
                  "Our culture thrives on creativity and out-of-the-box thinking. We encourage bold ideas and turn them into reality.",
              },
              {
                icon: Users,
                title: "Empowering collaboration",
                description:
                  "We believe in the power of diverse teams working together. Our tools are designed to enhance human potential, not replace it.",
              },
            ].map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="mb-6 flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
                  <item.icon className="size-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-6 text-sm font-semibold text-primary">
              BE PART OF THE REVOLUTION
            </p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Join us in shaping the future of AI
            </h2>
            <p className="text-muted-foreground">
              We&apos;re always on the lookout for passionate individuals who
              want to make a real impact. If you&apos;re excited about pushing
              the boundaries of what&apos;s possible with AI, we want to hear
              from you.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Team working together"
              width={500}
              height={300}
              className="aspect-video w-full rounded-lg object-cover shadow-lg"
            />
            <div className="absolute bottom-4 left-4 rounded-lg bg-background p-4 shadow">
              <p className="font-semibold">Join our growing team</p>
              <p className="text-sm text-muted-foreground">
                20+ open positions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
