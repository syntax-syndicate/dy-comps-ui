import Image from "next/image";

export default function Feature116() {
  const activities = [
    {
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Group of people kayaking on a lake surrounded by forest",
      title: "Adventure Programs",
    },
    {
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Historic brick building with clock tower against blue sky",
      title: "Historic Preservation",
    },
    {
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Park ranger smiling while working outdoors",
      title: "Park Operations",
    },
    {
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      alt: "Person filling water bottle at park station",
      title: "Sustainability",
    },
  ];

  return (
    <section className="px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 max-w-4xl">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Areas of Work
          </h2>
          <p className="text-3xl font-medium leading-relaxed tracking-tight md:text-4xl">
            <span className="text-primary">Find your place in the parks.</span>{" "}
            Explore our programs and partnerships across the National Park
            System and see how you can give to the areas you&apos;re most
            passionate about.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg"
            >
              <Image
                src={activity.image}
                alt={activity.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 p-4">
                  <h3 className="text-lg font-medium text-white">
                    {activity.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
