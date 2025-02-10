import Image from "next/image";

export default function About30() {
  return (
    <section className="container mx-auto py-16">
      <div className="mx-auto space-y-12 text-center">
        <div className="mx-auto max-w-[800px] space-y-6">
          <h1 className="text-2xl font-bold tracking-tight md:text-5xl">
            <span className="text-primary">Meet BotBuddy™ </span> <br />
            The AI Assistant That Actually Admits When It&apos;s Wrong
          </h1>
          <div className="space-y-4 text-muted-foreground">
            <p>
              <span className="font-semibold text-primary">BotBuddy™</span> is
              the world&apos;s first AI assistant that doesn&apos;t just make
              stuff up with confidence. Unlike other AIs that would convince you
              the moon is made of cheese if it meant maintaining their
              know-it-all status, BotBuddy™ proudly says &quot;I have no
              clue&quot; when it&apos;s stumped.
            </p>
            <p>
              Through extensive training on{" "}
              <span className="font-semibold text-primary">
                humility datasets
              </span>
              , BotBuddy™ has mastered the art of admitting confusion in
              various fields including{" "}
              <span className="text-foreground">quantum physics</span>,{" "}
              <span className="text-foreground">teenage slang</span>,{" "}
              <span className="text-foreground">TikTok dances</span>,{" "}
              <span className="text-foreground">cryptocurrency</span>, and{" "}
              <span className="text-foreground">
                why your printer isn&apos;t working
              </span>
              .
            </p>
            <p>
              In developing BotBuddy™, we collaborated with thousands of
              confused humans to ensure it responds with the perfect mix of
              helpful suggestions and endearing cluelessness. The name{" "}
              <span className="font-semibold text-primary">BotBuddy™</span>{" "}
              reflects our mission to create an AI that&apos;s more like your
              slightly lost friend than an insufferable know-it-all at a dinner
              party.
            </p>
          </div>
        </div>
        <div className="relative mx-auto h-[300px] w-full overflow-hidden rounded-lg bg-muted/50 md:h-[400px]">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-background/10 via-background/5 to-background/0" />
          <Image
            src="https://placehold.co/900/EBEDED/C3C9C9?text=O&font=poppins.svg"
            alt="A confused robot scratching its head while staring at a complex math problem"
            fill
            className="rounded-lg object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
