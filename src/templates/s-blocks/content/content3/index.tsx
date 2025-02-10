import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function Content3() {
  return (
    <div className="container mx-auto py-16">
      <section className="space-y-6 pb-12">
        <div className="space-y-2">
          <p className="text-sm font-medium uppercase tracking-wide text-primary">
            About us
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            On a mission to empower remote teams
          </h1>
          <p className="text-lg text-muted-foreground">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
            arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
            feugiat egestas.
          </p>
        </div>
      </section>

      <section className="grid gap-12 pb-12 lg:grid-cols-2">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            Our mission
          </h2>
          <div className="space-y-4 text-muted-foreground">
            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p>
            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id.
            </p>
            <p>
              Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
              odio id et. Id blandit molestie auctor fermentum dignissim. Lacus
              diam tincidunt ac cursus in vel. Mauris varius vulputate et
              ultrices hac adipiscing egestas. Iaculis convallis ac tempor et
              ut. Ac lorem vel integer orci.
            </p>
          </div>
        </div>
        <div className="grid gap-4 rounded-lg bg-accent p-4 md:gap-6">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="Team collaboration"
            width={600}
            height={400}
            className="aspect-[4/3] rounded-lg bg-muted object-cover"
          />
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Office space"
              width={280}
              height={200}
              className="aspect-[4/3] rounded-lg bg-muted object-cover"
            />
            <Image
              src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
              alt="Remote work"
              width={280}
              height={200}
              className="aspect-[4/3] rounded-lg bg-muted object-cover"
            />
          </div>
        </div>
      </section>

      <Separator />

      <section className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-2">
          <h3 className="text-4xl font-bold tracking-tight text-foreground">
            $150M
          </h3>
          <p className="text-sm text-muted-foreground">Raised</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-4xl font-bold tracking-tight text-foreground">
            30K
          </h3>
          <p className="text-sm text-muted-foreground">Companies</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-4xl font-bold tracking-tight text-foreground">
            1.5M
          </h3>
          <p className="text-sm text-muted-foreground">Deals Closed</p>
        </div>
        <div className="space-y-2">
          <h3 className="text-4xl font-bold tracking-tight text-foreground">
            200M
          </h3>
          <p className="text-sm text-muted-foreground">Leads Generated</p>
        </div>
      </section>
    </div>
  );
}
