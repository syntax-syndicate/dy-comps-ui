import { Filter, PieChart, Users, Sparkles } from "lucide-react";
import Image from "next/image";

export default function Feature101() {
  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-foreground md:text-5xl">
            Unlocking Your Potential
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Explore the breadth of what our platform can do for you.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-card shadow-md transition-all hover:scale-[1.02] md:col-span-2 lg:row-span-2">
            <div className="flex flex-col justify-between gap-6 rounded-lg p-6">
              <Sparkles className="size-8 text-primary" strokeWidth={1.5} />
              <h2 className="text-2xl font-semibold text-foreground">
                Intelligent Integration
              </h2>
              <p className="text-muted-foreground">
                Connect all your data sources seamlessly for a unified view of
                your operations.
              </p>
            </div>
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="integration feature"
              width={480}
              height={320}
              className="mt-4 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-between gap-4 rounded-lg border bg-card p-6 shadow-md transition-all hover:scale-[1.02]">
            <Filter className="size-8 text-primary" strokeWidth={1.5} />
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                Precision Filtering
              </h2>
              <p className="text-muted-foreground">
                Sift through your data with pinpoint accuracy to uncover key
                insights.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 rounded-lg border bg-card p-6 shadow-md transition-all hover:scale-[1.02]">
            <PieChart className="size-8 text-primary" strokeWidth={1.5} />
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                Dynamic Visualization
              </h2>
              <p className="text-muted-foreground">
                Bring your data to life with interactive and insightful visuals.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-between gap-4 rounded-lg border bg-card p-6 shadow-md transition-all hover:scale-[1.02]">
            <Users className="size-8 text-primary" strokeWidth={1.5} />
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                Collaborative Workspaces
              </h2>
              <p className="text-muted-foreground">
                Empower your team to collaborate effectively in shared,
                data-rich environments.
              </p>
            </div>
          </div>

          <div className="flex flex-col-reverse justify-between gap-4 rounded-lg border bg-card p-6 shadow-md transition-all hover:scale-[1.02] lg:col-span-2 lg:flex-row lg:items-center">
            <div className="lg:w-1/2">
              <h2 className="text-2xl font-semibold text-foreground">
                Centralized Dashboard
              </h2>
              <p className="text-muted-foreground">
                Streamline your workflow with everything you need in one
                accessible location.
              </p>
            </div>
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="platform feature"
              width={480}
              height={320}
              className="h-full w-full object-cover lg:w-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
