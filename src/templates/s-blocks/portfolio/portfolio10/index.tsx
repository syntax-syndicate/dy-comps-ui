import { Card } from "@/components/ui/card";
import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="relative grid gap-12 md:grid-cols-2">
        {/* Content Section */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            A little bit about me
          </h1>

          <div className="space-y-4 text-muted-foreground">
            <p className="text-lg">
              I&apos;m a front-end developer, podcaster, creator, and Rocket
              League enthusiast 🚀. I&apos;m currently building small companies
              and crafting digital experiences at SparkBox Agency, where I get
              to bring ideas to life through code and creativity.
            </p>

            <div className="rounded-md bg-accent/50 p-4">
              <p>
                When I&apos;m not coding or podcasting, you can often find me
                exploring the great outdoors. I love hiking and discovering new
                trails, which I meticulously track and share on AllTrails.
                Nature is my escape, and every trail feels like a new adventure
                waiting to be conquered. 🌄
              </p>
            </div>

            <p>
              Alongside that, I have a competitive streak that comes out in
              driving games. Whether it&apos;s racing simulators or casual
              arcade-style games, I love the thrill of the competition and the
              precision it takes to master the virtual tracks. Sometimes, I even
              stream my gameplay to share the excitement with others. 🎮
            </p>
          </div>

          {/* Experience Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {/* Work Experience */}
            <div className="space-y-4">
              <h2 className="font-semibold">Work Experience</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <p className="font-medium">Marketing Designer</p>
                </li>
                <li>
                  <p className="font-medium">Product Designer</p>
                </li>
                <li>
                  <p className="font-medium">Product Designer</p>
                </li>
              </ul>
            </div>

            {/* Dev Stack */}
            <div className="space-y-4">
              <h2 className="font-semibold">Dev Stack</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>React/JS</li>
                <li>Information Arch</li>
                <li>God knows what tm</li>
              </ul>
            </div>

            {/* Featured On */}
            <div className="space-y-4">
              <h2 className="font-semibold">Featured On</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="underline hover:text-foreground">
                    Interface Lovers
                  </a>
                </li>
                <li>
                  <a href="#" className="underline hover:text-foreground">
                    0.4 Interview
                  </a>
                </li>
                <li>
                  <a href="#" className="underline hover:text-foreground">
                    28 Days of Web
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Image Stack */}
        <div className="relative h-[400px] md:h-auto">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            height={600}
            width={600}
            alt="Placeholder"
          />
        </div>
      </div>
    </div>
  );
}
