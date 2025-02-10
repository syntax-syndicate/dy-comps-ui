import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import NextLink from "next/link";
import { IoPersonCircleOutline as PersonIcon } from "react-icons/io5";

export function TemplatesHeader({
  title,
  description,
  topChildren,
  bottomChildren,
  className,
  details,
}: {
  title: React.ReactNode;
  description?: React.ReactNode;
  bottomChildren?: React.ReactNode;
  topChildren?: React.ReactNode;
  details?: Counter;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-3 flex flex-col items-center gap-2 px-6 md:mb-6 md:px-10 lg:px-16",
        className,
      )}
    >
      {topChildren}
      <h2 className="text-2xl font-semibold uppercase tracking-wide lg:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="my-3 text-accent-foreground">{description}</p>
      )}
      {bottomChildren}
      {!!(details?.cols || details?.temps) && (
        <div className="mt-2 flex gap-4 text-muted-foreground lg:mt-3">
          {!!details.cols && (
            <Badge variant={"secondary"} title="Number of Template Groups">
              Total Collections: {details.cols}
            </Badge>
          )}
          {!!details.temps && (
            <Badge variant={"secondary"} title="Number of Templates Inside">
              Total Templates: {details.temps}
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}

export function TemplateHeader({
  title,
  description,
  tags,
  createdby,
}: TemplateMetadata) {
  return (
    <div className="my-2 flex flex-col flex-wrap justify-between gap-6 md:my-4 md:flex-row">
      <div>
        <h2 className="mb-1 text-2xl font-semibold lg:text-3xl">{title}</h2>
        <p className="my-3 text-accent-foreground">{description}</p>
        {tags && (
          <ul className="flex flex-wrap gap-2">
            {tags.map((tag, idx) => (
              <Badge role="listitem" variant={"outline"} key={idx}>
                {tag}
              </Badge>
            ))}
          </ul>
        )}
      </div>
      {createdby ? (
        <NextLink
          rel="noreferrer"
          target="_blank"
          href={
            createdby.url ||
            `https://github.com/${createdby.id ?? "programming-with-ia"}`
          }
          className="relative my-6 inline-flex h-fit items-center gap-1.5 rounded-lg px-3 py-2 text-lg underline-offset-1 accent hover:underline"
        >
          <span className="absolute left-0 top-0 -translate-y-full text-sm text-muted-foreground opacity-80">
            Created By
          </span>
          {/* https://github.com/programming-with-ia.png?size=200 */}
          {createdby.id ? (
            <img
              width={32}
              height={32}
              className="overflow-hidden rounded-full bg-secondary"
              src={`https://github.com/${createdby.id}.png?size=200`}
              alt={createdby.id + "-avatar"}
            />
          ) : (
            <PersonIcon size={32} />
          )}
          {createdby.name}
        </NextLink>
      ) : (
        <span></span>
      )}
    </div>
  );
}
