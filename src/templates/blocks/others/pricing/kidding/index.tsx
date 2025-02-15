import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { OUrl } from "@/lib/routes";
import { Blocks, Gift, Star } from "lucide-react";

function Pricing() {
  return (
    <section id="pricing" className="container py-16 lg:py-32">
      <div className="mx-auto mb-8 flex max-w-[58rem] flex-col items-center justify-center gap-4 text-center lg:mb-12">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Pricing
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Just kidding! {siteConfig.name} is free and open-source.
          <br />
          You can still make your contribution!
        </p>
      </div>

      <div className="mx-auto flex max-w-[40rem] divide-x divide-solid">
        <div className="flex flex-1 flex-col justify-end gap-3 p-4 md:px-8">
          <a
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "justify-start",
            )}
            href={siteConfig.github.repo}
            target="_blank"
            rel="noreferrer"
          >
            <Star className="mr-2 h-6 w-6" />
            Give us a star
          </a>
          <a
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "justify-start",
            )}
            href={OUrl.joinPaths(
              siteConfig.github.repo,
              "blob/master/CONTRIBUTING.md",
            )}
            target="_blank"
            rel="noreferrer"
          >
            <Blocks className="mr-2 h-6 w-6" />
            Contribute
          </a>
        </div>

        <div className="flex flex-1 flex-col justify-end gap-3 p-4 md:px-8">
          <a
            href={siteConfig.authors.github}
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "justify-start",
            )}
            target="_blank"
            rel="noreferrer"
          >
            <Gift className="mr-2 h-6 w-6" />
            Support my work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
