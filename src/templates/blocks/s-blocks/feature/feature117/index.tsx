import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

export default function Feature117() {
  return (
    <section className="container mx-auto bg-background px-4 py-16">
      <div className="mb-12 space-y-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
          Transforming Ideas into Digital Reality
        </h2>
      </div>

      <div className="grid auto-rows-[250px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Stats Card - Customers */}
        <Card className="bg-card transition-colors hover:bg-accent">
          <CardContent className="flex h-full flex-col items-center justify-center p-6">
            <p className="text-4xl font-bold text-primary">50.2K+</p>
            <p className="text-muted-foreground">Satisfied Customer</p>
          </CardContent>
        </Card>

        {/* Conference Room */}
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Modern conference room"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Team Meeting */}
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Team meeting with laptops"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Team Collaboration */}
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Team collaboration around laptop"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Desktop Work */}
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="People working at desk"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Journey Card */}
        <Card className="bg-card transition-colors hover:bg-accent md:col-span-2">
          <CardContent className="space-y-4 p-6">
            <h3 className="text-2xl font-bold text-foreground">
              The Journey of Our Digital Evolution and Growth
            </h3>
            <p className="text-muted-foreground">
              Our story is one of continuous innovation and transformation,
              evolving from a small agency into a leader in digital solutions.
              Through dedication and creativity, we&apos;ve grown to meet the
              changing needs of our clients, delivering impactful results.
            </p>
          </CardContent>
        </Card>

        {/* Team Collaboration 2 */}
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Team members collaborating"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Stats Card - Projects */}
        <Card className="bg-card transition-colors hover:bg-accent">
          <CardContent className="flex h-full flex-col items-center justify-center p-6">
            <p className="text-4xl font-bold text-primary">80K+</p>
            <p className="text-muted-foreground">Project Completed</p>
          </CardContent>
        </Card>

        {/* Additional Image 1 */}
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Team working together in an office"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Additional Image 2 */}
        <div className="relative overflow-hidden rounded-lg">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Close-up of digital work on a computer screen"
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
        <Card className="bg-card transition-colors hover:bg-accent">
          <CardContent className="flex h-full flex-col items-center justify-center p-6">
            <p className="text-4xl font-bold text-primary">50.2K+</p>
            <p className="text-muted-foreground">Satisfied Customer</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
