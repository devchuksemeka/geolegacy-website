"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useMedia from "../lib/useMedia";

const OrbScene = dynamic(() => import("./OrbScene"), {
  ssr: false,
  loading: () => null,
});

export default function OrbArt() {
  const reduced = useMedia("(prefers-reduced-motion: reduce)");
  const isMobile = useMedia("(max-width: 768px)");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setHydrated(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const live = hydrated && !reduced && !isMobile;
  if (!live) return null;

  return (
    <div className="orb-art" aria-hidden="true">
      <OrbScene />
    </div>
  );
}