import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { Viewport, type Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Suspense } from "react";
import { ProgressBar } from "@lexz451/next-nprogress";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import ThemeEditor from "@/components/home/theme-editor";
import { siteConfig } from "@/lib/site-config";
import { OUrl, routes } from "@/lib/routes";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: "%s | " + siteConfig.name,
  },
  description: siteConfig.short_desc,
  authors: siteConfig.authors,
  generator: siteConfig.authors.name,
  keywords: [...siteConfig.keywords],
  publisher: siteConfig.authors.name,

  applicationName: siteConfig.name,
  appleWebApp: true,

  alternates: {
    types: {
      "text/html": [
        { url: new OUrl(siteConfig.url, routes.home), title: "Home" },
        {
          url: new OUrl(siteConfig.url, [routes.templates]),
          title: "Lock Screen",
        },
        { url: siteConfig.github.repo, title: "Source Code (Github)" },
      ],
    },
  },

  openGraph: {
    description: siteConfig.description,
    siteName: siteConfig.name,
    emails: siteConfig.authors.email,
    type: "website",
    // images: "/screenshots/home.png",
    url: siteConfig.url,
  },

  twitter: {
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@o_immi",
    creatorId: "1813232551131291651",
    // images: "/screenshots/home.png",
  },
};

export const viewport: Viewport = {
  themeColor: siteConfig.color,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="customScrollBar dark h-full">
      <body
        className={`flex min-h-full max-w-[100vw] flex-col ${GeistSans.className}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={true}>
            <ProgressBar
              height="2px"
              options={{
                showSpinner: false,
              }}
            />
          </Suspense>
          <ThemeEditor />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
