export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(price);
};

import { products } from "@/utils/constant";
import { CartLine } from "../type";

const cartStorageKey = "shooz-buddy-cart";
const storageUnavailableSnapshot = "__CART_STORAGE_UNAVAILABLE__";
const listeners = new Set<() => void>();

function isCartLine(value: unknown): value is CartLine {
  if (
    typeof value !== "object" ||
    value === null ||
    !("productId" in value) ||
    !("quantity" in value)
  ) {
    return false;
  }

  return (
    typeof value.productId === "string" &&
    products.some((product) => product.id === value.productId) &&
    typeof value.quantity === "number" &&
    Number.isInteger(value.quantity) &&
    value.quantity > 0
  );
}

export function readCart(): CartLine[] {
  const storedCart = window.localStorage.getItem(cartStorageKey);
  return parseCart(storedCart);
}

export function parseCart(storedCart: string | null): CartLine[] {
  if (!storedCart) return [];
  if (storedCart === storageUnavailableSnapshot) {
    throw new Error("Cart storage is unavailable.");
  }

  const parsedCart: unknown = JSON.parse(storedCart);
  if (!Array.isArray(parsedCart) || !parsedCart.every(isCartLine)) {
    throw new Error("Saved cart data is invalid.");
  }

  return parsedCart;
}

export function getCartSnapshot() {
  try {
    return window.localStorage.getItem(cartStorageKey);
  } catch {
    return storageUnavailableSnapshot;
  }
}

export function getServerCartSnapshot() {
  return null;
}

export function subscribeToCart(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

export function writeCart(cart: CartLine[]) {
  window.localStorage.setItem(cartStorageKey, JSON.stringify(cart));
  listeners.forEach((listener) => listener());
}

export function addToCart(productId: string) {
  const cart = readCart();
  const existingLine = cart.find((line) => line.productId === productId);

  if (existingLine) {
    existingLine.quantity += 1;
  } else {
    cart.push({ productId, quantity: 1 });
  }

  writeCart(cart);
}
