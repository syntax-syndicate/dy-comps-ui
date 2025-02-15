import Image from "next/image";

export default function About15() {
  return (
    <div className="bg-background py-12 md:py-24">
      <div className="container space-y-24">
        {/* About Us Section */}
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex flex-col justify-center space-y-4 rounded-lg bg-accent p-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-6xl">
              All<span className="text-primary"> About Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              We&apos;re a dynamic team of creative professionals passionate
              about crafting exceptional digital experiences. Our collaborative
              approach and diverse skill sets allow us to tackle complex
              challenges and deliver innovative solutions that exceed
              expectations.
            </p>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Team collaborating in the office"
              className="object-cover object-center"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>

        {/* Our Story Section */}
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Our Story</h2>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Founded with a vision to transform digital experiences,{" "}
              <span className="font-bold text-primary">
                our journey began with a small team of passionate innovators.
              </span>{" "}
              Today, we&apos;ve grown into a diverse collective of creative
              minds, each bringing unique perspectives and expertise to every
              project we undertake.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {[
              {
                name: "Alexa",
                image:
                  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
                role: "Product Designer",
              },
              {
                name: "Olivia",
                image:
                  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
                role: "Frontend Developer",
              },
              {
                name: "Liam",
                image:
                  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
                role: "Backend Developer",
              },
              {
                name: "Elijah",
                image:
                  "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
                role: "UX Researcher",
              },
            ].map((member) => (
              <div key={member.name} className="space-y-4">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={member.image}
                    alt={`${member.name}&apos;s profile picture`}
                    className="rounded-lg object-cover"
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-medium">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
