"use client";

import { useState } from "react";
import Link from "next/link";
import { BUSINESS, SOCIAL_LINKS } from "../lib/business";

const SOCIAL_LABELS: Record<string, React.ReactNode> = {
  X: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M4 4l16 16M20 4L4 20" />
    </svg>
  ),
  Instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  ),
  LinkedIn: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM.5 8h4V23h-4V8zM8.5 8h3.8v2.05h.05c.53-1 1.83-2.05 3.76-2.05C20.4 8 22 10.5 22 14.3V23h-4v-7.9c0-1.9-.03-4.3-2.6-4.3-2.6 0-3 2-3 4.1V23h-4V8z" />
    </svg>
  ),
  Facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M13.5 23v-8.5h2.85l.42-3.3H13.5V9c0-.95.26-1.6 1.63-1.6h1.74V4.45c-.3-.04-1.33-.13-2.53-.13-2.5 0-4.2 1.52-4.2 4.32v2.4H7.3v3.3h2.84V23h3.36z" />
    </svg>
  ),
  TikTok: (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.6 3c.33 1.9 1.54 3.27 3.4 3.56v3.06c-1.3.07-2.5-.27-3.6-.9v6.16c0 3.47-2.6 5.77-5.73 5.77-2.87 0-5.2-1.98-5.2-4.9 0-2.9 2.43-5.22 5.72-5.22.3 0 .6.02.89.08v3.24c-.28-.08-.58-.13-.89-.13-1.4 0-2.42 1-2.42 2.27 0 1.3 1.02 2.2 2.4 2.2 1.52 0 2.62-1.08 2.62-2.9V3h3.01z" />
    </svg>
  ),
};

export default function Footer() {
  const [year] = useState(() => new Date().getFullYear());

  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="footer-brand">
          <span className="brand-word">
            GEOLEGACY<span>SURVEY</span>
          </span>
          <p>
            Land, hydrographic, geophysical and geotechnical site
            investigations, positioning, GIS and remote sensing for projects
            across Nigeria and West Africa.
          </p>
          <div className="footer-social">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.name}
                href={social.href}
                aria-label={social.name}
              >
                {SOCIAL_LABELS[social.name]}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h5>Company</h5>
          <ul>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>
              <Link href="/#projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Services</h5>
          <ul>
            <li>
              <Link href="/services#land-survey">Land Survey</Link>
            </li>
            <li>
              <Link href="/services#hydrographic-survey">
                Hydrographic Survey
              </Link>
            </li>
            <li>
              <Link href="/services#geophysical-survey">Geophysical Survey</Link>
            </li>
            <li>
              <Link href="/services#geotechnical-investigation">
                Geotechnical Investigation
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Get in touch</h5>
          <ul className="footer-contact">
            <li>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M4 4h16v16H4z" />
                <path d="M4 6l8 6 8-6" />
              </svg>
              {BUSINESS.email}
            </li>
            <li>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.7a2 2 0 01-.4 2.1L8 9.9a16 16 0 006 6l1.4-1.4a2 2 0 012.1-.4c.9.3 1.8.5 2.7.6a2 2 0 011.8 2.2z" />
              </svg>
              {BUSINESS.phoneDisplay}
            </li>
            <li>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M12 21s-7-6.5-7-11a7 7 0 0114 0c0 4.5-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.3" />
              </svg>
              {BUSINESS.coverage}
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <span>
          &copy; {year} {BUSINESS.brandName}. All rights reserved.
        </span>
        <span className="footer-legal">
          <Link href="/privacy">Privacy Policy</Link>
          <Link href="/terms">Terms of Service</Link>
        </span>
        <span className="credit">
          Designed and developed by{" "}
          <a
            href="https://studio.carojon.com?utm_source=geolegacy.com&utm_medium=developed_and_maintained_footer_nav"
            target="_blank"
            rel="noopener noreferrer"
          >
            Carojon Studio
          </a>
        </span>
      </div>
    </footer>
  );
}