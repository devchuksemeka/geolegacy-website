"use client";

import Image from "next/image";
import { useState } from "react";

export default function AboutHeroPhoto() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`about-hero-photo${loaded ? " is-loaded" : ""}`}
      aria-hidden="true"
    >
      <Image
        src="/images/work/home-01.jpg"
        alt=""
        width={1200}
        height={799}
        priority
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}