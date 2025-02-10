import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  initials: string;
  quote: string;
}

const testimonials = [
  {
    name: "Tom Koch",
    role: "Developer",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    initials: "TK",
    quote:
      "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
  },
  {
    name: "Alan Max",
    role: "Designer",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    initials: "AM",
    quote:
      "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
  },
  {
    name: "Kera Joo",
    role: "Support",
    image: "https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg",
    initials: "KJ",
    quote:
      "When our designs need an expert opinion or approval, I know I can rely on your agency Thank you for all your help-I will be recommending you to everyone",
  },
];

function TestimonialCard({
  name,
  role,
  image,
  initials,
  quote,
}: TestimonialProps) {
  return (
    <div className="flex flex-col items-center">
      <Card className="relative mb-6 border-none shadow-md">
        <CardContent className="px-6 pb-6 pt-10">
          <div className="absolute left-6 top-0 -translate-y-1/2 text-6xl text-primary">
            &quot;
          </div>
          <blockquote className="text-center text-muted-foreground">
            <p className="text-base">{quote}</p>
          </blockquote>
        </CardContent>
      </Card>
      <Avatar className="mb-2 size-12">
        <AvatarImage src={image} alt={name} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="text-center">
        <div className="font-semibold text-foreground">{name}</div>
        <div className="text-sm text-muted-foreground">{role}</div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-background px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">
            Testimonials
          </h2>
          <h3 className="text-3xl font-bold text-foreground">
            What our client says
          </h3>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
