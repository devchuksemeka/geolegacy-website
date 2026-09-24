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
        src="/images/work/proj-07.jpg"
        alt=""
        width={1200}
        height={1200}
        priority
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}