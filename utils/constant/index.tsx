import { Product } from "../type";

export const navItems = [
  { href: "/", label: "Home" },
  // { href: "/#products", label: "Shop Now" },
  // { href: "/#categories", label: "Categories" },
  { href: "/#products", label: "Product" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#contact-us", label: "Contact Us" },
  { href: "/cart", label: "Cart" },
] as const;

export const products: Product[] = [
  {
    id: "premium-shoe-cleaning-kit",
    name: "Premium Shoe Cleaning Kit",
    price: 0.0,
    description: "A complete care set for deep cleaning and restoring your favorite pairs.",
    image: "/images/completepremiumcleaningkit.jpeg",
  },
  {
    id: "shoe-care-solution",
    name: "Shoe Care Solution",
    price: 0.0,
    description: "Gentle formula designed to clean, protect, and refresh leather and fabric shoes.",
    image: "/images/shoescleaningsolutions.png",
  },
] as const;

export const whatsappNumber = "447818313637" as const;
export const contactEmail = "info@shoosbuddy.co.uk" as const;
