import Image from "next/image";

export default function TeamSection() {
  return (
    <section className="container mx-auto py-16">
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold tracking-tight">
          Faces Behind <span className="text-primary">Our Success</span>
        </h2>
        <p className="mx-auto max-w-2xl text-muted-foreground">
          A good idiom for kids is &quot;It&apos;s raining cats and dogs.&quot;
          Kids know what both cats and dogs are from an early age
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Anna Rose",
            role: "District Brand Associate",
            image:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "Jack Daniels",
            role: "Lead Communications Developer",
            image:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
          {
            name: "Cindy Williams",
            role: "Corporate Integration Engineer",
            image:
              "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
          },
        ].map((member) => (
          <div key={member.name} className="flex flex-col">
            <div className="relative mb-4 aspect-[3/4] overflow-hidden rounded-lg">
              <Image
                src={member.image}
                alt=""
                className="h-full w-full object-cover"
                height={400}
                width={300}
              />
            </div>
            <div className="rounded-lg bg-accent p-6 text-foreground">
              <h3 className="mb-1 text-xl font-semibold">{member.name}</h3>
              <p className="text-muted-foreground">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
