"use client";
import React from "react";
import { MdMoreVert } from "react-icons/md";
import { IoImage } from "react-icons/io5";
import { RxOpenInNewWindow } from "react-icons/rx";
import {
  cn,
  getGithubUrl,
  isFalsy,
  isTemplateInfo,
  tempUrl2Id,
} from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import IconButton from "@/components/icon_button";
import { OUrl, routes } from "@/lib/routes";
import { ImageDialog } from "@/components/image-dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEmittor } from "emittor";
import { currentTemplateDataEmittor } from "../templates/_components/emittors";
import TemplateLink from "@/components/template-link";
import TemplateShowcaseNew from "./template-showcase";
import { TemplateHeader, TemplatesHeader } from "@/components/template-headers";
import { siteConfig } from "@/lib/site-config";

export function TemplatesView() {
  const [currentState, _] = useEmittor(currentTemplateDataEmittor);
  if (currentState.isLoading) return <div className="m-auto">Loading...</div>;
  const { data: templatesInfo, path } = currentState;
  const paramsTemp = path.split("/").filter(Boolean);

  if (isFalsy(templatesInfo)) {
    console.log("Data", templatesInfo);
    return <div className="m-auto">something wrong data not found</div>;
  }
  console.log("templatesInfo curent data", templatesInfo);
  const isTemplatesMainPage = path == "";
  const crumb =
    (isTemplatesMainPage ? "Templates" : paramsTemp.at(-1)) || "Untitled";
  return (
    <>
      {isTemplateInfo(templatesInfo) ? (
        <>
          <section className="grid px-6 md:px-10 lg:px-16">
            <TemplateHeader {...templatesInfo.metadata} />
            <TemplateShowcaseNew path={path} />
          </section>
        </>
      ) : (
        <>
          <TemplatesHeader
            {...(isTemplatesMainPage
              ? {
                  title: (
                    <>
                      <span>DY</span>namic <span>Compo</span>nent<span>s</span>
                    </>
                  ),
                  description: siteConfig.short_desc,
                }
              : { title: crumb })}
            details={templatesInfo.cnt}
          />
          <TemplatesGroup
            href={OUrl.joinPaths(routes.templates, path)}
            breadcrumb={crumb}
            templates={templatesInfo}
          />
        </>
      )}
    </>
  );
}

function TemplatesGroup({
  templates,
  breadcrumb,
  href,
}: {
  templates: TemplateStructure;
  breadcrumb: string;
  href: string;
}) {
  const collectionsArray: React.ReactNode[] = [];
  const templatesArray: React.ReactNode[] = [];

  Object.entries(templates.tree).forEach(([key, value]) => {
    const url = OUrl.joinPaths(href, key);
    if (isTemplateInfo(value)) {
      templatesArray.push(
        <TemplateCard name={key} href={url} templateInfo={value} />,
      );
    } else {
      collectionsArray.push(
        <CollectionCard href={url} name={key} collectionInfo={value} />,
      );
    }
  });

  return (
    <div
      id={tempUrl2Id(href)}
      className="group_shadow group relative ml-1.5 flex basis-full flex-row flex-wrap justify-between gap-6 rounded-xl border bg-background py-6 pr-6"
    >
      <div
        className="absolute right-0 top-0 h-full rounded-r-[inherit] bg-muted py-4 text-muted-foreground"
        style={{ writingMode: "vertical-lr" }}
      >
        <TemplateLink
          prefetch={false}
          href={href}
          className="sticky top-5 capitalize"
        >
          {breadcrumb}
        </TemplateLink>
      </div>
      {collectionsArray}
      {templatesArray}
    </div>
  );
}

