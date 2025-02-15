import { ExternalLink } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Grid } from "../grid-svg";
import Logo from "../logo";
import { Link } from "@lexz451/next-nprogress";
import { siteConfig } from "@/lib/site-config";
import { routes } from "@/lib/routes";
import Logos from "@/templates/blocks/others/logos/logos-site";

const HeaderView = () => {
  return (
    <section className="md:py-18 container overflow-hidden py-12 lg:py-24">
      <Grid size={50} />
      <div className="mx-auto flex max-w-5xl flex-col items-center">
        <div className="z-10 flex flex-col items-center gap-6 text-center">
          <Logo className="size-28" />
          <Badge variant="outline" className="bg-background">
            {siteConfig.nameTitle}
          </Badge>
          <div>
            <h1 className="mb-6 text-pretty text-2xl font-bold lg:text-5xl">
              Build your next project with{" "}
              <span
                title={siteConfig.nameTitle}
                className="whitespace-nowrap text-primary-foreground highlight highlight-primary highlight-variant-11"
              >
                {siteConfig.name}
              </span>
            </h1>
            <p className="text-muted-foreground lg:text-xl">
              {siteConfig.description}
            </p>
          </div>
          <div className="mt-4 flex justify-center gap-2">
            <Button>Get Started</Button>
            <Button asChild variant="outline">
              <Link href={routes.templates}>
                All Templates <ExternalLink className="ml-2 h-4" />
              </Link>
            </Button>
          </div>
          <Logos />
        </div>
      </div>
    </section>
  );
};

export default HeaderView;
