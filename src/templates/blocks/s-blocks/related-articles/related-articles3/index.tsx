import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

const articles = [
  {
    title: "The Rise of Edge Computing in IoT",
    description:
      "Explore how edge computing is revolutionizing the Internet of Things landscape, bringing faster processing and improved security.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    readTime: "7 minutes",
  },
  {
    title: "AI-Driven Software Development",
    description:
      "Discover how artificial intelligence is transforming the software development process, from code generation to bug prediction.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    readTime: "10 minutes",
  },
  {
    title: "The Future of Quantum Computing",
    description:
      "Delve into the world of quantum computing and its potential to solve complex problems that are beyond the reach of classical computers.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    readTime: "8 minutes",
  },
  {
    title: "Blockchain in Supply Chain Management",
    description:
      "Learn how blockchain technology is enhancing transparency, traceability, and efficiency in global supply chain networks.",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    readTime: "9 minutes",
  },
];

export default function RelatedArticles() {
  return (
    <aside
      aria-label="Related articles"
      className="bg-background py-8 lg:py-24"
    >
      <div className="container mx-auto">
        <h2 className="mb-6 text-2xl font-bold text-foreground lg:mb-8">
          Related articles
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
          {articles.map((article, index) => (
            <Card key={index} className="flex flex-col xl:flex-row">
              <Link href="#" className="mb-2 xl:mb-0 xl:mr-5 xl:w-2/3">
                <Image
                  src={
                    article.image ||
                    "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                  }
                  alt={`Article ${index + 1}`}
                  width={300}
                  height={200}
                  className="w-full rounded-t-lg xl:rounded-lg xl:rounded-r-none"
                />
              </Link>
              <CardContent className="flex flex-col justify-center p-6 xl:w-2/3">
                <h2 className="mb-2 text-xl font-bold leading-tight text-foreground">
                  <Link href="#" className="hover:underline">
                    {article.title}
                  </Link>
                </h2>
                <p className="mb-4 text-muted-foreground">
                  {article.description}
                </p>
                <Link
                  href="#"
                  className="inline-flex items-center font-medium text-primary underline underline-offset-4 hover:no-underline"
                >
                  Read in {article.readTime}
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </aside>
  );
}
