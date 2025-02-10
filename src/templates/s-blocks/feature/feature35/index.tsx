import { ArrowRight } from "lucide-react";

export default function Feature35() {
  return (
    <section className="bg-accent py-32 text-foreground">
      <div className="container">
        <div className="grid gap-10 rounded-lg bg-background p-6 py-16 lg:grid-cols-4">
          <h2 className="row-span-2 h-min border-b-4 pb-4 text-3xl font-semibold">
            Built by the best and brightest
          </h2>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold lg:mb-8">
                Technologies to scale
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit architecto atque consequuntur perferendis ratione
                dolorem vitae, doloribus facere.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center text-primary hover:underline"
            >
              <span>Learn more</span>
              <ArrowRight className="ml-2 size-5" />
            </a>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold lg:mb-8">
                Proven methodologies
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit architecto atque consequuntur perferendis ratione
                dolorem vitae, doloribus facere.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center text-primary hover:underline"
            >
              <span>Learn more</span>
              <ArrowRight className="ml-2 size-5" />
            </a>
          </div>
          <div className="flex flex-col gap-6">
            <div>
              <h3 className="mb-2 text-lg font-semibold lg:mb-8">
                A culture of innovation
              </h3>
              <p className="text-muted-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit architecto atque consequuntur perferendis ratione
                dolorem vitae, doloribus facere.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center text-primary hover:underline"
            >
              <span>Learn more</span>
              <ArrowRight className="ml-2 size-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
