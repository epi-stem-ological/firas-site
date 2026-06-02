import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: `${DATA.name} | Technology Leadership and AI Adoption`,
    template: `%s | ${DATA.name}`,
  },
  description:
    "Firas Freajah is a technology solutions leader focused on enterprise IT, event-critical operations, practical AI adoption, cybersecurity, cloud infrastructure, and cross-functional execution.",
  applicationName: DATA.name,
  authors: [{ name: DATA.name, url: DATA.url }],
  creator: DATA.name,
  publisher: DATA.name,
  keywords: [
    "Firas Freajah",
    "enterprise IT",
    "automation",
    "AI governance",
    "technology solutions",
    "cloud infrastructure",
    "cybersecurity",
    "event technology",
    "technology leadership",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${DATA.name} | Technology Leadership and AI Adoption`,
    description:
      "A public home for Firas Freajah's work across enterprise technology, operations, revenue enablement, AI adoption, and leadership.",
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name} | Technology Leadership and AI Adoption`,
    description:
      "Enterprise technology, operations, AI adoption, revenue enablement, and leadership.",
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: DATA.name,
    url: DATA.url,
    image: new URL(DATA.avatarUrl, DATA.url).toString(),
    jobTitle: "Technology solutions leader",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
    knowsAbout: [
      "Enterprise IT",
      "Technology operations",
      "AI adoption",
      "Cloud infrastructure",
      "Cybersecurity",
      "Event technology",
      "Technology leadership",
    ],
    sameAs: Object.values(DATA.contact.social)
      .filter((social) => social.url.startsWith("http"))
      .map((social) => social.url),
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative overflow-x-hidden",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <div className="pointer-events-none fixed inset-0 -z-20 bg-[linear-gradient(115deg,rgba(20,184,166,0.12),transparent_24%,rgba(245,158,11,0.1)_48%,transparent_72%),linear-gradient(to_bottom,rgba(255,255,255,0.95),rgba(245,247,250,0.65)_45%,rgba(255,255,255,1))] dark:bg-[linear-gradient(115deg,rgba(20,184,166,0.18),transparent_25%,rgba(245,158,11,0.12)_50%,transparent_72%),linear-gradient(to_bottom,rgba(15,16,20,1),rgba(21,23,28,0.96)_50%,rgba(12,13,16,1))]" />
            <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(15,23,42,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]" />
            <div className="absolute inset-0 top-0 left-0 right-0 h-[180px] overflow-hidden z-0">
              <FlickeringGrid
                className="h-full w-full"
                squareSize={2}
                gridGap={2}
                maxOpacity={0.18}
                style={{
                  maskImage: "linear-gradient(to bottom, black, transparent)",
                  WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
                }}
              />
            </div>
            <div className="relative z-10 mx-auto w-full max-w-6xl px-5 py-10 pb-28 sm:px-8 sm:py-16 lg:px-10">
              {children}
            </div>
            <Navbar />
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
