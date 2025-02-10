import Image from "next/image";
import { ArrowRight, CircleCheck } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const tabData = [
  {
    value: "product",
    label: "Product",
    content: {
      title: "Unlock the Power of Seamless Integration",
      description:
        "Dive into a world where our pre-built components and features become the building blocks of your next great project, accelerating your development journey.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      features: [
        "Seamless Integrations",
        "Modular Components",
        "Reusable Blocks",
        "Customizable Templates",
      ],
      learnMoreLink: "#product",
    },
  },
  {
    value: "services",
    label: "Services",
    content: {
      title: "Crafting Bespoke Digital Experiences",
      description:
        "Let us tailor our product to your unique needs. Our expert services ensure a perfect fit, providing you with a solution that's as unique as your vision.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      features: [
        "Personalized Consultation",
        "Bespoke Implementation",
        "Comprehensive Training",
        "Dedicated Support",
      ],
      learnMoreLink: "#services",
    },
  },
  {
    value: "company",
    label: "Company",
    content: {
      title: "Pioneering the Future of Web Development",
      description:
        "Our mission is to empower creators and innovators. We're committed to delivering cutting-edge tools and solutions that redefine the boundaries of web development.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      features: [
        "Forward-Thinking Innovation",
        "Unwavering Reliability",
        "Customer-Centric Approach",
        "Sustainable Practices",
      ],
      learnMoreLink: "#company",
    },
  },
  {
    value: "portfolio",
    label: "Portfolio",
    content: {
      title: "Celebrating Milestones, Inspiring Success",
      description:
        "Discover how our solutions have transformed challenges into triumphs across diverse industries. Witness the impact of our work through compelling success stories.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      features: [
        "In-Depth Case Studies",
        "Client Testimonials",
        "Tailored Industry Solutions",
        "Measurable Results",
      ],
      learnMoreLink: "#portfolio",
    },
  },
  {
    value: "blog",
    label: "Blog",
    content: {
      title: "Your Hub for Web Development Wisdom",
      description:
        "Immerse yourself in the latest trends, expert tips, and best practices. Stay ahead of the curve with our insightful content, curated for the modern web developer.",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
      features: [
        "Hands-On Tutorials",
        "Latest Industry News",
        "Proven Best Practices",
        "In-Depth Tech Reviews",
      ],
      learnMoreLink: "#blog",
    },
  },
];

export default function Component() {
  return (
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="mx-auto flex max-w-screen-md flex-col items-center gap-6">
          <h2 className="text-center text-3xl font-semibold text-foreground lg:text-5xl">
            Discover our most
            <br />
            <div className="text-primary"> Comprehensive Offerings</div>
          </h2>
          <p className="text-balance text-center text-muted-foreground lg:text-xl">
            Explore our range of products, services, and resources designed to
            elevate your web development experience.
          </p>
        </div>
        <div className="mt-24">
          <Tabs defaultValue="product" className="mx-auto w-full">
            <TabsList className="flex h-auto flex-wrap justify-center gap-2 bg-muted p-2">
              {tabData.map((tab) => (
                <TabsTrigger
                  key={tab.value}
                  value={tab.value}
                  className="rounded-sm px-3 py-1.5 text-sm font-medium hover:bg-background md:text-base"
                >
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {tabData.map((tab) => (
              <TabsContent
                key={tab.value}
                value={tab.value}
                className="mx-auto mt-8 max-w-screen-lg"
              >
                <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2">
                  <div className="">
                    <h3 className="mb-4 text-2xl font-semibold text-foreground md:text-4xl">
                      {tab.content.title}
                    </h3>
                    <p className="text-xl text-muted-foreground">
                      {tab.content.description}
                    </p>
                    <ul className="mt-8 grid grid-cols-1 gap-2 lg:grid-cols-2">
                      {tab.content.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <CircleCheck className="size-4 text-primary" />
                          <span className="font-medium text-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <a href={tab.content.learnMoreLink} className="mt-12">
                        Learn more
                        <ArrowRight className="size-4" />
                      </a>
                    </Button>
                  </div>
                  <Image
                    src={tab.content.image}
                    alt={tab.content.title}
                    width={600}
                    height={400}
                    className="order-first max-h-[400px] w-full rounded-lg object-cover md:order-last"
                  />
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
