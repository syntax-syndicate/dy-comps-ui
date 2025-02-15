import Image from "next/image";
import { Badge } from "@/components/ui/badge";

export default function TeamFeature() {
  return (
    <section className="relative overflow-hidden bg-background py-32">
      <div className="absolute left-0 top-0 h-full w-full bg-gradient-to-r from-background via-background/50 to-transparent"></div>
      <div className="container relative z-10 p-6 md:p-16">
        <div className="grid items-center gap-12 lg:grid-cols-3">
          <div className="flex flex-col gap-6">
            <div>
              <Badge variant="outline" className="mb-4">
                Engineered for Excellence
              </Badge>
              <h2 className="mb-4 text-3xl font-medium text-foreground md:text-5xl">
                Empower Your Team.
                <br />
                <span className="text-primary">
                  Achieve Seamless Collaboration.
                </span>
              </h2>
              <p className="text-muted-foreground">
                DY-Comps provides a unified platform for teams to track progress,
                share feedback, and streamline approvals. Minimize meetings and
                maximize productivity, allowing you to focus on strategic
                initiatives.
              </p>
            </div>
          </div>
          <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-lg bg-muted lg:col-span-2">
            <div className="absolute inset-0 z-10 bg-gradient-to-l from-background/50 to-transparent"></div>
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Team Collaboration with DY-Comps"
              width={800}
              height={450}
              className="relative z-0 aspect-video w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
