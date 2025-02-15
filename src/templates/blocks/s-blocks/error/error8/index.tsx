import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center py-16">
      <div className="space-y-6 px-4 text-center">
        <h1 className="text-8xl font-bold">404</h1>
        <h2 className="text-3xl font-bold md:text-4xl">
          Oops!{" "}
          <span className="text-primary">Looks like you&apos;re lost</span>
        </h2>
        <p className="mx-auto max-w-[600px]">
          Sorry! We could not find the page you are looking for. Please check
          URL in address bar and try again.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button
            asChild
            variant="secondary"
            size="lg"
            className="font-semibold"
          >
            <Link href="/">Take me Back</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-primary-foreground/20 bg-transparent font-semibold hover:bg-primary-foreground/10"
          >
            Try again
          </Button>
        </div>
      </div>
    </div>
  );
}
