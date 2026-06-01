"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/information/", label: "INFORMATION" },
  { href: "/products/", label: "PRODUCTS" },
  { href: "/company/", label: "COMPANY" },
  { href: "/contact/", label: "CONTACT" },
];

export function Header() {
  const pathname = usePathname();
  const currentPath = pathname.endsWith("/") ? pathname : `${pathname}/`;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-brand-navy/10 bg-white">
      <div className="content-shell py-4 md:flex md:items-center md:justify-between md:py-7">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="group flex items-center gap-4"
            aria-label="SAISAICOOMI JAPAN home"
            onClick={() => setIsOpen(false)}
          >
            <span className="leading-tight">
              <span className="block text-xl font-bold tracking-[0.12em] text-brand-navy md:text-2xl">
                SAISAICOOMI
              </span>
              <span className="mt-1 block text-xs font-bold tracking-[0.2em] text-brand-navy/75 md:text-sm">
                JAPAN 株式会社
              </span>
            </span>
          </Link>
          <button
            type="button"
            aria-label={isOpen ? "メニューを閉じる" : "メニューを開く"}
            aria-expanded={isOpen}
            aria-controls="site-navigation"
            onClick={() => setIsOpen((open) => !open)}
            className={`inline-flex h-12 w-12 items-center justify-center rounded-full border shadow-sm transition duration-300 md:hidden ${
              isOpen
                ? "rotate-90 border-brand-navy bg-brand-navy text-white shadow-[0_14px_28px_rgba(7,19,107,0.18)]"
                : "border-brand-navy/15 bg-white text-brand-navy hover:border-brand-wine hover:text-brand-wine"
            }`}
          >
            <span className="relative h-4 w-6" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition duration-300 ease-out ${
                  isOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-6 rounded-full bg-current transition duration-300 ease-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[14px] h-0.5 w-6 rounded-full bg-current transition duration-300 ease-out ${
                  isOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
        <nav
          id="site-navigation"
          aria-label="Main navigation"
          className={`grid transition-[grid-template-rows,opacity,transform] duration-300 ease-out md:block md:translate-y-0 md:opacity-100 ${
            isOpen
              ? "grid-rows-[1fr] translate-y-0 opacity-100"
              : "pointer-events-none grid-rows-[0fr] -translate-y-2 opacity-0 md:pointer-events-auto"
          }`}
        >
          <div className="overflow-hidden md:overflow-visible">
            <ul className="mt-5 grid gap-1 border-t border-brand-navy/10 pt-4 text-sm font-bold tracking-[0.16em] text-brand-navy md:mt-0 md:flex md:flex-wrap md:justify-end md:gap-10 md:border-t-0 md:pt-0">
              {navItems.map((item, index) => (
                <li
                  key={item.href}
                  className={`transition duration-300 ease-out md:translate-y-0 md:opacity-100 ${
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "-translate-y-1 opacity-0"
                  }`}
                  style={{
                    transitionDelay: isOpen ? `${80 + index * 45}ms` : "0ms",
                  }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group relative block rounded-xl px-2 py-3 transition hover:bg-brand-cream hover:text-brand-wine md:rounded-none md:px-0 md:py-2 md:hover:bg-transparent"
                  >
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[3px] w-12 origin-left rounded-full bg-gradient-to-r from-brand-wine via-brand-blush to-yellow-300 transition-transform ${
                        currentPath === item.href
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
