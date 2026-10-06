import {
  CategoriesSection,
  ContactSection,
  GallerySection,
  HeroSection,
  ProductSection,
} from "@/component";
import { Fragment } from "react/jsx-runtime";

export default function Home() {
  return (
    <Fragment>
      <HeroSection />
      <CategoriesSection />
      <ProductSection />
      <ContactSection />
      <GallerySection />
    </Fragment>
  );
}
