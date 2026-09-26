"use client";

import { LiquidMetal } from "@paper-design/shaders-react";

export default function HeroLiquidChip() {
  return (
    <div className="hero-liquid" aria-hidden="true">
      <LiquidMetal
        width="100%"
        height="100%"
        colorBack="#e6edfb"
        colorTint="#2b4fd8"
        shape="metaballs"
        repetition={2.4}
        softness={0.45}
        distortion={0.4}
        contour={0.45}
        speed={0.5}
        minPixelRatio={1}
      />
    </div>
  );
}