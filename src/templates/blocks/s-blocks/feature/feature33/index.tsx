import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Feature33() {
  const features = [
    {
      title: "One Click Copy Paste from the Block Library",
      description:
        "Effortlessly copy and paste pre-designed blocks to streamline your workflow. Perfect for rapid prototyping and design consistency.",
    },
    {
      title: "Build Your Website in Minutes with Blocks",
      description:
        "Assemble stunning websites in record time using our versatile block library. No coding required—just drag, drop, and customize.",
    },
    {
      title: "Get Started with Blocks Today and Save Time",
      description:
        "Jumpstart your projects with our block-based system. Save hours of development time and focus on what matters most—your creativity.",
      link: {
        text: "Try Blocks Now",
        href: "#",
      },
    },
  ];

  return (
    <section className="bg-background py-32">
      <div className="container">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-8 text-4xl font-bold lg:mb-12 lg:text-6xl">
            Unlock your potential <br />{" "}
            <span className="text-primary">with themed blocks</span>
          </h2>
          <p className="font-medium text-muted-foreground lg:text-lg">
            Revolutionize your workflow with our intuitive block system.
            Designed for speed, efficiency, and creativity.
          </p>
        </div>

        <div className="mx-auto max-w-screen-xl rounded-lg bg-muted/50 p-6 shadow-lg">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Feature showcase"
            width={1200}
            height={600}
            className="size-full max-h-[600px] rounded-lg object-cover shadow-md"
          />
        </div>

        <ul className="mx-auto mt-14 grid max-w-screen-xl gap-11 md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
          {features.map((feature, index) => (
            <li key={index} className="group">
              <div className="mb-3 flex gap-3">
                <h3 className="text-2xl font-medium md:mb-6">
                  {feature.title}
                </h3>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
              {feature.link && (
                <a
                  href={feature.link.href}
                  className="mt-6 flex items-center gap-2 text-primary transition-all duration-300 hover:underline group-hover:gap-3"
                >
                  {feature.link.text}
                  <ArrowRight className="size-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
