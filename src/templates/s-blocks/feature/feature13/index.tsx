import Image from "next/image";

const features = [
  {
    forGroup: "DESIGNERS",
    title: "Crafting Interfaces with Precision",
    description:
      "Unleash your creativity with our intuitive tools. Design pixel-perfect interfaces that bring your vision to life, and effortlessly translate your design into a high-fidelity product.",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    imageAlt: "Abstract design illustration",
  },
  {
    forGroup: "DEVELOPERS",
    title: "Building Robust Applications ",
    description:
      "Experience seamless development with our cutting-edge framework. Build scalable, robust, and maintainable applications with unparalleled ease and efficiency.",
    imageSrc: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    imageAlt: "Abstract code illustration",
  },
];

export default function FeatureSection() {
  return (
    <section className="py-32">
      <div className="container max-w-7xl">
        <h2 className="text-3xl font-semibold lg:text-4xl">
          A better way to{" "}
          <span className="text-primary">build your websites.</span>
        </h2>
        <div className="mt-10 grid gap-9 lg:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative flex flex-col justify-between rounded-lg border border-input bg-card text-card-foreground shadow-md transition-transform duration-300 ease-in-out hover:-translate-y-2"
            >
              <div className="relative flex justify-between gap-10 rounded-t-lg border-b border-input bg-accent">
                <div className="flex flex-col justify-between gap-4 py-6 pl-4 md:py-10 md:pl-8 lg:gap-14">
                  <p className="text-xs uppercase text-primary">
                    For {feature.forGroup}
                  </p>
                  <h3 className="text-2xl font-bold md:text-4xl">
                    {feature.title}
                  </h3>
                </div>
                <div className="md:1/3 relative w-2/5 shrink-0 overflow-hidden rounded-tr-lg border-l border-input">
                  <Image
                    src={feature.imageSrc}
                    alt={feature.imageAlt}
                    width={200}
                    height={300}
                    className="size-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
                  />
                </div>
              </div>
              <div className="p-4 text-muted-foreground md:p-8">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
