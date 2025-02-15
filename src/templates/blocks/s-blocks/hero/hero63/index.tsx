import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Play } from "lucide-react";

export default function Hero63() {
  return (
    <div className="w-full bg-background">
      <div className="container py-12 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter text-foreground sm:text-5xl xl:text-6xl/none">
                Discover new product and best possibilities
              </h1>
              <p className="text-lg/relaxed text-muted-foreground">
                Here at DY-Comps Products we focus on markets where technology,
                innovation, and capital can unlock long-term value and drive
                economic growth.
              </p>
            </div>

            <Button variant="outline" size={"lg"} className="w-fit gap-2">
              <Play className="size-4" />
              Watch video
            </Button>

            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <div className="text-3xl font-bold">42k</div>
                <div className="text-sm text-muted-foreground">
                  Active Users
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold">3k</div>
                <div className="text-sm text-muted-foreground">
                  Professional Creators
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold">560k</div>
                <div className="text-sm text-muted-foreground">
                  Weekly Downloads
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Sign Up Form */}
          <div className="mx-auto w-full max-w-md">
            <div className="rounded-lg bg-card p-8">
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold">
                  Join over <span className="text-primary">3,000 creators</span>
                </h2>

                <div className="grid gap-2">
                  <Button variant="outline" className="w-full bg-background">
                    Google
                  </Button>
                  <Button variant="outline" className="w-full bg-background">
                    Dribbble
                  </Button>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">
                      or
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Your email
                    </label>
                    <Input
                      id="email"
                      placeholder="example@gmail.com"
                      type="email"
                      autoCapitalize="none"
                      autoComplete="email"
                      autoCorrect="off"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="password"
                    >
                      Your password
                    </label>
                    <Input
                      id="password"
                      type="password"
                      autoCapitalize="none"
                      autoComplete="current-password"
                      autoCorrect="off"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <label
                      htmlFor="remember"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Remember me
                    </label>
                  </div>
                  <Button
                    variant="link"
                    className="px-0 font-normal text-primary"
                  >
                    Lost Password?
                  </Button>
                </div>

                <Button className="w-full">Create an account</Button>

                <div className="text-center text-sm text-muted-foreground">
                  Not registered?{" "}
                  <Button
                    variant="link"
                    className="px-0 font-normal text-primary"
                  >
                    Create account
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
