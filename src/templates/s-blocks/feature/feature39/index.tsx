import Image from "next/image";
import { ArrowRight, Rocket, BarChart3, Search } from "lucide-react";

export default function Feature39() {
  const features = [
    {
      title: "Seamless Integrations",
      description:
        "Connect with your favorite tools and services effortlessly. Streamline your workflow and boost productivity.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      icon: Rocket,
      color: "bg-blue-500",
    },
    {
      title: "Powerful Analytics",
      description:
        "Gain valuable insights with our comprehensive analytics dashboard. Track your progress and make data-driven decisions.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      icon: BarChart3,
      color: "bg-green-500",
    },
    {
      title: "Advanced Search & Filtering",
      description:
        "Quickly find what you need with our advanced search and filtering options. Save time and stay organized.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      icon: Search,
      color: "bg-yellow-500",
    },
  ];

  return (
    <section className="bg-background py-24 text-foreground">
      <div className="container mx-auto">
        <h2 className="mb-10 text-center text-3xl font-bold lg:mb-16 lg:text-4xl">
          Unlock Your Potential with These Key Features
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl border border-border shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={640}
                  height={384}
                  className="aspect-video w-full object-cover"
                />
                <div
                  className={`absolute left-4 top-4 rounded-full p-2 ${feature.color}`}
                >
                  <feature.icon className="size-6 text-white" />
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="mb-4 text-muted-foreground">
                  {feature.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-medium text-primary hover:underline"
                >
                  Explore More
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
