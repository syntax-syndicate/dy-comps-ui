import { Mail, Phone, MapPin, Github } from "lucide-react";
import Image from "next/image";

export default function About10() {
  return (
    <section className="container mx-auto py-16">
      <div className="mb-12 grid gap-8 md:grid-cols-[2fr,1fr]">
        <div className="prose prose-lg max-w-none">
          <h2 className="tracking-tights mb-6 text-5xl font-bold">
            <span className="dark:invert">Welcome to </span>
            <span className="text-primary">DY Comps</span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Welcome to BlockCraft Studios, where we turn complex business
            challenges into simple, elegant solutions. We&apos;re not just
            another development shop – we&apos;re master builders in the digital
            realm.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            Our unique approach revolves around our proprietary
            &quot;BlockCraft&quot; system. We&apos;ve deconstructed common
            business processes and rebuilt them as flexible, interchangeable
            blocks of code. This allows us to rapidly assemble custom solutions
            that perfectly fit each client&apos;s needs, like digital Lego for
            your business.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            From e-commerce platforms that assemble themselves based on your
            inventory, to CRM systems that grow with your client base, our
            blocks adapt and evolve. We&apos;ve helped startups scale to
            enterprise level and aided Fortune 500 companies in staying agile in
            a rapidly changing digital landscape.
          </p>

          <p className="text-lg leading-relaxed text-muted-foreground">
            At BlockCraft, we believe that great software should be both
            powerful and playful. Our team of developers, designers, and digital
            architects bring a spirit of curiosity and creativity to every
            project. We&apos;re not just building software; we&apos;re crafting
            the future of business, one block at a time.
          </p>
        </div>

        <div className="space-y-8">
          <div className="flex h-96 w-full items-center justify-center rounded-lg bg-accent">
            <Image
              src="/logo.svg"
              alt="BlockCraft Studios Logo"
              width={220}
              height={220}
              className="dark:invert"
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-2 text-sm text-foreground">
              <p className="flex items-center">
                <Mail className="mr-2 size-4 text-primary" /> example@gmail.com
              </p>
              <p className="flex items-center">
                <Phone className="mr-2 size-4 text-primary" /> +1 (555) 123-4567
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2 size-4 text-primary" /> San Francisco,
                CA
              </p>
              <p className="flex items-center">
                <Github className="mr-2 size-4 text-primary" /> @programming-with-ia
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative aspect-video w-full overflow-hidden rounded-lg">
        <div className="absolute inset-0 flex items-center justify-center bg-accent p-8">
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="BlockCraft Studios team collaborating"
            width={1280}
            height={720}
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
