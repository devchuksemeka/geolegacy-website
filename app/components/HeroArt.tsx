"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import useMedia from "../lib/useMedia";
import HeroLiquidChip from "./HeroLiquidChip";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function HeroArt() {
  const spinRef = useRef<SVGGElement>(null);
  const reduced = useMedia("(prefers-reduced-motion: reduce)");
  const isMobile = useMedia("(max-width: 720px)");
  const [hydrated, setHydrated] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setHydrated(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const live = hydrated && !reduced && !isMobile;

  useEffect(() => {
    if (live) return;
    const spin = spinRef.current;
    if (!spin) return;
    let angle = 0;
    let rafId = 0;
    const animate = () => {
      angle += 0.035;
      spin.style.transform = `rotate(${angle}deg)`;
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafId);
  }, [live]);

  return (
    <div className={`hero-art${ready ? " is-ready" : ""}`} aria-hidden="true">
      <svg viewBox="0 0 520 520" fill="none">
        <defs>
          <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0" stopColor="#6fa1ff" stopOpacity="0.22" />
            <stop offset="0.55" stopColor="#6fa1ff" stopOpacity="0.07" />
            <stop offset="1" stopColor="#6fa1ff" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="heroPlate" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#16296b" />
            <stop offset="1" stopColor="#0f1c4f" />
          </linearGradient>
        </defs>

        <circle cx="260" cy="260" r="252" fill="url(#heroGlow)" />
        <circle cx="260" cy="260" r="230" stroke="#c7d2ee" strokeWidth="1" />
        <circle cx="260" cy="260" r="180" stroke="#c7d2ee" strokeWidth="1" />
        <circle cx="260" cy="260" r="130" stroke="#c7d2ee" strokeWidth="1" />
        <circle cx="260" cy="260" r="80" stroke="#c7d2ee" strokeWidth="1" />

        <g stroke="#2b4fd8" strokeWidth="1.2" opacity="0.6">
          <line x1="260" y1="30" x2="260" y2="60" />
          <line x1="260" y1="460" x2="260" y2="490" />
          <line x1="30" y1="260" x2="60" y2="260" />
          <line x1="460" y1="260" x2="490" y2="260" />
        </g>

        <g
          fontFamily="var(--font-space-grotesk), 'Space Grotesk'"
          fontSize="11"
          fill="#3c4160"
          fontWeight="600"
        >
          <text x="252" y="24">000°</text>
          <text x="252" y="496">180°</text>
          <text x="14" y="264">270°</text>
          <text x="494" y="264">090°</text>
        </g>

        <g ref={spinRef} style={{ transformOrigin: "260px 260px" }}>
          <path
            d="M110 260c0-70 60-150 150-150s150 80 150 150-70 140-150 140-150-70-150-140z"
            stroke="#2b4fd8"
            strokeWidth="1.4"
            opacity="0.55"
          />
          <path
            d="M150 260c0-52 45-115 110-115s110 63 110 115-50 105-110 105-110-53-110-105z"
            stroke="#2b4fd8"
            strokeWidth="1.4"
            opacity="0.75"
          />
          <line
            x1="260"
            y1="260"
            x2="200"
            y2="150"
            stroke="#2b4fd8"
            strokeWidth="1"
            opacity="0.7"
          />
        </g>

        <g transform="rotate(45 260 218)">
          <rect
            x="222"
            y="206"
            width="76"
            height="26"
            rx="6"
            fill="url(#heroPlate)"
            opacity="0.95"
          />
          <rect
            x="229"
            y="186"
            width="62"
            height="22"
            rx="5"
            fill="#16296b"
            stroke="#c7d2ee"
            strokeWidth="0.8"
          />
          <rect
            x="238"
            y="156"
            width="44"
            height="32"
            rx="5"
            fill="#101d55"
            stroke="#c7d2ee"
            strokeWidth="0.9"
          />
          <circle cx="260" cy="163" r="6" fill="#6fa1ff" opacity="0.9" />
          <rect x="256" y="146" width="8" height="12" rx="2" fill="#6fa1ff" />
        </g>

        <circle cx="380" cy="150" r="3.5" fill="#2b4fd8" />
        <text
          x="392"
          y="154"
          fontFamily="var(--font-space-grotesk), 'Space Grotesk'"
          fontSize="12"
          fill="#3c4160"
        >
          06°27&apos;N
        </text>
        <circle cx="140" cy="370" r="3.5" fill="#2b4fd8" />
        <text
          x="152"
          y="374"
          fontFamily="var(--font-space-grotesk), 'Space Grotesk'"
          fontSize="12"
          fill="#3c4160"
        >
          03°24&apos;E
        </text>
      </svg>

      {live && <HeroLiquidChip />}
      {live && (
        <div className="hero-scene">
          <HeroScene onReady={() => setReady(true)} />
        </div>
      )}
    </div>
  );
}