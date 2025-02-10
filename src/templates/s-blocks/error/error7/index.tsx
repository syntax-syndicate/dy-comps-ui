import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-background to-secondary py-16">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cpolygon fill='%23f0b608' points='957 450 539 900 1396 900'/%3E%3Cpolygon fill='%23e6d710' points='957 450 872.9 900 1396 900'/%3E%3Cpolygon fill='%23e7af05' points='-60 900 398 662 816 900'/%3E%3Cpolygon fill='%23e7d808' points='337 900 398 662 816 900'/%3E%3Cpolygon fill='%23d8a408' points='1203 546 1552 900 876 900'/%3E%3Cpolygon fill='%23f1e213' points='1203 546 1552 900 1162 900'/%3E%3Cpolygon fill='%23f0b607' points='641 695 886 900 367 900'/%3E%3Cpolygon fill='%23e4d506' points='587 900 641 695 886 900'/%3E%3Cpolygon fill='%23eab822' points='1710 900 1401 632 1096 900'/%3E%3Cpolygon fill='%23e8da14' points='1710 900 1401 632 1365 900'/%3E%3Cpolygon fill='%23e8b008' points='1210 900 971 687 725 900'/%3E%3Cpolygon fill='%23edde14' points='943 900 1210 900 971 687'/%3E%3C/svg%3E")`,
        }}
      />
      <Card className="relative mx-auto w-full max-w-lg bg-background/80 backdrop-blur-sm">
        <CardContent className="p-6 text-center">
          <div className="relative mb-4">
            <h1 className="text-9xl font-bold tracking-tighter text-primary">
              <span
                className="inline-block"
                style={{ textShadow: "-6px 0 0 hsl(var(--primary))" }}
              >
                4
              </span>
              <span
                className="inline-block"
                style={{ textShadow: "-6px 0 0 hsl(var(--primary))" }}
              >
                0
              </span>
              <span
                className="inline-block"
                style={{ textShadow: "-6px 0 0 hsl(var(--primary))" }}
              >
                4
              </span>
            </h1>
            <span className="absolute left-0 top-0 -translate-x-1/4 text-xl font-semibold text-muted-foreground">
              Oops!
            </span>
          </div>
          <h2 className="mb-2 text-2xl font-semibold text-foreground">
            Page not found
          </h2>
          <p className="mb-6 text-muted-foreground">
            We are sorry, but the page you requested was not found
          </p>
          <Button asChild>
            <Link href="/">Go to Home</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
