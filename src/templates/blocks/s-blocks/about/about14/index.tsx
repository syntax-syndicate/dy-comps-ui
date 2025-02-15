import { Button } from "@/components/ui/button";
import { Star, Users, Award, ThumbsUp } from "lucide-react";
import Image from "next/image";

export default function Hero14() {
  return (
    <section className="bg-background py-12 md:py-24">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          {/* Left side with image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
                alt="Dentist with a patient"
                className="rounded-lg object-cover"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right side with content */}
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              About Us
            </h2>
            <div className="space-y-4">
              <p className="text-base text-muted-foreground sm:text-lg">
                We started back in 1999 with a motive to solve all the dental
                problems and give our patients an opportunity to smile brighter.
                Our specialists are counted among the best dentists in London
                and in the UK. With over 20 years of experience, we have helped
                over 10,000 patients restore their smile and enhance their
                confidence.
              </p>
              <div className="rounded-lg bg-accent p-6">
                {/* Icons */}
                <div className="grid grid-cols-2 gap-4 py-4">
                  <div className="flex items-center space-x-2">
                    <Users className="size-5 text-primary" />
                    <span className="text-sm font-medium">
                      10,000+ Patients
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="size-5 text-primary" />
                    <span className="text-sm font-medium">5-Star Rated</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="size-5 text-primary" />
                    <span className="text-sm font-medium">Award-Winning</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ThumbsUp className="size-5 text-primary" />
                    <span className="text-sm font-medium">
                      98% Satisfaction
                    </span>
                  </div>
                </div>

                {/* Social Proof */}
                <blockquote className="border-l-2 border-primary pl-4">
                  <p className="text-sm italic text-muted-foreground sm:text-base">
                    The team at this dental practice is exceptional. They made
                    me feel comfortable and gave me the confidence to smile
                    again. Highly recommended!
                  </p>
                  <footer className="mt-2 text-sm font-medium text-foreground">
                    — Sarah Johnson, Patient
                  </footer>
                </blockquote>

                <Button variant="default" size="lg" className="mt-4">
                  Book an Appointment
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
