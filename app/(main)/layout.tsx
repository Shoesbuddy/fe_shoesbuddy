import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Footer, Header } from "@/component";
import ContextProvider from "@/context";
import { contactEmail } from "@/utils/constant";
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
    default: "Shoe Cleaning Kits & Sneaker Cleaner UK | Shooz Buddy",
    template: "%s | Shooz Buddy",
  },
  description:
    "Shop Shooz Buddy shoe cleaning kits and sneaker cleaner in the UK. Refresh trainers, leather and fabric footwear with a simple at-home shoe care kit.",
  applicationName: "Shooz Buddy",
  creator: "Shooz Buddy",
  publisher: "Shooz Buddy",
  category: "Shopping",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: "Shooz Buddy",
    title: "Shoe Cleaning Kits & Sneaker Cleaner UK | Shooz Buddy",
    description:
      "Shop shoe cleaning kits and care products for trainers, leather and fabric shoes.",
    images: [
      {
        url: "/images/beforeafter.jpeg",
        alt: "Shooz Buddy shoe cleaning foam beside a before-and-after sneaker clean",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shoe Cleaning Kits & Sneaker Cleaner UK | Shooz Buddy",
    description:
      "Shop shoe cleaning kits and care products for trainers, leather and fabric shoes.",
    images: ["/images/beforeafter.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl.href}#organization`,
      name: "Shooz Buddy",
      url: siteUrl.href,
      email: contactEmail,
      telephone: "+447818313637",
      sameAs: ["https://www.instagram.com/sh00zbuddy?stkn=Nzk0bHFjcnBwa3Mz"],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+447818313637",
        email: contactEmail,
        contactType: "customer support",
        availableLanguage: "English",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl.href}#website`,
      url: siteUrl.href,
      name: "Shooz Buddy",
      publisher: {
        "@id": `${siteUrl.href}#organization`,
      },
      inLanguage: "en-GB",
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-screen overflow-x-hidden" cz-shortcut-listen="true">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(siteJsonLd).replace(/</g, "\\u003c"),
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
