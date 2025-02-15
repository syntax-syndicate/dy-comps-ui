import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Hero44() {
  const cubeImages = [
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=500&q=80",
    "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&q=80",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=500&q=80",
    "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&q=80",
    "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=500&q=80",
    "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&q=80",
    "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=500&q=80",
    "https://images.unsplash.com/photo-1624953587687-daf255b6b80a?w=500&q=80",
    "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=500&q=80",
  ];

  return (
    <div className="relative overflow-hidden bg-background py-16">
      {/* Grid Background */}
      <div className="absolute inset-0 h-full w-full">
        <div className="absolute inset-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1920"
            height="1080"
            viewBox="0 0 1920 1080"
            fill="none"
            className="absolute inset-0 m-auto opacity-20 lg:block"
          >
            {/* Background Rectangle */}
            <rect width="1920" height="1080" fill="#f2f2f2"></rect>

            {/* Horizontal Lines */}
            {Array.from({ length: 25 }).map((_, i) => (
              <line
                key={`horizontal-${i}`}
                y1={20 + i * 40}
                x2="1920"
                y2={20 + i * 40}
                className="stroke-muted-foreground"
                stroke="#b0bec5" // Light gray color
                strokeWidth="0.8"
                strokeDasharray="5 5"
              />
            ))}

            {/* Vertical Lines */}
            {Array.from({ length: 45 }).map((_, i) => (
              <line
                key={`vertical-${i}`}
                x1={20 + i * 40}
                y1="0"
                x2={20 + i * 40}
                y2="1080"
                className="stroke-muted-foreground"
                stroke="#b0bec5" // Light gray color
                strokeWidth="0.8"
                strokeDasharray="5 5"
              />
            ))}

            {/* Diagonal Lines from Top-Left to Bottom-Right */}
            {Array.from({ length: 30 }).map((_, i) => (
              <line
                key={`diagonal-${i}`}
                x1={-200 + i * 100}
                y1="0"
                x2={200 + i * 100}
                y2="1080"
                stroke="#cfd8dc" // Even lighter color for subtlety
                strokeWidth="0.5"
                strokeDasharray="4 4"
              />
            ))}

            <defs>
              <clipPath id="clip0">
                <rect width="1920" height="1080" fill="#000000"></rect>
              </clipPath>
            </defs>
          </svg>
          <div className="absolute inset-0 bg-gradient-to-tr from-background via-primary/5 to-background" />
        </div>

        {/* Uniform Floating Cubes with Stock Images */}
        <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 p-8">
          {cubeImages.map((src, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-lg border border-primary/20 backdrop-blur-sm"
              style={{
                animation: `float ${5 + i * 0.5}s infinite ease-in-out ${i * 0.2}s`,
              }}
            >
              <Image
                src={src}
                alt={`Tech concept ${i + 1}`}
                width={500}
                height={500}
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0" />
            </div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto py-20">
        <div className="max-w-2xl space-y-8 rounded-lg bg-background/80 p-8 backdrop-blur-md">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-primary">
              Shaping Tomorrow:
            </h2>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Build the Future
              <br />
              with Cubernets
            </h1>
            <p className="max-w-lg text-lg text-muted-foreground">
              Leveraging cutting-edge technology, Cuber delivers the tools and
              resources necessary for shaping a sustainable and innovative
              future. Join us in paving the way for revolutionary advancements.
            </p>
          </div>

          <Button
            size="lg"
            className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Start Building
            <ArrowRight className="size-4" />
          </Button>

          <div className="grid gap-4 pt-8 sm:grid-cols-3">
            {["Product features", "Documentation", "Join Our Community"].map(
              (feature) => (
                <Button
                  key={feature}
                  variant="outline"
                  className="justify-between border-primary/20 hover:bg-primary/10"
                >
                  {feature}
                  <ArrowUpRight className="size-4 text-primary" />
                </Button>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
