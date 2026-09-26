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
        src="/images/work/marine-platform.jpg"
        alt=""
        width={1080}
        height={719}
        priority
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}