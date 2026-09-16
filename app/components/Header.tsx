"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import BrandMark from "./BrandMark";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const closeDrawer = useCallback(() => setOpen(false), []);

  return (
    <>
      <div
        className={`mobile-drawer${open ? " open" : ""}`}
        id="mobileDrawer"
        aria-hidden={!open}
        aria-label="Mobile navigation"
      >
        <MobileDrawer onClose={closeDrawer} />
      </div>

      <header>
        <div className="wrap nav">
          <Link href="/" className="brand" aria-label="GeoLegacy Survey home">
            <BrandMark className="brand-mark" />
            <BrandWord />
          </Link>

          <nav className="nav-links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="nav-actions">
            <Link href="/contact" className="btn btn-ghost">
              Talk to us
            </Link>
            <Link href="/contact" className="btn btn-primary">
              Request a Survey
            </Link>
            <button
              className="menu-toggle"
              id="menuOpen"
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobileDrawer"
              onClick={() => setOpen(true)}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

function MobileDrawer({ onClose }: { onClose: () => void }) {
  return (
    <>
      <div className="mobile-drawer-top">
        <BrandWord />
        <button
          className="menu-toggle"
          id="menuClose"
          aria-label="Close menu"
          onClick={onClose}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>
      <nav aria-label="Mobile">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={onClose}>
            {link.label}
          </a>
        ))}
      </nav>
      <Link href="/contact" className="btn btn-primary" onClick={onClose}>
        Request a Survey
      </Link>
    </>
  );
}

function BrandWord() {
  return (
    <span className="brand-word">
      GEOLEGACY<span>SURVEY</span>
    </span>
  );
}