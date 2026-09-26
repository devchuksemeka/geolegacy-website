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
        src="/images/work/field-crew.jpg"
        alt=""
        width={1396}
        height={1600}
        priority
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}