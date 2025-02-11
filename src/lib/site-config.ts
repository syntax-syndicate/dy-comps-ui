export const url = process.env.NEXT_PUBLIC_BASE_URL ?? "http://localhost:3000"; // ?? // * Production URL
// process.env.NEXT_PUBLIC_VERCEL_URL ?? // * Vercel Auto URL
// "http://localhost:3000"; // * Dev

export const siteConfig = {
  name: "DY Comps",
  nameTitle: "Dynamic Components",
  id: "dy-comps",
  email: "iafullprogrammer@gmail.com",
  keywords: [
    "boilerplate",
    "components",
    "nextjs",
    "react",
    "templates",
    "typescript",
  ],
  color: "#1491a1",
  description:
    "Elegantly and meticulously crafted React components, built with the power of Next.js, TypeScript, ShadCN, and Framer Motion for seamless performance and modern design.",
  short_desc:
    "Elegantly crafted React Components using Nextjs, Typescript, Shadcn, and Framer Motion.",
  seo: {},
  url: url,
  authors: {
    name: "immi",
    url: "",
    twitter: "https://x.com/o_immi",
    email: "iafullprogrammer@gmail.com",
    github: "https://github.com/programming-with-ia",
  },
  github: {
    profile: "https://github.com/programming-with-ia",
    repo: "https://github.com/programming-with-ia/dy-comps",
  },
  //   images: [
  //     {
  //         url: "src-1200x630.png",
  //         width: 1200,
  //         height: 630,
  //     },
  //     {
  //         url: "src-1024x512.png",
  //         width: 1024,
  //         height: 512,
  //     },
  //     {
  //         url: "src-512x512.png",
  //         width: 512,
  //         height: 512,
  //     },
  //   ]
} as const;
