import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface Testimonial {
  content: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
}

const testimonials: Testimonial[] = [
  {
    content:
      "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
    author: {
      name: "Alisha Cooper",
      role: "Developer",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  },
  {
    content:
      "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
    author: {
      name: "Henry Jack",
      role: "UI/UX Designer",
      image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    },
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 py-12 md:px-6">
      <div className="mx-auto max-w-6xl space-y-4">
        <h2 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Hear from our clients
        </h2>
        <p className="text-center text-muted-foreground">
          Here is why you should trust us with your work achievements
        </p>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, i) => (
            <Card key={i} className="border-0 bg-muted/50">
              <CardContent className="space-y-4 p-6">
                <Quote className="size-12 text-primary" />
                <p className="text-muted-foreground">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage
                      src={testimonial.author.image}
                      alt={testimonial.author.name}
                    />
                    <AvatarFallback>
                      {testimonial.author.name[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.author.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.author.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
