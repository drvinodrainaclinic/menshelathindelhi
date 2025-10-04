"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import TreatmentMegaMenu from "@/components/TreatmentMegaMenu";
import ResourcesMegaMenu from "@/components/ResourcesMegaMenu";
import ServicesMegaMenu from "@/components/ServicesMegaMenu";
import { useRef, useState } from "react";

const navItems = [
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/sexual-treatment-in-delhi", label: "Treatment" },
  { href: "/resources", label: "Resources" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const [openServices, setOpenServices] = useState(false);
  const [openTreatment, setOpenTreatment] = useState(false);
  const [openResources, setOpenResources] = useState(false);

  return (
    <header className="sticky top-0 z-50 glass">
      <div className="container-page">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-semibold text-lg hover:text-[var(--brand)] transition-colors">
            Dr. Vinod Raina Clinic
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => {
              const active = pathname === item.href;
              const isTreatment = item.href === "/sexual-treatment-in-delhi";
              const isResources = item.href === "/resources";
              const isServices = item.href === "/services";
              return (
                <div key={item.href} className="relative group">
                  <Link
                    href={item.href}
                    className={
                      "group/link relative py-2 text-foreground/80 transition-colors hover:text-[var(--brand)]" +
                      (active ? " text-[var(--brand)] font-medium" : "")
                    }
                  >
                    {item.label}
                    <span
                      className={
                        "absolute left-0 -bottom-0.5 h-0.5 bg-[var(--brand)] transition-all " +
                        (active ? "w-full" : "w-0 group-hover/link:w-full")
                      }
                    />
                  </Link>
                  {isTreatment && (
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100 transition-all duration-200">
                      <TreatmentMegaMenu />
                    </div>
                  )}
                  {isResources && (
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100 transition-all duration-200">
                      <ResourcesMegaMenu />
                    </div>
                  )}
                  {isServices && (
                    <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 focus-within:visible focus-within:opacity-100 transition-all duration-200">
                      <ServicesMegaMenu />
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
          <div className="flex items-center gap-2">
            <button
              onClick={() => document.dispatchEvent(new CustomEvent("open-search"))}
              aria-label="Search"
              className="hidden sm:inline-flex btn btn-ghost text-sm"
            >
              Search
            </button>
            <Link
              href="/appointments"
              className="ml-2 btn btn-primary text-sm"
            >
              Book Now
            </Link>
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-black/10 hover:bg-black/5 animate-pulse-soft"
              aria-label="Open menu"
              aria-haspopup="true"
              aria-controls="mobile-menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
            >
              {/* Hamburger icon */}
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/50" aria-hidden="true" onClick={() => setMobileOpen(false)}></div>
      )}
      <nav
        className={`fixed inset-0 z-50 bg-white shadow-lg md:hidden transition-transform duration-200 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-label="Mobile"
      >
        <button
          ref={closeBtnRef}
          type="button"
          className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-md border border-black/10 hover:bg-black/5"
          aria-label="Close menu"
          aria-controls="mobile-menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(false)}
        >
          {/* Close icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <nav className="flex-1 overflow-auto" aria-label="Mobile">
          <ul className="grid gap-1">
            {/* About direct link */}
            <li>
              <Link
                href="/about"
                onClick={() => setMobileOpen(false)}
                className={
                  "block rounded-md px-3 py-3 text-base " +
                  (pathname === "/about" ? "bg-black/5 text-[var(--brand)] font-semibold" : "hover:bg-black/5")
                }
              >
                About Us
              </Link>
            </li>

            {/* Services collapsible */}
            <li>
              <button
                type="button"
                className="w-full flex items-center justify-between rounded-md px-3 py-3 text-base hover:bg-black/5"
                aria-controls="mobile-sub-services"
                aria-expanded={openServices}
                onClick={() => setOpenServices((v) => !v)}
              >
                <span className="font-medium">Services</span>
                <svg className={`transition-transform ${openServices ? "rotate-180" : "rotate-0"}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              {openServices && (
                <ul id="mobile-sub-services" className="pl-3 mb-2 grid">
                  <li>
                    <Link href="/services" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 hover:bg-black/5">All Services</Link>
                  </li>
                  <li>
                    <Link href="/services/vip-consultation" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 hover:bg-black/5">VIP Consultation</Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Treatment collapsible */}
            <li>
              <button
                type="button"
                className="w-full flex items-center justify-between rounded-md px-3 py-3 text-base hover:bg-black/5"
                aria-controls="mobile-sub-treatment"
                aria-expanded={openTreatment}
                onClick={() => setOpenTreatment((v) => !v)}
              >
                <span className="font-medium">Treatment</span>
                <svg className={`transition-transform ${openTreatment ? "rotate-180" : "rotate-0"}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              {openTreatment && (
                <ul id="mobile-sub-treatment" className="pl-3 mb-2 grid">
                  <li><Link href="/treatments/hiv-treatment" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 hover:bg-black/5">HIV Treatment</Link></li>
                  <li><Link href="/treatments/prep-pep" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 hover:bg-black/5">PrEP & PEP</Link></li>
                  <li><Link href="/treatments/sti-testing" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 hover:bg-black/5">STI Testing</Link></li>
                  <li><Link href="/treatments/erectile-dysfunction" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 hover:bg-black/5">Erectile Dysfunction</Link></li>
                  <li><Link href="/treatments/premature-ejaculation" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 hover:bg-black/5">Premature Ejaculation</Link></li>
                  <li><Link href="/treatments/low-libido" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 hover:bg-black/5">Low Libido</Link></li>
                  <li><Link href="/treatments/performance-anxiety" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 hover:bg-black/5">Performance Anxiety</Link></li>
                </ul>
              )}
            </li>

            {/* Resources collapsible */}
            <li>
              <button
                type="button"
                className="w-full flex items-center justify-between rounded-md px-3 py-3 text-base hover:bg-black/5"
                aria-controls="mobile-sub-resources"
                aria-expanded={openResources}
                onClick={() => setOpenResources((v) => !v)}
              >
                <span className="font-medium">Resources</span>
                <svg className={`transition-transform ${openResources ? "rotate-180" : "rotate-0"}`} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </button>
              {openResources && (
                <ul id="mobile-sub-resources" className="pl-3 mb-2 grid">
                  <li><Link href="/resources" onClick={() => setMobileOpen(false)} className="block rounded-md px-3 py-2 hover:bg-black/5">All Resources</Link></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </nav>
    </header>
  );
}
