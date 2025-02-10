import Image from "next/image";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function TechAbout() {
  return (
    <div className="container flex flex-col py-16">
      <section className="relative h-[60vh] min-h-[400px] w-full">
        <Image
          src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
          alt="Innovative tech team collaboration"
          fill
          className="rounded-lg object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Pioneering the <span className="text-primary">Future of Tech</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-white/90">
            At TechInnovate, we&apos;re not just creating software; we&apos;re
            shaping the digital landscape. Our cutting-edge solutions in AI,
            blockchain, and cloud computing are revolutionizing industries and
            empowering businesses worldwide. With a team of brilliant minds and
            a passion for innovation, we&apos;re committed to solving the most
            complex technological challenges of our time.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Tech Journey</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Founded in 2010, TechInnovate began as a small startup with a
                big vision: to harness the power of emerging technologies and
                make them accessible to businesses of all sizes. Our initial
                focus on mobile app development quickly expanded as we
                recognized the transformative potential of AI and machine
                learning. Through relentless innovation and strategic
                partnerships, we&apos;ve grown into a global tech powerhouse,
                leading the charge in digital transformation across multiple
                sectors.
              </p>
              <p>
                Today, our diverse portfolio includes groundbreaking projects in
                quantum computing, advanced robotics, and sustainable tech
                solutions. We&apos;re not just keeping pace with the rapid
                evolution of technology; we&apos;re driving it forward. Our team
                of world-class engineers, data scientists, and researchers are
                constantly pushing the boundaries of what&apos;s possible,
                turning visionary ideas into tangible realities that shape the
                way we live and work in the digital age.
              </p>
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="link"
                  className="group flex items-center gap-2 p-0 text-primary hover:no-underline"
                >
                  Watch our tech showcase
                  <Play className="size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>TechInnovate Showcase</DialogTitle>
                  <DialogDescription>
                    Explore our latest technological breakthroughs and
                    innovations.
                  </DialogDescription>
                </DialogHeader>
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/your-video-id"
                    title="TechInnovate Showcase"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg lg:aspect-square">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="TechInnovate team working on cutting-edge projects"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-1/2 top-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-white/10 p-0 hover:bg-white/20"
                >
                  <Play className="size-8 text-white" />
                  <span className="sr-only">Play tech demo</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                  <DialogTitle>TechInnovate Demo Reel</DialogTitle>
                  <DialogDescription>
                    Witness the future of technology through our latest
                    innovations and projects.
                  </DialogDescription>
                </DialogHeader>
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/your-video-id"
                    title="TechInnovate Demo Reel"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </div>
  );
}
