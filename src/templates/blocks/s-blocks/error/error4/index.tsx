import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Library, BookOpen, Newspaper } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background py-16">
      <div className="w-full max-w-3xl space-y-8">
        {/* Title Section */}
        <div className="space-y-2 text-center">
          <h1 className="text-4xl font-bold md:text-6xl">404 Not Found</h1>
          <p className="text-xl text-muted-foreground">
            Whoops! That page doesn&apos;t exist.
          </p>
        </div>

        {/* Search Section */}
        <div className="mx-auto flex max-w-2xl gap-2">
          <Input
            type="search"
            placeholder="e.g. DY-Comps, components"
            className="border-muted bg-muted/50"
          />
          <Button
            type="submit"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Submit
          </Button>
        </div>

        {/* Navigation Cards */}
        <div className="grid grid-cols-2 gap-4 pt-8 sm:grid-cols-4">
          <Link href="/">
            <Card className="flex aspect-square w-full cursor-pointer flex-col items-center justify-center gap-2 border-muted bg-muted/10 p-6 transition-colors hover:bg-muted/20">
              <Home className="size-8 text-blue-500 md:h-12 md:w-12" />
              <span className="text-sm text-muted-foreground md:text-base">
                Homepage
              </span>
            </Card>
          </Link>

          <Link href="/library">
            <Card className="flex aspect-square w-full cursor-pointer flex-col items-center justify-center gap-2 border-muted bg-muted/10 p-6 transition-colors hover:bg-muted/20">
              <Library className="size-8 text-teal-500 md:h-12 md:w-12" />
              <span className="text-sm text-muted-foreground md:text-base">
                Library
              </span>
            </Card>
          </Link>

          <Link href="/knowledge">
            <Card className="flex aspect-square w-full cursor-pointer flex-col items-center justify-center gap-2 border-muted bg-muted/10 p-6 transition-colors hover:bg-muted/20">
              <BookOpen className="size-8 text-purple-500 md:h-12 md:w-12" />
              <span className="text-sm text-muted-foreground md:text-base">
                Knowledge Center
              </span>
            </Card>
          </Link>

          <Link href="/blog">
            <Card className="flex aspect-square w-full cursor-pointer flex-col items-center justify-center gap-2 border-muted bg-muted/10 p-6 transition-colors hover:bg-muted/20">
              <Newspaper className="size-8 text-emerald-500 md:h-12 md:w-12" />
              <span className="text-sm text-muted-foreground md:text-base">
                Blog
              </span>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
}
