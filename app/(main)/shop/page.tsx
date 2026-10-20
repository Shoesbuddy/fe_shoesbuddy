import ShopPage from "@/component/ShopPage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Where to Buy Shooz Buddy Shoe Care",
  description:
    "Shop Shooz Buddy shoe cleaning products through our official Shopify store or Amazon UK brand page.",
  alternates: {
    canonical: "/shop",
  },
  openGraph: {
    title: "Where to Buy Shooz Buddy Shoe Care",
    description: "Shop Shooz Buddy products through our Shopify store or Amazon UK.",
    url: "/shop",
  },
};

export default function ShopRoute() {
  return <ShopPage />;
}
