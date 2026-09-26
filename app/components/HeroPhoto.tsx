"use client";

import Image from "next/image";
import { useState } from "react";

export default function HeroPhoto() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`hero-photo${loaded ? " is-loaded" : ""}`} aria-hidden="true">
      <Image
        src="/images/work/marine-platform.jpg"
        alt=""
        width={1080}
        height={719}
        priority
        sizes="100vw"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}