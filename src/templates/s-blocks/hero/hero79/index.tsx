import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import Image from "next/image";

export default function Hero79() {
  return (
    <div className="relative overflow-hidden bg-background py-32">
      {/* Rotated triangle decoration */}
      <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden">
        <div className="absolute right-0 top-0 h-[141%] w-[141%] origin-top-right -rotate-45 transform bg-primary/10" />
      </div>

      <div className="container relative">
        <div className="mx-auto space-y-12 px-4 py-12">
          {/* Logo */}

          <div className="flex items-center justify-between">
            {/* Main Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="font-semibold text-primary">HackLetter</div>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  The Best of <span className="text-primary">HackerNews</span>
                  <br />
                  right in your Inbox.
                </h1>
                <p className="max-w-md text-lg text-muted-foreground">
                  Enter your email and get the Top 5 stories on HackerNews,
                  summarized with AI and sent right to your Inbox
                </p>
              </div>

              {/* Subscription Form */}
              <form className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1"
                    required
                  />
                  <Button
                    type="submit"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Subscribe
                  </Button>
                </div>

                {/* Product Hunt Badge */}
                <div className="flex pt-4">
                  <a
                    href="https://www.producthunt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <div className="flex items-center gap-2 rounded-md border bg-background px-3 py-1.5 text-sm transition-colors hover:bg-muted">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 40 40"
                        className="fill-current text-[#DA552F]"
                      >
                        <path d="M23.93 11.26h-7.06v17.5h-4.76v-17.5h-7.11v-4.14h18.93v4.14zm11.36 4.42c2.39 0 4.34 1.96 4.34 4.36 0 2.4-1.95 4.36-4.34 4.36-2.4 0-4.35-1.96-4.35-4.36 0-2.4 1.95-4.36 4.35-4.36z" />
                      </svg>
                      <span className="font-medium">View on Product Hunt</span>
                    </div>
                  </a>
                </div>
              </form>
            </div>

            <div>
              <Image
                src="/icons/cube-3d.png"
                alt="3D Cube"
                width={200}
                height={200}
                className=""
              />
            </div>
          </div>

          {/* Archives Link */}
          <div className="absolute bottom-4 right-4">
            <Link
              href="/archives"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Archives
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
