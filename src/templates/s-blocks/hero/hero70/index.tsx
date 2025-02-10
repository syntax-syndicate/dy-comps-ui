import { Star } from "lucide-react";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default function Hero70() {
  return (
    <div className="w-full bg-background">
      <div className="container flex flex-col items-center px-4 py-12 text-center md:py-24">
        {/* Hero Content */}
        <div className="mx-auto max-w-3xl space-y-4">
          <h1 className="relative text-4xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl">
            <span className="relative">
              Designing Interfaces:
              <span className="absolute inset-0 bg-gradient-to-r from-primary/40 to-primary/40 p-6 blur-sm" />
            </span>
            <br />A User-Centered Approach
          </h1>
          <p className="text-lg/relaxed text-muted-foreground">
            This book covers the latest design principles and techniques,
            including responsive design, mobile interface design, and user
            research methodologies.
          </p>
        </div>

        {/* Download Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-background transition-colors hover:bg-foreground/90"
          >
            <svg viewBox="0 0 384 512" className="size-6 fill-current">
              <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <div className="text-left">
              <div className="text-xs">Download on the</div>
              <div className="text-sm font-semibold">App Store</div>
            </div>
          </a>
          <a
            href="#"
            className="flex items-center gap-2 rounded-lg bg-foreground px-6 py-3 text-background transition-colors hover:bg-foreground/90"
          >
            <svg viewBox="0 0 512 512" className="size-6 fill-current">
              <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z" />
            </svg>
            <div className="text-left">
              <div className="text-xs">Get it on</div>
              <div className="text-sm font-semibold">Google Play</div>
            </div>
          </a>
        </div>

        {/* Phone Mockup */}

        {/* Reviews Section */}
        <div className="mt-16 flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4].map((i) => (
              <Avatar key={i} className="border-2 border-background">
                <AvatarImage
                  src={`https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg`}
                />
              </Avatar>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="size-5 fill-primary text-primary" />
              ))}
            </div>
            <span className="text-lg font-semibold">5.0</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Rated Best Over{" "}
            <span className="font-medium text-foreground">15.7k</span> Reviews
          </div>
        </div>
      </div>
    </div>
  );
}
