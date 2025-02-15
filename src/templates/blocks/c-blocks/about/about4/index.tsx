import { type FC } from "react";
import { Button } from "@/components/ui/button"; // Assuming this is a separate button component

const TeamSection: FC = () => {
  const images = [
    "https://placehold.co/900/EBEDED/C3C9C9?text=Y&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=C&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=M&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=P&font=poppins.svg",
    "https://placehold.co/900/EBEDED/C3C9C9?text=S&font=poppins.svg",
  ];

  return (
    <section className="py-32">
      <div className="container">
        {/* Section Title and Description */}
        <div className="mx-auto flex max-w-screen-md flex-col gap-8 pb-28 text-center">
          <h1 className="text-4xl font-semibold md:text-7xl">Welcome to Our Team</h1>
          <p className="text-xl font-medium text-muted-foreground">
            Meet our team, discover our values, and learn how we balance work, life, and everything in between.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`placeholder-${index}`}
              className="max-h-80 w-full object-cover"
            />
          ))}
        </div>

        {/* Vision and Creators Sections */}
        <div className="mx-auto grid max-w-screen-lg gap-28 py-28 md:grid-cols-2">
          {/* Vision */}
          <div>
            <h2 className="mb-5 text-4xl font-semibold">Our Vision</h2>
            <p className="text-xl font-medium leading-8 text-muted-foreground">
              For years, the process of building custom software has remained challenging. Today, visual builders exist, but tailored solutions still require technical expertise and a lot of time. This is a problem for businesses and individuals alike.
              <br />
              <br />
              What if you could create custom software without writing a single line of code? What if you could build your own tools?
              <br />
              <br />
              With our platform, you can! Our tools let you design layouts and create functionality—all without needing to code.
              <br />
              <br />
              We believe that everyone should be able to build their own solutions, regardless of their technical background.
            </p>
          </div>

          {/* Creators */}
          <div>
            <h2 className="mb-5 text-4xl font-semibold">Our Creators</h2>
            <p className="text-xl font-medium leading-8 text-muted-foreground">
              <a href="#" className="mr-1 underline">Our Company</a>
              has been building web tools for over a decade, focusing on efficiency and user control in every project. We know that the best solutions are the ones that you can create yourself.
              <br />
              <br />
              We initially developed these solutions for our own team, and now everyone can benefit from them too. We are proud to offer a platform that is accessible to all, regardless of technical expertise.
              <br />
              <br />
              Our team is made up of talented individuals who are passionate about creating tools that empower users to build their own solutions with ease. We are dedicated to helping you achieve your goals, and we can’t wait to see what you create!
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mx-auto flex max-w-screen-lg flex-col items-center justify-between gap-8 rounded-2xl bg-muted/50 p-14 text-center md:flex-row md:text-left">
          <h3 className="text-3xl font-semibold">
            Part of
            <br />
            Our Global Team
          </h3>
          <Button size="lg">Get to know the team</Button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
