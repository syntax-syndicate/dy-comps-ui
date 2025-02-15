import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const integrations = [
  {
    name: "AWS",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Azure",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Google Cloud",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Anyscale",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "OpenAI",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Cohere",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Pulumi",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Hugging Face",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Vercel",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "LangChain",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "LlamaIndex",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Haystack",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Databricks",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Snowflake",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Confluent",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Airbyte",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "New Relic",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    name: "Datadog",
    logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function Feature111() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Part of the developer-favorite AI stack
          </h2>
          <p className="max-w-[900px] text-zinc-500 dark:text-zinc-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Use Pinecone with your favorite cloud provider, data sources,
            models, frameworks, and more.
          </p>
        </div>
        <div className="mx-auto mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="flex items-center justify-center rounded-lg border p-4"
            >
              <Image
                src={integration.logo}
                alt={`${integration.name} logo`}
                width={120}
                height={40}
                className="aspect-video object-contain"
              />
            </div>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Link
            href="/integrations"
            className="group inline-flex items-center text-sm font-medium text-primary hover:underline"
          >
            Explore integrations
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
