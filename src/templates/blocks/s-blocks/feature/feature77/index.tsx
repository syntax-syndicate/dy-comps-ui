import Image from "next/image";
import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "AI-Powered Analytics",
    subtitle: "Unlock insights with ease",
    description:
      "Harness the power of artificial intelligence to analyze your data and uncover actionable insights. Our AI-powered analytics tool transforms complex datasets into clear, understandable visualizations and reports.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Secure Cloud Storage",
    subtitle: "Your data, protected",
    description:
      "Experience peace of mind with our state-of-the-art secure cloud storage solution. Benefit from end-to-end encryption, automatic backups, and seamless access across all your devices, ensuring your data is always safe and available.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function ResponsiveFeature() {
  return (
    <section className="relative bg-background py-10 text-foreground sm:py-16 md:py-20 lg:py-24">
      <div className="container relative flex flex-col items-center">
        <div className="absolute top-0 -mx-[calc(24px+theme(container.padding))] h-px w-screen bg-border"></div>
        <div className="relative py-8 text-center sm:py-12 md:py-16">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground sm:mb-4">
            Innovate with Confidence
          </p>
          <h2 className="text-pretty text-2xl font-semibold sm:text-3xl md:mb-3 lg:mb-4 lg:max-w-3xl lg:text-4xl">
            Cutting-Edge Solutions
          </h2>
          <span className="text-base font-medium text-primary sm:text-lg">
            Empowering your digital transformation
          </span>
        </div>
      </div>
      <div className="container relative">
        <div className="grid gap-6 p-4 md:grid-cols-2 md:divide-x md:divide-border md:p-6 lg:gap-8">
          {products.map((product, index) => (
            <a
              key={index}
              href="#"
              className="group relative flex flex-col items-center rounded-lg border py-6 text-center transition-all duration-200 md:px-6 md:py-8 lg:px-8 lg:pb-16 lg:pt-12"
            >
              <div className="relative mb-6 flex aspect-square w-16 items-center justify-center sm:w-20 md:w-24 lg:mb-8 lg:w-28">
                <div className="absolute inset-0 origin-center rotate-45 transform rounded-lg bg-primary/10 transition-all duration-300 group-hover:bg-primary/20"></div>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={100}
                  height={100}
                  className="relative z-10 size-3/4 rounded-lg object-contain object-center transition-all duration-300 group-hover:scale-110"
                />
              </div>
              <h3 className="mb-1 text-lg font-semibold sm:text-xl md:mb-2">
                {product.title}
              </h3>
              <span className="mb-3 block text-sm font-medium text-muted-foreground">
                {product.subtitle}
              </span>
              <p className="mb-4 text-sm text-muted-foreground sm:text-base">
                {product.description}
              </p>
              <div className="mt-auto inline-flex items-center text-sm font-medium text-primary transition-all duration-200 group-hover:underline sm:text-base">
                <span className="group-hover:underline">Explore Features</span>
                <ArrowRight className="ml-2 size-4 flex-shrink-0 transition-all duration-200 group-hover:translate-x-1 sm:size-5" />
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="container absolute inset-0 hidden h-full md:block">
        <div className="relative h-full">
          <div className="absolute inset-y-0 left-0 h-full w-px bg-border"></div>
          <div className="absolute inset-y-0 right-0 h-full w-px bg-border"></div>
        </div>
      </div>
    </section>
  );
}
