import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Feature80() {
  return (
    <section className="bg-background py-32 text-foreground">
      <div className="container">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="aspect-[5/6] text-clip rounded-lg bg-accent p-4">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Feature"
              width={600}
              height={720}
              className="size-full rounded-lg object-cover object-center"
            />
          </div>
          <div className="flex shrink-0 flex-col justify-center md:w-1/2 md:py-16 lg:mr-8 lg:pl-24 lg:text-left 2xl:pl-32">
            <p className="mb-6 text-xs font-medium uppercase tracking-wider">
              Innovative Solution
            </p>
            <h2 className="mb-6 text-pretty text-3xl font-bold lg:text-5xl">
              Unlocking New Possibilities with Our Core Feature
            </h2>
            <p className="mb-6 text-muted-foreground lg:text-xl">
              Our leading-edge technology will transform the way you operate,
              offering streamlined solutions for complex tasks and providing new
              avenues for success.
            </p>
            <a
              href="#"
              className="group mb-12 flex items-center pb-3 font-medium text-primary hover:underline lg:text-xl"
            >
              Explore the Benefits
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="flex flex-col gap-6 md:flex-row">
              <a href="#" className="group flex-1 rounded-lg border p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    {["AI", "ML", "DS"].map((initials, index) => (
                      <span
                        key={index}
                        className={`relative flex size-10 shrink-0 overflow-hidden rounded-full ${
                          index > 0 ? "-ml-3" : ""
                        }`}
                      >
                        <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                          {initials}
                        </span>
                      </span>
                    ))}
                  </div>
                  <ChevronRight className="mt-2 size-5 transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mt-8 font-medium lg:text-lg">
                  AI-Driven Insights
                </p>
              </a>
              <a href="#" className="group flex-1 rounded-lg border p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center">
                    <Image
                      src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                      alt="Action icon"
                      width={48}
                      height={48}
                      className="size-12 object-cover object-center"
                    />
                  </div>
                  <ChevronRight className="mt-2 size-5 transition-transform group-hover:translate-x-1" />
                </div>
                <p className="mt-8 font-medium lg:text-lg">
                  Real-Time Data Analysis
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
