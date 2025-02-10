import { CircleCheckBig, Zap } from "lucide-react";
import Image from "next/image";

export default function Feature7() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="rounded-lg bg-accent p-4">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Feature illustration"
              className="max-h-96 w-full rounded-md object-cover"
              width={576}
              height={384}
            />
          </div>
          <div className="flex flex-col lg:text-left">
            <span className="flex size-12 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10">
              <Zap className="size-6 text-primary" />
            </span>
            <h1 className="my-6 text-pretty text-3xl font-bold lg:text-4xl">
              Discover the Power of Innovation
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:max-w-none lg:text-lg">
              Step into a world where innovation meets efficiency. Our platform
              is designed to transform your ideas into reality.
            </p>
            <ul className="ml-4 space-y-4 text-left">
              {[
                "Unlock advanced features tailored to your needs.",
                "Experience seamless integration and user-friendly design.",
                "Join a community of forward-thinkers shaping the future.",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CircleCheckBig className="size-6 text-primary" />
                  <p className="lg:text-lg">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
