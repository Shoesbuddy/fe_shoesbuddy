"use client";
import ShopNowButton from "@/component/ShopNowButton";
import { addToCart, formatPrice } from "@/utils/common";
import { products } from "@/utils/constant";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

function ProductSection() {
  const router = useRouter();
  const [error, setError] = useState("");

  function handleShopNowClick(id: string) {
    try {
      addToCart(id);
      router.push("/cart");
    } catch {
      setError(
        "We couldn't save this item. Please check your browser storage settings and try again."
      );
    }
  }

  return (
    <section className="cont bg-[#111827]" id="products">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-500">
            Best sellers
          </p>
          <h2 className="mt-3 text-3xl font-bold text-amber-500 md:text-4xl">Featured products</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1">
              <div className="overflow-hidden bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={100}
                  height={100}
                  className="h-80 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h3 className="text-2xl font-semibold text-slate-900">{product.name}</h3>
                  <span className=" hidden rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                    {formatPrice(product.price)}
                  </span>
                </div>

                <p className="mb-6 text-sm leading-6 text-slate-600">{product.description}</p>

                <ShopNowButton onClick={() => handleShopNowClick(product.id)} error={error}>
                  Shop Now
                </ShopNowButton>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
