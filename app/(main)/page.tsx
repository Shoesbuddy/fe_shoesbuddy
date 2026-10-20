import { ContactSection, GallerySection, HeroSection, ProductSection } from "@/component";
import { Fragment } from "react/jsx-runtime";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shoe Cleaning Kits & Sneaker Cleaner UK",
  description:
    "Give your favourite trainers a fresh start with Shooz Buddy shoe cleaning kits. Explore our products, see the cleaning results and shop online.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Shoe Cleaning Kits & Sneaker Cleaner UK | Shooz Buddy",
    description:
      "Explore Shooz Buddy shoe cleaning kits, see the cleaning results and find your next shoe care essential.",
    url: "/",
  },
};

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      {/* <CategoriesSection /> */}
      <ProductSection />
      <GallerySection />
      <ContactSection />
    </Fragment>
  );
}
