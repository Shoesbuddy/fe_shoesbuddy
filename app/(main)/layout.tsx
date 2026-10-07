import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Footer, Header } from "@/component";
import ContextProvider from "@/context";
import { ScrollAnimations, SmoothScroll } from "@/utils";

const siteUrl = new URL("https://shoosbuddy.co.uk");

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: siteUrl,
  title: {
    default: "Shoe Cleaning Kits & Shoe Care Products | Shooz Buddy",
    template: "%s | Shooz Buddy",
  },
  description:
    "Give your favourite shoes a fresh start with Shooz Buddy shoe cleaning kits and care products. Simple at-home shoe care for the pairs you love.",
  applicationName: "Shooz Buddy",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Shooz Buddy",
    title: "Shoe Cleaning Kits & Shoe Care Products | Shooz Buddy",
    description:
      "Give your favourite shoes a fresh start with Shooz Buddy shoe cleaning kits and care products.",
    images: [
      {
        url: "/images/beforeafter.jpeg",
        alt: "Shooz Buddy shoe cleaning foam beside a before-and-after sneaker clean",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoe Cleaning Kits & Shoe Care Products | Shooz Buddy",
    description:
      "Give your favourite shoes a fresh start with Shooz Buddy shoe cleaning kits and care products.",
    images: ["/images/beforeafter.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shooz Buddy",
  url: siteUrl.href,
  email: "info@shoosbuddy.co.uk",
  telephone: "+447818313637",
  sameAs: ["https://www.instagram.com/sh00zbuddy?stkn=Nzk0bHFjcnBwa3Mz"],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+447818313637",
    contactType: "customer support",
    availableLanguage: "English",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen overflow-x-hidden" cz-shortcut-listen="true">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <SmoothScroll />
        <ScrollAnimations />
        <ContextProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
