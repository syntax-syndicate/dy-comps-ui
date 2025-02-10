export default function Content6() {
  return (
    <section className="container grid items-center gap-12 py-16 lg:grid-cols-2">
      {/* Testimonial Card */}
      <div className="relative h-full overflow-hidden">
        <div className="absolute inset-0 rounded-lg bg-accent" />
        <div className="relative p-8 md:p-12">
          <div className="mb-8 flex items-center gap-2 text-primary">
            <svg
              className="size-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span className="text-xl font-semibold">Workstation</span>
          </div>
          <blockquote className="mb-6 text-xl font-medium md:text-2xl">
            Workcation has transformed how our team collaborates remotely.
            It&apos;s not just a tool; it&apos;s a game-changer for our
            productivity and team spirit.
          </blockquote>
          <footer>
            <cite className="not-italic">
              <span className="font-semibold">Judith Rogers</span>
              <span className="ml-2">CEO at Workcation</span>
            </cite>
          </footer>
        </div>
      </div>

      {/* Company Info */}
      <div className="space-y-8">
        <div>
          <div className="mb-2 text-sm font-medium text-primary">
            Company values
          </div>
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            On a mission to empower remote teams
          </h2>
          <p className="text-muted-foreground">
            At Workcation, we&apos;re revolutionizing the way distributed teams
            connect and collaborate. Our platform bridges the gap between
            physical distance and seamless teamwork, fostering a culture of
            innovation and productivity.
          </p>
        </div>

        <div className="space-y-6">
          <p className="text-muted-foreground">
            We understand the unique challenges of remote work. That&apos;s why
            we&apos;ve developed intuitive tools that not only facilitate
            communication but also nurture team bonds. From virtual water cooler
            chats to streamlined project management, we&apos;re here to make
            remote work feel less remote.
          </p>
          <p className="text-muted-foreground">
            Our commitment goes beyond software. We&apos;re building a community
            of forward-thinking professionals who believe in the power of
            flexible work arrangements. By choosing Workcation, you&apos;re not
            just adopting a tool, you&apos;re joining a movement that&apos;s
            shaping the future of work.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 border-t pt-8 md:grid-cols-4">
          <div>
            <div className="text-2xl font-bold">2024</div>
            <div className="text-sm text-muted-foreground">Founded</div>
          </div>
          <div>
            <div className="text-2xl font-bold">37</div>
            <div className="text-sm text-muted-foreground">Employees</div>
          </div>
          <div>
            <div className="text-2xl font-bold">12</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div>
            <div className="text-2xl font-bold">$25M</div>
            <div className="text-sm text-muted-foreground">Raised</div>
          </div>
        </div>

        <a
          href="#"
          className="inline-flex items-center text-primary hover:text-primary/80"
        >
          Learn more about our company
          <svg
            className="ml-2 size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </section>
  );
}
