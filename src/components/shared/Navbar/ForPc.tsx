"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useState, useRef } from "react"
import { usePathname } from "next/navigation"
import { ChevronDown, MenuIcon, X } from 'lucide-react'
import logo from "@/assets/logo.png"

export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [mobileOpen])

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false)
      }
    }
    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    } else {
      document.removeEventListener("mousedown", handleClickOutside)
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [dropdownOpen])

  const otherServicesItems = [
    { href: "/consulting", label: "Consulting" },
    { href: "/book-appointment", label: "Book Appointment" },
    { href: "/service-3", label: "Service 3" },
  ]

  const mobileMenuItems = [
    { href: "/", label: "Home" },
    { href: "/pages/tax-preparation", label: "Tax Preparation" },
    { href: "/pages/real-state-service", label: "Real Estate Services" },
    {
      label: "Other Services",
      children: otherServicesItems,
    },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact Us", fontMedium: true },
  ]

  const closeMobile = () => setMobileOpen(false)

  return (
    <nav className="sticky top-0 z-50 py-5 w-full bg-white shadow">
      <div className="mx-auto flex h-16 container items-center justify-between px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 w-24" aria-label="Go to homepage">
<Image
  src={logo}
  alt="Logo"
  width={300} // larger than before
  height={80} // larger than before
  className="h-20 w-auto" // increase Tailwind height class
  priority
/>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <Link
            href="/"
            className={`font-semibold transition-colors ${
              pathname === "/" ? "text-gray-900" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Home
          </Link>
          <Link
            href="/pages/tax-preparation"
            className={`font-semibold transition-colors ${
              pathname === "/pages/tax-preparation"
                ? "text-gray-900"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Tax Preparation
          </Link>
          <Link
            href="/pages/real-state-service"
            className={`font-semibold transition-colors ${
              pathname === "/pages/real-state-service"
                ? "text-gray-900"
                : "text-gray-700 hover:text-gray-900"
            }`}
          >
            Real Estate Services
          </Link>

          {/* Other Services Dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 font-semibold text-gray-700 transition-colors hover:text-gray-900 focus:outline-none"
              aria-haspopup="menu"
              aria-expanded={dropdownOpen}
            >
              Other Services
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>

            {dropdownOpen && (
              <ul className="absolute top-full mt-1 w-48 rounded bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                {otherServicesItems.map(({ href, label }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="block px-4 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <Link
            href="/about-us"
            className={`font-semibold transition-colors ${
              pathname === "/about-us" ? "text-gray-900" : "text-gray-700 hover:text-gray-900"
            }`}
          >
            About Us
          </Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link href="/contact-us">
            <button
              type="button"
              className="rounded-full bg-[#28543F] px-5 py-2 font-medium text-white hover:bg-emerald-700 transition"
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
            className="rounded p-2 ring-emerald-600 transition focus:outline-none focus:ring-2"
          >
            <MenuIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-30 transition-opacity ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMobile}
      />

      {/* Drawer panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        } flex flex-col`}
        aria-label="Mobile menu"
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <Link href="/" onClick={closeMobile} className="flex items-center gap-2">
            <Image src={logo} alt="Logo" width={200} height={140} className="h-8 w-auto" />
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
                          className="block rounded px-2 py-1 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700"
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
                      pathname === item.href
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
  )
}
