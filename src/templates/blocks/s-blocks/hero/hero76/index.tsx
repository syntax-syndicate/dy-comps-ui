import { Button } from "@/components/ui/button";

export default function Hero76() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-background">
      {/* Background Circles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 rounded-full border border-muted"
              style={{
                transform: `scale(${1 + i * 0.2})`,
                opacity: 1 - i * 0.2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container relative px-4 py-12">
        <div className="mx-auto max-w-3xl space-y-8 text-center">
          {/* Text Content */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
              Elevate your spending,
              <br />
              accelerate your earnings
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Our Cashflow Cards redefine your financial journey with seamless
              rewards and unparalleled benefits
            </p>
          </div>

          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90"
          >
            Get Started
          </Button>

          {/* Cards Display */}
          <div className="relative mt-20 h-[400px]">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="absolute left-1/2 top-10 h-[300px] w-[480px] rounded-xl border-4 border-primary/80 bg-card shadow-2xl"
                style={{
                  transform: `translateX(-50%) rotate(${i * 8 - 20}deg)`,
                  zIndex: 6 - i,
                }}
              >
                <div className="relative flex h-full w-full flex-col justify-between p-6">
                  <div className="flex items-start justify-between">
                    <div className="text-lg font-semibold">Beyond UI</div>
                    <svg
                      className="h-4 w-12 text-foreground"
                      viewBox="0 0 1000 324"
                      fill="currentColor"
                    >
                      <path d="M651.19 0L1000 323.72H302.37L651.19 0z" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <div className="flex space-x-2">
                      {Array.from({ length: 4 }).map((_, j) => (
                        <div
                          key={j}
                          className="size-1 rounded-full bg-foreground/20"
                        />
                      ))}
                      <span className="text-sm">5432</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Chris Taylor
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
