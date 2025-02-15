import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 1600 900%22%3E%3Cpolygon fill=%22%23f0b608%22 points=%22957 450 539 900 1396 900%22/%3E%3Cpolygon fill=%22%23e6d710%22 points=%22957 450 872.9 900 1396 900%22/%3E%3Cpolygon fill=%22%23e7af05%22 points=%22-60 900 398 662 816 900%22/%3E%3Cpolygon fill=%22%23e7d808%22 points=%22337 900 398 662 816 900%22/%3E%3Cpolygon fill=%22%23d8a408%22 points=%221203 546 1552 900 876 900%22/%3E%3Cpolygon fill=%22%23f1e213%22 points=%221203 546 1552 900 1162 900%22/%3E%3Cpolygon fill=%22%23f0b607%22 points=%22641 695 886 900 367 900%22/%3E%3Cpolygon fill=%22%23e4d506%22 points=%22587 900 641 695 886 900%22/%3E%3Cpolygon fill=%22%23eab822%22 points=%221710 900 1401 632 1096 900%22/%3E%3Cpolygon fill=%22%23e8da14%22 points=%221710 900 1401 632 1365 900%22/%3E%3Cpolygon fill=%22%23e8b008%22 points=%221210 900 971 687 725 900%22/%3E%3Cpolygon fill=%22%23edde14%22 points=%22943 900 1210 900 971 687%22/%3E%3C/svg%3E')] flex min-h-screen items-center justify-center bg-background bg-cover bg-fixed bg-bottom py-16">
      <div className="text-center">
        <div className="relative">
          <h1 className="relative text-9xl font-bold tracking-tighter">
            <span>4</span>
            <span>0</span>
            <span>4</span>
          </h1>
          <span className="absolute -top-10 -ml-12 text-5xl font-semibold text-muted-foreground">
            Oops!
          </span>
        </div>
        <h2 className="mt-3 text-2xl font-semibold text-secondary-foreground">
          Page not found
        </h2>
        <p className="mb-8 mt-4 text-muted-foreground">
          We are sorry, but the page you requested was not found
        </p>
        <Button asChild size={"lg"}>
          <Link href="/">Go to Home</Link>
        </Button>
      </div>
    </div>
  );
}
