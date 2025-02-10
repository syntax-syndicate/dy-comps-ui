import { ArrowRight, Sparkles, Palette } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FeatureCardProps {
  order?: string;
  icon: React.ReactNode;
  subtitle: string;
  title: string;
  description: string;
  linkText: string;
}

export default function EnhancedFeature() {
  return (
    <section className="bg-gradient-to-b from-background to-secondary/10 py-24 md:py-32">
      <div className="container">
        {/* Header Section */}
        <div className="mx-auto mb-16 max-w-screen-md text-center md:mb-20">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            Unleash Your Space&apos;s{" "}
            <span className="text-primary">Potential</span>
          </h1>
          <p className="text-lg font-medium text-muted-foreground">
            Transform your living areas into captivating sanctuaries that
            reflect your unique style and personality.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="mx-auto grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Image Card 1 */}
          <div className="group order-1 h-full overflow-hidden rounded-lg border border-muted/20 bg-accent shadow-lg transition-all hover:scale-[1.02] hover:border-muted/40 hover:shadow-xl">
            <div className="relative aspect-video w-full">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Mesmerizing interior design showcase"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-6 left-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-lg font-semibold">Modern Elegance</p>
                <p className="text-sm">Experience the art of design.</p>
              </div>
            </div>
          </div>

          {/* Feature Card 1 */}
          <FeatureCard
            order="order-2"
            icon={<Sparkles className="size-6 text-primary" />}
            subtitle="Elevate Your Surroundings"
            title="Enchanting Spaces for Every Lifestyle"
            description="Discover how our innovative designs can transform ordinary rooms into extraordinary havens, tailored perfectly to your unique tastes and needs."
            linkText="Explore our magical transformations"
          />

          {/* Image Card 2 */}
          <div className="group order-3 h-full overflow-hidden rounded-lg border border-muted/20 bg-accent shadow-lg transition-all hover:scale-[1.02] hover:border-muted/40 hover:shadow-xl">
            <div className="relative aspect-video w-full">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Inspiring design concepts"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-black/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-6 left-6 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-lg font-semibold">Creative Concepts</p>
                <p className="text-sm">Redefine your space.</p>
              </div>
            </div>
          </div>

          {/* Feature Card 2 */}
          <FeatureCard
            order="order-4"
            icon={<Palette className="size-6 text-primary" />}
            subtitle="Redefine Your Aesthetic"
            title="Sleek Sophistication Meets Cozy Comfort"
            description="Immerse yourself in a world where cutting-edge design harmoniously blends with inviting warmth, creating spaces that are both visually stunning and incredibly livable."
            linkText="Uncover your perfect style blend"
          />
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  order,
  icon,
  subtitle,
  title,
  description,
  linkText,
}: FeatureCardProps) {
  return (
    <div className={cn("flex flex-col justify-center", order)}>
      <div className="mb-6 flex items-center gap-3 text-sm text-muted-foreground">
        {icon}
        <span>{subtitle}</span>
      </div>
      <h3 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
        {title}
      </h3>
      <p className="mb-6 text-muted-foreground md:text-lg">{description}</p>
      <a
        href="#"
        className="group inline-flex items-center gap-2 font-medium text-primary underline-offset-4 hover:underline"
      >
        {linkText}
        <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
      </a>
    </div>
  );
}
