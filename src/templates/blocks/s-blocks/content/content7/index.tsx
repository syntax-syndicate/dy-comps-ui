import { Card } from "@/components/ui/card";
import { Lock, Rocket } from "lucide-react";
import Image from "next/image";

export default function Content7() {
  return (
    <div className="container grid items-center gap-12 py-8 md:py-12 lg:grid-cols-2 lg:py-24">
      {/* Left column with image */}
      <div className="relative mb-auto h-[600px] overflow-hidden rounded-lg bg-muted">
        <Image
          src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
          alt="Team collaborating in modern office space"
          className="h-full w-full object-cover"
          height={600}
          width={600}
        />
      </div>

      {/* Right column with content */}
      <div className="flex flex-col gap-6">
        <div>
          <p className="mb-2 text-sm font-medium text-primary">Deploy faster</p>
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            A better workflow
          </h1>
        </div>

        <p className="text-lg text-muted-foreground">
          Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
          arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
          feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
          Eleifend egestas fringilla sapien.
        </p>

        <div className="mt-4 grid gap-6">
          <Card className="border-primary/10 bg-card p-6">
            <div className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Rocket className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold">Push to deploy.</h3>
                <p className="text-muted-foreground">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
              </div>
            </div>
          </Card>

          <Card className="border-primary/10 bg-card p-6">
            <div className="flex gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <Lock className="size-6 text-primary" />
              </div>
              <div>
                <h3 className="mb-2 font-semibold">SSL certificates.</h3>
                <p className="text-muted-foreground">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
