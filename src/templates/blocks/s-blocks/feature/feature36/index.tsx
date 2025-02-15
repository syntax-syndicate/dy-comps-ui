import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface CardData {
  tag?: string;
  title: string;
  subtitle?: string;
  description: string;
  featured?: boolean;
}

export default function Feature36() {
  const cardData: CardData[] = [
    {
      tag: "Deep Dive",
      title: "Unlocking Key Insights: A Groundbreaking Study",
      subtitle: "Case Study",
      description:
        "We tackled a complex problem, achieving transformative results and setting new standards.",
      featured: true,
    },
    {
      title: "Client Transformation: A Success Story",
      subtitle: "Client Case Study",
      description:
        "Learn how we partnered with a client to overcome challenges and achieve remarkable growth.",
    },
    {
      title: "Decoding a Complex Concept: Research Insights",
      subtitle: "Research Highlight",
      description:
        "Explore our in-depth research, uncovering key insights for your next steps.",
    },
    {
      title: "Turning Challenges into Triumphs: A Client Journey",
      description:
        "Discover how we helped a client navigate hurdles and achieve significant success.",
    },
    {
      title: "The New Tech Revolution: What You Need to Know",
      description:
        "Stay ahead of the curve with our analysis of a key emerging trend.",
    },
    {
      title: "Beyond the Surface: Unveiling Hidden Insights",
      description:
        "We delved deep to uncover a critical insight that can reshape your strategy.",
    },
  ];

  const featuredCard = cardData.find((card) => card.featured);
  const normalCards = cardData.filter((card) => !card.featured);

  return (
    <section className="bg-background py-16 text-foreground">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {featuredCard && (
            <Card className="group lg:col-span-2 lg:row-span-2">
              <CardContent className="h-full items-start rounded-lg border border-transparent bg-accent p-12 hover:cursor-pointer hover:rounded-lg hover:border-primary lg:p-20">
                <div className="flex flex-col gap-8">
                  {featuredCard.tag && (
                    <div className="inline-flex w-fit items-center rounded-full border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                      {featuredCard.tag}
                    </div>
                  )}
                  <div className="flex flex-col gap-6">
                    {featuredCard.subtitle && (
                      <p className="text-base lg:text-lg lg:font-medium">
                        {featuredCard.subtitle}
                      </p>
                    )}
                    <h3 className="text-xl font-medium lg:text-5xl">
                      {featuredCard.title}
                    </h3>
                    <p className="lg:text-lg lg:font-medium">
                      {featuredCard.description}
                    </p>
                  </div>
                  <p className="flex gap-2 font-medium text-primary group-hover:underline">
                    Embark on the Journey <ArrowRight className="size-5" />
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
          {normalCards.map((card, index) => (
            <Card key={index} className="group">
              <CardContent className="h-full items-start rounded-lg border border-transparent bg-accent p-12 hover:cursor-pointer hover:rounded-lg hover:border-primary">
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-6">
                    {card.subtitle && <p>{card.subtitle}</p>}
                    <h3 className="text-xl font-medium">{card.title}</h3>
                  </div>
                  <p className="flex items-center gap-2 font-medium text-primary group-hover:underline">
                    Dive Deeper <ArrowRight className="size-5" />
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
