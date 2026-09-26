"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProjectsHeroPhoto() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`projects-hero-photo${loaded ? " is-loaded" : ""}`}
      aria-hidden="true"
    >
      <Image
        src="/images/work/tripod-hero.jpg"
        alt=""
        width={1600}
        height={1600}
        priority
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}