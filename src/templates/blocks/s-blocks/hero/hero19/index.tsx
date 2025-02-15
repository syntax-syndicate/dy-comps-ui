import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Hero19() {
  return (
    <section className="flex w-full items-center justify-center bg-muted/20 px-4 py-12 sm:py-24">
      <div className="container mx-auto max-w-6xl space-y-8">
        {/* Header Text */}
        <div className="mb-12 space-y-4 text-center">
          <p className="text-lg text-muted-foreground">Website Design</p>
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Online eBook
          </h1>
        </div>

        {/* Browser Frame */}
        <div className="overflow-hidden rounded-lg border bg-background shadow-2xl">
          {/* Browser Header */}
          <div className="flex items-center justify-between border-b bg-muted/50 px-6 py-4">
            <div className="flex items-center space-x-4">
              <div className="flex space-x-2">
                <div className="size-3 rounded-full bg-destructive/60" />
                <div className="size-3 rounded-full bg-yellow-500/60" />
                <div className="size-3 rounded-full bg-green-500/60" />
              </div>
              <div className="h-6 w-[200px] rounded-full bg-muted" />
            </div>
          </div>

          {/* Website Content */}
          <div className="p-8">
            <nav className="mb-12 flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <div className="size-3 rounded-full bg-primary" />
                <span className="text-lg font-semibold">Nexusbite</span>
              </div>
              <div className="flex items-center space-x-6">
                {["Books", "Benefits", "Features", "Authors", "Page"].map(
                  (item) => (
                    <button
                      key={item}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {item}
                    </button>
                  ),
                )}
                <Button
                  size="sm"
                  className="bg-primary text-primary-foreground"
                >
                  Sign Up
                </Button>
              </div>
            </nav>

            <div className="grid items-center gap-12 md:grid-cols-2">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">
                  Expand your knowledge with ebooks for personal and
                  professional growth.
                </h2>
                <p className="text-muted-foreground">
                  Our ebooks are carefully curated to provide you with the best
                  reading experience. Whether you&apos;re looking for fiction,
                  non-fiction, self-help, or educational ebooks.
                </p>
                <div className="space-y-4">
                  <Button className="w-full sm:w-auto">Browse Ebooks</Button>
                  <ul className="space-y-2">
                    {[
                      "Access ebooks offline",
                      "Promotions for our valued customers",
                      "Secure payment options for your convenience",
                    ].map((feature) => (
                      <li key={feature} className="flex items-center space-x-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  alt="The ZEN Trader Book Cover"
                  width={400}
                  height={500}
                  className="mx-auto border shadow-lg"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
