import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

export default function Content5() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="container py-12 md:py-24">
        <div className="flex flex-col gap-4">
          <span className="font-medium text-primary">Deploy faster</span>
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            A better workflow
          </h1>
          <div className="grid gap-6 text-muted-foreground md:grid-cols-2">
            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p>
            <p>
              Erat pellentesque dictumst ligula porttitor risus eget et eget.
              Ultricies tellus felis id dignissim eget. Est augue maecenas risus
              nulla ultricies congue nunc tortor.
            </p>
          </div>
          <div className="mt-4">
            <Button size="lg" className="font-medium">
              Get started
            </Button>
          </div>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="flex-1 border-t bg-background">
        <div className="container flex gap-6 py-4">
          {/* Sidebar */}
          <div className="hidden w-64 flex-col gap-4 md:flex">
            <div className="flex h-12 items-center">
              <svg
                className="size-6 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 12h16M4 6h16M4 18h16" />
              </svg>
            </div>
            <nav className="space-y-2">
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent"
              >
                Projects
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg bg-accent px-3 py-2 font-medium text-primary"
              >
                Deployments
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent"
              >
                Activity
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent"
              >
                Domains
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent"
              >
                Usage
              </Link>
              <Link
                href="#"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-muted-foreground hover:bg-accent"
              >
                Settings
              </Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 space-y-4">
            <div className="flex items-center gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 size-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search projects..."
                  className="pl-8"
                />
              </div>
              <nav className="hidden items-center gap-4 md:flex">
                <Link href="#" className="text-sm font-medium">
                  Documentation
                </Link>
                <Link href="#" className="text-sm font-medium">
                  Community
                </Link>
                <Link href="#" className="text-sm font-medium">
                  Support
                </Link>
              </nav>
              <Button className="hidden md:inline-flex">New project</Button>
            </div>

            <div className="rounded-lg border">
              <div className="p-4">
                <h2 className="font-semibold">Deployments</h2>
              </div>
              <ScrollArea className="h-[400px]">
                <div className="space-y-4 p-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="secondary" className="rounded-full">
                            {i % 2 === 0 ? "Production" : "Preview"}
                          </Badge>
                          <span className="font-medium">
                            deployment-{i + 1}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Deployed {i + 1}m ago
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
