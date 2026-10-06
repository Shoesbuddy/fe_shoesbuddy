"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "shop", label: "Shop Now" },
  { href: "categories", label: "Categories" },
  { href: "products", label: "Product" },
  { href: "contact-us", label: "Contact Us" },
  { href: "gallery", label: "Gallery" },
] as const;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className=" sticky inset-x-0 top-0 z-50  backdrop-blur-md hover:bg-[#17171772]">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold">
          Logo
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={String("#").concat(String(item.href))}
              className={`nav-link ${pathname === item.href && "text-amber-500"}`}>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}>
          <span className="text-2xl">{isOpen ? "X" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t bg-white px-6 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={` nav-link ${pathname === item.href && "text-amber-500"}`}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
