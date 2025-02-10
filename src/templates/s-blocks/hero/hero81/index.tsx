import { Button } from "@/components/ui/button";
import { Chrome } from "lucide-react";
import Image from "next/image";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function Hero81() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      {/* Stars background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_var(--background)_100%)]" />

      {/* Hero Section */}
      <main className="container relative z-10 mx-auto pb-40 pt-20 text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground md:text-6xl">
          Where developers
          <br />
          <span className="text-primary">suffer together</span>
        </h1>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground md:text-xl">
          We know how hard it is to be a developer. It doesn&apos;t have to be.
          Personalized news feed, dev communities and search, much better than
          what&apos;s out there.
        </p>
        <Button size="lg" className="h-12 gap-2 px-6 text-lg">
          <Chrome className="size-5" />
          Start reading - Free forever
        </Button>

        {/* App Preview */}
        <div className="relative mx-auto mt-20 max-w-5xl">
          <div className="absolute -inset-1.5 rounded-2xl bg-primary opacity-30 blur" />
          <div className="relative aspect-video">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="daily.dev app interface"
              fill
              className="rounded-lg object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="icon"
                    variant="secondary"
                    className="size-20 rounded-full shadow-2xl transition-transform hover:scale-105"
                  >
                    <svg
                      className="size-10"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[90vw]">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/chXk-wzWmfk?si=YEmSXPI9ACWE7ZRn"
                      title="Video preview"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
