import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { CloudUpload, Lock, Database } from "lucide-react";

export default function Content2() {
  return (
    <div className="container relative min-h-screen py-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_400px] lg:gap-8">
          <div className="space-y-16">
            <div className="space-y-6">
              <p className="text-sm font-semibold text-primary">
                Deploy faster
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                A better workflow
              </h1>
              <p className="text-lg text-muted-foreground">
                Transform your team&apos;s productivity with our intuitive
                platform. Seamlessly integrate tasks, communication, and project
                tracking in one powerful solution.
              </p>
            </div>

            <div className="text-muted-foreground">
              <p>
                Our platform is designed to eliminate the chaos of project
                management. By centralizing your workflow, we help teams
                collaborate more effectively, meet deadlines consistently, and
                achieve goals with unprecedented efficiency.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex gap-4">
                <CloudUpload className="mt-1 size-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">
                    Push to deploy.
                  </h3>
                  <p className="text-muted-foreground">
                    Changes sync across all devices in real-time, ensuring your
                    team always has the latest information at their fingertips.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Lock className="mt-1 size-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">
                    SSL certificates.
                  </h3>
                  <p className="text-muted-foreground">
                    Your data is protected with enterprise-grade encryption and
                    customizable access controls, giving you peace of mind.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Database className="mt-1 size-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="font-semibold text-foreground">
                    Database backups.
                  </h3>
                  <p className="text-muted-foreground">
                    Our analytics engine provides actionable data on team
                    performance, helping you optimize workflows and boost
                    productivity.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6 text-muted-foreground">
              <p>
                Experience the power of streamlined collaboration. Our intuitive
                interface reduces the learning curve, allowing your team to
                adapt quickly and focus on what truly matters – delivering
                exceptional results.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold tracking-tight text-foreground">
                No server? No problem.
              </h2>
              <p className="text-muted-foreground">
                Whether you&apos;re a startup or an enterprise, our scalable
                solution grows with you. Customize workflows, integrate with
                your favorite tools, and automate repetitive tasks. With our
                platform, you&apos;re not just managing projects – you&apos;re
                propelling your business forward.
              </p>
            </div>
          </div>

          <div className="lg:sticky lg:top-8 lg:h-fit">
            <Card className="overflow-hidden">
              <CardContent className="p-6">
                <blockquote className="space-y-4">
                  <p className="text-lg text-foreground">
                    Vel ultricies morbi odio facilisi ultrices accumsan donec
                    lacus purus. Lectus nibh ullamcorper ac dictum justo in
                    euismod. Risus aenean ut elit massa. In amet aliquet eget
                    cras. Sem volutpat enim tristique.
                  </p>
                  <footer className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                        alt="Brenna Goyette"
                      />
                      <AvatarFallback>BG</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-foreground">
                        Brenna Goyette
                      </div>
                      <div className="text-sm text-muted-foreground">
                        @brenna
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
