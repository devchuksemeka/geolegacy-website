"use client";

import Image from "next/image";
import { useState } from "react";

export default function ServicesHeroPhoto() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`services-hero-photo${loaded ? " is-loaded" : ""}`}
      aria-hidden="true"
    >
      <Image
        src="/images/work/services-hero.jpg"
        alt=""
        width={2400}
        height={1800}
        priority
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}