import Image from "next/image";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function TechAbout() {
  return (
    <div className="container relative mx-auto py-8 md:py-16">
      <div className="space-y-8 md:space-y-16">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-0">
          <div className="space-y-4 text-center md:space-y-8 md:text-left">
            <h1 className="max-w-3xl text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              We are here to make <br className="hidden md:inline" />
              <span className="text-primary">innovative tech accessible</span>
            </h1>
            <p className="max-w-2xl text-base text-muted-foreground md:text-lg">
              In the rapidly evolving world of technology, we strive to bridge
              the gap between complex innovations and user-friendly solutions.
              Our mission is to demystify cutting-edge tech and make it
              accessible to businesses and individuals alike, driving digital
              transformation across industries.
            </p>
          </div>

          <div className="flex w-full justify-center rounded-lg bg-accent p-4 md:w-96 md:p-6">
            <Image
              src="/icons/abstract.png"
              alt="Company Logo"
              width={240}
              height={240}
              className="h-auto w-48 dark:invert md:w-60"
            />
          </div>
        </div>

        <div className="relative aspect-[2/1] w-full overflow-hidden rounded-lg">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Tech team collaborating in a modern office"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:items-start">
          <div className="space-y-4 md:space-y-6">
            <h2 className="text-2xl font-bold md:text-3xl">Our Tech Journey</h2>
            <div className="space-y-4 text-sm text-muted-foreground md:text-base">
              <p>
                Founded in the heart of Silicon Valley, our journey began with a
                vision to revolutionize how businesses interact with technology.
                We&apos;ve grown from a small startup to a leading tech
                innovator, consistently pushing the boundaries of what&apos;s
                possible in AI, cloud computing, and IoT.
              </p>
              <p>
                Our team of expert developers, data scientists, and UX designers
                work tirelessly to create solutions that not only meet the
                current needs of our clients but anticipate future technological
                trends. From developing scalable cloud architectures to
                implementing state-of-the-art machine learning models,
                we&apos;re committed to staying at the forefront of the tech
                industry.
              </p>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <div className="absolute bottom-4 left-4 z-10 rounded-lg bg-background p-2 shadow md:bottom-4 md:left-4 md:p-4">
              <p className="text-sm font-semibold md:text-base">
                Join our growing team
              </p>
              <p className="text-xs text-muted-foreground md:text-sm">
                20+ open positions
              </p>
            </div>

            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Innovative tech product showcase"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="absolute left-1/2 top-1/2 size-12 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-white/10 p-0 hover:bg-white/20 md:h-16 md:w-16"
                >
                  <Play className="size-6 text-white md:h-8 md:w-8" />
                  <span className="sr-only">Play video</span>
                </Button>
              </DialogTrigger>
              <DialogContent className="w-11/12 sm:max-w-[800px]">
                <DialogHeader>
                  <DialogTitle>Our Innovation Process</DialogTitle>
                </DialogHeader>
                <div className="aspect-video w-full overflow-hidden rounded-lg">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/your-tech-video-id"
                    title="Tech Innovation Process Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-0"
                  />
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}
