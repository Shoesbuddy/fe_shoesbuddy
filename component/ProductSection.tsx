"use client";
import ProductPurchaseLinks from "@/component/ProductPurchaseLinks";
import { formatPrice } from "@/utils/common";
import { products } from "@/utils/constant";
import Image from "next/image";

function ProductSection() {
  return (
    <section className="products-section" id="products">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 lg:py-28">
        <div className="mb-10 text-center">
          <p className="reveal text-xs font-semibold uppercase tracking-[0.2em] text-[#e45e36]">
            Best sellers
          </p>
          <h2 className="reveal mt-3 text-4xl font-semibold tracking-[-0.06em] text-[#1b1b19] md:text-5xl">
            Care for your rotation.
          </h2>
          <p className="reveal mx-auto mt-4 max-w-xl text-sm leading-7 text-[#77766f] sm:text-base">
            Everything you need to bring your favourite pairs back to their best.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <article
              key={product.name}
              className="reveal group overflow-hidden rounded-md border bg-white transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_25px_65px_rgba(27,27,25,0.12)]">
              <div className="relative h-80 overflow-hidden bg-slate-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-[-0.04em] text-[#1b1b19] sm:text-2xl">
                    {product.name}
                  </h3>
                  <span className=" hidden rounded-full bg-amber-100 px-3 py-1 text-sm font-semibold text-amber-700">
                    {formatPrice(product.price)}
                  </span>
                </div>

                <p className="mb-6 text-sm leading-6 text-slate-600">{product.description}</p>

                <ProductPurchaseLinks product={product} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
