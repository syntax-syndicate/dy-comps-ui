import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

const articles = [
  {
    title: "The Impact of Quantum Computing on Cybersecurity",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Exploring the Potential of Edge Computing in IoT",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "The Rise of Low-Code Platforms in Enterprise Development",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Blockchain Beyond Cryptocurrency: Real-World Applications",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "The Evolution of DevOps: From Culture to CloudOps",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
  {
    title: "Ethical Considerations in AI-Driven Decision Making",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
  },
];

export default function ReadNextSection() {
  return (
    <aside
      aria-label="Related articles"
      className="bg-background py-8 lg:py-16"
    >
      <div className="container mx-auto">
        <h2 className="mb-8 text-2xl font-bold text-foreground">Read Next</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <Card key={index}>
              <CardHeader className="p-0">
                <Link href="#" className="block">
                  <Image
                    src={
                      article.image ||
                      "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                    }
                    alt={`Article ${index + 1}`}
                    width={640}
                    height={360}
                    className="w-full rounded-t-lg"
                  />
                </Link>
              </CardHeader>
              <CardContent className="p-4">
                <h2 className="mb-2 text-xl font-bold leading-tight text-foreground">
                  <Link href="#" className="hover:underline">
                    {article.title}
                  </Link>
                </h2>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Link
                  href="#"
                  className="inline-flex items-center font-medium text-primary underline underline-offset-4 hover:no-underline"
                >
                  Read more
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </aside>
  );
}
