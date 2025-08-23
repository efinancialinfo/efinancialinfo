"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, MenuIcon, X } from "lucide-react";
import logo from "@/assets/Efinancial_noSlogan_clear.png";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [mobileOpen]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
    return pathname.startsWith(href);
  };

  const otherServicesItems = [
    { href: "/book-appointment", label: "Book Appointment" },
    { href: "/faq", label: "FAQ" },
  ];

  const mobileMenuItems = [
    { href: "/", label: "Home" },
    { href: "/tax-preparation", label: "Tax Preparation" },
    { href: "/real-state-service", label: "Real Estate Services" },
    { label: "Other Services", children: otherServicesItems },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us", fontMedium: true },
  ];

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full py-5 bg-white shadow">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-3 sm:px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center w-16 sm:w-20 md:w-24" aria-label="Go to homepage">
          <Image
            src={logo}
            alt="Logo"
            width={200}
            height={100}
            className="h-10 w-auto sm:h-14 md:h-16"
            priority
          />
        </Link>

        {/* Desktop nav - Reordered to put Other Services before About Us */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4 xl:gap-6">
          {[
            { href: "/", label: "Home" },
            { href: "/tax-preparation", label: "Tax Preparation" },
            { href: "/real-state-service", label: "Real Estate Services" },
            { href: "/consulting", label: "Consulting Services" },
          ].map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm lg:text-base font-medium transition-colors relative py-2 px-2 lg:px-3 rounded-md ${
                isActive(href)
                  ? "text-emerald-700 bg-emerald-50"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {label}
              {isActive(href) && (
                <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-emerald-500 rounded-full" />
              )}
            </Link>
          ))}

          {/* Other Services Dropdown - Moved before About Us */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className={`flex items-center gap-1 text-sm lg:text-base font-medium transition-colors relative py-2 px-2 lg:px-3 rounded-md ${
                isActive("/book-appointment") || isActive("/faq")
                  ? "text-emerald-700 bg-emerald-50"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              Other
              <ChevronDown className="h-3 w-3 lg:h-4 lg:w-4" />
            </button>
            {dropdownOpen && (
              <ul className="absolute top-full mt-1 w-44 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                {otherServicesItems.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setDropdownOpen(false)}
                      className={`block px-4 py-2 text-sm ${
                        isActive(href)
                          ? "bg-emerald-50 text-emerald-700"
                          : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                      }`}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* About Us - Moved after Other Services */}
          <Link
            href="/about-us"
            className={`text-sm lg:text-base font-medium transition-colors relative py-2 px-2 lg:px-3 rounded-md ${
              isActive("/about-us")
                ? "text-emerald-700 bg-emerald-50"
                : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            }`}
          >
            About Us
            {isActive("/about-us") && (
              <span className="absolute inset-x-1 -bottom-1 h-0.5 bg-emerald-500 rounded-full" />
            )}
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/contact-us">
            <button
              type="button"
              className="px-3 py-1.5 lg:px-4 lg:py-2 text-sm lg:text-base rounded-full font-medium border-2 bg-emerald-800 text-white border-emerald-800 hover:bg-white hover:text-emerald-800 transition"
            >
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(true)}
            aria-label="Open Menu"
            className="rounded p-2 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          >
            <MenuIcon className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobile}
      />

      {/* Drawer */}
      <aside
        className={`fixed top-0 right-0 h-full w-72 sm:w-80 bg-white shadow-xl transform transition-transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <Link href="/" onClick={closeMobile} className="flex items-center gap-2">
            <Image src={logo} alt="Logo" width={140} height={80} className="h-8 w-auto" />
            <span className="sr-only">Home</span>
          </Link>
          <button
            onClick={closeMobile}
            aria-label="Close Menu"
            className="rounded p-1 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-6">
          <ul className="space-y-4">
            {mobileMenuItems.map((item) =>
              item.children ? (
                <li key="other-services" className="space-y-2">
                  <span className="block font-semibold">{item.label}</span>
                  <ul className="ml-4 space-y-1">
                    {item.children.map(({ href, label }) => (
                      <li key={href}>
                        <Link
                          href={href}
                          onClick={closeMobile}
                          className={`block rounded px-2 py-1 ${
                            isActive(href)
                              ? "bg-emerald-50 text-emerald-700"
                              : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                          }`}
                        >
                          {label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href!}
                    onClick={closeMobile}
                    className={`block rounded px-2 py-1 transition ${
                      isActive(item.href)
                        ? "bg-emerald-50 text-emerald-700 font-semibold"
                        : "text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                    } ${item.fontMedium ? "font-medium" : ""}`}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </aside>
    </nav>
  );
}