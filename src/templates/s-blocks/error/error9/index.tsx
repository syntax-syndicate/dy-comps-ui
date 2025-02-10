import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background py-16">
      {/* Decorative shapes */}
      <div className="absolute inset-0 h-full w-full">
        <div className="absolute left-20 top-20 size-8 rotate-45 border border-muted" />
        <div className="absolute right-40 top-40 size-16 rotate-45 border border-muted" />
        <div className="absolute bottom-32 left-1/4 size-12 -rotate-12 transform border border-muted" />
        <div className="absolute right-1/3 top-1/4 size-10 rotate-12 transform border border-muted" />
        <div className="absolute bottom-20 right-20 size-12 rotate-45 transform border border-muted" />
        <div className="absolute left-1/3 top-1/3 size-20 -rotate-12 transform border border-muted" />
      </div>

      <div className="relative z-10 space-y-6 px-4 text-center">
        <h1 className="text-8xl font-bold text-foreground">404</h1>
        <h2 className="text-xl text-muted-foreground">
          Whoops.. Page Not Found !!!
        </h2>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button variant="outline" size="lg" className="font-medium" asChild>
            <Link href="/contact">Contact us</Link>
          </Button>
          <Button
            size="lg"
            className="bg-secondary font-medium text-secondary-foreground hover:bg-secondary/90"
            asChild
          >
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
