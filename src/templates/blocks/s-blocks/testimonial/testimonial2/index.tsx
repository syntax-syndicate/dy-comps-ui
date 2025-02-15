import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  quote: string;
  author: string;
  position: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "This platform revolutionized our hiring process. We found amazing talent in record time!",
    author: "Sarah Johnson",
    position: "HR Director, TechCorp",
    rating: 5,
  },
  {
    quote:
      "The quality of candidates exceeded our expectations. Highly recommended!",
    author: "Michael Chen",
    position: "CEO, StartupX",
    rating: 5,
  },
  {
    quote:
      "Efficient, cost-effective, and user-friendly. It's a game-changer for SMEs.",
    author: "Emily Rodriguez",
    position: "Founder, GrowthLabs",
    rating: 4,
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-background py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            See what our clients have to say about their hiring experience with
            us.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card text-card-foreground">
              <CardContent className="space-y-4 p-6">
                <p className="text-lg italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`size-5 ${
                        i < testimonial.rating
                          ? "fill-primary text-primary"
                          : "text-muted"
                      }`}
                    />
                  ))}
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.position}
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
