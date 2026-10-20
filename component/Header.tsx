"use client";

import { navItems } from "@/utils/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const updateScrollState = () => setIsScrolled(window.scrollY > 24);

    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const hasSolidBackground = isScrolled || pathname !== "/";

  return (
    <header
      className={`site-header sticky inset-x-0 top-0 z-50 transition-[background,border-color,box-shadow,color] duration-300 ${
        hasSolidBackground ? "site-header--scrolled" : ""
      }`}>
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12">
        <Link href="/" className="flex flex-col leading-none" aria-label="Shooz Buddy home">
          <span className="text-lg font-black tracking-[0.12em]">SHOOZ BUDDY</span>
          <span className="mt-1 text-[8px] font-medium tracking-[0.25em] opacity-65 uppercase">
            Care for your rotation
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`site-nav-link ${pathname === item.href ? "font-semibold" : ""}`}>
              {item.label}
            </Link>
          ))}
          <Link className="site-nav-cta" href="/shop">
            Shop now{" "}
            <span className="ml-2" aria-hidden="true">
              ↗
            </span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-current/30 text-inherit transition hover:bg-black/5 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}>
          <span className="text-xl leading-none" aria-hidden="true">
            {isOpen ? "×" : "☰"}
          </span>
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-black/10 bg-[#f7f6f2] px-6 py-5 text-[#1b1b19] shadow-lg md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-sm transition-colors hover:text-(--accent) ${
                  pathname === item.href ? "font-semibold text-(--accent)" : ""
                }`}>
                {item.label}
              </Link>
            ))}
            <Link className="site-nav-cta w-full" href="/shop" onClick={() => setIsOpen(false)}>
              Shop now{" "}
              <span className="ml-2" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
