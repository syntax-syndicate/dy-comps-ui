export default function Stat10() {
  return (
    <section className="bg-accent px-4 py-16">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-4 text-5xl font-bold text-foreground">
          By the numbers
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-lg text-foreground">
          5 years, consistent quality and you get results. No matter what
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-background p-8 shadow-lg">
            <div className="mb-2 text-4xl font-bold">40+</div>
            <div className="text-primary">Happy Clients</div>
          </div>

          <div className="rounded-lg bg-background p-8 shadow-lg">
            <div className="mb-2 text-4xl font-bold">540+</div>
            <div className="text-primary">Projects Completed</div>
          </div>

          <div className="rounded-lg bg-background p-8 shadow-lg">
            <div className="mb-2 text-4xl font-bold">300</div>
            <div className="text-primary">Dedicated Members</div>
          </div>

          <div className="rounded-lg bg-background p-8 shadow-lg">
            <div className="mb-2 text-4xl font-bold">25+</div>
            <div className="text-primary">Awards Won</div>
          </div>
        </div>
      </div>
    </section>
  );
}
