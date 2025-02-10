import Image from "next/image";
import { CloudUpload, Lock, Database } from "lucide-react";

export default function Content1() {
  return (
    <section className="container relative overflow-hidden bg-accent py-8 sm:py-16">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-muted [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          <div className="lg:col-span-7">
            <div className="max-w-2xl">
              <p className="text-base font-semibold text-primary">
                Streamline Your Process
              </p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl xl:text-5xl">
                A Workflow Revolution
              </h1>
              <p className="mt-4 text-base leading-7 text-muted-foreground sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl">
                Transform your team&apos;s productivity with our intuitive
                platform. Seamlessly integrate tasks, communication, and project
                tracking in one powerful solution.
              </p>
            </div>

            <div className="mt-8 max-w-xl text-base leading-7 text-muted-foreground sm:mt-10 lg:max-w-none">
              <ul
                role="list"
                className="mt-6 space-y-6 text-muted-foreground sm:mt-8 sm:space-y-8"
              >
                {[
                  {
                    icon: CloudUpload,
                    title: "Instant Updates.",
                    description:
                      "Changes sync across all devices in real-time, ensuring your team always has the latest information at their fingertips.",
                  },
                  {
                    icon: Lock,
                    title: "Robust Security.",
                    description:
                      "Your data is protected with enterprise-grade encryption and customizable access controls, giving you peace of mind.",
                  },
                  {
                    icon: Database,
                    title: "Intelligent Insights.",
                    description:
                      "Our analytics engine provides actionable data on team performance, helping you optimize workflows and boost productivity.",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex gap-x-3">
                    <item.icon
                      className="mt-1 size-5 flex-none text-primary"
                      aria-hidden="true"
                    />
                    <span>
                      <strong className="font-semibold text-foreground">
                        {item.title}
                      </strong>{" "}
                      {item.description}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className="mt-10 text-xl font-bold tracking-tight text-foreground sm:mt-12 sm:text-2xl">
                Flexibility at Your Fingertips
              </h2>
              <p className="mt-4 sm:mt-6">
                Whether you&apos;re a startup or an enterprise, our scalable
                solution grows with you. Customize workflows, integrate with
                your favorite tools, and automate repetitive tasks.
              </p>
            </div>
          </div>

          <div className="mt-8 sm:mt-10 lg:col-span-5 lg:row-span-2">
            <div className="relative overflow-hidden rounded-2xl shadow-xl lg:sticky lg:top-4">
              <div className="aspect-[3/4] w-full">
                <Image
                  className="object-cover"
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="Workflow dashboard screenshot"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="absolute bottom-4 left-4 right-4 w-max max-w-[calc(100%-2rem)] rounded-lg bg-background p-4 shadow">
                <p className="text-sm font-semibold sm:text-base">
                  Revolutionize your workflow
                </p>
                <p className="text-xs text-muted-foreground sm:text-sm">
                  20+ Expert services at your fingertips
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
