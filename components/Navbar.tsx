"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItem = (href: string, label: string) => {
    const isActive = pathname === href;
    return (
      <Link
        href={href}
        className={`relative text-[15px] font-semibold tracking-wide transition
          ${
            isActive
              ? "text-green-600"
              : "text-gray-900 hover:text-green-600"
          }
        `}
      >
        {label}
        {isActive && (
          <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-green-600 rounded"></span>
        )}
      </Link>
    );
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center text-white font-extrabold text-xl shadow">
            +
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-gray-900">
            Infinity Plus
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItem("/", "Home")}
          {navItem("/about", "About")}
          {navItem("/contact", "Contact")}

          <Link
            href="/order"
            className="ml-2 bg-green-600 text-white px-6 py-2.5 rounded-full text-sm font-bold tracking-wide
                       hover:bg-green-700 transition shadow-lg"
          >
            Order Medicines
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl font-extrabold text-gray-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-xl px-6 py-6 space-y-6">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="block text-lg font-bold text-gray-900"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={() => setOpen(false)}
            className="block text-lg font-bold text-gray-900"
          >
            About
          </Link>

          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block text-lg font-bold text-gray-900"
          >
            Contact
          </Link>

          <Link
            href="/order"
            onClick={() => setOpen(false)}
            className="block bg-green-600 text-white text-center py-3 rounded-xl text-lg font-extrabold shadow hover:bg-green-700 transition"
          >
            Order Medicines
          </Link>
        </div>
      )}
    </nav>
  );
}
