import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Header } from "@/component";
import ContextProvider from "@/context";
import { SmoothScroll } from "@/utils";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SHOOZ BUDDY RECLAIM YOUR SOLE.",
  description: "Shooz buddy reclaim your sole. The professional choice for at home restoration",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body
        className="min-h-screen  overflow-x-hidden overflow-y-auto snap-y snap-mandatory scroll-smooth "
        cz-shortcut-listen="true">
        <SmoothScroll />
        <ContextProvider>
          <Header />
          <main>{children}</main>
        </ContextProvider>
      </body>
    </html>
  );
}
