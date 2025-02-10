import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Users } from "lucide-react";
import Image from "next/image";

export default function FeatureHighlight() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/10 py-16">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden lg:col-span-2">
            <CardContent className="p-6">
              <Badge variant="outline" className="mb-4">
                Featured
              </Badge>
              <Users className="mb-4 size-8 text-primary" />
              <div className="text-left">
                <h2 className="mb-2 text-2xl font-bold">
                  Collaborative Workspaces
                </h2>
                <p className="text-muted-foreground">
                  Create dynamic environments where teams can brainstorm, plan,
                  and execute projects seamlessly. Our collaborative workspaces
                  foster creativity and boost productivity across your
                  organization.
                </p>
              </div>
              <div className="relative mt-8">
                <Image
                  className="w-full rounded-lg object-cover shadow-lg"
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Collaborative workspace interface"
                  width={800}
                  height={600}
                />
                <div className="absolute right-4 top-4 rounded-full bg-background/80 p-2 backdrop-blur-sm">
                  <Users className="size-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col gap-6">
            <div className="rounded-lg bg-accent p-6 text-left">
              <Zap className="mb-4 size-8 text-primary" />
              <h2 className="mb-2 text-xl font-semibold">
                Instant Sync & Real-time Updates
              </h2>
              <p className="text-muted-foreground">
                This platform has revolutionized how our team collaborates.
                It&apos;s intuitive, powerful, and has significantly boosted our
                productivity.
              </p>
            </div>
            <Card className="flex flex-col justify-between">
              <CardContent className="p-6">
                <div className="relative mb-8">
                  <Image
                    className="w-full rounded-lg object-cover shadow-md"
                    src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    alt="Real-time sync visualization"
                    width={300}
                    height={200}
                  />
                  {/* <div className="absolute bottom-2 right-2 flex-shrink-0 rounded-full bg-primary px-2 py-1 text-xs font-medium text-primary-foreground">
                    Live
                  </div> */}
                </div>

                <div className="relative rounded-lg bg-background p-6">
                  <div className="flex flex-col items-center gap-6 py-4">
                    <div className="relative max-w-2xl text-center">
                      <q className="text-2xl font-medium italic">
                        This platform has revolutionized how our team
                        collaborates. It&apos;s intuitive, powerful, and has
                        significantly boosted our productivity.
                      </q>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="size-12 border-2 border-primary">
                        <AvatarImage
                          src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                          alt="Sarah Johnson"
                        />
                        <AvatarFallback>SJ</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <p className="font-bold">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">
                          CTO, InnovateTech Solutions
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
