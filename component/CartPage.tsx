"use client";

import {
  getCartSnapshot,
  getServerCartSnapshot,
  parseCart,
  subscribeToCart,
  writeCart,
} from "@/utils/common";
import { products } from "@/utils/constant";
import { CartLine } from "@/utils/type";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useSyncExternalStore } from "react";

export default function CartPage() {
  const cartSnapshot = useSyncExternalStore(
    subscribeToCart,
    getCartSnapshot,
    getServerCartSnapshot
  );
  const cartResult = useMemo(() => {
    try {
      return { cart: parseCart(cartSnapshot), error: "" };
    } catch {
      return {
        cart: [],
        error: "We couldn't load your saved cart. You can clear it and start again.",
      };
    }
  }, [cartSnapshot]);

  const cart = cartResult.cart;
  const [error, setError] = useState("");

  const cartProducts = useMemo(
    () =>
      cart.flatMap((line) => {
        const product = products.find((item) => item.id === line.productId);
        return product ? [{ ...line, product }] : [];
      }),
    [cart]
  );

  const shopifyUrl = products.find((product) => product.shopifyUrl)?.shopifyUrl;
  const amazonUrl = products.find((product) => product.amazonUrl)?.amazonUrl;

  const updateCart = (nextCart: CartLine[]) => {
    try {
      writeCart(nextCart);
      setError("");
    } catch {
      setError(
        "We couldn't update your cart. Please check your browser storage settings and try again."
      );
    }
  };

  const clearCart = () => {
    try {
      writeCart([]);
      setError("");
    } catch {
      setError(
        "We couldn't clear your saved cart. Please check your browser storage settings and try again."
      );
    }
  };

  return (
    <section className="cont bg-[#f8f6f2]">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">
          Your order
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Shopping cart</h1>

        {(error || cartResult.error) && (
          <div
            role="alert"
            className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-red-800">
            <p>{error || cartResult.error}</p>
            <button
              type="button"
              onClick={clearCart}
              className="mt-2 font-semibold underline underline-offset-2">
              Clear saved cart
            </button>
          </div>
        )}

        {cartProducts.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
            <p className="text-lg font-semibold text-slate-900">Your cart is empty</p>
            <p className="mt-2 text-slate-600">Choose a shoe care product to start your order.</p>
            <Link
              href="/#products"
              className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-amber-500">
              Continue shopping
            </Link>
          </div>
        ) : (
          <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_340px]">
            <div className="space-y-4">
              {cartProducts.map(({ product, productId, quantity }) => (
                <article
                  key={productId}
                  className="flex flex-col gap-5 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={120}
                    height={120}
                    className="h-28 w-full rounded-2xl bg-slate-100 object-cover sm:w-28"
                  />
                  <div className="min-w-0 flex-1">
                    <h2 className="text-lg font-semibold text-slate-900">{product.name}</h2>
                    {/* <p className="mt-1 text-sm text-slate-600">{formatPrice(product.price)} each</p> */}
                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <label className="flex items-center gap-2 text-sm font-medium text-slate-700">
                        Quantity
                        <input
                          type="number"
                          min={1}
                          step={1}
                          value={quantity}
                          onChange={(event) => {
                            const nextQuantity = Number(event.target.value);
                            if (!Number.isInteger(nextQuantity) || nextQuantity < 1) return;
                            updateCart(
                              cart.map((line) =>
                                line.productId === productId
                                  ? { ...line, quantity: nextQuantity }
                                  : line
                              )
                            );
                          }}
                          className="w-20 rounded-lg border border-slate-300 px-2 py-1.5"
                        />
                      </label>
                      <button
                        type="button"
                        onClick={() =>
                          updateCart(cart.filter((line) => line.productId !== productId))
                        }
                        className="text-sm font-semibold text-slate-500 underline underline-offset-2 transition hover:text-red-700">
                        Remove
                      </button>
                    </div>
                  </div>
                  {/* <p className="text-lg font-bold text-slate-900 sm:text-right">
                    {formatPrice(product.price * quantity)}
                  </p> */}
                </article>
              ))}
            </div>

            <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">Order summary</h2>
              <div className="mt-5 flex justify-between gap-4 border-b border-slate-200 pb-4 text-slate-600">
                {/* <span>Subtotal</span>
                <span>{formatPrice(total)}</span> */}
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                WhatsApp ordering is temporarily unavailable. Please complete your purchase through
                one of our online stores.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                {shopifyUrl && (
                  <a
                    href={shopifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#008060] px-5 py-3.5 text-center font-semibold text-white transition hover:bg-[#006e52] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#008060]">
                    Shop on Shopify
                  </a>
                )}
                {amazonUrl && (
                  <a
                    href={amazonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#ff9900] px-5 py-3.5 text-center font-semibold text-[#1b1b19] transition hover:bg-[#e88b00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#ff9900]">
                    Buy on Amazon
                  </a>
                )}
              </div>
              <p className="mt-3 text-center text-xs leading-5 text-slate-500">
                Your saved cart won&apos;t transfer to the retailer. Please add your items to your
                order on their website.
              </p>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
