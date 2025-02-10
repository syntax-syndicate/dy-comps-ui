export default function About9() {
  return (
    <section className="container w-full bg-background py-12 md:py-24 lg:py-32">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="flex flex-col items-start gap-8">
          <h2 className="text-4xl font-bold md:text-5xl lg:text-6xl">
            <span className="text-primary">Work Smarter</span>, Not Harder
          </h2>
          <div className="space-y-4 text-2xl font-medium md:text-3xl lg:text-4xl">
            <p className="text-muted-foreground/80 line-through decoration-2">
              Attend meetings about meetings
            </p>
            <p className="text-muted-foreground/80 line-through decoration-2">
              Reply to emails about emails
            </p>
            <p className="text-muted-foreground/80 line-through decoration-2">
              Create reports nobody reads
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-4">
          <h3 className="text-2xl font-semibold text-foreground">
            Our Approach
          </h3>
          <p className="text-lg text-muted-foreground">
            At our company, we believe in cutting through the noise and focusing
            on what truly matters. We&apos;ve streamlined our processes to
            eliminate unnecessary tasks and maximize productivity.
          </p>
          <p className="text-lg text-muted-foreground">
            By working smarter, we create an environment where creativity
            flourishes, goals are achieved, and our team members can maintain a
            healthy work-life balance.
          </p>
          <p className="text-lg text-muted-foreground">
            Join us in revolutionizing the way we work – because life&apos;s too
            short for pointless busywork.
          </p>
        </div>
      </div>
    </section>
  );
}
