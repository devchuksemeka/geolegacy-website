export function TopoContours({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 900"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g opacity="0.28" stroke="#6fa1ff" strokeWidth="1.2">
        <path d="M1040 80c42-48 112-60 168-36s94 104 94 172c0 56-22 106-58 140-42 40-96 52-148 44s-98-48-120-100c-22-54-30-104-22-156 12-62 44-108 86-124z" />
        <path d="M1100 160c26-30 72-38 112-22s72 66 72 112c0 34-14 66-36 86-26 24-60 32-94 28s-64-30-78-66c-14-36-18-68-14-102 6-40 28-68 58-80z" />
        <path d="M1140 220c14-16 38-20 62-12s40 42 40 72c0 18-8 34-20 46-14 14-32 20-50 16s-36-18-46-36c-10-20-12-36-8-54 4-18 16-28 32-36z" />
      </g>
      <g opacity="0.18" stroke="#6fa1ff" strokeWidth="1">
        <path d="M220 420c50-56 132-72 196-48s112 122 112 202c0 66-28 126-72 166-50 46-114 60-172 48s-114-60-140-118c-28-62-36-124-24-186 14-74 54-128 100-164z" />
        <path d="M280 520c30-34 82-42 128-28s82 76 82 130c0 38-16 74-42 98-30 28-68 36-106 30s-72-36-92-78c-20-42-24-78-16-116 10-50 38-86 70-106z" />
        <path d="M340 590c16-18 44-22 72-14s48 48 48 84c0 22-10 42-26 54-18 16-40 22-62 18s-42-22-54-44c-12-24-14-42-8-64 8-24 20-34 38-46z" />
      </g>
      <g stroke="#2b4fd8" strokeWidth="1.2" opacity="0.35">
        <line x1="0" y1="160" x2="1440" y2="160" />
        <line x1="0" y1="440" x2="1440" y2="440" />
        <line x1="0" y1="720" x2="1440" y2="720" />
        <line x1="320" y1="0" x2="320" y2="900" />
        <line x1="720" y1="0" x2="720" y2="900" />
        <line x1="1120" y1="0" x2="1120" y2="900" />
      </g>
      <circle cx="1220" cy="200" r="3" fill="#2b4fd8" opacity="0.4" />
      <text
        x="1234"
        y="204"
        fontFamily="var(--font-space-grotesk), 'Space Grotesk'"
        fontSize="11"
        fill="rgba(255,255,255,0.35)"
      >
        06°27&apos;N
      </text>
      <circle cx="340" cy="580" r="3" fill="#2b4fd8" opacity="0.35" />
      <text
        x="354"
        y="584"
        fontFamily="var(--font-space-grotesk), 'Space Grotesk'"
        fontSize="11"
        fill="rgba(255,255,255,0.35)"
      >
        03°24&apos;E
      </text>
    </svg>
  );
}

export function CrossSectionStrata({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1440 900"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <rect width="1440" height="900" fill="#14205a" opacity="0.45" />
      <g opacity="0.22">
        <path
          d="M0 240 Q180 210 360 252 T720 230 T1080 262 T1440 238 L1440 360 L0 360 Z"
          fill="#4a63c7"
        />
        <path
          d="M0 420 Q200 396 400 430 T800 404 T1200 436 T1440 410 L1440 540 L0 540 Z"
          fill="#2b4fd8"
        />
        <path
          d="M0 580 Q160 558 320 588 T640 564 T960 592 T1280 570 T1440 584 L1440 700 L0 700 Z"
          fill="#16296b"
        />
      </g>
      <g stroke="#6fa1ff" strokeWidth="0.8" opacity="0.16">
        <line x1="200" y1="0" x2="200" y2="900" />
        <line x1="680" y1="0" x2="680" y2="900" />
        <line x1="1160" y1="0" x2="1160" y2="900" />
      </g>
      <circle cx="220" cy="310" r="3" fill="#6fa1ff" opacity="0.2" />
      <circle cx="700" cy="470" r="3" fill="#6fa1ff" opacity="0.18" />
      <circle cx="1180" cy="620" r="3" fill="#6fa1ff" opacity="0.16" />
    </svg>
  );
}

export function RadarRings({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 900 900"
      fill="none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <g stroke="#2b4fd8" opacity="0.18">
        <circle cx="450" cy="450" r="90" strokeWidth="1" />
        <circle cx="450" cy="450" r="180" strokeWidth="1" />
        <circle cx="450" cy="450" r="270" strokeWidth="1" />
        <circle cx="450" cy="450" r="360" strokeWidth="1" />
      </g>
      <g stroke="#2b4fd8" strokeWidth="0.8" opacity="0.12">
        <line x1="450" y1="90" x2="450" y2="810" />
        <line x1="90" y1="450" x2="810" y2="450" />
      </g>
      <path
        d="M450 450 L450 80 A370 370 0 0 1 730 230 Z"
        fill="#6fa1ff"
        opacity="0.07"
      />
      <path
        d="M450 450 L450 90"
        stroke="#6fa1ff"
        strokeWidth="1.4"
        opacity="0.2"
      />
      <circle cx="450" cy="450" r="4" fill="#6fa1ff" opacity="0.3" />
    </svg>
  );
}