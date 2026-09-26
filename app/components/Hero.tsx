"use client";

import { LiquidGlass } from "@creativoma/liquid-glass";
import HeroArt from "./HeroArt";
import HeroPhoto from "./HeroPhoto";

export default function Hero() {
  return (
    <section className='hero' id='top'>
      <HeroPhoto />
      <div className='grid-field' style={{ height: "100%" }} />
      <div className='wrap'>
        <div>
          <div className='eyebrow-line'>
            <span className='eyebrow-dot' />
            Land · Hydrographic · Geophysical · Geotechnical
          </div>
          <h1>
            Ground truth for every project, <em>onshore and offshore.</em>
          </h1>
          <p className='hero-sub'>
            GeoLegacy Survey plans, acquires, processes and delivers site
            investigation data that engineers, operators and investors can build
            on — from the land surface down through the seabed.
          </p>
          <div className='hero-ctas'>
            {/* <LiquidGlass
            className='hero-glass'
            contentClassName='hero-ctas'
            backdropBlur={3}
            tintColor='rgba(255, 255, 255, 0.12)'
            displacementScale={40}
            turbulenceBaseFrequency='0.006 0.006'
          > */}
            <div>
              <a href='#survey-request' className='btn btn-primary'>
                Request a Survey
              </a>
              <a href='#services' className='btn btn-ghost'>
                See our services
              </a>
            </div>
          </div>
          {/* </LiquidGlass> */}
        </div>

        <HeroArt />
      </div>
    </section>
  );
}
