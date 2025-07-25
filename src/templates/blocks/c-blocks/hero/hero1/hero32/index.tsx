import { Button } from "@/components/ui/button"

const integrations = [
  [
    {
      id: "integration-1",
      icon: (
        <img
          alt="Integration"
          src="https://placehold.co/900/transparent/005661?text=D&font=poppins.svg"
        />
      ),
    },
    {
      id: "integration-2",
      icon: (
        <img
          alt="Integration"
          src="https://placehold.co/900/transparent/005661?text=Y&font=poppins.svg"
        />
      ),
    },
    {
      id: "integration-3",
      icon: (
        <img
          alt="Integration"
          src="https://placehold.co/900/transparent/005661?text=C&font=poppins.svg"
        />
      ),
    },
    {
      id: "integration-4",
      icon: (
        <img
          alt="Integration"
          src="https://placehold.co/900/transparent/005661?text=O&font=poppins.svg"
        />
      ),
    },
    {
      id: "integration-5",
      icon: (
        <img
          alt="Integration"
          src="https://placehold.co/900/transparent/005661?text=M&font=poppins.svg"
        />
      ),
    },
  ],
  [
    {
      id: "integration-6",
      icon: (
        <img
          alt="Integration"
          src="https://placehold.co/900/transparent/005661?text=P&font=poppins.svg"
        />
      ),
    },
    {
      id: "integration-7",
      icon: (
        <img
          alt="Integration"
          src="https://placehold.co/900/transparent/005661?text=D&font=poppins.svg"
        />
      ),
    },
    {
      id: "integration-8",
      icon: (
        <img
          alt="Integration"
          src="https://placehold.co/900/transparent/005661?text=Y&font=poppins.svg"
        />
      ),
    },
    {
      id: "integration-9",
      icon: (
        <img
          alt="Integration"
          src="https://placehold.co/900/transparent/005661?text=C&font=poppins.svg"
        />
      ),
    },
    {
      id: "integration-10",
      icon: (
        <img
          alt="Integration"
          src="https://placehold.co/900/transparent/005661?text=O&font=poppins.svg"
        />
      ),
    },
  ],
  [
    {
      id: "integration-11",
      icon: (
        <img
          alt="Integration"
          src="https://placehold.co/900/transparent/005661?text=M&font=poppins.svg"
        />
      ),
    },
    {
      id: "integration-12",
      icon: (
        <img
          alt="Integration"
          src="https://placehold.co/900/transparent/005661?text=P&font=poppins.svg"
        />
      ),
    },
    {
      id: "integration-13",
      icon: (
        <img
          alt="Integration"
          src="https://placehold.co/900/transparent/005661?text=D&font=poppins.svg"
        />
      ),
    },
    {
      id: "integration-14",
      icon: (
        <img
          alt="Integration"
          src="https://placehold.co/900/transparent/005661?text=Y&font=poppins.svg"
        />
      ),
    },
    {
      id: "integration-15",
      icon: (
        <img
          alt="Integration"
          src="https://placehold.co/900/transparent/005661?text=C&font=poppins.svg"
        />
      ),
    },
  ],
]

const Hero32 = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1400 600"
          className="min-h-full min-w-full"
        >
          <defs>
            <pattern
              id="grid"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="1"
                strokeOpacity={0.5}
              />
            </pattern>
          </defs>
          <rect width="1400" height="600" fill="url(#grid)" />
        </svg>
      </div>
      <div className="relative">
        <div className="absolute left-0 z-10 hidden h-full w-1/2 bg-[linear-gradient(to_right,hsl(var(--background))_85%,transparent_100%)] md:block"></div>
        <div className="md:-space-x-26 container relative flex flex-col items-start md:flex-row md:items-center">
          <div className="bg-background z-20 -mx-[calc(theme(container.padding))] w-[calc(100%+2*theme(container.padding))] shrink-0 px-[calc(theme(container.padding))] pt-32 md:w-1/2 md:bg-transparent md:pb-32">
            <div className="flex flex-col items-start text-left">
              <div className="max-w-sm">
                <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
                  Welcome to Our Website
                </h1>
                <Button>Primary</Button>
              </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-16 pb-8 pt-12 md:py-32">
              {integrations.map((line, i) => (
                <div key={i} className="flex gap-x-24 odd:-translate-x-24">
                  {line.map((integration) => (
                    <div
                      key={integration.id}
                      className="border-background bg-background size-24 rounded-xl border shadow-xl"
                    >
                      <div className="bg-muted/20 size-full p-4">
                        {integration.icon}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero32
