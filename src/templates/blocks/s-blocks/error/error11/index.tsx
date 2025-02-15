import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background py-16">
      <div className="max-w-[600px] space-y-6 px-4 text-center">
        <h1 className="text-8xl font-bold text-foreground">404</h1>
        <div className="space-y-2">
          <p className="text-lg text-muted-foreground">
            Sorry. The content you&apos;re looking for doesn&apos;t exist.
          </p>
          <p className="text-lg text-muted-foreground">
            Either it was removed, or you mistyped the link.
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button variant="outline" size="lg" className="font-medium" asChild>
            <Link href="/contact">Contact us</Link>
          </Button>
          <Button
            size="lg"
            className="bg-secondary font-medium text-secondary-foreground hover:bg-secondary/90"
            asChild
          >
            <Link href="/">Go to Homepage</Link>
          </Button>
        </div>
        <div className="relative mx-auto max-w-sm pt-4">
          <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 transform text-muted-foreground" />
          <Input type="search" placeholder="Search here" className="pl-10" />
        </div>
      </div>
    </div>
  );
}
