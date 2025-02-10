import { RiTwitterXLine, RiGithubFill } from "react-icons/ri";
import { TbMail } from "react-icons/tb";
import { siteConfig } from "./site-config";
import { type IconType } from "react-icons";

export const SOCIALS: {
  title: string;
  url: string;
  icon: IconType;
}[] = [
  {
    title: "Github",
    url: siteConfig.github.repo,
    icon: RiGithubFill,
  },
  {
    title: "X (Twitter)",
    url: "https://x.com/o_immi",
    icon: RiTwitterXLine,
  },
  {
    title: "GMail",
    url: "mailto:" + siteConfig.email,
    icon: TbMail,
  },
] as const;
