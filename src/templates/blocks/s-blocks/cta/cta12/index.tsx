import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";

export default function CallToAction12() {
  return (
    <section className="py-32">
      <div className="container">
        <div className="flex h-[620px] items-center justify-center rounded-lg bg-[linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6)),url('https://images.unsplash.com/photo-1732740676396-ece9a9148342?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
          <div className="flex flex-col gap-8 p-4 text-center">
            <div className="flex items-center justify-center gap-2 text-2xl font-medium text-white">
              <Zap className="h-full w-7 text-primary" />
              Faster, Better, Stronger.
            </div>
            <h2 className="text-5xl font-bold text-white">Build your brand.</h2>
            <div className="flex flex-col justify-center gap-2 sm:flex-row">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