function TemplateCard({
  templateInfo,
  name,
  href,
}: {
  templateInfo: TemplateInfo;
  name: string;
  href: string;
}) {
  // const href = OUrl.joinPaths(routes.templates, templateInfo.path) //*
  return (
    <>
      <TempCard type="Template">
        <span className="text-lg font-bold uppercase md:text-2xl">
          {templateInfo.metadata.title}
        </span>
        <p className="mb-auto flex-1 text-lg text-muted-foreground">
          {templateInfo.metadata.description}
        </p>
        {templateInfo.metadata?.tags && (
          <ul className="flex flex-wrap gap-2">
            {templateInfo.metadata.tags.map((tag, idx) => (
              <Badge role="listitem" variant={"outline"} key={idx}>
                {tag}
              </Badge>
            ))}
          </ul>
        )}
        <div className="mt-2 flex flex-wrap gap-4 lg:mt-4">
          {/* <ImageDialog
            src={"https://www.shadcnblocks.com/images/hero/testimonial7.webp"}
            alt={templateInfo.metadata.title ?? templateInfo.path}
          >
            <IconButton
              style={{ "--fit-size": "4rem" }}
              className="mt-auto self-start"
              icon={<IoImage size={20} />}
              label={"Preview"}
            />
          </ImageDialog> */}
          <IconButton
            className="mt-auto self-start"
            icon={<RxOpenInNewWindow size={20} />}
            label={"View"}
            As={TemplateLink}
            prefetch={false}
            href={OUrl.joinPaths(routes.templates, templateInfo.path)}
          />
        </div>

        {/* <img className="max-w-[50%] h-60 object-contain" src={`/images/${breadcrumb}/${value.metadata.title}.png`} alt="image" /> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="absolute bottom-2 right-2 rounded-full opacity-0 transition-opacity duration-100 group-hover/card:opacity-100 data-[state=open]:opacity-100"
              variant={"ghost"}
              size={"icon"}
            >
              <MdMoreVert />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent side="top">
            {/* //* later: show template in separate page */}
            <DropdownMenuItem asChild>
              <TemplateLink href={href}>Showcase</TemplateLink>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <a target="_blank" href={getGithubUrl(templateInfo.path)}>View on Github</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </TempCard>
    </>
  );
}

function CollectionCard({
  collectionInfo,
  name,
  href,
}: {
  collectionInfo: TemplateStructure;
  name: string;
  href: string;
}) {
  return (
    <>
      {/* <TemplatesGroup
              templates={value}
              breadcrumb={key}
              href={OUrl.joinPaths(href, key)}
            /> */}

      <TempCard
        className="gap-4"
        type="Collection"
        As={TemplateLink}
        href={href}
      >
        <span className="text-lg font-semibold uppercase underline-offset-2 group-hover/card:underline">
          {name}
        </span>

        <div className="mb-2 flex flex-wrap gap-2">
          {Object.keys(collectionInfo.tree)
            .slice(0, 15)
            .map((key, idx) => (
              <Badge variant={"outline"} key={idx}>
                {key}
              </Badge>
            ))}
          {Object.keys(collectionInfo.tree).length > 15 && (
            <Badge variant={"outline"}>...</Badge>
          )}
        </div>

        <div className="ml-auto mt-auto flex gap-4 text-sm text-muted-foreground">
          {!!collectionInfo.cnt.cols && (
            <span title="Number of Template Groups">
              Total Collections: {collectionInfo.cnt.cols}
            </span>
          )}
          {!!collectionInfo.cnt.temps && (
            <span title="Number of Templates Inside">
              Total Templates: {collectionInfo.cnt.temps}
            </span>
          )}
        </div>
      </TempCard>
    </>
  );
}

function TempCard<T extends React.ElementType>({
  className,
  children,
  type,
  As,
  ...p
}: {
  type: "Template" | "Collection";
  As?: T;
} & React.ComponentPropsWithoutRef<T>) {
  const Comp = As ?? "div";
  return (
    <Comp
      {...p}
      className={cn(
        "group/card relative mx-6 flex flex-grow flex-col justify-between gap-2 rounded-md border border-b border-l-4 border-l-primary bg-card px-4 py-4 text-card-foreground shadow-md md:w-96 lg:py-6 xl:mx-11 xl:w-[36rem]",
        className,
      )}
    >
      {/* <Badge
        title={type}
        variant="outline"
        className="absolute right-2 top-2 transition-none group-hover/card:bg-secondary group-hover/card:text-secondary-foreground"
      >
        {type[0]}
      </Badge> */}
      {children}
    </Comp>
  );
}
