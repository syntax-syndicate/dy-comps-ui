import Image from "next/image";

export default function Logo10() {
  const companies = [
    {
      name: "Transistor",
      logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "Reform",
      logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "Tuple",
      logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "SavvyCal",
      logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
    {
      name: "Statamic",
      logo: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  ];

  return (
    <section className="bg-background py-12">
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-8">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex items-center justify-center"
            >
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-8 w-auto opacity-75 grayscale transition-all hover:opacity-100 hover:grayscale-0"
                height={32}
                width={100}
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center text-muted-foreground">
          <p className="text-sm">
            Over 2500 companies use our tools to better their business.{" "}
            <a
              href="#"
              className="inline-flex items-center text-primary hover:underline"
            >
              Read our customer stories
              <svg
                className="ml-1 size-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
