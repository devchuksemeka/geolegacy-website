"use client";

import Image from "next/image";
import { useState } from "react";

export default function ContactHeroPhoto() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`contact-hero-photo${loaded ? " is-loaded" : ""}`}
      aria-hidden="true"
    >
      <Image
        src="/images/work/contact-us-hero.jpg"
        alt=""
        width={1591}
        height={1049}
        priority
        sizes="100vw"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}