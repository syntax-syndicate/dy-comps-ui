import { ArrowRight, Star, Quote } from "lucide-react";

export default function FeatureTestimonials() {
  const testimonials = [
    {
      quote:
        "Implementing this solution transformed our workflow. The efficiency gains were immediate and substantial.",
      author: "Alex Rivera",
      title: "CTO, InnovateTech",
      rating: 5,
      featured: true,
    },
    {
      quote:
        "User-friendly interface coupled with powerful features. A game-changer for our team.",
      author: "Samantha Chen",
      title: "Product Manager, FutureSoft",
      rating: 4,
      featured: false,
    },
    {
      quote:
        "Outstanding support team. They went above and beyond to ensure our success.",
      author: "Marcus Johnson",
      title: "Operations Director, GlobalCorp",
      rating: 5,
      featured: false,
    },
  ];

  return (
    <section className="bg-gradient-to-br from-primary/10 via-background to-primary/10 py-32">
      <div className="container">
        <h2 className="mb-14 text-center text-4xl font-bold lg:text-6xl">
          Empowering <span className="text-primary">Innovators</span> Worldwide
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`rounded-lg ${
                testimonial.featured
                  ? "bg-accent p-8 md:col-span-2 lg:col-span-2 lg:row-span-2"
                  : "bg-card p-6"
              }`}
            >
              <div
                className={`flex h-full flex-col justify-between ${
                  testimonial.featured ? "gap-8" : "gap-6"
                }`}
              >
                <div className="space-y-4">
                  <Quote
                    className={`size-8 ${
                      testimonial.featured ? "text-primary" : "text-primary"
                    }`}
                  />
                  <p
                    className={`${
                      testimonial.featured ? "text-xl lg:text-2xl" : "text-lg"
                    } font-medium italic`}
                  >
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-1">
                    {Array.from({ length: testimonial.rating }, (_, i) => (
                      <Star
                        key={i}
                        className="size-4 fill-current text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <a
                    href="/"
                    className="group inline-flex items-center gap-2 transition-colors hover:text-primary"
                  >
                    <span
                      className={`${
                        testimonial.featured
                          ? "text-primary group-hover:underline"
                          : "text-muted-foreground"
                      }`}
                    >
                      {testimonial.title}
                    </span>
                    <ArrowRight
                      className={`size-4 transition-transform group-hover:translate-x-1 ${
                        testimonial.featured ? "text-primary" : "text-primary"
                      }`}
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
