import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Laptop, Palette, Wrench } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Feature27() {
  const features = [
    {
      icon: Laptop,
      title: "Adaptive Across All Devices",
      description:
        "Experience flawless performance on any device. Our responsive design ensures your website looks and functions perfectly, from desktops to smartphones.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      icon: Palette,
      title: "Visually Stunning Aesthetics",
      description:
        "Captivate your audience with breathtaking visuals. Our designs blend beauty and functionality, creating an immersive user experience that delights and engages.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      icon: Wrench,
      title: "Tailored to Your Needs",
      description:
        "Customize every detail to fit your vision. Our fully customizable themes and components empower you to create a unique online presence that stands out.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      fullWidth: true,
    },
  ];

  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto mb-12 flex max-w-screen-md flex-col items-center gap-6">
          <Badge variant="outline">Overview</Badge>
          <h2 className="mb-2 text-center text-3xl font-semibold lg:text-5xl">
            Craft exceptional websites with{" "}
            <span className="text-primary">Themed UI Blocks</span>
          </h2>
          <p className="text-center text-muted-foreground lg:text-lg">
            Discover the perfect blend of form and function. Our meticulously
            designed UI blocks provide the foundation for creating stunning,
            high-performance websites with ease.
          </p>
        </div>

        <Separator />
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {features.map((feature, index) => (
            <div
              key={index}
              className={feature.fullWidth ? "md:col-span-2" : ""}
            >
              <div className="rounded-lg border">
                <div
                  className={`group relative overflow-hidden rounded-t-lg border bg-accent p-2 ${
                    feature.fullWidth ? "aspect-video" : ""
                  }`}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={feature.fullWidth ? 800 : 400}
                    height={feature.fullWidth ? 450 : 300}
                    className={`h-full w-full object-cover ${
                      feature.fullWidth ? "bg-muted" : ""
                    }`}
                  />
                  <div className="absolute right-4 top-4 rounded-full bg-accent p-2">
                    <feature.icon className="size-5 text-primary" />
                  </div>
                </div>
                <div className="p-6">
                  {" "}
                  <h3 className="text-lg font-medium">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
