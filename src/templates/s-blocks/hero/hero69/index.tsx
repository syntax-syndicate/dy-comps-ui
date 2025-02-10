import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero69() {
  return (
    <div className="w-full bg-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Main Featured Article */}
          <div className="md:col-span-2">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="GitLab interface"
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
              <div className="space-y-4">
                <Badge
                  variant="secondary"
                  className="bg-primary/10 text-primary hover:bg-primary/20"
                >
                  Programming
                </Badge>
                <h1 className="text-2xl font-bold tracking-tight lg:text-3xl">
                  Releasing code in large corporations is slow - and there is a
                  good reason for it
                </h1>
                <div className="flex items-center gap-2">
                  <Avatar className="size-10">
                    <AvatarImage
                      src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                      alt="Michael Gough"
                    />
                  </Avatar>
                  <div>
                    <div className="font-semibold">Michael Gough</div>
                    <div className="text-sm text-muted-foreground">
                      Posted on Jan 31
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  One of the things I always loved about the web is its
                  immediacy. You write a piece of code, publish it somewhere and
                  people can access it.
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center text-primary hover:text-primary/90"
                >
                  Read more
                  <ArrowRight className="ml-1 size-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Sidebar Articles */}
          <div className="space-y-8">
            <article className="space-y-4">
              <Badge className="bg-[#6366f1] text-white hover:bg-[#6366f1]/90">
                Tutorial
              </Badge>
              <h2 className="text-xl font-bold">
                How to rank higher on Google (6 easy steps)
              </h2>
              <p className="text-muted-foreground">
                Static websites are now used to bootstrap lots of websites and
                are becoming the basis for a variety of tools that even
                influence both web designers and developers.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-primary hover:text-primary/90"
              >
                Read more
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </article>

            <article className="space-y-4">
              <Badge className="bg-[#ec4899] text-white hover:bg-[#ec4899]/90">
                Interview
              </Badge>
              <h2 className="text-xl font-bold">
                How to schedule your tweets to send later
              </h2>
              <p className="text-muted-foreground">
                Static websites are now used to bootstrap lots of websites and
                are becoming the basis for a variety of tools that even.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-primary hover:text-primary/90"
              >
                Read more
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </article>

            <article className="space-y-4">
              <Badge className="bg-[#10b981] text-white hover:bg-[#10b981]/90">
                Marketing
              </Badge>
              <h2 className="text-xl font-bold">
                12 SEO best practices that everyone should follow
              </h2>
              <p className="text-muted-foreground">
                Static websites are now used to bootstrap lots of websites and
                are becoming the basis.
              </p>
              <Link
                href="#"
                className="inline-flex items-center text-primary hover:text-primary/90"
              >
                Read more
                <ArrowRight className="ml-1 size-4" />
              </Link>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
