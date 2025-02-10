export default function Contact23() {
  return (
    <div className="container mx-auto py-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-3xl font-bold tracking-tight">Our offices</h2>
        <p className="mb-12 max-w-3xl text-muted-foreground">
          Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id
          malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="border-l-2 border-primary pl-6">
            <h3 className="mb-4 font-semibold">Los Angeles</h3>
            <address className="not-italic text-muted-foreground">
              4556 Brendan Ferry
              <br />
              Los Angeles, CA 90210
            </address>
          </div>

          <div className="border-l-2 border-primary pl-6">
            <h3 className="mb-4 font-semibold">New York</h3>
            <address className="not-italic text-muted-foreground">
              886 Walter Street
              <br />
              New York, NY 12345
            </address>
          </div>

          <div className="border-l-2 border-primary pl-6">
            <h3 className="mb-4 font-semibold">Toronto</h3>
            <address className="not-italic text-muted-foreground">
              7363 Cynthia Pass
              <br />
              Toronto, ON N3Y 4H8
            </address>
          </div>

          <div className="border-l-2 border-primary pl-6">
            <h3 className="mb-4 font-semibold">London</h3>
            <address className="not-italic text-muted-foreground">
              114 Cobble Lane
              <br />
              London N1 2EF
            </address>
          </div>
        </div>
      </div>
    </div>
  );
}
