import { Star } from "lucide-react";

export default function Testimonial() {
  return (
    <section className="bg-accent py-32">
      <div className="container">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8 flex items-center rounded-full bg-background p-1 shadow-md">
            <span className="relative flex size-10 shrink-0 overflow-hidden rounded-full">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                SB
              </span>
            </span>
            <span className="relative -ml-3 flex size-10 shrink-0 overflow-hidden rounded-full">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                RA
              </span>
            </span>
            <span className="relative -ml-3 flex size-10 shrink-0 overflow-hidden rounded-full">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-muted">
                JS
              </span>
            </span>
            <div className="mx-2 text-xs font-medium">
              Empowering creative minds worldwide
            </div>
          </div>
          <p className="max-w-4xl text-xl font-medium lg:text-2xl">
            &quot;This platform has revolutionized our design process. The
            intuitive interface and powerful features have significantly boosted
            our team&apos;s productivity. It&apos;s not just a tool; it&apos;s a
            game-changer for any creative professional looking to elevate their
            work.&quot;
          </p>
          <div className="mt-8 flex justify-center space-x-2">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="size-6 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
