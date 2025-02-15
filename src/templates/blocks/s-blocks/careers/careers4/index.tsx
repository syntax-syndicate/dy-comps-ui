import { Button } from "@/components/ui/button";

interface Job {
  title: string;
  location: string;
  link: string;
}

interface JobCategory {
  category: string;
  openings: Job[];
}

export default function Careers4() {
  const jobs: JobCategory[] = [
    {
      category: "Innovation & Product Development",
      openings: [
        {
          title: "Lead Alchemist (AI Research)",
          location: "The Quantum Lab, Switzerland",
          link: "#",
        },
        {
          title: "Stellar Cartographer (UI/UX Designer)",
          location: "The Observatory, Iceland",
          link: "#",
        },
        {
          title: "Cybernetic Systems Engineer",
          location: "Neo-Kyoto, Japan",
          link: "#",
        },
        {
          title: "Bio-Integrated Designer (Hardware)",
          location: "The Green Sanctuary, Brazil",
          link: "#",
        },
      ],
    },
    {
      category: "Galactic Outreach & Engagement",
      openings: [
        {
          title: "Interstellar Storyteller (Content Creator)",
          location: "The Cosmic Library, Egypt",
          link: "#",
        },
        {
          title: "Chief Ambassador (Social Media Lead)",
          location: "The Silk Road Hub, Uzbekistan",
          link: "#",
        },
        {
          title: "Global Community Architect",
          location: "The Floating Islands, Indonesia",
          link: "#",
        },
      ],
    },
    {
      category: "Operations & Logistics",
      openings: [
        {
          title: "Dimensional Logistics Specialist",
          location: "The Nexus Port, Dubai",
          link: "#",
        },
        {
          title: "Quantum Resource Coordinator",
          location: "The Crystal Mines, South Africa",
          link: "#",
        },
      ],
    },
  ];

  return (
    <section className="py-32">
      <div className="container mx-auto">
        <h1 className="text-left text-3xl font-medium md:text-4xl">
          Explore Our Career Constellation
        </h1>
        <div className="mt-6 flex flex-col gap-16 md:mt-14">
          {jobs.map((jobCategory) => (
            <div key={jobCategory.category} className="grid">
              <h2 className="border-b pb-4 text-xl font-bold">
                {jobCategory.category}
              </h2>
              {jobCategory.openings.map((job) => (
                <div
                  key={job.title}
                  className="group flex items-center justify-between border-b py-4"
                >
                  <a
                    href={job.link}
                    className="font-semibold text-foreground transition-colors duration-200 hover:text-primary"
                  >
                    {job.title}
                  </a>
                  <Button variant="outline" size="sm">
                    {job.location}
                  </Button>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
