export default function Testimonial() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-gradient-to-b from-background to-secondary px-4">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center py-20 text-center">
        <blockquote className="text-forground mb-8 text-2xl font-medium leading-relaxed md:text-3xl md:leading-relaxed lg:text-4xl lg:leading-relaxed">
          I&apos;ve been using TUIK to completely map out entire layouts and as
          an inspiration and a building block. I am taking the ready-made
          designs and hacking them down into what works for me. TUIK has
          radically cut down my time to get where I want with my layouts.
        </blockquote>
        <footer className="flex flex-col items-center gap-2">
          <cite className="text-forground text-2xl font-semibold not-italic">
            Joe Perkins
          </cite>
          <p className="text-forground text-lg">
            Developer • Landscape Ventures
          </p>
        </footer>
      </div>
    </section>
  );
}
