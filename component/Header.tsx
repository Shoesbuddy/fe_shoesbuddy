"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-center gap-8 px-6">
        <Link className="nav-link" href="/">
          Home
        </Link>
        <Link className="nav-link" href="/shop">
          SHOP NOW
        </Link>
        <Link className="nav-link" href="/categories">
          CATEGORIES
        </Link>
        <Link className="nav-link" href="/product">
          PRODUCT
        </Link>
        <Link className="nav-link" href="/contact-us">
          CONTACT US
        </Link>
        <Link className="nav-link" href="/gallery">
          GALLERY
        </Link>
      </nav>
    </header>
  );
}
