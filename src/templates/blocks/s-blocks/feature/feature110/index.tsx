import Image from "next/image";
import { Zap, ShieldCheck, UploadCloud } from "lucide-react";
import React from "react"; // Import React for ReactNode type

interface FeatureStepProps {
  number?: number; // Make number optional
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
}

const FeatureStep: React.FC<FeatureStepProps> = ({
  icon,
  title,
  description,
  imageSrc,
}) => {
  return (
    <div className="group relative flex flex-col items-center gap-4 rounded-lg border border-muted bg-card p-8 shadow-md transition-all hover:scale-[1.02] hover:shadow-lg">
      <div className="flex size-12 items-center justify-center rounded-full border-2 border-primary bg-primary/20 text-primary transition-all group-hover:scale-[1.05]">
        {icon}
      </div>

      <h3 className="mt-2 text-xl font-semibold text-foreground">{title}</h3>
      <p className="text-center text-muted-foreground">{description}</p>
      <div className="mt-4">
        <Image
          src={imageSrc}
          alt={title}
          width={800}
          height={450}
          className="rounded-lg border"
        />
      </div>
    </div>
  );
};

export default function Feature110() {
  const steps = [
    {
      number: 1, // Add number property
      icon: <Zap className="size-6" />,
      title: "Accelerated Deployment",
      description:
        "Deploy at unparalleled speed and track progress in real time.",
      imageSrc:
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      number: 2, // Add number property
      icon: <ShieldCheck className="size-6" />,
      title: "Fortified Security",
      description:
        "Guarantee the integrity of your deployments with robust security measures.",
      imageSrc:
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      number: 3, // Add number property
      icon: <UploadCloud className="size-6" />,
      title: "Streamlined Rollbacks",
      description:
        "Revert to earlier versions seamlessly with our intuitive interface.",
      imageSrc:
        "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  return (
    <section className="bg-background py-24">
      <div className="container">
        <div className="mx-auto mb-16 max-w-lg text-center">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
            Master Your Workflow
          </h2>
          <p className="mt-4 text-muted-foreground">
            Optimize your processes with our powerful toolkit designed for
            maximum efficiency.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <FeatureStep key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
}
