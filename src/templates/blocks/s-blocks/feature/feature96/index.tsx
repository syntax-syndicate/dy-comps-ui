import Image from "next/image";
import { CheckCircle, Zap, Shield, Smartphone } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Easy Integration",
    description:
      "Seamlessly integrate our solution into your existing workflow with minimal setup time.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience blazing fast performance that keeps your productivity at its peak.",
  },
  {
    icon: Shield,
    title: "Secure by Design",
    description:
      "Rest easy knowing your data is protected by state-of-the-art security measures.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description:
      "Access all features on the go with our fully responsive mobile design.",
  },
];

export default function UniqueFeatures() {
  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-primary/10 py-24">
      <div className="container">
        <div className="grid gap-6 lg:grid-cols-[1fr,400px] lg:gap-12 xl:grid-cols-[1fr,600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Powerful Features for Your Success
              </h2>
              <p className="max-w-[600px] text-zinc-500 dark:text-zinc-400 md:text-xl">
                Our cutting-edge platform is designed to elevate your
                productivity and streamline your workflow.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <feature.icon className="mt-1 size-6 text-primary" />
                  <div className="space-y-2">
                    <h3 className="font-bold">{feature.title}</h3>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative aspect-square w-full max-w-[400px]">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Feature Illustration"
                fill
                className="rounded-radius object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
