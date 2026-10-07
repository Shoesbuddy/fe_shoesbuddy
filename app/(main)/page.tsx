import { ContactSection, GallerySection, HeroSection, ProductSection } from "@/component";
import { Fragment } from "react/jsx-runtime";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
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
